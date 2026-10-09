# Netherlands Budget Calculator (Hollanda Bütçe Simülatörü)

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://quarksofproton.github.io/NetherlandsBudgetCalc/)

Bu proje, Hollanda'da yaşayan veya taşınmayı planlayan çiftler için geliştirilmiş, 2026 Hollanda vergi yasalarına (Box 1 dilimleri, %27 Ruling geçişi, Algemene Heffingskorting vb.) tam uyumlu, tarayıcı tabanlı kapsamlı bir finansal simülasyon ve karar platformudur.

## 🚀 Özellikler (Features)

* **Çift Gelir & Hassas Vergi Motoru:** Kişi 1 ve Kişi 2 için ayrı brüt/net maaş girişleri, 30% (yeni yasayla %27) Ruling desteği. Girilen brüt maaş, yasal formüller kullanılarak net maaşa çevrilir.
* **Akıllı Bütçe Yönetimi:** Giderler "Zaruri (Kırmızı)" ve "Keyfi (Yeşil)" olarak ikiye ayrılır. Konut, sağlık sigortası (Eigen Risico), ulaşım ve eğlence kalemleri interaktif kaydırıcılarla (slider) yönetilir.
* **Uluslararası Çoklu Dil (i18n):** Türkçe (🇹🇷), İngilizce (🇬🇧) ve Hollandaca (🇳🇱) dillerini tam destekler. Çeviriler merkezi bir sözlük dosyasından (`js/lang.js`) yönetilir. Seçilen dil `localStorage` üzerinde saklanır.
* **Mortgage (Ev Satın Alma) Simülatörü:** Hedeflenen ev fiyatı üzerinden %4 faizli anüite hesaplaması yapar ve ayrılan kira bütçesiyle karşılaştırıp aylık açığı/fazlayı söyler.
* **Uzun Vadeli Servet Projeksiyonu:** Borsa/ETF yatırımları (Pillar 3) ve nakit tasarruflar üzerinden enflasyon (%2.5) ve bileşik getiri (%7.5) oranlarıyla 5, 10, 20 ve 50 yıllık nominal servet haritası çıkartır.
* **Kalıcı Senaryo Yönetimi:** Veriler anlık olarak yerel hafızaya (AutoSave) kaydedilir. `Senaryo İndir` ile tüm finansal yapı JSON dosyası olarak kaydedilebilir ve `Senaryo Yükle` ile başka cihazlara aktarılabilir.
* **Raporlama:** Dışa aktarım için temiz formda **PDF** ve veritabanı analizleri için **CSV** çıktı desteği.
* **Responsive Tasarım:** Masaüstünden en küçük mobil telefon ekranlarına kadar kusursuz bir UI/UX.

## 📁 Proje Yapısı

Proje tamamen **Vanilla JS (Saf JavaScript), HTML5 ve CSS3** kullanılarak, hiçbir harici kütüphaneye veya framework'e (React, Vue vb.) ihtiyaç duymadan inşa edilmiştir. Sıfır gecikmeyle istemci tarafında (client-side) çalışır ve veri gizliliğini %100 korur.

```text
NetherlandsBudgetCalc/
├── index.html        # Ana şablon ve UI iskeleti (Netlify uyumlu)
├── css/
│   └── style.css     # Dark mode, responsive medya sorguları ve animasyonlar
├── js/
│   ├── app.js        # DOM manipülasyonu, finans hesaplamaları, state yönetimi ve PDF/CSV export
│   ├── data.js       # Gider kalemleri (slider) mantığı, minimum/maksimum limitleri
│   └── lang.js       # Üç dilli merkezi sözlük (t fonksiyonu ve çeviri JSON yapısı)
└── README.md         # Proje dokümantasyonu (Bu dosya)
```

## 🛠 Geliştirme İçin Notlar

Başka bir bilgisayarda geliştirmeye devam ederken dikkate alınması gerekenler:

1. **Çalıştırma:** Bir sunucu kurmanıza (Node.js vs.) gerek yoktur. Sadece `index.html` dosyasını favori tarayıcınızda açarak anında çalıştırabilirsiniz.
2. **Yayına Alma (Deployment):** Netlify, Vercel veya GitHub Pages'e doğrudan root dizinini yükleyebilirsiniz, statik bir yapıda olduğu için saniyeler içinde yayına girecektir.
3. **Yeni Dil Ekleme:** `js/lang.js` içerisine yeni bir obje (örneğin `de: { ... }`) ekleyip, `index.html` üzerindeki bayraklar alanına o dilin butonunu eklemeniz yeterlidir.
4. **Vergi Oranlarını Güncelleme:** Vergi yasalarında bir değişiklik olduğunda (örneğin 2027 yılı), güncellemeler `js/app.js` dosyasının içindeki `calculateTax` (Gelir vergisi hesaplama) fonksiyonu üzerinden yapılmalıdır.
5. **Gider Kalemleri Ekleme/Çıkarma:** Bütçeye yeni bir gider başlığı eklemek isterseniz HTML ile uğraşmanıza gerek yoktur, `js/data.js` içindeki objeye yeni bir blok eklemeniz sistemi (slider, PDF, CSV dahil) otomatik olarak oluşturmaya yetecektir.

---
*Bu proje, geliştirici ve AI asistanının harika bir "Pair Programming" çalışmasıyla hayata geçirilmiştir.* 🚀
