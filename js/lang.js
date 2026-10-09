let currentLang = localStorage.getItem('preferredLang') || 'tr';

const i18n = {
  tr: {
    // index.html static
    "page_title": "Randstad bölgesinde 2 kişilik bir hane için bütçe simülasyonu",
    "header_badge": "Randstad bölgesinde 2 kişilik bir hane için bütçe simülasyonu",
    "main_title": "Hollanda Bütçe Hesaplayıcısı",
    "subtitle": "Hollanda'da iki kişilik bir aile olarak yaşamak için gelir-gider dengenizi hesaplayın.",
    
    "btn_export": "Senaryo İndir",
    "btn_import": "Senaryo Yükle",
    "btn_reset": "Sıfırla",
    "btn_csv": "CSV",
    "btn_pdf": "PDF",
    
    "section_income": "Gelirler",
    "person_1": "Kişi 1",
    "person_2": "Kişi 2",
    "gross_salary": "Yıllık Brüt Maaş",
    "ruling_30": "%27 Ruling",
    "net_salary_monthly": "Net Maaş (Aylık):",
    
    "section_expenses": "Giderler",
    "essential_expenses": "Zaruri Giderler",
    "flexible_expenses": "Keyfi Giderler",
    "collapse_all": "Tümünü Daralt",
    "expand_all": "Tümünü Genişlet",
    
    "financial_summary": "Finansal Özet",
    "expense_distribution": "Gider Dağılımları",
    
    "total_income": "Aylık Toplam Gelir",
    "total_expense": "Aylık Toplam Gider",
    
    "savings_goal_title": "Aylık Tasarruf Hedefi (Hane)",
    "net_savings": "Net Tasarruf",
    "savings_rate": "Tasarruf Oranı: %{rate}",
    "net_household_income": "Net Hane Geliri",
    "rent_share": "Kira oranı: %{share}",
    "savings_exceeded": "✅ Hedef {diff} aşıldı",
    "savings_met": "✅ Hedef tam tutturuldu",
    "savings_missing": "❌ Hedefe {diff} kaldı",
    
    "mortgage_sim_title": "Mortgage Simülatörü",
    "mortgage_sim_desc": "Ev fiyatını girip bütçenize uygunluğunu test edin.",
    
    "emergency_fund_title": "Acil Durum Fonu",
    "emergency_fund_desc": "Krizlere karşı vadesiz hesapta durmalı.",
    "emergency_fund_sub": "(Zaruri %100, Keyfi %66)",
    
    "retirement_pension_title": "Tahmini Emekli Maaşı",
    
    // app.js dynamic
    "mortgage_calculating": "Hesaplanıyor...",
    "mortgage_success": "✅ <strong>Harika!</strong> Ayırdığınız <strong>{rent}</strong> bütçe, <strong>{house}</strong> değerindeki bir evi almak için yeterli. (Aylık gereken: <strong>{req}</strong>)",
    "mortgage_fail": "❌ <strong>Bütçe Yetersiz:</strong> <strong>{house}</strong> değerinde bir ev için aylık ortalama <strong>{req}</strong> ödemeniz gerekir. Bütçe açığı: <strong>{missing}</strong>",
    
    "pension_person_1_has_emp": "Kişi 1: Bireysel Emeklilik (3. Pillar)",
    "pension_person_1_no_emp": "ZORUNLU: Kişi 1 Bireysel (İşveren Yok!)",
    "pension_person_2_has_emp": "Kişi 2: Bireysel Emeklilik (3. Pillar)",
    "pension_person_2_no_emp": "ZORUNLU: Kişi 2 Bireysel (İşveren Yok!)",
    "pension_sub_text": "Kişi 1: <strong>{min1}{max1}</strong><br>Kişi 2: <strong>{min2}{max2}</strong>",
    "has_employer_pension": "İşveren Emekliliği Var (Pillar 2)",
    "item_pension1_invest": "Kişi 1: Serbest Yatırım (Borsa/ETF)",
    "item_pension2_invest": "Kişi 2: Serbest Yatırım (Borsa/ETF)",
    "pension_calculating": "Hesaplanıyor...",
    
    "scenario_loaded": "Senaryo başarıyla yüklendi! ✅",
    
    // data.js Group Titles
    "group_housing": "1. Konut Giderleri",
    "group_health": "2. Sigortalar",
    "group_living": "3. Alışveriş",
    "group_mobility": "4. Ulaşım",
    "group_investment": "5. Emeklilik (Uzun Vade)",
    
    // data.js Items
    "item_rent": "Kira / Mortgage Ücreti",
    "item_utilities": "Elektrik, Su ve Gaz Faturaları",
    "item_internet": "Ev İnterneti ve Mobil Hat",
    "item_municipal": "Su ve Çöp Vergisi",
    
    "item_health_ins": "Sağlık Sigortası (2 Kişi)",
    "item_liability": "Mesuliyet ve Konut Sigortası (WA + Inboedel)",
    
    "item_groceries": "Market Alışverişi",
    "item_dining": "Restoran ve Kafe Harcamaları",
    "item_entertainment": "Spor, Abonelikler ve Hobiler",
    
    "item_public_transport": "Toplu Taşıma",
    "item_car": "Araç Masrafları (Benzin, Vergi, Sigorta)",
    
    "item_pension1": "Kişi 1: Bireysel Emeklilik (3. Pillar)",
    "item_pension2": "Kişi 2: Bireysel Emeklilik (3. Pillar)",
    "item_savings": "Likit Birikim / Hisse (İsteğe Bağlı)",
    
    // data.js Insight Tags
    "tag_social_limit": "Sosyal Konut Sınırı",
    "tag_high_comp": "Yüksek Rekabet",
    "tag_market_avg": "Piyasa Ortalaması",
    "tag_luxury": "Lüks / Yeni Yapı",
    
    "tag_a_plus": "A++ Enerji Etiketi",
    "tag_balanced": "Dengeli Ortalama",
    "tag_old_building": "Eski Bina",
    
    "tag_missing_calc": "Eksik Hesaplama",
    "tag_tenant_tax": "Kiracı Vergisi",
    "tag_owner_tax": "Ev Sahibi Seviyesi",
    
    "tag_limited_pack": "Kısıtlı Paket",
    "tag_fiber_unlimited": "Fiber ve Sınırsız",
    "tag_premium_pack": "Premium Paketler",
    
    "tag_max_risk": "Maksimum Risk",
    "tag_standard_safe": "Standart Güvenli",
    "tag_extra_packs": "Ekstra Paketler",
    
    "tag_ultra_premium": "Ultra Premium Güvence",
    "tag_risky": "Riskli / Yetersiz",
    "tag_full_protect": "Tam Koruma",
    "tag_comprehensive": "Kapsamlı Sigorta",
    
    "tag_strict_save": "Sıkı Tasarruf",
    "tag_balanced_consume": "Dengeli Tüketim",
    "tag_gourmet": "Gurme & Organik",
    "tag_unlimited_budget": "Sınırsız Bütçe",
    
    "tag_minimal_social": "Minimal Sosyalleşme",
    "tag_weekly_fun": "Haftalık Keyifli Çıkışlar",
    "tag_frequent_social": "Sık Sosyal Yaşam",
    "tag_fine_dining": "Fine-Dining Odaklı",
    
    "tag_dutch_bike": "Sadece Bisiklet",
    "tag_regional_travel": "Bölgesel Seyahat",
    "tag_frequent_intercity": "Şehirlerarası Seyahat",
    "tag_active_car": "Aktif Araç Kullanımı",
    
    "tag_digital_only": "Sadece Dijital Abonelik",
    "tag_gym_fun": "Spor ve Eğlence",
    "tag_boutique_gym": "Butik Spor",
    "tag_private_care": "Özel Bakım",
    
    "tag_employer_first": "İşveren Öncelikli",
    "tag_full_guarantee": "Tam Güvence",
    "tag_critical_no_emp": "KRİTİK: İşveren Yok",
    "tag_self_pension": "Kendi Emekliliğini Kuran",
    
    "tag_zero_liquid": "Sıfır Likit Yatırım",
    "tag_steady_growth": "Düzenli Büyüme",
    
    // data.js Insight Messages
    "msg_housing_1": "Kira yardımı (huurtoeslag) sınırıdır. Randstad bölgesinde bu fiyata özel sektör evi bulmak imkansıza yakındır.",
    "msg_housing_2": "Özel sektörde başlangıç noktası. Genelde küçük stüdyolar veya oda kiralamaları.",
    "msg_housing_3": "1-2 yatak odalı, merkeze 15-20 dk mesafedeki evler için beklenen standart bütçe.",
    "msg_housing_4": "Geniş m2, A enerji etiketi veya tam merkez konumlu modern daireler.",
    
    "msg_util_1": "Modern ve yalıtımı çok iyi bir evde yaşıyorsanız mümkün.",
    "msg_util_2": "Standart bir çiftin Hollanda'daki genel enerji harcamasıdır.",
    "msg_util_3": "Isıtma sisteminin eski olduğu (örn. gazlı ve yalıtımsız) evlerde kışın faturalar fırlar.",
    
    "msg_internet_1": "Sadece ucuz mobil veri ve yavaş bir ev interneti (örneğin sadece VDSL).",
    "msg_internet_2": "Standart Hız (100-300 Mbps) ve iki kişi için yeterli 4G/5G paketleri.",
    "msg_internet_3": "Gigabit fiber internet ve sınırsız verili premium mobil hatlar.",
    
    "msg_tax_1": "Vergileri (Çöp, Su arıtma vb.) unutmayın. Yıllık gelirler aylığa bölünmelidir.",
    "msg_tax_2": "Sadece kiracı olduğunuzda ödeyeceğiniz standart vergi.",
    "msg_tax_3": "Ev sahibiyseniz (Mortgage), ekstra OZB (Emlak) vergisi ekleneceği için payınız artar.",
    
    "msg_ins_health_1": "En düşük prim ama acil durumlar hariç masrafları cebinizden ödersiniz.",
    "msg_ins_health_2": "Standart Eigen Risico ile ortalama bir güvence sağlar.",
    "msg_ins_health_3": "Dişçilik, Fizyoterapi ve ek tedavileri kapsayan geniş poliçeler.",
    "msg_ins_health_4": "Eigen risico'nun sıfıra yakın olduğu, her şey dahil paketler.",
    
    "msg_ins_liab_1": "Hollanda'da sorumluluk sigortası (Aansprakelijkheidsverzekering) olmaması büyük finansal risktir.",
    "msg_ins_liab_2": "Sorumluluk ve temel eşya (Inboedel) sigortası için ideal bütçe.",
    "msg_ins_liab_3": "Hukuki danışmanlık (Rechtsbijstand) ve genişletilmiş ev paketini kapsar.",
    
    "msg_groceries_1": "Çok sıkı takip gerektirir, çoğunlukla indirimli marketler (Aldi/Lidl) ve az et tüketimi.",
    "msg_groceries_2": "Albert Heijn / Jumbo karışımı, standart kalitede beslenme.",
    "msg_groceries_3": "Organik ürünler, kaliteli şarap/peynir ve bol taze et/balık tüketimi.",
    "msg_groceries_4": "Market fiyatlarına hiç bakmadan, her gün premium tüketim.",
    
    "msg_dining_1": "Ayda belki bir kez uygun fiyatlı dışarı çıkış veya sadece Take-away.",
    "msg_dining_2": "Haftada 1-2 kez dışarıda kahve/tatlı, ayda 2-3 kez normal restoran.",
    "msg_dining_3": "Düzenli olarak restoranlara, barlara gitme. Hafta sonu etkinlikleri.",
    "msg_dining_4": "Sık sık üst düzey restoranlar ve yüksek sosyal harcamalar.",
    
    "msg_transport_1": "İşe sadece bisikletle gidiyorsanız en kârlı yöntemdir.",
    "msg_transport_2": "Haftada 1-2 gün ofise giden ve NS indirim kartı kullananlar için.",
    "msg_transport_3": "Düzenli Intercity kullanan (örn: Utrecht - Amsterdam) veya araç paylaşım uygulamaları kullananlar.",
    "msg_transport_4": "Özel aracınız varsa (Aylık benzin, yol vergisi, sigorta vb.) en az bu kadar tutar.",
    
    "msg_entertainment_1": "Sadece Netflix/Spotify. Spor evde veya dışarıda koşu ile yapılıyor.",
    "msg_entertainment_2": "Temel spor salonu (Basic-Fit vb.) ve birkaç dijital abonelik.",
    "msg_entertainment_3": "Rocycle, Bouldering gibi spesifik spor salonları + müze kartları.",
    "msg_entertainment_4": "Personal trainer, tenis kulübü veya pahalı hobiler.",
    
    "msg_pension_1": "Pillar 2 (İşveren) fonunuz çok güçlüyse ekstra yatırıma gerek kalmayabilir.",
    "msg_pension_2": "İşveren katkınız olsa da, maaş limitleri sebebiyle (Pillar 3) boşluğunuzu kendiniz doldurmanız çok güvenlidir.",
    "msg_pension_3": "İşvereniniz emeklilik fonuna (Pensioenfonds) katkı YAPMIYORSA, geleceğiniz risk altında. Buraya bütçe ayırmanız yasal bir haktır ve vergiden düşülebilir.",
    "msg_pension_4": "Tüm AOW boşluğunuzu bireysel emeklilikle (Pillar 3) kapatmak için gereken yaklaşık minimum miktar.",
    
    "msg_savings_1": "Acil durum fonu dolduktan sonra uzun vadeli yatırım yapmamak enflasyon karşısında erime riskidir.",
    "msg_savings_2": "Her ay düzenli ETF / Borsa yatırımı (Box 3) yapmak, Hollanda'da servet inşasının temelidir.",
    "msg_housing_1": "1.228€ altı 2026 yasalarına göre 'Middenhuur' kapsamındadır. Kira için bekleme listeleri uzundur. Ev almak isterseniz, bu tutar mortgage için düşük bir taksit miktarıdır.",
    "msg_housing_2": "1.600€ - 1.900€ arası Zeist, Nieuwegein gibi uydu kentlerde veya Utrecht merkez dışı dairelerde kira/mortgage için mümkündür. Hızlı hareket etmelisiniz.",
    "msg_housing_3": "2.000€ - 2.400€ bandı: Utrecht 2+1 konutları için tipik serbest piyasa kira standardı ve ortalama bir mortgage taksitine (örn: 400k-500k € kredi) denktir.",
    "msg_housing_4": "2.400€ üzeri: Utrecht merkezinde, lüks/yeni yapılarda ferah konutlar kiralayabilir veya yüksek limitli (>500k €) bir mortgage ödeyebilirsiniz.",
    "msg_util_1": "140€ altı yalnızca modern, yerden ısıtmalı en üst yalıtımlı yeni yapılarda mümkündür. Eski tarihi evlerde kışın fatura 250€'yu kolayca aşar.",
    "msg_util_2": "200€ civarı: 2 kişilik bir hanenin kış tüketimi dahil yıllık ortalama gaz/elektrik ön ödemesini (voorschot) güvenle karşılar.",
    "msg_util_3": "Yüksek fatura tahmini: Yalıtımsız veya yüksek tavanlı eski bir evde kalırsanız kışın kombi (gaz) maliyeti bu seviyelere ulaşabilir.",
    "msg_tax_1": "Utrecht (BghU) bölgesinde kiracılar için 2026 atık (çöp) ve su vergisi (3 ünite) toplamı yıllık ~730€ (aylık ~60€) civarıdır.",
    "msg_tax_2": "Aylık 60-70€ arası, bir kiracının BghU su ve çöp vergisini rahatlıkla karşılar.",
    "msg_tax_3": "Aylık 95€ ve üzeri ayırmak akıllıcadır; çünkü ev satın aldığınızda (Mortgage) bu vergilere ekstra olarak OZB (Emlak) ve Kanalizasyon vergileri de eklenecektir.",
    "msg_internet_1": "Bütçe dostu düşük hızlı internet ve kısıtlı GB'lı 2 mobil hat alınabilir. Sürekli evden çalışma veya büyük indirmeler için hız yetersiz kalabilir.",
    "msg_internet_2": "Odido veya KPN gibi sağlayıcılardan 1000Mbps fiber ev interneti ve 2 kişi için limitsiz 5G konuşma/internet paketlerini kapsar.",
    "msg_internet_3": "Ekstra TV kanalları (ESPN, Ziggo Sport), en yüksek hızlar ve ev telefonu gibi tüm lüks eklentileri içeren premium paketleri kapsar.",
    "msg_ins_health_1": "Kişi başı ~135-140€: 'Eigen Risico' muafiyetini 385€'dan 885€'ya yükseltmişsiniz demektir. Hastaneye yolunuz düşerse ilk 885€ cebinizden çıkar!",
    "msg_ins_health_2": "Kişi başı 157-165€: 2026 standart prim ortalamasıdır. Ev doktoru (GP) ücretsizdir, ancak diş ve fizyoterapi kapsanmaz.",
    "msg_ins_health_3": "Kişi başı 180-210€: Standart pakete ek olarak yıllık 250-500€'luk diş hekimi, fizyoterapi ve yurt dışı kapsamı eklenmiş rahat bir poliçedir.",
    "msg_ins_health_4": "Kişi başı 210€+: Kapsamlı ortodonti, alternatif tıp, tam kapsamlı diş veya lüks doğum pakedi gibi en geniş güvenceleri satın alıyorsunuz demektir.",
    "msg_ins_liab_1": "Hollanda'da kişisel sorumluluk sigortası (WA) çok kritiktir. Konut (Inboedel) sigortası ile birlikte 2 kişi için aylık en az 25-30€ ayırmanız tavsiye edilir.",
    "msg_ins_liab_2": "2 kişi için kazaen başkasına verilebilecek zararlar ve evdeki eşyaların (hırsızlık, su, yangın) sigortalanması için ideal standart tutar.",
    "msg_ins_liab_3": "Yüksek değerli teknolojik eşyalar (All-Risk Inboedel), hukuki danışmanlık (Rechtsbijstand) veya ekstra seyahat sigortasının dahil olduğu premium portföy.",
    "msg_groceries_1": "Aylık 450€ altı: Sadece Lidl/Aldi'den kısıtlı beslenmeyi gerektirir. Temizlik ürünleri, şampuan veya atıştırmalıklara bütçe kalmaz.",
    "msg_groceries_2": "Albert Heijn, Jumbo gibi marketlerden kaliteli ve kısıtlamasız beslenme. Nibud'un 2026 yılı 2 kişilik gerçekçi market tavsiyesi (550-700€) ile tam uyumludur.",
    "msg_groceries_3": "Ekoplaza, Odin gibi organik marketlerden bol taze et/balık alımı, pahalı şaraplar ve premium kişisel bakım/temizlik ürünleri tüketimi için uygundur.",
    "msg_groceries_4": "Fiyat etiketine hiç bakmadan tamamen ithal, özel diyet ve gurme gıdaların alındığı, lüks ve hiçbir bütçe kaygısı güdülmeyen market alışverişi seviyesidir.",
    "msg_dining_1": "Ayda en fazla 1-2 mütevazı akşam yemeği veya birkaç kahve molası yapılabilir. Dışarıdan yemek siparişi pek mümkün değildir.",
    "msg_dining_2": "Haftada 1-2 kez restoran, dışarıdan sipariş (Thuisbezorgd) ve hafta sonları teraslarda kahve / atıştırmalık için dengeli bir sosyalleşme bütçesidir.",
    "msg_dining_3": "Haftada 3+ gün dışarıdan yeme-içme. Yaşam kalitesini artırır ancak uzun vadede tasarruf oranınızı (Mortgage birikimi) hızla eritebilir.",
    "msg_dining_4": "Çok sık üst segment (fine-dining) restoranlara gidildiği ve evde neredeyse hiç yemek pişirilmediği yüksek harcama profilidir.",
    "msg_transport_1": "Her yere Swapfiets (~20€/ay) vb. bisikletle ulaşım sağlanır. Ayda sadece 1-2 kez yağmurlu günlerde kısa mesafe otobüs/tramvay kullanılır.",
    "msg_transport_2": "Utrecht içi otobüs aboneliği ve hafta sonları NS Dal Voordeel (%40 indirim) kartıyla diğer şehirlere (Amsterdam, Rotterdam) gezmek için ideal havuz.",
    "msg_transport_3": "Biriniz haftanın 3-4 günü başka bir şehre (örn: Amsterdam) kendi cebinizden trenle gidiyor demektir. Ya da çok mütevazı (ikinci el) bir arabanın aylık masrafıdır.",
    "msg_transport_4": "Hollanda'da araç sahibi olmak (Wegenbelasting, sigorta, benzin) pahalıdır. Bu bütçe aktif kullanılan bir arabanın aylık sabit ve yakıt giderlerine eşdeğerdir.",
    "msg_entertainment_1": "Yalnızca Netflix, Spotify, iCloud gibi dijital platformları kapsar. Spor salonuna veya ücretli hobiler için bütçe kalmaz.",
    "msg_entertainment_2": "2 kişi Basic-Fit Premium (~32,50€ ile 2 kişi girilebilir) ile sporu halleder. Kalan tutarla dijital platformlar, kuaför ve kişisel bakım rahatça karşılanır.",
    "msg_entertainment_3": "Standart spor salonu yerine CrossFit, Pilates stüdyosu, bouldering, dil kursları veya tenis kulübü gibi özel aktivitelere bütçe ayıran profil.",
    "msg_entertainment_4": "Kişisel antrenör (Personal Trainer), düzenli masaj, pahalı güzellik merkezleri veya yüksek maliyetli hobiler (örn: Golf, yelkencilik) için ayrılmış lüks bütçedir.",
    "msg_pension_info1": "AOW açığı (expat gap) için ekstra fon ayırmıyorsunuz.",
    "msg_pension_safe1": "AOW açığını kapatıyor ve vergi iadesi alıyorsunuz.",
    "msg_pension_danger1": "İşvereniniz yok, en az 200-300€ ayırmalısınız!",
    "msg_pension_safe2": "İşveren açığını kapatıp vergi avantajından faydalanıyorsunuz.",
    "msg_pension_warn1": "Enflasyona karşı korumasız.",
    "msg_pension_safe3": "Bileşik getiri ile uzun vadeli yatırım."
  },
    en: {
    "page_title": "Budget simulation for a 2-person household in the Randstad",
    "header_badge": "Budget simulation for a 2-person household in the Randstad",
    "main_title": "Netherlands Budget Calculator",
    "subtitle": "Calculate your income-expense balance for living as a two-person family in the Netherlands.",
    
    "btn_export": "Download Scenario",
    "btn_import": "Load Scenario",
    "btn_reset": "Reset",
    "btn_csv": "CSV",
    "btn_pdf": "PDF",
    
    "section_income": "Incomes",
    "person_1": "Person 1",
    "person_2": "Person 2",
    "gross_salary": "Annual Gross Salary",
    "ruling_30": "30% Ruling",
    "net_salary_monthly": "Net Salary (Monthly):",
    
    "section_expenses": "Expenses",
    "essential_expenses": "Essential Expenses",
    "flexible_expenses": "Flexible Expenses",
    "collapse_all": "Collapse All",
    "expand_all": "Expand All",
    
    "financial_summary": "Financial Summary",
    "expense_distribution": "Expense Distribution",
    
    "total_income": "Total Monthly Income",
    "total_expense": "Total Monthly Expense",
    "net_household_income": "Net Household Income",
    "rent_share": "Rent share: %{share}",
    
    "savings_goal_title": "Monthly Savings Goal",
    "net_savings": "Monthly Net Savings",
    "savings_rate": "Savings Rate: %{rate}",
    "savings_exceeded": "✅ Exceeded goal by {diff}",
    "savings_met": "✅ Goal exactly met",
    "savings_missing": "❌ {diff} short of goal",
    
    "mortgage_sim_title": "Mortgage Simulator",
    "mortgage_sim_desc": "Enter a house price to test its affordability.",
    
    "emergency_fund_title": "Emergency Fund",
    "emergency_fund_desc": "Should be kept in a checking account for crises.",
    "emergency_fund_sub": "(100% Essential, 66% Flexible)",
    
    "retirement_pension_title": "Estimated Pension",
    
    "mortgage_calculating": "Calculating...",
    "mortgage_success": "✅ <strong>Great!</strong> Your <strong>{rent}</strong> budget is enough to afford a <strong>{house}</strong> house. (Monthly required: <strong>{req}</strong>)",
    "mortgage_fail": "❌ <strong>Insufficient Budget:</strong> A <strong>{house}</strong> house requires roughly <strong>{req}</strong> per month. Budget deficit: <strong>{missing}</strong>",
    
    "pension_person_1_has_emp": "Person 1: Private Pension (AOW Gap)",
    "pension_person_1_no_emp": "CRITICAL: Person 1 Private (No Employer!)",
    "pension_person_2_has_emp": "Person 2: Private Pension (AOW Gap)",
    "pension_person_2_no_emp": "CRITICAL: Person 2 Private (No Employer!)",
    "has_employer_pension": "Has Employer Pension (Pillar 2)",
    "pension_sub_text": "Person 1: <strong>{min1}{max1}</strong><br>Person 2: <strong>{min2}{max2}</strong>",
    "pension_calculating": "Calculating...",
    "item_pension1_invest": "Person 1: Free Investment (Stock/ETF)",
    "item_pension2_invest": "Person 2: Free Investment (Stock/ETF)",
    
    "scenario_loaded": "Scenario loaded successfully! ✅",
    
    "group_housing": "1. Housing Costs",
    "group_health": "2. Insurances",
    "group_living": "3. Groceries & Social",
    "group_mobility": "4. Transport & Personal",
    "group_investment": "5. Pension & Savings",
    
    "item_rent": "Rent / Mortgage Payment",
    "item_utilities": "Electricity, Water, Gas (GWE)",
    "item_internet": "Home Internet & Mobile",
    "item_municipal": "Municipal & Water Taxes",
    
    "item_health_ins": "Health Insurance (2 People)",
    "item_liability": "Liability & Home (WA+Inboedel)",
    
    "item_groceries": "Groceries",
    "item_dining": "Dining & Cafes",
    "item_entertainment": "Sports, Subs & Hobbies",
    
    "item_public_transport": "Public Transport",
    "item_car": "Car Costs (Fuel, Tax, Ins.)",
    
    "item_pension1": "Person 1: Private Pension (3. Pillar)",
    "item_pension2": "Person 2: Private Pension (3. Pillar)",
    "item_savings": "Liquid Savings / Stocks (Optional)",
    
    "tag_social_limit": "Social Housing Limit",
    "tag_high_comp": "High Competition",
    "tag_market_avg": "Market Average",
    "tag_luxury": "Luxury / New Build",
    
    "tag_a_plus": "A++ Energy Label",
    "tag_balanced": "Balanced Average",
    "tag_old_building": "Old Building",
    
    "tag_missing_calc": "Missing Calculation",
    "tag_tenant_tax": "Tenant Tax",
    "tag_owner_tax": "Homeowner Level",
    
    "tag_limited_pack": "Limited Package",
    "tag_fiber_unlimited": "Fiber & Unlimited",
    "tag_premium_pack": "Premium Packages",
    
    "tag_max_risk": "Maximum Risk",
    "tag_standard_safe": "Standard Safe",
    "tag_extra_packs": "Extra Packages",
    
    "tag_ultra_premium": "Ultra Premium",
    "tag_risky": "Risky / Insufficient",
    "tag_full_protect": "Full Protection",
    "tag_comprehensive": "Comprehensive",
    
    "tag_strict_save": "Strict Savings",
    "tag_balanced_consume": "Balanced Consumption",
    "tag_gourmet": "Gourmet & Organic",
    "tag_unlimited_budget": "Unlimited Budget",
    
    "tag_minimal_social": "Minimal Socializing",
    "tag_weekly_fun": "Weekly Going Out",
    "tag_frequent_social": "Frequent Social",
    "tag_fine_dining": "Fine-Dining",
    
    "tag_dutch_bike": "Bicycle Only",
    "tag_regional_travel": "Regional Travel",
    "tag_frequent_intercity": "Intercity Travel",
    "tag_active_car": "Active Car Use",
    
    "tag_digital_only": "Digital Subs Only",
    "tag_gym_fun": "Sports & Fun",
    "tag_boutique_gym": "Boutique Sports",
    "tag_private_care": "Private Care",
    
    "tag_employer_first": "Employer First",
    "tag_full_guarantee": "Full Guarantee",
    "tag_critical_no_emp": "CRITICAL: No Emp.",
    "tag_self_pension": "Self-Funded Pension",
    
    "tag_zero_liquid": "Zero Liquid Inv.",
    "tag_steady_growth": "Steady Growth",
    
    "msg_housing_1": "This is the huurtoeslag limit. It's almost impossible to find private sector housing at this price in the Randstad.",
    "msg_housing_2": "Starting point for private sector. Usually small studios or room rentals.",
    "msg_housing_3": "Expected standard budget for 1-2 bedroom apartments, 15-20 mins from the center.",
    "msg_housing_4": "Large m2, A energy label or very modern apartments in the center.",
    
    "msg_util_1": "Possible if you live in a modern, highly insulated home.",
    "msg_util_2": "General energy expense for a standard couple in the Netherlands.",
    "msg_util_3": "Bills will spike in winter in poorly insulated houses with older heating systems.",
    
    "msg_internet_1": "Cheap mobile data and slow home internet (e.g. VDSL only).",
    "msg_internet_2": "Standard Speed (100-300 Mbps) and sufficient 4G/5G plans for two.",
    "msg_internet_3": "Gigabit fiber internet and premium unlimited mobile plans.",
    
    "msg_tax_1": "Don't forget taxes (Waste, Water purification). Annual amounts should be divided monthly.",
    "msg_tax_2": "Standard tax you pay if you are only a tenant.",
    "msg_tax_3": "If you are a homeowner, you will pay extra OZB (Property) tax.",
    
    "msg_ins_health_1": "Lowest premium, but you pay out of pocket for anything except emergencies.",
    "msg_ins_health_2": "Provides average coverage with standard Eigen Risico.",
    "msg_ins_health_3": "Broad policies covering Dental, Physiotherapy, and extra treatments.",
    "msg_ins_health_4": "All-inclusive packages where Eigen risico is close to zero.",
    
    "msg_ins_liab_1": "Not having liability insurance (Aansprakelijkheidsverzekering) is a huge financial risk in the NL.",
    "msg_ins_liab_2": "Ideal budget for liability and basic home contents (Inboedel) insurance.",
    "msg_ins_liab_3": "Covers legal aid (Rechtsbijstand) and extended home packages.",
    
    "msg_groceries_1": "Requires strict tracking, mostly discount markets (Aldi/Lidl) and less meat.",
    "msg_groceries_2": "Mix of Albert Heijn / Jumbo, standard quality diet.",
    "msg_groceries_3": "Organic products, quality wine/cheese, and plenty of fresh meat/fish.",
    "msg_groceries_4": "Premium daily consumption without looking at market prices.",
    
    "msg_dining_1": "Maybe an affordable outing once a month or just take-away.",
    "msg_dining_2": "Coffee/dessert out 1-2 times a week, normal restaurant 2-3 times a month.",
    "msg_dining_3": "Regularly going to restaurants and bars. Weekend activities.",
    "msg_dining_4": "Frequent high-end restaurants and high social expenses.",
    
    "msg_transport_1": "The most profitable method if you only commute by bicycle.",
    "msg_transport_2": "For those going to the office 1-2 days a week using an NS discount card.",
    "msg_transport_3": "Regular Intercity users or frequent car-sharing app users.",
    "msg_transport_4": "If you own a private car (gas, road tax, insurance), it will cost at least this much.",
    
    "msg_entertainment_1": "Only Netflix/Spotify. Sports are done at home or running outside.",
    "msg_entertainment_2": "Basic gym (e.g. Basic-Fit) and a few digital subscriptions.",
    "msg_entertainment_3": "Specific gyms like Rocycle, Bouldering + museum cards.",
    "msg_entertainment_4": "Personal trainer, tennis club, or expensive hobbies.",
    
    "msg_pension_1": "If your Pillar 2 (Employer) fund is very strong, extra investment may not be needed.",
    "msg_pension_2": "Even with employer contribution, it's very safe to fill your gap yourself (Pillar 3) due to salary caps.",
    "msg_pension_3": "If your employer does NOT contribute to a pension fund, your future is at risk. Budgeting here is tax-deductible.",
    "msg_pension_4": "Approximate minimum amount needed to cover your entire AOW gap with private pension.",
    
    "msg_savings_1": "Not investing long-term after filling the emergency fund is an inflation risk.",
    "msg_savings_2": "Regular ETF / Stock investing (Box 3) is the foundation of wealth building in the Netherlands.",
    "msg_housing_1": "Below €1.228 falls under 'Middenhuur' by 2026 laws. Waiting lists are long. If buying, this is a very low mortgage payment.",
    "msg_housing_2": "€1.600 - €1.900 is possible in satellite towns like Zeist or outside Utrecht center. You must act fast.",
    "msg_housing_3": "€2.000 - €2.400 is the typical free-market rent for a 2+1 apartment in Utrecht and equals an average mortgage (e.g. €400k-500k).",
    "msg_housing_4": "Above €2.400: You can rent spacious luxury/new-build apartments in Utrecht center or pay a high-limit mortgage (>€500k).",
    "msg_util_1": "Under €140 is only possible in modern, highly insulated new builds with underfloor heating. In old houses, it easily exceeds €250.",
    "msg_util_2": "Around €200 safely covers the average annual gas/electricity advance (voorschot) including winter usage for a couple.",
    "msg_util_3": "High bill estimate: If you live in an uninsulated old house with high ceilings, winter heating (gas) can reach these levels.",
    "msg_tax_1": "In the Utrecht (BghU) region, 2026 waste and water taxes for tenants (3 units) total ~€730 annually (~€60/month).",
    "msg_tax_2": "Between €60-€70 easily covers a tenant's BghU water and waste taxes.",
    "msg_tax_3": "Budgeting €95+ is smart; because when you buy a house (Mortgage), OZB (Property) and Sewerage taxes will be added on top.",
    "msg_internet_1": "Budget-friendly low-speed internet and 2 limited-GB mobile plans. Speed may fall short for heavy remote work or downloads.",
    "msg_internet_2": "Covers 1000Mbps fiber home internet (Odido/KPN) and unlimited 5G mobile data/calls for 2 people.",
    "msg_internet_3": "Covers premium packages including extra TV channels (ESPN, Ziggo Sport), top speeds, and a landline.",
    "msg_ins_health_1": "Per person ~€135-€140: You raised the 'Eigen Risico' from €385 to €885. If you visit a hospital, you pay the first €885!",
    "msg_ins_health_2": "Per person €157-€165: The 2026 standard premium average. GP is free, but dental and physio are not covered.",
    "msg_ins_health_3": "Per person €180-€210: A comfortable policy adding €250-500 annual dental, physio, and abroad coverage.",
    "msg_ins_health_4": "Per person €210+: You are buying the most extensive coverage like orthodontics, alternative medicine, or luxury maternity packages.",
    "msg_ins_liab_1": "Personal liability (WA) is critical in NL. Together with home contents (Inboedel), at least €25-30/month is recommended.",
    "msg_ins_liab_2": "Ideal standard amount for 2 people covering accidental damage to others and insuring home contents (theft, water, fire).",
    "msg_ins_liab_3": "Premium portfolio including high-value electronics (All-Risk Inboedel), legal aid (Rechtsbijstand), or extra travel insurance.",
    "msg_groceries_1": "Under €450/month: Requires strict Lidl/Aldi diets. No budget left for cleaning products, shampoo, or snacks.",
    "msg_groceries_2": "Quality, unrestricted diet from Albert Heijn/Jumbo. Fully aligns with Nibud's 2026 realistic advice (€550-€700) for 2 people.",
    "msg_groceries_3": "Suitable for plenty of fresh meat/fish from organic markets (Ekoplaza, Odin), expensive wines, and premium care products.",
    "msg_groceries_4": "Luxury grocery shopping where prices are ignored, completely imported, special diet, and gourmet foods are bought.",
    "msg_dining_1": "At most 1-2 modest dinners a month or some coffee breaks. Take-away is barely possible.",
    "msg_dining_2": "A balanced social budget for dining out/take-away 1-2 times a week and weekend terrace coffees.",
    "msg_dining_3": "Eating out 3+ days a week. Increases quality of life but can rapidly deplete your savings rate (Mortgage deposit) long-term.",
    "msg_dining_4": "High-spending profile with frequent fine-dining and almost zero home cooking.",
    "msg_transport_1": "Getting everywhere by bike (Swapfiets ~€20/mo). Short bus/tram trips only 1-2 times a month on rainy days.",
    "msg_transport_2": "Ideal pool for Utrecht city bus subs and weekend trips to other cities (Amsterdam/Rotterdam) with NS Dal Voordeel.",
    "msg_transport_3": "One of you travels to another city (e.g. Amsterdam) 3-4 days a week by train out-of-pocket. Or the cost of a very modest second-hand car.",
    "msg_transport_4": "Owning a car in NL is expensive. This equals the monthly fixed and fuel costs of an actively used car.",
    "msg_entertainment_1": "Only covers digital platforms (Netflix, Spotify, iCloud). No budget for gyms or paid hobbies.",
    "msg_entertainment_2": "Gym for two via Basic-Fit Premium (~€32.50). The rest covers digital subs, haircuts, and personal care.",
    "msg_entertainment_3": "Profile budgeting for special activities like CrossFit, Pilates, bouldering, language courses, or a tennis club.",
    "msg_entertainment_4": "Luxury budget reserved for Personal Trainers, regular massages, expensive beauty centers, or costly hobbies (e.g. Golf, sailing).",
    "msg_pension_info1": "You are not setting aside extra funds for the AOW (expat) gap.",
    "msg_pension_safe1": "You are closing the AOW gap and getting a tax refund.",
    "msg_pension_danger1": "No employer pension! You must save at least €200-300!",
    "msg_pension_safe2": "You are closing the employer gap and enjoying tax benefits.",
    "msg_pension_warn1": "Unprotected against inflation.",
    "msg_pension_safe3": "Long-term investing with compound returns."
  },
    nl: {
    "page_title": "Budget simulatie voor een 2-persoons huishouden in de Randstad",
    "header_badge": "Budget simulatie voor een 2-persoons huishouden in de Randstad",
    "main_title": "Nederlandse Budget Calculator",
    "subtitle": "Bereken uw inkomsten-uitgaven balans voor het leven als een tweepersoonsgezin in Nederland.",
    
    "btn_export": "Scenario Downloaden",
    "btn_import": "Scenario Laden",
    "btn_reset": "Resetten",
    "btn_csv": "CSV",
    "btn_pdf": "PDF",
    
    "section_income": "Inkomsten",
    "person_1": "Persoon 1",
    "person_2": "Persoon 2",
    "gross_salary": "Jaarlijks Brutosalaris",
    "ruling_30": "30% Regeling",
    "net_salary_monthly": "Nettosalaris (Maandelijks):",
    
    "section_expenses": "Uitgaven",
    "essential_expenses": "Vaste Lasten",
    "flexible_expenses": "Variabele Lasten",
    "collapse_all": "Alles Inklappen",
    "expand_all": "Alles Uitklappen",
    
    "financial_summary": "Financieel Overzicht",
    "expense_distribution": "Uitgavenverdeling",
    
    "total_income": "Totaal Maandelijks Inkomen",
    "total_expense": "Totale Maandelijkse Uitgaven",
    "net_household_income": "Netto Huishoudinkomen",
    "rent_share": "Huur aandeel: %{share}",
    
    "savings_goal_title": "Maandelijks Spaardoel",
    "net_savings": "Netto Spaargeld",
    "savings_rate": "Spaarquote: %{rate}",
    "savings_exceeded": "✅ Doel met {diff} overschreden",
    "savings_met": "✅ Doel precies behaald",
    "savings_missing": "❌ {diff} tekort voor doel",
    
    "mortgage_sim_title": "Hypotheek Simulator",
    "mortgage_sim_desc": "Voer een huizenprijs in om de betaalbaarheid te testen.",
    
    "emergency_fund_title": "Noodfonds",
    "emergency_fund_desc": "Moet op een betaalrekening staan voor crisissen.",
    "emergency_fund_sub": "(100% Vast, 66% Variabel)",
    
    "retirement_pension_title": "Geschat Pensioen",
    
    "mortgage_calculating": "Berekenen...",
    "mortgage_success": "✅ <strong>Geweldig!</strong> Uw budget van <strong>{rent}</strong> is genoeg voor een huis van <strong>{house}</strong>. (Maandelijks vereist: <strong>{req}</strong>)",
    "mortgage_fail": "❌ <strong>Onvoldoende Budget:</strong> Een huis van <strong>{house}</strong> vereist ongeveer <strong>{req}</strong> per maand. Budgettekort: <strong>{missing}</strong>",
    
    "pension_person_1_has_emp": "Persoon 1: Privépensioen (AOW Gat)",
    "pension_person_1_no_emp": "KRITIEK: Persoon 1 Privé (Geen Werkgever!)",
    "pension_person_2_has_emp": "Persoon 2: Privépensioen (AOW Gat)",
    "pension_person_2_no_emp": "KRITIEK: Persoon 2 Privé (Geen Werkgever!)",
    "has_employer_pension": "Heeft Werkgeverspensioen (Pijler 2)",
    "pension_sub_text": "Persoon 1: <strong>{min1}{max1}</strong><br>Persoon 2: <strong>{min2}{max2}</strong>",
    "pension_calculating": "Berekenen...",
    "item_pension1_invest": "Persoon 1: Vrij Beleggen (Aandelen/ETF)",
    "item_pension2_invest": "Persoon 2: Vrij Beleggen (Aandelen/ETF)",
    
    "scenario_loaded": "Scenario succesvol geladen! ✅",
    
    "group_housing": "1. Woonlasten",
    "group_health": "2. Verzekeringen",
    "group_living": "3. Boodschappen & Sociaal",
    "group_mobility": "4. Vervoer & Persoonlijk",
    "group_investment": "5. Pensioen & Sparen",
    
    "item_rent": "Huur / Hypotheeklasten",
    "item_utilities": "Elektriciteit, Water, Gas (GWL)",
    "item_internet": "Thuis Internet & Mobiel",
    "item_municipal": "Gemeentelijke & Waterschapsbelastingen",
    
    "item_health_ins": "Zorgverzekering (2 Personen)",
    "item_liability": "Aansprakelijkheid & Inboedel",
    
    "item_groceries": "Boodschappen",
    "item_dining": "Uit Eten & Horeca",
    "item_entertainment": "Sport, Abonnementen & Hobby's",
    
    "item_public_transport": "Openbaar Vervoer",
    "item_car": "Autokosten (Brandstof, Wegenbelasting, Verz.)",
    
    "item_pension1": "Persoon 1: Privépensioen (3e Pijler)",
    "item_pension2": "Persoon 2: Privépensioen (3e Pijler)",
    "item_savings": "Vrij Sparen / Beleggen (Optioneel)",
    
    "tag_social_limit": "Sociale Huurgrens",
    "tag_high_comp": "Hoge Concurrentie",
    "tag_market_avg": "Marktgemiddelde",
    "tag_luxury": "Luxe / Nieuwbouw",
    
    "tag_a_plus": "A++ Energielabel",
    "tag_balanced": "Gebalanceerd Gemiddelde",
    "tag_old_building": "Oud Gebouw",
    
    "tag_missing_calc": "Ontbrekende Berekening",
    "tag_tenant_tax": "Huurdersbelasting",
    "tag_owner_tax": "Huiseigenaren Niveau",
    
    "tag_limited_pack": "Beperkt Pakket",
    "tag_fiber_unlimited": "Glasvezel & Onbeperkt",
    "tag_premium_pack": "Premium Pakketten",
    
    "tag_max_risk": "Maximaal Risico",
    "tag_standard_safe": "Standaard Veilig",
    "tag_extra_packs": "Extra Pakketten",
    
    "tag_ultra_premium": "Ultra Premium",
    "tag_risky": "Risicovol / Onvoldoende",
    "tag_full_protect": "Volledige Dekking",
    "tag_comprehensive": "Uitgebreid",
    
    "tag_strict_save": "Strikt Sparen",
    "tag_balanced_consume": "Gebalanceerde Consumptie",
    "tag_gourmet": "Gourmet & Biologisch",
    "tag_unlimited_budget": "Onbeperkt Budget",
    
    "tag_minimal_social": "Minimaal Sociaal",
    "tag_weekly_fun": "Wekelijks Uitgaan",
    "tag_frequent_social": "Vaak Sociaal",
    "tag_fine_dining": "Fine-Dining",
    
    "tag_dutch_bike": "Alleen Fiets",
    "tag_regional_travel": "Regionaal Reizen",
    "tag_frequent_intercity": "Intercity Reizen",
    "tag_active_car": "Actief Autogebruik",
    
    "tag_digital_only": "Alleen Digitale Abo's",
    "tag_gym_fun": "Sport & Plezier",
    "tag_boutique_gym": "Boutique Sport",
    "tag_private_care": "Persoonlijke Verzorging",
    
    "tag_employer_first": "Werkgever Eerst",
    "tag_full_guarantee": "Volledige Garantie",
    "tag_critical_no_emp": "KRITIEK: Geen Werkgever",
    "tag_self_pension": "Zelf Gefinancierd Pensioen",
    
    "tag_zero_liquid": "Nul Liquide Belegging",
    "tag_steady_growth": "Gestage Groei",
    
    "msg_housing_1": "Dit is de huurtoeslaggrens. Het is vrijwel onmogelijk om voor deze prijs een woning in de vrije sector te vinden in de Randstad.",
    "msg_housing_2": "Startpunt voor de vrije sector. Meestal kleine studio's of kamerverhuur.",
    "msg_housing_3": "Verwacht standaardbudget voor 2-3 kamer appartementen, 15-20 min van het centrum.",
    "msg_housing_4": "Ruime m2, A-energielabel of zeer moderne appartementen in het centrum.",
    
    "msg_util_1": "Alleen mogelijk in moderne, zeer goed geïsoleerde nieuwbouw met vloerverwarming. In oude huizen loopt de rekening in de winter snel op boven de €250.",
    "msg_util_2": "Rond de €200 dekt veilig het gemiddelde jaarlijkse gas/elektra voorschot, inclusief winterverbruik voor een stel.",
    "msg_util_3": "Hoge rekening schatting: Als u in een ongeïsoleerd oud huis woont met hoge plafonds, kunnen de winterverwarmingskosten (gas) deze niveaus bereiken.",
    
    "msg_tax_1": "In de regio Utrecht (BghU) bedragen de afvalstoffen- en waterschapsbelastingen voor huurders (3 eenheden) in 2026 in totaal ~€730 per jaar (~€60/maand).",
    "msg_tax_2": "Tussen de €60-€70 dekt gemakkelijk de BghU water- en afvalstoffenbelasting voor een huurder.",
    "msg_tax_3": "Begroten op €95+ is slim; want als u een huis koopt (Hypotheek), komen daar nog de OZB en Rioolheffing bovenop.",
    
    "msg_internet_1": "Budgetvriendelijk langzaam internet en 2 mobiele abonnementen met beperkte GB's. Snelheid kan tekortschieten voor zwaar thuiswerken of grote downloads.",
    "msg_internet_2": "Dekt 1000Mbps glasvezel thuisinternet (Odido/KPN) en onbeperkte 5G mobiele data/bellen voor 2 personen.",
    "msg_internet_3": "Dekt premium pakketten inclusief extra tv-zenders (ESPN, Ziggo Sport), topsnelheden en een vaste telefoonlijn.",
    
    "msg_ins_health_1": "Per persoon ~€135-€140: U heeft het 'Eigen Risico' verhoogd van €385 naar €885. Als u naar het ziekenhuis moet, betaalt u de eerste €885 zelf!",
    "msg_ins_health_2": "Per persoon €157-€165: Het gemiddelde standaard zorgpremie voor 2026. Huisarts is gratis, maar tandarts en fysio worden niet gedekt.",
    "msg_ins_health_3": "Per persoon €180-€210: Een comfortabele polis die jaarlijks €250-500 tandarts, fysio en dekking in het buitenland toevoegt.",
    "msg_ins_health_4": "Per persoon €210+: U koopt de meest uitgebreide dekking, zoals orthodontie, alternatieve geneeswijzen of luxe kraampakketten.",
    
    "msg_ins_liab_1": "Een aansprakelijkheidsverzekering (WA) is essentieel in NL. Samen met een inboedelverzekering wordt minimaal €25-30/maand aangeraden.",
    "msg_ins_liab_2": "Ideaal standaardbedrag voor 2 personen ter dekking van per ongeluk toegebrachte schade aan anderen en inboedel (diefstal, water, brand).",
    "msg_ins_liab_3": "Premium portfolio inclusief hoogwaardige elektronica (All-Risk Inboedel), rechtsbijstand of extra reisverzekering.",
    
    "msg_groceries_1": "Onder €450/maand: Vereist een strikt Lidl/Aldi dieet. Geen budget over voor schoonmaakmiddelen, shampoo of snacks.",
    "msg_groceries_2": "Kwalitatief, onbeperkt dieet van Albert Heijn/Jumbo. Komt volledig overeen met het realistische advies van Nibud 2026 (€550-€700) voor 2 personen.",
    "msg_groceries_3": "Geschikt voor veel vers vlees/vis van biologische markten (Ekoplaza, Odin), dure wijnen en premium verzorgingsproducten.",
    "msg_groceries_4": "Luxe boodschappen doen waarbij niet op prijzen wordt gelet, volledig geïmporteerd, speciaal dieet en gourmet voedsel wordt gekocht.",
    
    "msg_dining_1": "Hooguit 1-2 bescheiden diners per maand of wat koffiepauzes. Afhalen is nauwelijks mogelijk.",
    "msg_dining_2": "Een gebalanceerd sociaal budget voor 1-2 keer per week uit eten/afhalen en in het weekend koffie op het terras.",
    "msg_dining_3": "3+ dagen per week uit eten. Verhoogt de levenskwaliteit maar kan uw spaarquote (hypotheekinleg) op de lange termijn snel uitputten.",
    "msg_dining_4": "Hoog uitgavenprofiel met vaak fine-dining en bijna nul thuis koken.",
    
    "msg_transport_1": "Overal naartoe fietsen (Swapfiets ~€20/mnd). Korte bus/tramritjes slechts 1-2 keer per maand op regenachtige dagen.",
    "msg_transport_2": "Ideale pot voor busabonnementen in de stad Utrecht en weekendtripjes naar andere steden (Amsterdam/Rotterdam) met NS Dal Voordeel.",
    "msg_transport_3": "Eén van u reist 3-4 dagen per week uit eigen zak met de trein naar een andere stad (bijv. Amsterdam). Of de kosten van een zeer bescheiden tweedehands auto.",
    "msg_transport_4": "Een auto bezitten in NL is duur. Dit staat gelijk aan de maandelijkse vaste lasten en brandstofkosten van een actief gebruikte auto.",
    
    "msg_entertainment_1": "Dekt alleen digitale platforms (Netflix, Spotify, iCloud). Geen budget voor sportscholen of betaalde hobby's.",
    "msg_entertainment_2": "Sportschool voor twee via Basic-Fit Premium (~€32,50). De rest dekt digitale abo's, kapper en persoonlijke verzorging.",
    "msg_entertainment_3": "Profielbudgettering voor speciale activiteiten zoals CrossFit, Pilates, boulderen, taalcursussen of een tennisclub.",
    "msg_entertainment_4": "Luxe budget gereserveerd voor Personal Trainers, regelmatige massages, dure schoonheidscentra of kostbare hobby's (bijv. Golf, zeilen).",
    
    "msg_pension_info1": "U zet geen extra geld opzij voor het AOW (expat) gat.",
    "msg_pension_safe1": "U dicht het AOW-gat en krijgt belastingteruggave.",
    "msg_pension_danger1": "Geen werkgeverspensioen! U moet minimaal €200-300 sparen!",
    "msg_pension_safe2": "U dicht het werkgeversgat en profiteert van belastingvoordelen.",
    "msg_pension_warn1": "Onbeschermd tegen inflatie.",
    "msg_pension_safe3": "Lange termijn beleggen met samengesteld rendement."
  }

};

function t(key, params = {}) {
  let text = i18n[currentLang][key];
  if (text === undefined || text === null) text = i18n['tr'][key] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return text;
}
