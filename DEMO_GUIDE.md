# V-FIX Yatırımcı Sunumu Rehberi

## Sunum Akışı Önerisi

### 1. Giriş (2 dakika)
**Ana Sayfadan Başlayın**
- V-FIX logosu ve tagline'ı gösterin
- "Households often face technical problems..." ile problemi tanımlayın
- 4 ana özelliği vurgulayın (Çok Modlu AI, Adım Adım Çözüm, Garanti Uyumlu, Maliyet Tasarrufu)

### 2. Müşteri Deneyimi Demo (5 dakika)

**"Müşteri Girişi" butonuna tıklayın**

#### Senaryo 1: Başarılı Self-Resolution
1. "Geçmiş" sekmesine gidin
2. İlk oturumu seçin: **Çamaşır Makinesi - E03 Hatası**
3. Vurgulayacak noktalar:
   - AI'nın müşteriyi nasıl yönlendirdiğini gösterin
   - Fotoğraf isteğini ve analizi işaretleyin
   - Detaylı adım adım talimatları gösterin
   - "Garanti Uyumlu" badge'ini işaretle
   - **15 dakikada** çözüldüğünü belirtin
   - 5 yıldız memnuniyet gösterin

#### Senaryo 2: Güvenlik ve Risk Yönetimi
1. "Geçmiş" sekmesinden ikinci oturumu seçin: **Bulaşık Makinesi - Pompa Problemi**
2. Vurgulayacak noktalar:
   - AI'nın önce basit kontrolleri yaptığını gösterin
   - "Yüksek Risk Tespit Edildi" mesajını işaretleyin
   - Müşteriye NET talimatlar: ❌ Dokunma, ✅ Teknisyen çağır
   - Güvenlik öncelikli yaklaşımı vurgulayın

#### Senaryo 3: Hızlı Çözüm
1. Üçüncü oturumu gösterin: **Buzdolabı - Su Birikintisi**
2. Sadece **13 dakika**da çözüldüğünü vurgulayın

### 3. Teknisyen Paneli Demo (3 dakika)

**Ana sayfaya dönün (Logo'ya tıklayın) ve "Teknisyen Girişi"ni seçin**

1. **Bekleyen Oturumlar** bölümünü gösterin
   - "Yüksek Risk" badge'ini işaretleyin
   - Oturuma tıklayın ve detayları gösterin

2. **Oturum Detayları**
   - AI'nın müşteriyle tüm konuşmasını gösterin
   - Fotoğraf analizini gösterin
   - Teknisyen not ekleme alanını gösterin
   - "Notları Kaydet" özelliğini vurgulayın

3. **Değer Önerisi**
   - Teknisyenler AI'nın kararlarını inceleyebilir
   - Düzeltme ve eğitim için feedback verebilir
   - Sistem sürekli öğrenir ve gelişir

### 4. Yönetici Paneli & İstatistikler (4 dakika)

**Ana sayfaya dönün ve "Yönetici Girişi"ni seçin**

1. **Ana Metrikleri Vurgulayın:**
   - 📊 **127 Toplam Oturum**
   - ✅ **98 AI ile Çözüldü** (%77.2 başarı oranı!)
   - ⚠️ **29 Teknisyen Gerekli** (sadece %22.8)
   - ⏱️ **18 dakika** ortalama çözüm süresi
   - ⭐ **4.6/5** müşteri memnuniyeti
   - 💰 **₺24,500** maliyet tasarrufu (tek ay!)

2. **Grafikler:**
   - En sık sorunları gösterin (Filtre tıkanıklığı lider)
   - Son oturumları gösterin

3. **İçgörüler Bölümü:**
   - Yüksek başarı oranı
   - Hızlı çözüm
   - Öğrenme fırsatları (filtre konusunda eğitim materyali)
   - Güvenlik odaklı yaklaşım

### 5. ROI ve İş Değeri (2 dakika)

**İstatistikler sayfasında kalın ve hesaplamaları gösterin:**

#### Maliyet-Fayda Analizi
```
Geleneksel Model:
- Teknisyen çağrısı: ₺500/ziyaret
- 127 oturum × ₺500 = ₺63,500

V-FIX ile:
- AI çözdü: 98 oturum × ₺0 = ₺0
- Teknisyen: 29 oturum × ₺500 = ₺14,500
- Platform maliyeti: ~₺10,000/ay
---
Toplam Tasarruf: ₺39,000/ay
Yıllık Tasarruf: ~₺468,000
```

#### Ek Faydalar
- ✅ Müşteri memnuniyeti artışı (7/24 hizmet)
- ✅ Marka bağlılığı
- ✅ Teknisyenlerin daha kritik işlere odaklanması
- ✅ Çevre dostu (gereksiz seyahat yok)

### 6. Teknoloji & Roadmap (2 dakika)

**Yatırımcılara teknik altyapıyı anlatın:**

#### Mevcut Demo
- ✅ Full-stack UI/UX tamamlandı
- ✅ 3 gerçekçi senaryo
- ✅ Tüm roller (Customer, Technician, Admin)

#### Sonraki 6 Ay (CEng 491 - Fall 2025)
- Backend API (FastAPI)
- PostgreSQL veritabanı
- Kullanıcı kimlik doğrulama
- Bilgi tabanı oluşturma

#### 6-8 Ay (CEng 492 - Spring 2026)
- **VLM Entegrasyonu** (LLaVA, BLIP-2, Qwen3)
- Türkçe model fine-tuning
- Görüntü analizi özellikleri
- Production deployment

### 7. Sorular & Kapanış

**Olası sorular ve cevaplar:**

**S: AI model maliyeti ne kadar?**
C: Açık kaynak modeller kullanıyoruz (LLaVA, Qwen). Kendi serverımızda çalıştıracağız. Başlangıç için aylık ~₺10K altyapı maliyeti, ölçeklendikçe optimize edilebilir.

**S: Garanti uyumluluğunu nasıl sağlıyorsunuz?**
C: Bilgi tabanımız üretici kılavuzlarından oluşturulacak. AI sadece garanti bozmayan basit işlemleri önerir. Risk tespit ederse doğrudan teknisyene yönlendirir.

**S: Türkçe desteği ne kadar iyi?**
C: GPT-4 ve Qwen3 gibi modeller Türkçe'de çok iyi. Ayrıca kendi domain-specific datasetimizle fine-tune edeceğiz.

**S: Hangi markalar için çalışır?**
C: Tüm markalarda çalışacak şekilde tasarlandı. İlk aşamada Arçelik, Bosch, Beko gibi popüler markalarla başlayacağız.

**S: Müşteri adaptasyonu?**
C: UX çok basit tasarlandı. WhatsApp kadar kolay. Ayrıca 40+ yaş grubu için sesli komut eklenebilir.

## Demo İpuçları

### Gösterim Sırasında
✅ **YAPILACAKLAR:**
- Yavaş ve net konuşun
- Her özelliği vurgulayın
- Sayıları ve metrikleri tekrarlayın
- "Gerçek AI henüz entegre değil ama..." deyin
- İş değerini sürekli vurgulayın

❌ **YAPILMAYACAKLAR:**
- Teknik jargon kullanmayın (VLM, LoRA, etc.)
- "Demo", "Placeholder" kelimelerini fazla kullanmayın
- Yeni mesaj göndermeye çalışmayın (disabled)
- Çok hızlı geçmeyin

### Sunum Akış Özeti
1. **Giriş Sayfası** (30 sn) → Problem statement
2. **Müşteri Paneli** (5 dk) → 3 senaryo göster
3. **Teknisyen Paneli** (3 dk) → Kalite kontrolü
4. **Admin Paneli** (4 dk) → ROI ve metrikler
5. **Kapanış** (2 dk) → Roadmap ve sorular

## Ekran Kayıt İpuçları

Canlı demo yerine video hazırlıyorsanız:
- 1920x1080 çözünürlük kullanın
- Tarayıcı zoom: %100
- Ekran kaydedici: OBS veya Loom
- Her senaryoyu ayrı kaydedin
- Üzerine voice-over ekleyin

## Yedek Plan

**İnternet/Teknik sorun olursa:**
- Ekran görüntüleri hazır bulundurun
- PDF sunum hazırlayın
- Demo video linki yedekleyin

---

**Başarılar! 🚀**

