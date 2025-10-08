// Mock data for demonstration purposes
export const users = {
  customer: { id: 1, name: 'A*** Y***', email: 'a***@example.com', role: 'customer' },
  technician: { id: 2, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'technician' },
  admin: { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
};

// Example sessions showcasing different features
export const exampleSessions = [
  {
    id: 'session-001',
    userId: 1,
    userName: 'A*** Y***',
    appliance: 'Çamaşır Makinesi',
    status: 'resolved',
    createdAt: '2025-10-05T10:30:00',
    resolvedAt: '2025-10-05T10:45:00',
    outcome: 'self-resolved',
    rating: 5,
    messages: [
      {
        id: 1,
        sender: 'assistant',
        text: 'Merhaba! V-FIX akıllı tamir asistanına hoş geldiniz. Size nasıl yardımcı olabilirim?',
        timestamp: '2025-10-05T10:30:00'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Çamaşır makinem çalışmıyor, E03 hatası veriyor.',
        timestamp: '2025-10-05T10:30:30'
      },
      {
        id: 3,
        sender: 'assistant',
        text: 'E03 hatası genellikle su boşaltma problemi ile ilgilidir. Size yardımcı olabilirim. Öncelikle, lütfen makineyi kapatıp fişini çekin ve aşağıdaki adımları takip edin:\n\n1. Makinenin önünde bir havlu hazırlayın\n2. Alt filtreyi kontrol edeceğiz\n\nAlt filtre kapağının fotoğrafını çekip gönderir misiniz?',
        timestamp: '2025-10-05T10:31:00',
        requestedPhoto: 'filter'
      },
      {
        id: 4,
        sender: 'user',
        image: '/demo-images/washing-machine-filter.jpg',
        timestamp: '2025-10-05T10:33:00'
      },
      {
        id: 5,
        sender: 'assistant',
        text: '✓ Fotoğraf analiz edildi: Filtre kapağı tespit edildi.\n\nŞimdi şu adımları izleyin:\n\n**ADIM 1:** Filtre kapağını saat yönünün tersine çevirerek açın\n**ADIM 2:** İçinden su gelecektir, hazırlıklı olun\n**ADIM 3:** Filtreyi çıkarın ve temizleyin\n\nFiltre kapağını açtınız mı?',
        timestamp: '2025-10-05T10:33:30',
        detectedComponents: ['Filtre Kapağı', 'Alt Panel']
      },
      {
        id: 6,
        sender: 'user',
        text: 'Evet açtım, içinden saç ve küçük cisimler çıktı.',
        timestamp: '2025-10-05T10:38:00'
      },
      {
        id: 7,
        sender: 'assistant',
        text: 'Mükemmel! Bu tam da beklediğimiz durum. Şimdi:\n\n**ADIM 4:** Filtreyi akan su altında iyice temizleyin\n**ADIM 5:** Filtre yuvasını da kontrol edin, varsa tıkanma olup olmadığına bakın\n**ADIM 6:** Filtreyi tekrar takın ve sıkıca kapatın\n**ADIM 7:** Makineyi prize takın ve kısa bir program çalıştırın\n\n⚠️ DİKKAT: Filtreyi takarken sızdırmazlık contasının düzgün oturduğundan emin olun.\n\n✅ Bu işlem garanti kapsamı dışına çıkmaz.',
        timestamp: '2025-10-05T10:38:30',
        warrantyCompliant: true
      },
      {
        id: 8,
        sender: 'user',
        text: 'Tamamladım, makine şu an çalışıyor! Hata kayboldu. Teşekkür ederim!',
        timestamp: '2025-10-05T10:45:00'
      },
      {
        id: 9,
        sender: 'assistant',
        text: '🎉 Harika! Problemi başarıyla çözdünüz. Teknisyen çağırmaya gerek kalmadı.\n\n📝 ÖNERİ: Filtreyi ayda bir temizlemenizi öneririm.\n\nBaşka bir sorun olursa her zaman yardımcı olmak için buradayım!',
        timestamp: '2025-10-05T10:45:30'
      }
    ],
    metrics: {
      timeToResolution: 15,
      technicianDispatchAvoided: true,
      photosAnalyzed: 1,
      stepsProvided: 7
    }
  },
  {
    id: 'session-002',
    userId: 1,
    userName: 'M*** K***',
    appliance: 'Bulaşık Makinesi',
    status: 'escalated',
    createdAt: '2025-10-06T14:20:00',
    escalatedAt: '2025-10-06T14:35:00',
    outcome: 'technician-required',
    messages: [
      {
        id: 1,
        sender: 'assistant',
        text: 'Merhaba! V-FIX\'e hoş geldiniz. Hangi cihazınızla ilgili yardım istiyorsunuz?',
        timestamp: '2025-10-06T14:20:00'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Bulaşık makinem çalışırken çok ses yapıyor ve sallantılı.',
        timestamp: '2025-10-06T14:20:45'
      },
      {
        id: 3,
        sender: 'assistant',
        text: 'Anladım. Bulaşık makinenizden gelen anormal ses ve titreşim birkaç nedenden kaynaklanabilir. Önce basit kontrolleri yapalım:\n\n1. Makinenin ayakları düz mü?\n2. İçeride bulaşıklar düzgün yerleştirilmiş mi?\n\nBir de makinenizin kontrol panelinde herhangi bir hata kodu görüyor musunuz?',
        timestamp: '2025-10-06T14:21:00'
      },
      {
        id: 4,
        sender: 'user',
        text: 'Ayaklar düz, bulaşıklar da düzgün. Hata kodu yok ama ses pompadan geliyor gibi.',
        timestamp: '2025-10-06T14:22:00'
      },
      {
        id: 5,
        sender: 'assistant',
        text: 'Pompa bölgesinden gelen ses önemli olabilir. Lütfen makinenizin alt bölümünün (filtrenin olduğu kısmın) fotoğrafını çeker misiniz? Filtreyi çıkarıp pompa bölgesini görmemiz gerekebilir.',
        timestamp: '2025-10-06T14:22:30',
        requestedPhoto: 'pump-area'
      },
      {
        id: 6,
        sender: 'user',
        image: '/demo-images/dishwasher-pump.jpg',
        timestamp: '2025-10-06T14:25:00'
      },
      {
        id: 7,
        sender: 'assistant',
        text: '✓ Fotoğraf analiz edildi: Pompa bölgesi, filtre\n\nFiltreyi çıkarıp pompa pervane kısmında herhangi bir yabancı cisim (cam kırığı, kürdanlar, vs.) var mı kontrol edebilir misiniz?\n\n⚠️ DİKKAT: Cam kırığı olabilir, dikkatli olun!',
        timestamp: '2025-10-06T14:25:30',
        detectedComponents: ['Pompa', 'Filtre', 'Alt Bölme'],
        safetyWarning: true
      },
      {
        id: 8,
        sender: 'user',
        text: 'Baktım, küçük cam parçaları var, onları temizledim ama hala ses var.',
        timestamp: '2025-10-06T14:30:00'
      },
      {
        id: 9,
        sender: 'assistant',
        text: 'Cam parçalarını temizlemeniz iyi oldu. Ancak pompa pervane kanatları zarar görmüş olabilir veya pompa motoru arızalı olabilir.\n\n🔴 **YÜKSEK RİSK TESPİT EDİLDİ**\n\nBu durum için şunları öneriyorum:\n\n1. ❌ Pompa mekanizması ile oynamayın - bu garanti kapsamı dışına çıkar\n2. ❌ Makineyi bu durumda çalıştırmayın - daha fazla hasar verebilir\n3. ✅ Yetkili servis teknisyeni çağırmanız gerekiyor\n\n📞 Sizin için bir servis talebi oluşturdum. Teknisyen 24 saat içinde sizinle iletişime geçecek.\n\n**Tahmini Sorun:** Pompa arızası veya pervane hasarı\n**Garanti Durumu:** Garanti kapsamında (cam kırığı dış etken)',
        timestamp: '2025-10-06T14:30:45',
        highRisk: true,
        technicianRequired: true,
        warrantyStatus: 'covered'
      }
    ],
    metrics: {
      timeToEscalation: 15,
      technicianDispatchRequired: true,
      photosAnalyzed: 1,
      stepsProvided: 3,
      riskLevel: 'high'
    },
    technicianNotes: null
  },
  {
    id: 'session-003',
    userId: 1,
    userName: 'Z*** A***',
    appliance: 'Buzdolabı',
    status: 'resolved',
    createdAt: '2025-10-07T09:15:00',
    resolvedAt: '2025-10-07T09:28:00',
    outcome: 'self-resolved',
    rating: 5,
    messages: [
      {
        id: 1,
        sender: 'assistant',
        text: 'Merhaba! Ben V-FIX, akıllı tamir asistanınız. Size nasıl yardımcı olabilirim?',
        timestamp: '2025-10-07T09:15:00'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Buzdolabımın alt bölümünde su birikintisi var.',
        timestamp: '2025-10-07T09:15:30'
      },
      {
        id: 3,
        sender: 'assistant',
        text: 'Buzdolabında su birikintisi yaygın bir sorundur ve genellikle kolayca çözülebilir. Birkaç soru sormama izin verin:\n\n1. Su birikintisi buzdolabı bölümünün içinde mi yoksa dışında mı?\n2. Buzdolabınızın sebzelik çekmecelerinde mi su var?\n3. Dondurucu bölümünde buzlanma var mı?',
        timestamp: '2025-10-07T09:16:00'
      },
      {
        id: 4,
        sender: 'user',
        text: 'Su sebzelik çekmecelerinin altında toplanmış, dondurucu normal.',
        timestamp: '2025-10-07T09:16:45'
      },
      {
        id: 5,
        sender: 'assistant',
        text: 'Anladım. Bu durum büyük ihtimalle tıkalı tahliye kanalından kaynaklanıyor. Size bu sorunu çözmeniz için adım adım yol göstereceğim.\n\nİlk olarak, buzdolabınızın arka iç duvarının fotoğrafını çeker misiniz? Özellikle alt kısımda küçük bir delik/kanal olmalı.',
        timestamp: '2025-10-07T09:17:00',
        requestedPhoto: 'drain-hole'
      },
      {
        id: 6,
        sender: 'user',
        image: '/demo-images/fridge-drain.jpg',
        timestamp: '2025-10-07T09:19:00'
      },
      {
        id: 7,
        sender: 'assistant',
        text: '✓ Fotoğraf analiz edildi: Tahliye kanalı tespit edildi.\n\nGördüğüm kadarıyla tahliye deliği tıkalı görünüyor. İşte çözüm adımları:\n\n**İHTİYAÇLARINIZ:**\n- Sıcak su (1 bardak)\n- İnce bir pipet veya çubuk (bebek kulak çubuğu olabilir)\n- Temiz bir sünger\n\n**ADIMLAR:**\n\n**ADIM 1:** Sebzelik çekmecelerini çıkarın ve birikmiş suyu temizleyin\n\n**ADIM 2:** Arka duvardaki küçük tahliye deliğini bulun (fotoğrafta gördüğünüz yer)\n\n**ADIM 3:** İnce pipet veya çubukla deliği nazikçe temizleyin\n\n**ADIM 4:** Bir bardak sıcak su delikten dökün - bu tıkanıklığı açar\n\n**ADIM 5:** 24 saat bekleyin ve su birikip birikmediğini kontrol edin\n\n✅ Bu işlem tamamen garanti kapsamındadır.\n⚠️ Sivri veya sert cisimler kullanmayın, plastik zarar görebilir.',
        timestamp: '2025-10-07T09:20:00',
        detectedComponents: ['Tahliye Kanalı', 'Arka Duvar', 'Sebzelik Bölmesi'],
        warrantyCompliant: true
      },
      {
        id: 8,
        sender: 'user',
        text: 'Tamamladım! Sıcak su döküldü, gerçekten tıkanmış gibiydi. Su akıyor şimdi.',
        timestamp: '2025-10-07T09:27:00'
      },
      {
        id: 9,
        sender: 'assistant',
        text: '🎉 Harika! Sorunu başarıyla çözdünüz!\n\n**BAKIM ÖNERİLERİ:**\n- Her 3 ayda bir tahliye kanalını sıcak su ile temizleyin\n- Sebzeleri buzdolabına koymadan önce kuruladığınızdan emin olun\n- Kapakları kapalı tutmaya özen gösterin\n\n24 saat sonra sorun devam ederse lütfen tekrar ulaşın. Başka bir konuda yardımcı olabilirim?',
        timestamp: '2025-10-07T09:28:00'
      }
    ],
    metrics: {
      timeToResolution: 13,
      technicianDispatchAvoided: true,
      photosAnalyzed: 1,
      stepsProvided: 5
    }
  }
];

// Statistics for admin dashboard
export const dashboardStats = {
  totalSessions: 127,
  resolvedByAI: 98,
  escalatedToTechnician: 29,
  averageResolutionTime: 18, // minutes
  customerSatisfaction: 4.6,
  costSavings: 24500, // TL
  topIssues: [
    { issue: 'Filtre tıkanıklığı', count: 34 },
    { issue: 'Hata kodları', count: 28 },
    { issue: 'Su kaçağı', count: 22 },
    { issue: 'Ses problemi', count: 18 },
    { issue: 'Diğer', count: 25 }
  ]
};

// Knowledge base examples
export const knowledgeBase = [
  {
    id: 'kb-001',
    errorCode: 'E03',
    appliance: 'Çamaşır Makinesi',
    description: 'Su boşaltma hatası',
    commonCauses: ['Filtre tıkanıklığı', 'Pompa arızası', 'Hortum bükülmesi'],
    warrantyCompliant: true
  },
  {
    id: 'kb-002',
    errorCode: 'E11',
    appliance: 'Bulaşık Makinesi',
    description: 'Su alma hatası',
    commonCauses: ['Su musluk kapalı', 'Filtre tıkalı', 'Valf arızası'],
    warrantyCompliant: true
  }
];

