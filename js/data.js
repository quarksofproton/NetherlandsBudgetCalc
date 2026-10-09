// Initial expense structure tailored for a 2-person household in Utrecht & Houten - 2026 Updated
function getExpenseData() {
  return [
  {
    id: "housing",
    title: t('group_housing'),
    icon: "🏡",
    color: "#1f5eff",
    items: [
      {
        key: "rent",
        name: t('item_rent'),
        value: 2000,
        min: 1000,
        max: 3500,
        getInsight: (val) => {
          if (val <= 1228) {
            return {
              status: "warning",
              tag: t('tag_social_limit'),
              msg: t("msg_housing_1")
            };
          } else if (val < 1900) {
            return {
              status: "warning",
              tag: t('tag_high_comp'),
              msg: t("msg_housing_2")
            };
          } else if (val <= 2400) {
            return {
              status: "safe",
              tag: t('tag_market_avg'),
              msg: t("msg_housing_3")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_luxury'),
              msg: t("msg_housing_4")
            };
          }
        }
      },
      {
        key: "utilities",
        name: t('item_utilities'),
        value: 200,
        min: 80,
        max: 450,
        getInsight: (val) => {
          if (val < 140) {
            return {
              status: "warning",
              tag: t('tag_a_plus'),
              msg: t("msg_util_1")
            };
          } else if (val <= 260) {
            return {
              status: "safe",
              tag: t('tag_balanced'),
              msg: t("msg_util_2")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_old_building'),
              msg: t("msg_util_3")
            };
          }
        }
      },
      {
        key: "tax",
        name: t('item_municipal'),
        value: 60,
        min: 40,
        max: 180,
        getInsight: (val) => {
          if (val < 60) {
            return {
              status: "warning",
              tag: t('tag_missing_calc'),
              msg: t("msg_tax_1")
            };
          } else if (val <= 90) {
            return {
              status: "safe",
              tag: t('tag_tenant_tax'),
              msg: t("msg_tax_2")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_owner_tax'),
              msg: t("msg_tax_3")
            };
          }
        }
      },
      {
        key: "internet",
        name: t('item_internet'),
        value: 80,
        min: 40,
        max: 160,
        getInsight: (val) => {
          if (val <= 60) {
            return {
              status: "warning",
              tag: t('tag_limited_pack'),
              msg: t("msg_internet_1")
            };
          } else if (val <= 110) {
            return {
              status: "safe",
              tag: t('tag_fiber_unlimited'),
              msg: t("msg_internet_2")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_premium_pack'),
              msg: t("msg_internet_3")
            };
          }
        }
      }
    ]
  },
  {
    id: "health",
    title: t('group_health'),
    icon: "🏥",
    color: "#ef4444",
    items: [
      {
        key: "insurance",
        name: t('item_health_ins'),
        value: 350,
        min: 270,
        max: 550,
        getInsight: (val) => {
          const perPerson = val / 2;
          if (perPerson < 145) {
            return {
              status: "danger",
              tag: t('tag_max_risk'),
              msg: t("msg_ins_health_1")
            };
          } else if (perPerson <= 175) {
            return {
              status: "safe",
              tag: t('tag_standard_safe'),
              msg: t("msg_ins_health_2")
            };
          } else if (perPerson <= 210) {
            return {
              status: "info",
              tag: t('tag_extra_packs'),
              msg: t("msg_ins_health_3")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_ultra_premium'),
              msg: t("msg_ins_health_4")
            };
          }
        }
      },
      {
        key: "liability",
        name: t('item_liability'),
        value: 30,
        min: 10,
        max: 80,
        getInsight: (val) => {
          if (val < 20) {
            return {
              status: "warning",
              tag: t('tag_risky'),
              msg: t("msg_ins_liab_1")
            };
          } else if (val <= 45) {
            return {
              status: "safe",
              tag: t('tag_full_protect'),
              msg: t("msg_ins_liab_2")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_comprehensive'),
              msg: t("msg_ins_liab_3")
            };
          }
        }
      }
    ]
  },
  {
    id: "living",
    title: t('group_living'),
    icon: "🛒",
    color: "#10b981",
    items: [
      {
        key: "groceries",
        name: t('item_groceries'),
        value: 650,
        min: 350,
        max: 1200,
        getInsight: (val) => {
          if (val < 450) {
            return {
              status: "warning",
              tag: t('tag_strict_save'),
              msg: t("msg_groceries_1")
            };
          } else if (val <= 750) {
            return {
              status: "safe",
              tag: t('tag_balanced_consume'),
              msg: t("msg_groceries_2")
            };
          } else if (val <= 900) {
            return {
              status: "info",
              tag: t('tag_gourmet'),
              msg: t("msg_groceries_3")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_unlimited_budget'),
              msg: t("msg_groceries_4")
            };
          }
        }
      },
      {
        key: "dining",
        name: t('item_dining'),
        value: 280,
        min: 0,
        max: 1000,
        getInsight: (val) => {
          if (val < 150) {
            return {
              status: "info",
              tag: t('tag_minimal_social'),
              msg: t("msg_dining_1")
            };
          } else if (val <= 400) {
            return {
              status: "safe",
              tag: t('tag_weekly_fun'),
              msg: t("msg_dining_2")
            };
          } else if (val <= 700) {
            return {
              status: "warning",
              tag: t('tag_frequent_social'),
              msg: t("msg_dining_3")
            };
          } else {
            return {
              status: "warning",
              tag: t('tag_fine_dining'),
              msg: t("msg_dining_4")
            };
          }
        }
      }
    ]
  },
  {
    id: "mobility",
    title: t('group_mobility'),
    icon: "🚲",
    color: "#f59e0b",
    items: [
      {
        key: "transport",
        name: t('item_public_transport'),
        value: 180,
        min: 30,
        max: 800,
        getInsight: (val) => {
          if (val < 60) {
            return {
              status: "safe",
              tag: t('tag_dutch_bike'),
              msg: t("msg_transport_1")
            };
          } else if (val <= 250) {
            return {
              status: "safe",
              tag: t('tag_regional_travel'),
              msg: t("msg_transport_2")
            };
          } else if (val <= 450) {
            return {
              status: "info",
              tag: t('tag_frequent_intercity'),
              msg: t("msg_transport_3")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_active_car'),
              msg: t("msg_transport_4")
            };
          }
        }
      },
      {
        key: "personal",
        name: t('item_entertainment'),
        value: 140,
        min: 0,
        max: 600,
        getInsight: (val) => {
          if (val < 60) {
            return {
              status: "warning",
              tag: t('tag_digital_only'),
              msg: t("msg_entertainment_1")
            };
          } else if (val <= 180) {
            return {
              status: "safe",
              tag: t('tag_gym_fun'),
              msg: t("msg_entertainment_2")
            };
          } else if (val <= 350) {
            return {
              status: "info",
              tag: t('tag_boutique_gym'),
              msg: t("msg_entertainment_3")
            };
          } else {
            return {
              status: "info",
              tag: t('tag_private_care'),
              msg: t("msg_entertainment_4")
            };
          }
        }
      }
    ]
  },
  {
    id: "investment",
    title: t('group_investment'),
    icon: "📈",
    color: "#8b5cf6",
    items: [
      {
        key: "pension1",
        name: t('item_pension1'),
        value: 50,
        min: 0,
        max: 1000,
        getInsight: (val) => {
          const hasEmp = document.getElementById('empToggle1') && document.getElementById('empToggle1').checked;
          if (hasEmp) {
            return val < 50 
              ? { status: "info", tag: t('tag_employer_first'), msg: t("msg_pension_info1") }
              : { status: "safe", tag: t('tag_full_guarantee'), msg: t("msg_pension_safe1") };
          } else {
            return val < 200 
              ? { status: "danger", tag: t('tag_critical_no_emp'), msg: t("msg_pension_danger1") }
              : { status: "safe", tag: t('tag_self_pension'), msg: t("msg_pension_safe2") };
          }
        }
      },
      {
        key: "etf1",
        name: t('item_pension1_invest'),
        value: 100,
        min: 0,
        max: 2000,
        getInsight: (val) => {
          return val === 0 
            ? { status: "warning", tag: t('tag_zero_liquid'), msg: t("msg_pension_warn1") }
            : { status: "safe", tag: t('tag_steady_growth'), msg: t("msg_pension_safe3") };
        }
      },
      {
        key: "pension2",
        name: t('item_pension2'),
        value: 50,
        min: 0,
        max: 1000,
        getInsight: (val) => {
          const hasEmp = document.getElementById('empToggle2') && document.getElementById('empToggle2').checked;
          if (hasEmp) {
            return val < 50 
              ? { status: "info", tag: t('tag_employer_first'), msg: t("msg_pension_info1") }
              : { status: "safe", tag: t('tag_full_guarantee'), msg: t("msg_pension_safe1") };
          } else {
            return val < 200 
              ? { status: "danger", tag: t('tag_critical_no_emp'), msg: t("msg_pension_danger1") }
              : { status: "safe", tag: t('tag_self_pension'), msg: t("msg_pension_safe2") };
          }
        }
      },
      {
        key: "etf2",
        name: t('item_pension2_invest'),
        value: 50,
        min: 0,
        max: 2000,
        getInsight: (val) => {
          return val === 0 
            ? { status: "warning", tag: t('tag_zero_liquid'), msg: t("msg_pension_warn1") }
            : { status: "safe", tag: t('tag_steady_growth'), msg: t("msg_pension_safe3") };
        }
      }
    ]
  }
];

}
let expenseData = getExpenseData();
