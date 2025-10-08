# V-FIX Demo - Hızlı Başlangıç Kılavuzu

## 🚀 5 Dakikada Başlayın

### Adım 1: Projeyi İndirin
```bash
cd /tmp/vfix-demo
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
npm install
```

Bu işlem ~2-3 dakika sürecektir.

### Adım 3: Uygulamayı Başlatın
```bash
npm run dev
```

### Adım 4: Tarayıcınızda Açın
Terminalda görünen linke tıklayın (genellikle `http://localhost:5173`)

## ✅ Kurulum Kontrolü

Eğer her şey doğru çalışıyorsa:
- ✅ Tarayıcıda V-FIX giriş sayfası açılmalı
- ✅ 3 giriş seçeneği görünmeli (Müşteri, Teknisyen, Yönetici)
- ✅ Modern mor gradient arka plan olmalı

## 🎯 İlk Demoyu Çalıştırın

1. **"Müşteri Girişi"** butonuna tıklayın
2. **"Geçmiş"** sekmesine gidin
3. İlk oturumu açın: **"Çamaşır Makinesi"**
4. Tüm konuşmayı okuyun - Bu tam bir çözüm örneğidir!

## 📊 Tüm Özellikleri Test Edin

### Müşteri Paneli
- [x] Sohbet arayüzü
- [x] Oturum geçmişi
- [x] 3 farklı örnek senaryo

### Teknisyen Paneli  
- [x] Bekleyen oturumlar
- [x] Tamamlanan oturumlar
- [x] Detaylı oturum inceleme
- [x] Not ekleme sistemi

### Yönetici Paneli
- [x] 6 ana metrik kartı
- [x] Sorun analiz grafiği
- [x] Son oturumlar listesi
- [x] İçgörüler bölümü

## 🎬 Yatırımcı Sunumu İçin

Detaylı sunum rehberi için `DEMO_GUIDE.md` dosyasını okuyun.

Hızlı sunum akışı:
1. Müşteri Paneli (5 dk) - 3 senaryoyu göster
2. Teknisyen Paneli (3 dk) - Kalite kontrolü
3. Yönetici Paneli (4 dk) - ROI ve metrikler

## ⚠️ Bilinen Sınırlamalar (Demo Versiyonu)

- ❌ Yeni sohbet başlatma çalışmaz (sadece örnek oturumlar)
- ❌ Fotoğraf yükleme devre dışı
- ❌ Gerçek AI/ML entegrasyonu yok
- ❌ Backend servisi yok
- ✅ Tüm UI/UX özellikleri çalışıyor
- ✅ Tüm örnek senaryolar hazır

## 🐛 Sorun Giderme

### Port zaten kullanımda hatası
```bash
# Farklı port kullanın
npm run dev -- --port 3000
```

### Bağımlılık hatası
```bash
# node_modules'u temizleyin ve tekrar yükleyin
rm -rf node_modules package-lock.json
npm install
```

### Sayfa yüklenmiyor
- Tarayıcı önbelleğini temizleyin (Ctrl+Shift+R veya Cmd+Shift+R)
- Farklı tarayıcı deneyin (Chrome önerilir)

## 📱 Mobil Görünüm

Responsive tasarım içerir! Test için:
- Chrome DevTools'u açın (F12)
- Device Toolbar'ı aktifleştirin (Ctrl+Shift+M)
- iPhone veya Android cihaz seçin

## 🎨 Özelleştirme

### Renkleri Değiştirme
`src/components/*.css` dosyalarında gradient ve renkleri düzenleyebilirsiniz.

Ana renk şeması:
- Primary: `#667eea` (Mor)
- Secondary: `#764ba2` (Koyu mor)
- Success: `#48bb78` (Yeşil)
- Warning: `#f59e0b` (Turuncu)
- Danger: `#f56565` (Kırmızı)

### Logo Değiştirme
`src/components/Login.jsx` dosyasında logo bölümünü düzenleyin.

## 📦 Production Build

Canlıya almak için:
```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşacaktır.

Preview için:
```bash
npm run preview
```

## 🆘 Yardım

Sorun yaşarsanız:
1. `README.md` dosyasını okuyun
2. `DEMO_GUIDE.md` dosyasını inceleyin
3. Konsol hatalarını kontrol edin (F12)

## 🎉 Başarılı Kurulum!

Her şey hazır! Artık yatırımcılara muhteşem bir demo sunabilirsiniz.

**İyi sunumlar! 🚀**

