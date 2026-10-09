  function formatMoney(amount) {
    return "€" + Math.round(amount).toLocaleString('tr-TR');
  }


  // Utility for smooth number ticking
  function animateValue(elem, endVal, prefix="", postfix="") {
    if (!elem) return;
    const startVal = parseFloat(elem.getAttribute("data-val")) || 0;
    if (startVal === endVal) return;
    
    elem.setAttribute("data-val", endVal);
    const duration = 400; // ms
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentVal = startVal + (endVal - startVal) * ease;
      
      // formatMoney creates strings with dots
      elem.innerHTML = prefix + formatMoney(currentVal) + postfix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        elem.innerHTML = prefix + formatMoney(endVal) + postfix;
      }
    };
    window.requestAnimationFrame(step);
  }

  function parseMoney(str) {
    const clean = String(str).replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
  }

  const globalStep = 10;

  // Render Category Sliders and Rows
  function renderAllCategories() {
    const containerEss = document.getElementById('expensesContainerEssential');
    const containerFlex = document.getElementById('expensesContainerFlexible');
    if (containerEss) containerEss.innerHTML = '';
    if (containerFlex) containerFlex.innerHTML = '';

    expenseData.forEach((group, index) => {
      const groupCard = document.createElement('details');
      groupCard.className = 'category-group';
      groupCard.id = `group-${group.id}`;
      groupCard.open = true;

      let itemsHtml = '';
      group.items.forEach(item => {
        itemsHtml += `
          <div class="item-row" data-key="${item.key}">
            <div class="item-top">
              <div style="display: flex; align-items: center;">
                <span class="item-name">${item.name}</span>
                <div class="tooltip-container">
                  <div class="tooltip-badge" id="tooltip-badge-${item.key}">
                    <i>ⓘ</i> <span class="badge-text" id="badge-text-${item.key}"></span>
                  </div>
                  <div class="tooltip-box" id="insight-${item.key}"></div>
                </div>
              </div>
              <div class="item-value-box">
                <span>€</span>
                <input type="text"
                       class="item-value-input"
                       id="num-${item.key}"
                       value="${formatMoney(item.value)}"
                       onfocus="onValueFocus(this, '${item.key}')"
                       onblur="onValueBlur(this, '${item.key}')"
                       onkeydown="onValueKeydown(event, this)">
              </div>
            </div>
            <div class="slider-box">
              <input type="range"
                     id="range-${item.key}"
                     min="${item.min}"
                     max="${item.max}"
                     step="${globalStep}"
                     value="${item.value}"
                     oninput="onSliderMove('${item.key}', this.value)">
            </div>
          </div>
        `;
        setTimeout(() => window.onSliderMove(item.key, item.value), 0);
      });

      groupCard.innerHTML = `
        <summary class="group-header">
          <div class="group-title">
            <span>${group.icon}</span>
            <span>${group.title}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="group-total-badge" id="grouptotal-${group.id}">€0</div>
            <span class="group-chevron">▾</span>
          </div>
        </summary>
        <div class="group-items">
          ${itemsHtml}
        </div>
      `;

      if (group.id === 'housing' || group.id === 'health') {
        if (containerEss) containerEss.appendChild(groupCard);
      } else {
        if (containerFlex) containerFlex.appendChild(groupCard);
      }

      // Animate both open and close precisely using scrollHeight
      groupCard.querySelector('summary').addEventListener('click', function(e) {
        e.preventDefault();
        const items = groupCard.querySelector('.group-items');
        
        // Ensure inline transition is set
        items.style.transition = 'max-height 0.25s ease, opacity 0.2s ease, transform 0.25s ease';

        if (groupCard.open) {
          // CLOSING
          items.style.maxHeight = items.scrollHeight + 'px'; // Lock exact current height
          items.style.opacity = '1';
          items.style.transform = 'translateY(0)';
          void items.offsetWidth; // Reflow
          
          groupCard.classList.add('closing');
          items.style.maxHeight = '0px';
          items.style.opacity = '0';
          items.style.transform = 'translateY(-10px)';
          
          items.addEventListener('transitionend', function handler(ev) {
            if (ev.propertyName !== 'max-height') return;
            groupCard.removeAttribute('open');
            groupCard.classList.remove('closing');
            
            // Clean up inline styles
            items.style.maxHeight = '';
            items.style.opacity = '';
            items.style.transform = '';
            items.removeEventListener('transitionend', handler);
          });
        } else {
          // OPENING
          groupCard.setAttribute('open', '');
          groupCard.classList.add('opening');
          
          items.style.maxHeight = '0px';
          items.style.opacity = '0';
          items.style.transform = 'translateY(-10px)';
          void items.offsetWidth; // Reflow
          
          items.style.maxHeight = items.scrollHeight + 'px';
          items.style.opacity = '1';
          items.style.transform = 'translateY(0)';
          
          items.addEventListener('transitionend', function handler(ev) {
            if (ev.propertyName !== 'max-height') return;
            groupCard.classList.remove('opening');
            
            // Clean up to allow dynamic resizing
            items.style.maxHeight = '2000px'; 
            items.style.opacity = '';
            items.style.transform = '';
            items.removeEventListener('transitionend', handler);
          });
        }
      });
    });

    updateAllInsights();
  }

  function getAllValues() {
    const values = {};
    expenseData.forEach(group => {
      group.items.forEach(item => {
        values[item.key] = item.value;
      });
    });
    return values;
  }

  function updateAllInsights() {
    expenseData.forEach(group => {
      let groupTotal = 0;
      group.items.forEach(item => {
        groupTotal += item.value;
        const box = document.getElementById(`insight-${item.key}`);
        const badge = document.getElementById(`tooltip-badge-${item.key}`);
        const badgeText = document.getElementById(`badge-text-${item.key}`);
        if (box && badge && badgeText && item.getInsight) {
          const insight = item.getInsight(item.value);
          box.className = `tooltip-box ${insight.status}`;
          // Inside tooltip box, we no longer need the tag since it's on the badge, 
          // but we can keep it or remove it. Let's keep it for detail.
          box.innerHTML = `
            <div class="insight-tag">${insight.tag}</div>
            <div>${insight.msg}</div>
          `;
          
          badgeText.textContent = insight.tag;
          badge.className = `tooltip-badge ${insight.status}`;
        }
        
        // Dynamically update pension name
        if (item.key === 'pension1') {
          const hasEmp = document.getElementById('empToggle1') && document.getElementById('empToggle1').checked;
          const nameSpan = document.querySelector(`.item-row[data-key="pension1"] .item-name`);
          if (nameSpan) {
            nameSpan.textContent = hasEmp ? t("pension_person_1_has_emp") : t("pension_person_1_no_emp");
            nameSpan.style.color = hasEmp ? "var(--text-primary)" : "var(--danger)";
            nameSpan.style.fontWeight = hasEmp ? "600" : "700";
          }
        }
        if (item.key === 'pension2') {
          const hasEmp = document.getElementById('empToggle2') && document.getElementById('empToggle2').checked;
          const nameSpan = document.querySelector(`.item-row[data-key="pension2"] .item-name`);
          if (nameSpan) {
            nameSpan.textContent = hasEmp ? t("pension_person_2_has_emp") : t("pension_person_2_no_emp");
            nameSpan.style.color = hasEmp ? "var(--text-primary)" : "var(--danger)";
            nameSpan.style.fontWeight = hasEmp ? "600" : "700";
          }
        }
      });
      const badge = document.getElementById(`grouptotal-${group.id}`);
      if (badge) badge.textContent = formatMoney(groupTotal);
    });
  }

  // Gross to Net calculation for 2026 NL Box 1
  function calculateNetFromGross(gross, has27Ruling) {
    let taxable = gross;
    if (has27Ruling) {
      taxable = gross * 0.73; // 27% is tax-free
    }

    // 2026 Box 1 Tax brackets
    let tax = 0;
    if (taxable <= 38883) {
      tax = taxable * 0.3575;
    } else if (taxable <= 78426) {
      tax = (38883 * 0.3575) + ((taxable - 38883) * 0.3756);
    } else {
      tax = (38883 * 0.3575) + ((78426 - 38883) * 0.3756) + ((taxable - 78426) * 0.4950);
    }

    // Algemene Heffingskorting (2026)
    let ahk = 3115 - (0.06398 * Math.max(0, taxable - 29736));
    if (ahk < 0) ahk = 0;

    // Arbeidskorting (2026)
    let ak = 0;
    if (taxable <= 11965) ak = taxable * 0.08324;
    else if (taxable <= 25845) ak = 996 + (taxable - 11965) * 0.31009;
    else if (taxable <= 45592) ak = 5300 + (taxable - 25845) * 0.01950;
    else ak = 5685 - (taxable - 45592) * 0.06510;
    if (ak < 0) ak = 0;

    let totalTax = tax - ahk - ak;
    if (totalTax < 0) totalTax = 0;

    let netAnnual = gross - totalTax;
    let netMonthly = netAnnual / 12;
    return Math.round(netMonthly / 10) * 10;
  }

  function setupGrossToggles() {
    [1, 2].forEach(id => {
      const grossToggle = document.getElementById(`grossToggle${id}`);
      const grossRow = document.getElementById(`grossContainer${id}`);
      const rulingRow = document.getElementById(`rulingRow${id}`);
      const grossInput = document.getElementById(`grossIncome${id}`);
      const rulingToggle = document.getElementById(`rulingToggle${id}`);
      const netInput = document.getElementById(`netIncome${id}`);

      if (!grossToggle || !grossInput) return;

      // Initialize visibility based on initial state
      if (!grossToggle.checked) {
        if (rulingRow) rulingRow.style.display = 'none';
        if (grossRow) grossRow.style.display = 'none';
      }

      grossToggle.addEventListener('change', function() {
        if (this.checked) {
          if (grossRow) grossRow.style.display = 'flex';
          if (rulingRow) rulingRow.style.display = 'flex';
          netInput.readOnly = true;
          netInput.style.opacity = '0.7';
          updateNetFromGross(id);
        } else {
          if (grossRow) grossRow.style.display = 'none';
          if (rulingRow) rulingRow.style.display = 'none';
          netInput.readOnly = false;
          netInput.style.opacity = '1';
        }
      });

      const updateNetFromGross = (personId) => {
        if (!document.getElementById(`grossToggle${personId}`).checked) return;
        const grossVal = parseMoney(document.getElementById(`grossIncome${personId}`).value);
        const hasRuling = document.getElementById(`rulingToggle${personId}`).checked;
        const net = calculateNetFromGross(grossVal, hasRuling);
        const netEl = document.getElementById(`netIncome${personId}`);
        netEl.value = formatMoney(net);
        calculateFeasibility();
      };

      grossInput.addEventListener('input', function() {
        this.value = formatMoney(parseMoney(this.value));
        updateNetFromGross(id);
      });

      rulingToggle.addEventListener('change', () => updateNetFromGross(id));
    });
  }

  function calculateFeasibility() {
    const net1 = parseMoney(document.getElementById('netIncome1') ? document.getElementById('netIncome1').value : "3500") || 0;
    const net2 = parseMoney(document.getElementById('netIncome2') ? document.getElementById('netIncome2').value : "2500") || 0;
    const netIncome = net1 + net2;
    
    const values = getAllValues();

    let totalExpense = 0;
    for (let k in values) {
      totalExpense += values[k];
    }

    const surplus = netIncome - totalExpense;
    const savingsRate = netIncome > 0 ? (surplus / netIncome) * 100 : 0;
    const rentAmount = values['rent'] || 2000;
    const rentToIncomeRatio = netIncome > 0 ? (rentAmount / netIncome) * 100 : 100;

    // Update KPI UI
    const totIncVal = document.getElementById('totalIncomeVal');
    if (totIncVal) animateValue(totIncVal, netIncome, "");
    
    const totExpVal = document.getElementById('totalExpenseVal');
    if (totExpVal) animateValue(totExpVal, totalExpense, "");
    
    let essentialTotal = 0;
    let flexibleTotal = 0;
    expenseData.forEach(group => {
      let groupSum = group.items.reduce((acc, curr) => acc + curr.value, 0);
      if (group.id === 'housing' || group.id === 'health') {
        essentialTotal += groupSum;
      } else {
        flexibleTotal += groupSum;
      }
    });
    const emergencyFundGoal = (essentialTotal + (flexibleTotal * (2/3))) * 6;

    const emergencyVal = document.getElementById('emergencyFundVal');
    if (emergencyVal) animateValue(emergencyVal, emergencyFundGoal, "");
    
    const rentShareVal = document.getElementById('rentShareVal');
    if (rentShareVal) rentShareVal.textContent = t('rent_share', { share: Math.round((rentAmount / totalExpense) * 100) });

    const surplusEl = document.getElementById('surplusVal');
    if (surplusEl) {
      animateValue(surplusEl, surplus, surplus >= 0 ? "+" : "", "");
      surplusEl.style.color = surplus >= 0 ? "var(--success)" : "var(--danger)";
    }

    const targetSavingsAmount = parseMoney(document.getElementById('targetSavingsInput') ? document.getElementById('targetSavingsInput').value : "0") || 0;
    const savingsRateEl = document.getElementById('savingsRateVal');
    
    if (savingsRateEl) {
      let statusHtml = '';
      if (surplus > targetSavingsAmount) {
        const difference = surplus - targetSavingsAmount;
        statusHtml = `<span style="color:var(--success)">` + t('savings_exceeded', { diff: formatMoney(difference) }) + `</span>`;
      } else if (surplus === targetSavingsAmount) {
        statusHtml = `<span style="color:var(--success)">` + t('savings_met') + `</span>`;
      } else {
        const difference = targetSavingsAmount - surplus;
        statusHtml = `<span style="color:var(--danger)">` + t('savings_missing', { diff: formatMoney(difference) }) + `</span>`;
      }
      savingsRateEl.innerHTML = `<strong>%${savingsRate.toFixed(1)}</strong> ` + statusHtml;
    }

    // Rent assessment
    const rentRatioScore = document.getElementById('rentRatioScore');
    const rentRuleSub = document.getElementById('rentRuleSub');
    if (rentRatioScore && rentRuleSub) {
      rentRatioScore.textContent = `%${Math.round(rentToIncomeRatio)}`;
      if (rentToIncomeRatio <= 35) {
        rentRatioScore.style.color = "var(--success)";
        rentRuleSub.textContent = "Çok güvenli (Gelirin 1/3'ünden az)";
      } else if (rentToIncomeRatio <= 43) {
        rentRatioScore.style.color = "var(--warning)";
        rentRuleSub.textContent = "Kabul edilebilir (Hollanda ortalaması)";
      } else {
        rentRatioScore.style.color = "var(--danger)";
        rentRuleSub.textContent = "Yüksek Risk (Emlakçılar 3x gelir şartında zorlayabilir)";
      }
    }

    // Mortgage Simulator
    const targetHouseInput = document.getElementById('targetHousePrice');
    const mortgageResult = document.getElementById('mortgageResult');
    if (targetHouseInput && mortgageResult) {
      const targetHousePrice = parseMoney(targetHouseInput.value) || 0;
      const annualInterest = 0.04; // 4% average interest in NL
      const monthlyInterest = annualInterest / 12;
      const nMonths = 360; // 30 years
      
      // Calculate what target house actually costs per month
      const requiredMonthlyPayment = targetHousePrice > 0 ? (targetHousePrice * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -nMonths)))) : 0;
      
      if (targetHousePrice === 0) {
        mortgageResult.innerHTML = `Lütfen bir hedef ev fiyatı girin.`;
        mortgageResult.style.color = "var(--text-secondary)";
      } else if (rentAmount >= requiredMonthlyPayment) {
        mortgageResult.innerHTML = t('mortgage_success', { rent: formatMoney(rentAmount), house: formatMoney(targetHousePrice), req: formatMoney(requiredMonthlyPayment) });
        mortgageResult.style.color = "var(--success)";
      } else {
        const missing = requiredMonthlyPayment - rentAmount;
        mortgageResult.innerHTML = t('mortgage_fail', { house: formatMoney(targetHousePrice), req: formatMoney(requiredMonthlyPayment), missing: formatMoney(missing) });
        mortgageResult.style.color = "var(--danger)";
      }
    }

    // Calculate Retirement Income (30 years perspective) per person
    const r = 0.05 / 12;
    const n = 30 * 12;
    const aowBase = 625; // per person

    // Person 1
    const pension1 = values['pension1'] || 0;
    const etf1 = values['etf1'] || 0;
    const future1 = (pension1 + etf1) * ((Math.pow(1 + r, n) - 1) / r);
    const extra1 = (future1 * 0.04) / 12;
    const hasEmp1 = document.getElementById('empToggle1') && document.getElementById('empToggle1').checked;
    let empMin1 = 0, empMax1 = 0;
    if (hasEmp1) {
      empMin1 = net1 * 0.25;
      empMax1 = net1 * 0.40;
    }
    const min1 = aowBase + empMin1 + extra1;
    const max1 = aowBase + empMax1 + extra1;

    // Person 2
    const pension2 = values['pension2'] || 0;
    const etf2 = values['etf2'] || 0;
    const future2 = (pension2 + etf2) * ((Math.pow(1 + r, n) - 1) / r);
    const extra2 = (future2 * 0.04) / 12;
    const hasEmp2 = document.getElementById('empToggle2') && document.getElementById('empToggle2').checked;
    let empMin2 = 0, empMax2 = 0;
    if (hasEmp2) {
      empMin2 = net2 * 0.25;
      empMax2 = net2 * 0.40;
    }
    const min2 = aowBase + empMin2 + extra2;
    const max2 = aowBase + empMax2 + extra2;

    const totalMin = min1 + min2;
    const totalMax = max1 + max2;
    
    const retVal = document.getElementById('retirementIncomeVal');
    const retSub = document.getElementById('retirementSub');
    if (retVal) {
      if (hasEmp1 || hasEmp2) {
        retVal.textContent = `${formatMoney(totalMin)} - ${formatMoney(totalMax)}`;
      } else {
        retVal.textContent = `~ ${formatMoney(totalMin)}`;
      }
    }
    if (retSub) {
      retSub.innerHTML = t('pension_sub_text', { min1: formatMoney(min1), max1: hasEmp1 ? ' - '+formatMoney(max1) : '', min2: formatMoney(min2), max2: hasEmp2 ? ' - '+formatMoney(max2) : '' });
      retSub.style.color = "var(--text-secondary)";
    }

    // Update Stacked Bar and Legend
    // Wealth Projection (Nominal)
    const annualInflation = 0.025; 
    const nominalReturn = 0.075;   

    const monthlyInv = (values['pension1'] || 0) + (values['etf1'] || 0) + (values['pension2'] || 0) + (values['etf2'] || 0);
    let monthlyCash = surplus - monthlyInv;
    if (monthlyCash < 0) monthlyCash = 0; 

    const w5 = document.getElementById('wealth5');
    const w10 = document.getElementById('wealth10');
    const w20 = document.getElementById('wealth20');
    const w50 = document.getElementById('wealth50');

    function calculateNominalWealth(years) {
      let totalInv = 0;
      let totalCash = 0;
      let currentMonthlyInv = monthlyInv;
      let currentMonthlyCash = monthlyCash;
      
      for (let y = 1; y <= years; y++) {
        // Approximate compound over year for monthly contributions
        totalInv = totalInv * (1 + nominalReturn) + (currentMonthlyInv * 12) * (1 + nominalReturn / 2);
        totalCash += (currentMonthlyCash * 12);
        
        currentMonthlyInv *= (1 + annualInflation);
        currentMonthlyCash *= (1 + annualInflation);
      }
      return Math.round((totalInv + totalCash) / 10) * 10;
    }

    if (w5) animateValue(w5, calculateNominalWealth(5), "");
    if (w10) animateValue(w10, calculateNominalWealth(10), "");
    if (w20) animateValue(w20, calculateNominalWealth(20), "");
    if (w50) animateValue(w50, calculateNominalWealth(50), "");

    const pie = document.getElementById('pieChart');
    const legend = document.getElementById('expenseLegend');
    if (legend) legend.innerHTML = '';
    
    if (pie && legend) {
      let currentPct = 0;
      const conicString = [];
      
      const orderMap = {
        'housing': 1,
        'living': 2,
        'mobility': 3,
        'health': 4,
        'investment': 5
      };
      const sortedData = [...expenseData].sort((a, b) => orderMap[a.id] - orderMap[b.id]);

      sortedData.forEach(g => {
        const gSum = g.items.reduce((acc, curr) => acc + curr.value, 0);
        const pct = (gSum / (totalExpense || 1)) * 100;
        
        const nextPct = currentPct + pct;
        conicString.push(`${g.color} ${currentPct}% ${nextPct}%`);
        currentPct = nextPct;
        
        // Legend item
        const shortName = g.title.split('.')[1].split('(')[0].trim();
        const legItem = document.createElement('div');
        legItem.style.display = 'flex';
        legItem.style.alignItems = 'center';
        legItem.style.gap = '8px';
        legItem.innerHTML = `<span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${g.color}; flex-shrink: 0; box-shadow: 0 1px 2px rgba(0,0,0,0.2);"></span> <span style="white-space: nowrap;">${shortName} (%${Math.round(pct)})</span>`;
        legend.appendChild(legItem);
      });
      pie.style.background = `conic-gradient(${conicString.join(', ')})`;
    }
    // Auto-save state whenever calculations update
    if (typeof autoSave === 'function') autoSave();
  }

  window.onSliderMove = function(key, newVal) {
    const val = parseInt(newVal, 10);
    // Find item and update value
    for (let group of expenseData) {
      const item = group.items.find(i => i.key === key);
      if (item) {
        item.value = val;
        break;
      }
    }

    // Update numeric text input
    const input = document.getElementById(`num-${key}`);
    if (input) input.value = formatMoney(val);

    // Paint the slider track
    const slider = document.getElementById(`range-${key}`);
    if (slider) {
      const min = parseInt(slider.min, 10) || 0;
      const max = parseInt(slider.max, 10) || 100;
      const percentage = ((val - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, var(--primary) ${percentage}%, var(--card-border) ${percentage}%)`;
    }

    updateAllInsights();
    calculateFeasibility();
  }

  function onValueFocus(input, key) {
    for (let group of expenseData) {
      const item = group.items.find(i => i.key === key);
      if (item) {
        input.value = item.value;
        break;
      }
    }
    input.select();
  }

  function onValueBlur(input, key) {
    let val = parseMoney(input.value);
    val = Math.round(val / 5) * 5; // Sayıları 5 ve katlarına yuvarla
    for (let group of expenseData) {
      const item = group.items.find(i => i.key === key);
      if (item) {
        if (val < item.min) val = item.min;
        if (val > item.max) item.max = Math.ceil(val * 1.3 / 50) * 50;
        item.value = val;
        const range = document.getElementById(`range-${key}`);
        if (range) {
          range.max = item.max;
          range.value = val;
        }
        break;
      }
    }
    input.value = formatMoney(val);
    updateAllInsights();
    calculateFeasibility();
  }

  function onValueKeydown(e, input) {
    if (e.key === 'Enter') {
      input.blur();
    }
  }

  // Net Income Input Formatter
  const targetHousePriceInput = document.getElementById('targetHousePrice');
  if (targetHousePriceInput) {
    targetHousePriceInput.addEventListener('input', function() {
      const clean = parseMoney(this.value);
      this.value = clean.toLocaleString('tr-TR');
      calculateFeasibility();
    });
  }

  const targetSavingsInput = document.getElementById('targetSavingsInput');
  if (targetSavingsInput) {
    targetSavingsInput.addEventListener('input', function() {
      const clean = parseMoney(this.value);
      this.value = clean.toLocaleString('tr-TR');
      calculateFeasibility();
    });
  }

  const income1 = document.getElementById('netIncome1');
  if (income1) income1.addEventListener('input', function() {
    this.value = parseMoney(this.value).toLocaleString('tr-TR');
    calculateFeasibility();

    // Toggle All Button Logic
    const toggleAllBtn = document.getElementById('toggleAllBtn');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', function() {
        const isExpanding = this.dataset.state === 'collapsed';
        const summaries = document.querySelectorAll('.category-group summary');
        
        // Prevent multiple clicks from breaking animations
        this.style.pointerEvents = 'none';
        
        summaries.forEach(summary => {
          const details = summary.parentElement;
          if (isExpanding && !details.open) {
            summary.click();
          } else if (!isExpanding && details.open) {
            summary.click();
          }
        });

        if (isExpanding) {
          this.dataset.state = 'expanded';
          this.textContent = 'Tümünü Daralt';
        } else {
          this.dataset.state = 'collapsed';
          this.textContent = 'Tümünü Genişlet';
        }

        // Restore clicks after animations finish
        setTimeout(() => {
          this.style.pointerEvents = 'auto';
        }, 300);
      });
    }
  });
  
  const income2 = document.getElementById('netIncome2');
  if (income2) income2.addEventListener('input', function() {
    this.value = parseMoney(this.value).toLocaleString('tr-TR');
    calculateFeasibility();

    // Toggle All Button Logic
    const toggleAllBtn = document.getElementById('toggleAllBtn');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', function() {
        const isExpanding = this.dataset.state === 'collapsed';
        const summaries = document.querySelectorAll('.category-group summary');
        
        // Prevent multiple clicks from breaking animations
        this.style.pointerEvents = 'none';
        
        summaries.forEach(summary => {
          const details = summary.parentElement;
          if (isExpanding && !details.open) {
            summary.click();
          } else if (!isExpanding && details.open) {
            summary.click();
          }
        });

        if (isExpanding) {
          this.dataset.state = 'expanded';
          this.textContent = 'Tümünü Daralt';
        } else {
          this.dataset.state = 'collapsed';
          this.textContent = 'Tümünü Genişlet';
        }

        // Restore clicks after animations finish
        setTimeout(() => {
          this.style.pointerEvents = 'auto';
        }, 300);
      });
    }
  });

  const empToggle1 = document.getElementById('empToggle1');
  if (empToggle1) {
    empToggle1.addEventListener('change', function() {
      updateAllInsights();
      calculateFeasibility();
    });
  }

  const empToggle2 = document.getElementById('empToggle2');
  if (empToggle2) {
    empToggle2.addEventListener('change', function() {
      updateAllInsights();
      calculateFeasibility();
    });
  }

  function getCurrentState() {
    return {
      grossToggle1: document.getElementById('grossToggle1') ? document.getElementById('grossToggle1').checked : false,
      grossIncome1: document.getElementById('grossIncome1') ? document.getElementById('grossIncome1').value : "",
      rulingToggle1: document.getElementById('rulingToggle1') ? document.getElementById('rulingToggle1').checked : true,
      
      grossToggle2: document.getElementById('grossToggle2') ? document.getElementById('grossToggle2').checked : false,
      grossIncome2: document.getElementById('grossIncome2') ? document.getElementById('grossIncome2').value : "",
      rulingToggle2: document.getElementById('rulingToggle2') ? document.getElementById('rulingToggle2').checked : true,

      netIncome1: document.getElementById('netIncome1') ? document.getElementById('netIncome1').value : "",
      netIncome2: document.getElementById('netIncome2') ? document.getElementById('netIncome2').value : "",
      targetSavingsInput: document.getElementById('targetSavingsInput') ? document.getElementById('targetSavingsInput').value : "",
      targetHousePrice: document.getElementById('targetHousePrice') ? document.getElementById('targetHousePrice').value : "",
      empToggle1: document.getElementById('empToggle1') ? document.getElementById('empToggle1').checked : true,
      empToggle2: document.getElementById('empToggle2') ? document.getElementById('empToggle2').checked : true,
      expenses: getAllValues()
    };
  }

  function autoSave() {
    localStorage.setItem('hollandaBudgetDataAutoSave', JSON.stringify(getCurrentState()));
  }

  function applyState(parsed) {
    if (document.getElementById('grossToggle1') && parsed.grossToggle1 !== undefined) {
      document.getElementById('grossToggle1').checked = parsed.grossToggle1;
      document.getElementById('grossToggle1').dispatchEvent(new Event('change'));
    }
    if (document.getElementById('grossIncome1') && parsed.grossIncome1 !== undefined) {
      document.getElementById('grossIncome1').value = parsed.grossIncome1;
      document.getElementById('grossIncome1').dispatchEvent(new Event('input'));
    }
    if (document.getElementById('rulingToggle1') && parsed.rulingToggle1 !== undefined) {
      document.getElementById('rulingToggle1').checked = parsed.rulingToggle1;
      document.getElementById('rulingToggle1').dispatchEvent(new Event('change'));
    }

    if (document.getElementById('grossToggle2') && parsed.grossToggle2 !== undefined) {
      document.getElementById('grossToggle2').checked = parsed.grossToggle2;
      document.getElementById('grossToggle2').dispatchEvent(new Event('change'));
    }
    if (document.getElementById('grossIncome2') && parsed.grossIncome2 !== undefined) {
      document.getElementById('grossIncome2').value = parsed.grossIncome2;
      document.getElementById('grossIncome2').dispatchEvent(new Event('input'));
    }
    if (document.getElementById('rulingToggle2') && parsed.rulingToggle2 !== undefined) {
      document.getElementById('rulingToggle2').checked = parsed.rulingToggle2;
      document.getElementById('rulingToggle2').dispatchEvent(new Event('change'));
    }

    if (document.getElementById('netIncome1') && parsed.netIncome1) {
      document.getElementById('netIncome1').value = parsed.netIncome1;
    }
    if (document.getElementById('netIncome2') && parsed.netIncome2) {
      document.getElementById('netIncome2').value = parsed.netIncome2;
    }
    if (document.getElementById('targetSavingsInput') && parsed.targetSavingsInput) {
      document.getElementById('targetSavingsInput').value = parsed.targetSavingsInput;
    }
    if (document.getElementById('targetHousePrice') && parsed.targetHousePrice) {
      document.getElementById('targetHousePrice').value = parsed.targetHousePrice;
    }
    if (document.getElementById('empToggle1') && parsed.empToggle1 !== undefined) {
      document.getElementById('empToggle1').checked = parsed.empToggle1;
    }
    if (document.getElementById('empToggle2') && parsed.empToggle2 !== undefined) {
      document.getElementById('empToggle2').checked = parsed.empToggle2;
    }
    if (parsed.expenses) {
      expenseData.forEach(group => {
        group.items.forEach(item => {
          if (parsed.expenses[item.key] !== undefined) {
            item.value = parsed.expenses[item.key];
          }
        });
      });
    }
  }

  function loadFromLocal() {
    const saved = localStorage.getItem('hollandaBudgetDataAutoSave');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        applyState(parsed);
      } catch (e) {
        console.error("Local state parsing error");
      }
    }
  }

  function resetAll() {
    if (confirm("Tüm değişiklikleri sıfırlamak ve varsayılan ayarlara dönmek istediğinize emin misiniz?")) {
      localStorage.removeItem('hollandaBudgetDataAutoSave');
      window.location.reload();
    }
  }

  // Export and Import Data
  function exportData() {
    const dataToSave = getCurrentState();
    const dataStr = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    let filename = prompt("Senaryo adı girin:", "hollanda_senaryo_1");
    if (filename === null) return; // User cancelled
    if (filename.trim() === "") filename = "hollanda_senaryosu";
    if (!filename.endsWith(".json")) filename += ".json";

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const parsed = JSON.parse(e.target.result);
        applyState(parsed);
        renderAllCategories();
        calculateFeasibility();
        updateAllInsights();
        autoSave();
        alert(t('scenario_loaded'));
      } catch (err) {
        alert("Dosya okunurken hata oluştu. Lütfen doğru bir JSON dosyası seçin.");
      }
      event.target.value = '';
    };
    reader.readAsText(file);
  }

  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportData);
  
  const importBtn = document.getElementById('importBtn');
  const importFile = document.getElementById('importFile');
  if (importBtn && importFile) {
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', handleImport);
  }

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetAll);

  // CSV Export Logic - Cleaned for Pivot Tables & Analysis
  function exportCSV() {
    const state = getCurrentState();
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    
    // Header
    csvContent += "Tip,Kategori,Kalem,Aylık Tutar (€),Yıllık Tutar (€)\n";

    // 1. Incomes
    const net1 = parseMoney(state.netIncome1) || 0;
    const net2 = parseMoney(state.netIncome2) || 0;
    const totalNet = net1 + net2;
    
    csvContent += `"Gelir","Maaş","${t("person_1")} Net Maaş",${net1},${net1 * 12}\n`;
    csvContent += `"Gelir","Maaş","${t("person_2")} Net Maaş",${net2},${net2 * 12}\n`;
    
    // 2. Expenses
    let totalExpense = 0;
    expenseData.forEach(group => {
      group.items.forEach(item => {
        const val = state.expenses[item.key] !== undefined ? state.expenses[item.key] : item.value;
        csvContent += `"Gider","${group.title}","${item.name}",${val},${val * 12}\n`;
        totalExpense += val;
      });
    });

    // 3. Summary (Calculated lines at the bottom)
    csvContent += `\n`;
    csvContent += `"Özet","TOPLAM GELİR","",${totalNet},${totalNet * 12}\n`;
    csvContent += `"Özet","TOPLAM GİDER","",${totalExpense},${totalExpense * 12}\n`;
    const surplus = totalNet - totalExpense;
    csvContent += `"Özet","NET TASARRUF","",${surplus},${surplus * 12}\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hollanda_butce_raporu.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // PDF (Print) Logic - Beautiful 2-Column Layout
  function exportPDF() {
    const container = document.getElementById('printTableContainer');
    const state = getCurrentState();
    const net1 = parseMoney(state.netIncome1) || 0;
    const net2 = parseMoney(state.netIncome2) || 0;
    const totalNet = net1 + net2;
    
    let leftHtml = `
      <div class="print-card">
        <div class="print-card-title title-income">GELİRLER (Net)</div>
        <div class="print-row"><span>${t("person_1")} Maaş</span><span>${formatMoney(net1)}</span></div>
        <div class="print-row"><span>${t("person_2")} Maaş</span><span>${formatMoney(net2)}</span></div>
        <div class="print-row print-row-bold"><span>TOPLAM NET</span><span>${formatMoney(totalNet)}</span></div>
      </div>
    `;
    let rightHtml = '';

    let totalExpense = 0;
    
    expenseData.forEach((group, index) => {
      let groupTotal = 0;
      let rowsHtml = '';
      group.items.forEach(item => {
        const val = state.expenses[item.key] !== undefined ? state.expenses[item.key] : item.value;
        rowsHtml += `<div class="print-row"><span>${item.name}</span><span>${formatMoney(val)}</span></div>`;
        groupTotal += val;
      });
      totalExpense += groupTotal;
      
      const cardHtml = `
        <div class="print-card">
          <div class="print-card-title ${(group.id === 'housing' || group.id === 'health') ? 'title-essential' : 'title-flexible'}">${group.title}</div>
          ${rowsHtml}
          <div class="print-row print-row-bold"><span>Kategori Toplamı</span><span>${formatMoney(groupTotal)}</span></div>
        </div>
      `;
      
      if (group.id === 'housing' || group.id === 'health') {
        leftHtml += cardHtml;
      } else {
        rightHtml += cardHtml;
      }
    });

    const surplus = totalNet - totalExpense;
    rightHtml += `
      <div class="print-card">
        <div class="print-card-title title-summary">AYLIK ÖZET</div>
        <div class="print-row print-row-bold summary-row"><span>TOPLAM GİDER</span><span>${formatMoney(totalExpense)}</span></div>
        <div class="print-row print-row-bold summary-row" style="color: ${surplus >= 0 ? '#10b981' : '#dc2626'};">
          <span>NET TASARRUF</span><span>${formatMoney(surplus)}</span>
        </div>
      </div>
    `;

    container.innerHTML = `
      <div class="print-header">
        <h1>Hollanda Bütçe Raporu</h1>
        <p>Oluşturulma Tarihi: ${new Date().toLocaleDateString()} &middot; Hollanda / Utrecht Yaşam Simülatörü</p>
      </div>
      <div class="print-grid">
        <div class="print-col">${leftHtml}</div>
        <div class="print-col">${rightHtml}</div>
      </div>
    `;
    window.print();
  }

  const csvBtn = document.getElementById('csvBtn');
  if (csvBtn) csvBtn.addEventListener('click', exportCSV);

  const pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) pdfBtn.addEventListener('click', exportPDF);

  window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLang;
    updateLanguage();
    loadFromLocal();
    setupGrossToggles();
    renderAllCategories();
    calculateFeasibility();

    // Toggle All Button Logic
    const toggleAllBtn = document.getElementById('toggleAllBtn');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', function() {
        const isExpanding = this.dataset.state === 'collapsed';
        const summaries = document.querySelectorAll('.category-group summary');
        
        // Prevent multiple clicks from breaking animations
        this.style.pointerEvents = 'none';
        
        summaries.forEach(summary => {
          const details = summary.parentElement;
          if (isExpanding && !details.open) {
            summary.click();
          } else if (!isExpanding && details.open) {
            summary.click();
          }
        });

        if (isExpanding) {
          this.dataset.state = 'expanded';
          this.textContent = 'Tümünü Daralt';
        } else {
          this.dataset.state = 'collapsed';
          this.textContent = 'Tümünü Genişlet';
        }

        // Restore clicks after animations finish
        setTimeout(() => {
          this.style.pointerEvents = 'auto';
        }, 300);
      });
    }
  });


function updateLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  
  // Update lang buttons opacity
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.style.opacity = '0.5';
  });
  
  let langIndex = { tr: 0, en: 1, nl: 2 }[currentLang];
  let btns = document.querySelectorAll('.lang-btn');
  if (btns[langIndex]) btns[langIndex].style.opacity = '1';
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;
  updateLanguage();
  
  // Rebuild data.js structures with new lang
  const currentValues = getAllValues(); // Save state
  expenseData = getExpenseData(); // Reload texts
  applyState(currentValues); // Apply state back
  
  renderAllCategories();
  calculateFeasibility();
  updateAllInsights();
}

window.setLang = setLang;
