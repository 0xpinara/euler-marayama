# V-FIX - Akıllı Ev Aletleri Tamir Asistanı

## YATIRIMCI DEMO VERSİYONU

Bu, V-FIX projesinin yatırımcı sunumu için hazırlanmış demo versiyonudur. **AI entegrasyonu henüz tamamlanmamıştır** - bu versiyon tüm özellikleri ve kullanıcı arayüzünü göstermek için tasarlanmıştır.

## Proje Hakkında

V-FIX, ev aletlerinde yaşanan teknik sorunları çözmek için Visual-Language Model (VLM) tabanlı akıllı bir asistan sistemidir. Müşterilerin basit tamir problemlerini kendi başlarına çözmelerine yardımcı olarak, gereksiz teknisyen çağrılarını azaltır.

### Ana Özellikler

- ✅ **Çok Modlu Sohbet**: Metin ve görüntü analizi
- ✅ **Adım Adım Rehberlik**: Teknisyen kalitesinde yönlendirme  
- ✅ **Oturum Geçmişi**: Tüm konuşmaları ve fotoğrafları kaydetme
- ✅ **Teknisyen Paneli**: Oturumları inceleme ve not ekleme
- ✅ **Yönetici Paneli**: Detaylı istatistikler ve analitik
- ✅ **Garanti Uyumluluğu**: Garantiyi bozmayan çözümler
- ✅ **Güvenlik Odaklı**: Yüksek riskli durumları tespit etme

## Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcınızda açın:**
   ```
   http://localhost:5173
   ```

## Demo Kullanımı

### Giriş Yapma

Demo versiyonunda 3 farklı rol bulunmaktadır:

1. **Müşteri Girişi** - Son kullanıcı deneyimini görün
   - Cihaz sorunları için AI asistan ile sohbet
   - Geçmiş oturumları görüntüleme
   - Örnek çözülmüş problemleri inceleyin

2. **Teknisyen Girişi** - Teknisyen panelini inceleyin
   - Yönlendirilen oturumları görüntüleme
   - Müşteri konuşmalarını inceleme
   - AI çıktılarına not ve düzeltme ekleme

3. **Yönetici Girişi** - Sistem istatistiklerini görün
   - Toplam oturum sayısı ve başarı oranları
   - Maliyet tasarrufu hesaplamaları
   - En sık karşılaşılan sorunlar
   - Müşteri memnuniyeti metrikleri

### Örnek Senaryolar

Demo 3 hazır senaryo içermektedir:

#### Senaryo 1: Çamaşır Makinesi - E03 Hatası
- **Sorun**: Su boşaltma hatası
- **Çözüm**: Filtre temizleme (Self-resolved)
- **Süre**: 15 dakika
- **Sonuç**: ✅ Müşteri kendi çözdü

#### Senaryo 2: Bulaşık Makinesi - Ses Problemi
- **Sorun**: Pompadan anormal ses
- **Çözüm**: Teknisyen gerekli (Escalated)
- **Süre**: 15 dakika
- **Sonuç**: ⚠️ Yüksek risk - Teknisyene yönlendirildi

#### Senaryo 3: Buzdolabı - Su Birikintisi
- **Sorun**: Sebzelik bölümünde su
- **Çözüm**: Tahliye kanalı temizleme (Self-resolved)
- **Süre**: 13 dakika
- **Sonuç**: ✅ Müşteri kendi çözdü

## Proje Yapısı

```
vfix-demo/
├── src/
│   ├── components/
│   │   ├── Login.jsx              # Giriş sayfası
│   │   ├── CustomerDashboard.jsx  # Müşteri paneli
│   │   ├── TechnicianDashboard.jsx# Teknisyen paneli
│   │   ├── AdminDashboard.jsx     # Yönetici paneli
│   │   ├── ChatInterface.jsx      # Sohbet arayüzü
│   │   ├── SessionHistory.jsx     # Oturum geçmişi
│   │   └── *.css                  # Stil dosyaları
│   ├── data/
│   │   └── mockData.js            # Demo verileri
│   ├── App.jsx                    # Ana uygulama
│   ├── main.jsx                   # Giriş noktası
│   └── index.css                  # Global stiller
├── public/
│   └── demo-images/               # Demo görseller
├── package.json
└── README.md
```

## Teknoloji Stack'i

### Frontend
- **React 18** - UI framework
- **React Router** - Sayfa yönlendirme
- **Lucide React** - İkonlar
- **Vite** - Build tool

### Planlanan Backend (Gelecek Aşamalar)
- **FastAPI** - Python backend framework
- **PostgreSQL** - Veritabanı
- **VLM Model** - LLaVA, BLIP-2 veya Qwen3
- **Docker** - Containerization

## Sonraki Adımlar (WP Timeline)

### Ekim 2025 (Şu an - CEng 491)
- ✅ Proje planlaması ve mimari
- ✅ Demo UI/UX tasarımı
- 🔄 Veri toplama ve bilgi tabanı oluşturma
- 🔄 Backend API geliştirme

### Kasım-Aralık 2025 (CEng 491)
- Backend entegrasyonu
- Kullanıcı kimlik doğrulama
- Veritabanı kurulumu
- Metin tabanlı prototip

### Ocak-Mart 2026 (CEng 492)
- VLM entegrasyonu
- Görüntü analizi özellikleri
- Türkçe dil desteği optimizasyonu
- Model fine-tuning

### Şubat-Nisan 2026 (CEng 492)
- Teknisyen paneli geliştirme
- Garanti uyumluluk mantığı
- Performans değerlendirme
- Test ve iyileştirme

### Nisan-Mayıs 2026
- Final dokümantasyonu
- Canlı demo hazırlığı
- Sunum

## Önemli Notlar

⚠️ **Bu bir DEMO versiyonudur:**
- AI/ML modelleri henüz entegre edilmemiş
- Backend servisleri mevcut değil
- Veriler hardcoded (mockData.js)
- Yeni mesaj gönderme özelliği demo amaçlı sınırlandırılmış
- Görüntüler placeholder'dır

✅ **Tamamlanan Özellikler:**
- Tüm kullanıcı arayüzleri (Customer, Technician, Admin)
- Responsive tasarım
- Örnek senaryolar
- Oturum geçmişi görüntüleme
- İstatistik göstergeleri

## Lisans

CEng 491/492 Graduation Project 2025-2026

## İletişim

Proje Ekibi - CEng 491 Fall 2025

---

**Demo için hazırlandı - Gerçek AI entegrasyonu gelecek aşamalarda tamamlanacaktır.**

