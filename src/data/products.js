/**
 * TALASWARA Product Data & Store Assets
 * Where Heritage Meets Sustainability — Bogor Eco-Batik Spirulina
 */

export const PRODUCTS = [
  {
    id: 'talas-01',
    name: 'Kemeja Batik Talas Semi-Oversized',
    subtitle: 'Streetwear Modern Series • Pigmen Biru Spirulina',
    category: 'Kemeja',
    price: 289000,
    originalPrice: 349000,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Spirulina Blue',
    secondaryBadge: 'Best Seller 🔥',
    isNew: true,
    isBestSeller: true,
    description: 'Kemeja semi-oversized dengan potongan boxy kontemporer khas streetwear Gen Z. Menggabungkan motif eksklusif Daun Talas Bogor dengan teknik celup rintang pewarna alami mikroalga Spirulina (Phycocyanin). Lembut, adem, dan 100% biodegradable.',
    images: [
      'assets/kemeja-biru.jpg',
      'assets/kemeja-hijau.jpg'
    ],
    colors: [
      { name: 'Biru Signature', hex: '#1E2050', selected: true },
      { name: 'Hijau Natural', hex: '#4A5D23', selected: false }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 8, M: 15, L: 12, XL: 6, XXL: 3 },
    tags: ['Kemeja', 'Streetwear', 'Oversized', 'Pewarna Alami', 'Spirulina'],
    ecoImpact: {
      waterSavedLiters: 48,
      toxicChemicalEliminatedGrams: 320,
      microplastic: '0% (Bebas Poliester)'
    },
    materials: '100% Katun Organik Bersertifikat GOTS, Pewarna Alami Spirulina (Arthrospira platensis), Mordan Alami Tawas & Kapur Sirih.',
    artisanStory: 'Dibuat dengan dedikasi tinggi oleh Ibu Dwika Lestari & komunitas pembatik muda Kampung Batik Cibuluh, Bogor Utara.',
    careInstructions: [
      'Cuci tangan dengan air dingin menggunakan sabun lerak atau deterjen cair lembut.',
      'Hindari memeras terlalu keras untuk menjaga serat katun organik.',
      'Jemur di tempat teduh (angin-anginkan), jangan terpapar sinar matahari langsung.',
      'Setrika suhu sedang dengan pelapis kain katun tipis.'
    ]
  },
  {
    id: 'talas-02',
    name: 'Blouse Loose-Fit Spirulina Bogor',
    subtitle: 'Relaxed Daily Wear • Siluet Drop-Shoulder',
    category: 'Blouse & Dress',
    price: 259000,
    originalPrice: 319000,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Organic Cotton',
    secondaryBadge: 'Trending ✨',
    isNew: true,
    isBestSeller: true,
    description: 'Blouse berpotongan rileks dengan aksen kerah mandarin modern dan detail lipit asimetris motif Daun Talas. Didesain fleksibel untuk kuliah, nongkrong di café, hingga hangout di Bogor Creative Center.',
    images: [
      'assets/blouse-hijau.jpg',
      'assets/blouse-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#4A5D23', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 5, M: 11, L: 8, XL: 4 },
    tags: ['Blouse', 'Dress', 'Loose Fit', 'Wanita', 'Eco-Fashion'],
    ecoImpact: {
      waterSavedLiters: 42,
      toxicChemicalEliminatedGrams: 280,
      microplastic: '0% (Tanpa Sintetis)'
    },
    materials: 'Katun Primissima Organik 100%, Ekstrak Phycocyanin Spirulina, Mordan Tawas Batu.',
    artisanStory: 'Kolaborasi eksklusif talenta pengrajin perempuan Kampung Batik Cibuluh dengan desainer muda lokal Bogor.',
    careInstructions: [
      'Gunakan sabun lerak atau shampoo bayi yang pH-netral.',
      'Jangan gunakan pemutih pakaian berklorin.',
      'Setrika pada bagian dalam (reverse side) untuk menjaga kejernihan warna pigmen alami.'
    ]
  },
  {
    id: 'talas-03',
    name: 'Celana Wide-Leg Motif Talas Modern',
    subtitle: 'High-Waist Streetwear Cut • Karet Pinggang Nyaman',
    category: 'Bawahan (Rok/Celana)',
    price: 299000,
    originalPrice: 369000,
    rating: 4.9,
    reviewsCount: 86,
    badge: 'Handmade Cibuluh',
    secondaryBadge: 'Unisex Fit',
    isNew: false,
    isBestSeller: true,
    description: 'Celana wide-leg bersiluet longgar yang memberikan kenyamanan maksimal sepanjang hari. Dilengkapi detail lipatan ujung celana serta aksen motif Daun Talas artistik di bagian bawah kaki untuk sentuhan gaya modern yang memikat.',
    images: [
      'assets/celana-biru.jpg',
      'assets/celana-hijau.jpg'
    ],
    colors: [
      { name: 'Biru Spirulina', hex: '#1E2050', selected: true },
      { name: 'Hijau Natural', hex: '#4A5D23', selected: false }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 6, M: 14, L: 9, XL: 2 },
    tags: ['Celana', 'Wide Leg', 'Streetwear', 'Bawahan', 'Batik Modis'],
    ecoImpact: {
      waterSavedLiters: 52,
      toxicChemicalEliminatedGrams: 350,
      microplastic: '0% (Katun Murni)'
    },
    materials: '100% Katun Twill Organik, Pewarna Alami Spirulina, Kancing Tempurung Kelapa (Zero Plastic).',
    artisanStory: 'Dipola dan dijahit secara presisi di workshop Cibuluh dengan jahitan dobel rantai standar ketahanan streetwear.',
    careInstructions: [
      'Cuci terpisah pada 1-2 pencucian awal.',
      'Keringkan dengan cara dibentangkan di hanger berbusa.',
      'Simpan dengan digantung di lemari kering berventilasi.'
    ]
  },
  {
    id: 'talas-04',
    name: 'Tote Bag Reusable Batik Talas',
    subtitle: 'Heavy-Duty 14oz Organic Canvas • Zero Waste',
    category: 'Souvenir (Tote Bag/Pouch/Kipas)',
    price: 99000,
    originalPrice: 129000,
    rating: 5.0,
    reviewsCount: 215,
    badge: 'Zero Plastic',
    secondaryBadge: 'Eco Hero 🌱',
    isNew: false,
    isBestSeller: true,
    description: 'Tas jinjing kanvas katun tebal 14oz dengan kompartemen laptop 14 inci, slot botol tumbler, dan saku ritsleting dalam. Tahan beban hingga 15 kg untuk aktivitas harian tanpa kantong plastik sekali pakai.',
    images: [
      'assets/totebag-biru.jpg',
      'assets/totebag-hijau.jpg'
    ],
    colors: [
      { name: 'Biru Spirulina', hex: '#1E2050', selected: true },
      { name: 'Hijau Natural', hex: '#4A5D23', selected: false }
    ],
    sizes: ['One Size (38x42x10cm)'],
    stock: { 'One Size (38x42x10cm)': 45 },
    tags: ['Tote Bag', 'Souvenir', 'Zero Waste', 'Aksesori', 'Kanvas'],
    ecoImpact: {
      waterSavedLiters: 25,
      toxicChemicalEliminatedGrams: 140,
      microplastic: 'Menggantikan 700+ Kantong Plastik Sekali Pakai'
    },
    materials: 'Kanvas Katun Organik 14oz Unbleached, Cap Batik Tangan Pewarna Spirulina, Tali Webbing Katun Kuat.',
    artisanStory: 'Setiap tote bag menggunakan kain sisa perca potongan kemeja utama guna mengeliminasi limbah tekstil workshop (Zero Waste Mission).',
    careInstructions: [
      'Cukup bersihkan noda lokal dengan lap basah bersabun lembut.',
      'Bila dicuci penuh, gunakan air dingin tanpa mesin pengering putar tinggi.'
    ]
  },
  {
    id: 'talas-05',
    name: 'Pouch Souvenir Batik Spirulina',
    subtitle: 'Multi-Purpose Organizer • Perjalanan & Kosmetik',
    category: 'Souvenir (Tote Bag/Pouch/Kipas)',
    price: 49000,
    originalPrice: 65000,
    discountPercent: 25,
    rating: 4.8,
    reviewsCount: 178,
    badge: 'Upcycled Fabric',
    secondaryBadge: 'Upsell Favorit 🎁',
    isNew: false,
    isBestSeller: true,
    description: 'Pouch serbaguna untuk kabel gadget, kosmetik, atau perlengkapan harian. Dibuat dari perca kain batik katun organik berkualitas tinggi dengan ritsleting YKK ramah lingkungan.',
    images: [
      'assets/pouch-hijau.jpg',
      'assets/pouch-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['One Size (22x15x6cm)'],
    stock: { 'One Size (22x15x6cm)': 60 },
    tags: ['Pouch', 'Souvenir', 'Upcycle', 'Aksesori'],
    ecoImpact: {
      waterSavedLiters: 15,
      toxicChemicalEliminatedGrams: 80,
      microplastic: '100% Upcycled Fabric'
    },
    materials: 'Perca Katun Organik Primissima Pewarna Spirulina, Furing Katun Alami, Ritsleting YKK Logam.',
    artisanStory: 'Diproduksi oleh kelompok perajin ibu-ibu Rumah Kreatif Cibuluh untuk pemanfaatan 100% serat kain bernilai ekonomi.',
    careInstructions: ['Cuci tangan lembut dengan air dingin bila diperlukan.']
  },
  {
    id: 'talas-06',
    name: 'Bros Motif Batik Talas',
    subtitle: 'Aksesori Elegan • Full Motif Talas Bogor',
    category: 'Aksesori (Bros/Bandana/Dasi)',
    price: 49000,
    originalPrice: 69000,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'Handcrafted',
    secondaryBadge: 'Batik Accent',
    isNew: true,
    isBestSeller: false,
    description: 'Bros elegan berukuran 8x8 cm dengan motif batik Daun Talas khas Bogor. Dibuat dengan detail presisi, cocok disematkan pada hijab, blazer, atau pakaian kasual untuk menambah sentuhan budaya lokal yang modern.',
    images: [
      'assets/bros-hijau.jpg',
      'assets/bros-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['8x8 cm'],
    stock: { '8x8 cm': 30 },
    tags: ['Bros', 'Aksesori', 'Batik', 'Hijab Friendly'],
    ecoImpact: {
      waterSavedLiters: 18,
      toxicChemicalEliminatedGrams: 95,
      microplastic: '0% Poliester'
    },
    materials: 'Logam ramah lingkungan dengan lapisan enamel pewarna alami, dikerjakan tanpa bahan kimia beracun.',
    artisanStory: 'Dicetak dan dilukis secara manual oleh pengrajin aksesoris lokal di Cibuluh.',
    careInstructions: ['Bersihkan dengan kain microfiber kering, hindari parfum langsung.']
  },
  {
    id: 'talas-07',
    name: 'Dasi Slim Modern Motif Talas Urban',
    subtitle: 'Contemporary Formal & Smart-Casual • 6cm Slim Cut',
    category: 'Aksesori (Bros/Bandana/Dasi)',
    price: 119000,
    originalPrice: 149000,
    rating: 4.7,
    reviewsCount: 42,
    badge: 'Limited Edition',
    secondaryBadge: 'Eco Dapper',
    isNew: false,
    isBestSeller: false,
    description: 'Dasi siluet slim 6cm dengan motif mikro Daun Talas Bogor bernuansa deep indigo. Memberikan sentuhan elegan yang subtil untuk presentasi profesional maupun outfit streetwear blazer.',
    images: [
      'assets/dasi-hijau.jpg',
      'assets/dasi-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['Standard Slim (148 x 6 cm)'],
    stock: { 'Standard Slim (148 x 6 cm)': 18 },
    tags: ['Dasi', 'Aksesori', 'Smart Casual', 'Batik Pria'],
    ecoImpact: {
      waterSavedLiters: 20,
      toxicChemicalEliminatedGrams: 110,
      microplastic: '0% Bahan Sintetis'
    },
    materials: 'Katun Primissima Tenun Rapat, Interlining Wol Alami Tanpa Sintesis Plastik.',
    artisanStory: 'Dikerjakan dengan ketelitian tingkat tinggi oleh penjahit jas berpengalaman di Bogor.',
    careInstructions: ['Dry clean ramah lingkungan atau cuci uap tanpa perendaman.']
  },
  {
    id: 'talas-08',
    name: 'Rok Batik Talas Full Print',
    subtitle: 'Rok Batik Modern • Full Motif Talas Bogor',
    category: 'Bawahan (Rok/Celana)',
    price: 279000,
    originalPrice: 339000,
    rating: 4.9,
    reviewsCount: 77,
    badge: 'Easy Wrap System',
    secondaryBadge: 'Favorit Gen Z',
    isNew: true,
    isBestSeller: true,
    description: 'Rok dengan motif full print batik Daun Talas khas Bogor yang elegan. Didesain dengan potongan modern yang flowy, memberikan siluet anggun dan nyaman digunakan untuk berbagai aktivitas keseharian maupun acara formal.',
    images: [
      'assets/rok-hijau.jpg',
      'assets/rok-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['All Size (Fit S to XL)'],
    stock: { 'All Size (Fit S to XL)': 20 },
    tags: ['Rok Lilit', 'Bawahan', 'Batik Wanita', 'Modern Look'],
    ecoImpact: {
      waterSavedLiters: 45,
      toxicChemicalEliminatedGrams: 300,
      microplastic: '0% Poliester'
    },
    materials: 'Katun Rayon Organik Biodegradable bersertifikasi ramah lingkungan, Pewarna Alami Spirulina.',
    artisanStory: 'Motif batik cap motif Daun Talas Bogor dikerjakan manual cap tembaga oleh pengrajin Dwika Lestari.',
    careInstructions: ['Cuci tangan lembut, keringkan di tempat teduh, setrika dengan uap sedang.']
  },
  {
    id: 'talas-09',
    name: 'Celana Wide Leg Motif Talas Full Print',
    subtitle: 'Streetwear Pants • Full Motif Talas Bogor',
    category: 'Bawahan (Rok/Celana)',
    price: 299000,
    originalPrice: 359000,
    rating: 4.8,
    reviewsCount: 45,
    badge: 'Spirulina Blue',
    secondaryBadge: 'Unisex Fit',
    isNew: true,
    isBestSeller: false,
    description: 'Celana wide-leg bersiluet longgar yang memberikan kenyamanan maksimal sepanjang hari. Dilengkapi motif full print Daun Talas artistik di seluruh bagian celana untuk sentuhan gaya modern yang memikat.',
    images: [
      'assets/celana-hijau-2.jpg',
      'assets/celana-biru-2.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { 'S': 5, 'M': 12, 'L': 15, 'XL': 8 },
    tags: ['Celana', 'Bawahan', 'Batik Pria', 'Streetwear', 'Batik Wanita'],
    ecoImpact: {
      waterSavedLiters: 55,
      toxicChemicalEliminatedGrams: 350,
      microplastic: '0% Poliester'
    },
    materials: '100% Linen Rami Organik bersertifikasi OEKO-TEX, Pewarna Alami Mikroalga Spirulina ramah ekosistem air.',
    artisanStory: 'Proses celup rintang dan cap motif Daun Talas dikerjakan dengan hati oleh pengrajin lokal Desa Cibuluh, Bogor.',
    careInstructions: ['Cuci tangan dengan lerak', 'Hindari sinar matahari langsung', 'Setrika suhu sedang']
  },
  {
    id: 'talas-10',
    name: 'Tote Bag Reusable Batik talas Full Print',
    subtitle: 'Eco-Friendly Canvas • Motif Talas Bogor',
    category: 'Tas & Aksesori',
    price: 99000,
    originalPrice: 129000,
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Eco-Friendly',
    secondaryBadge: 'Spirulina Dye',
    isNew: true,
    isBestSeller: true,
    description: 'Tote bag kanvas tebal ramah lingkungan dengan motif full print batik Daun Talas Bogor. Desain stylish dan ruang luas menjadikannya tas andalan untuk gaya kasual sehari-hari sambil mendukung kampanye pengurangan plastik.',
    images: [
      'assets/totebag-hijau-2.jpg',
      'assets/totebag-biru-2.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['One Size (40x35x10 cm)'],
    stock: { 'One Size (40x35x10 cm)': 45 },
    tags: ['Tote Bag', 'Tas', 'Aksesori', 'Batik Kanvas', 'Eco-Friendly'],
    ecoImpact: {
      waterSavedLiters: 15,
      toxicChemicalEliminatedGrams: 80,
      microplastic: '100% Cotton Canvas'
    },
    materials: 'Kanvas Katun Organik Tebal (12oz), Pewarna Alami Spirulina, Tali Webbing Katun Kuat.',
    artisanStory: 'Dijahit kuat oleh pengrajin tas lokal dengan teknik stik balik yang tahan beban berat, serta dicap batik manual.',
    careInstructions: ['Cuci tangan lembut spot clean', 'Gunakan sabun alami (lerak)', 'Jemur teduh']
  },
  {
    id: 'talas-11',
    name: 'Rok Motif Talas Modern',
    subtitle: 'Modern Skirt • Motif Talas Bogor',
    category: 'Bawahan (Rok/Celana)',
    price: 279000,
    originalPrice: 339000,
    rating: 4.8,
    reviewsCount: 45,
    badge: 'Artisan Crafted',
    secondaryBadge: 'Eco-Friendly',
    isNew: true,
    isBestSeller: false,
    description: 'Rok dengan desain modern yang menampilkan motif Batik Daun Talas eksklusif. Nyaman dipakai dengan potongan elegan yang membuat penampilan kasual maupun formal semakin menawan.',
    images: [
      'assets/rok-hijau-2.jpg',
      'assets/rok-biru-2.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { 'M': 10, 'L': 15 },
    tags: ['Rok', 'Bawahan', 'Batik Wanita', 'Modern'],
    ecoImpact: {
      waterSavedLiters: 40,
      toxicChemicalEliminatedGrams: 200,
      microplastic: '0% Poliester'
    },
    materials: 'Katun Rayon Organik 100%, Pewarna Alami.',
    artisanStory: 'Dibuat dengan teknik cap tradisional oleh pengrajin lokal berbakat.',
    careInstructions: ['Cuci lembut dengan tangan', 'Jemur di tempat teduh']
  },
  {
    id: 'talas-12',
    name: 'Kipas Lipat Batik Talas',
    subtitle: 'Handheld Wooden Fan • Motif Talas Bogor',
    category: 'Souvenir (Tote Bag/Pouch/Kipas)',
    price: 49000,
    originalPrice: 69000,
    rating: 4.9,
    reviewsCount: 120,
    badge: 'Zero Waste',
    secondaryBadge: 'Souvenir Favorit',
    isNew: true,
    isBestSeller: true,
    description: 'Kipas lipat elegan dengan ukiran bambu ringan dan kain batik motif Daun Talas dari sisa perca. Sempurna sebagai pelengkap gaya tropis atau suvenir cantik yang ramah lingkungan.',
    images: [
      'assets/kipas-hijau.jpg',
      'assets/kipas-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['One Size'],
    stock: { 'One Size': 100 },
    tags: ['Kipas', 'Souvenir', 'Aksesori', 'Batik'],
    ecoImpact: {
      waterSavedLiters: 5,
      toxicChemicalEliminatedGrams: 20,
      microplastic: '100% Organik'
    },
    materials: 'Rangka Bambu Alami, Kain Perca Katun Organik.',
    artisanStory: 'Dikerjakan oleh pengrajin bambu lokal dan menggunakan kain sisa produksi untuk misi zero-waste.',
    careInstructions: ['Simpan di tempat kering', 'Lap dengan kain bersih']
  }
];

export const CATEGORIES = [
  'Semua',
  'Kemeja',
  'Blouse & Dress',
  'Bawahan (Rok/Celana)',
  'Aksesori (Bros/Bandana/Dasi)',
  'Souvenir (Tote Bag/Pouch/Kipas)',
  'Tas & Aksesori'
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'look-01',
    title: 'Bogor Creative Center Urban Fit',
    vibe: 'Streetwear Minimalist / Gen Z Casual',
    modelPhoto: 'assets/outfit-1.jpg',
    description: 'Kombinasi kasual kemeja semi-oversized dengan celana wide-leg motif Talas dan tote bag kanvas ramah lingkungan.',
    hotspots: [
      {
        id: 'hs-1',
        productId: 'talas-01',
        name: 'Kemeja Batik Talas Semi-Oversized',
        price: 289000,
        x: 10, // percent
        y: 15  // percent
      },
      {
        id: 'hs-2',
        productId: 'talas-03',
        name: 'Celana Wide-Leg Motif Talas',
        price: 299000,
        x: 10,
        y: 30
      },
      {
        id: 'hs-3',
        productId: 'talas-04',
        name: 'Tote Bag Reusable Batik',
        price: 99000,
        x: 10,
        y: 45
      }
    ]
  },
  {
    id: 'look-02',
    title: 'Cibuluh Heritage Café Flow',
    vibe: 'Relaxed Daily Elegance / Botanical Hue',
    modelPhoto: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    description: 'Blouse berpotongan rileks dipadukan dengan bandana aksen leher dan pouch batik praktis untuk hari santai.',
    hotspots: [
      {
        id: 'hs-4',
        productId: 'talas-02',
        name: 'Blouse Loose-Fit Spirulina Bogor',
        price: 259000,
        x: 50,
        y: 38
      },
      {
        id: 'hs-5',
        productId: 'talas-06',
        name: 'Bandana & Scarf Eco-Spirulina',
        price: 69000,
        x: 46,
        y: 20
      },
      {
        id: 'hs-6',
        productId: 'talas-08',
        name: 'Rok Lilit Asimetris Spirulina Flow',
        price: 279000,
        x: 53,
        y: 72
      }
    ]
  }
];

export const SIZE_CHART_ADULT = [
  { size: 'S', chest: '52 cm', length: '70 cm', shoulder: '46 cm', sleeve: '24 cm', weightRec: '45 - 58 kg' },
  { size: 'M', chest: '55 cm', length: '72 cm', shoulder: '48 cm', sleeve: '25 cm', weightRec: '58 - 68 kg' },
  { size: 'L', chest: '58 cm', length: '74 cm', shoulder: '50 cm', sleeve: '26 cm', weightRec: '68 - 78 kg' },
  { size: 'XL', chest: '61 cm', length: '76 cm', shoulder: '52 cm', sleeve: '27 cm', weightRec: '78 - 90 kg' },
  { size: 'XXL', chest: '64 cm', length: '78 cm', shoulder: '54 cm', sleeve: '28 cm', weightRec: '90 - 105 kg' }
];

export const SIZE_CHART_KIDS = [
  { ageGroup: '4 - 6 Tahun (S)', chest: '36 cm', length: '46 cm', shoulder: '30 cm', heightRec: '100 - 115 cm' },
  { ageGroup: '7 - 9 Tahun (M)', chest: '40 cm', length: '52 cm', shoulder: '33 cm', heightRec: '116 - 130 cm' },
  { ageGroup: '10 - 12 Tahun (L)', chest: '44 cm', length: '58 cm', shoulder: '36 cm', heightRec: '131 - 145 cm' },
  { ageGroup: '13 - 14 Tahun (XL)', chest: '48 cm', length: '64 cm', shoulder: '40 cm', heightRec: '146 - 158 cm' }
];

export const COMMUNITY_REVIEWS = [
  {
    id: 'ugc-1',
    author: 'Alya Ramadhani (@alyarmdhn)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verifiedBuyer: true,
    rating: 5,
    date: '2 hari lalu',
    productPurchased: 'Kemeja Batik Talas Semi-Oversized (Size M)',
    fitFeedback: 'Potongan Oversized Sangat Nyaman',
    comment: 'Beneran gak nyangka batik bisa sekeren ini! Cutting-nya boxy ala streetwear jepang, bahannya katun organik adem parah dan warna birunya pigmen Spirulina tuh beda banget feel-nya dibanding pewarna kimia biasa.',
    userPhoto: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    likes: 38
  },
  {
    id: 'ugc-2',
    author: 'Farhan Dwi Putra (@farhandwip)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verifiedBuyer: true,
    rating: 5,
    date: '5 hari lalu',
    productPurchased: 'Celana Wide-Leg + Tote Bag Reusable',
    fitFeedback: 'Ukuran Pas Sempurna',
    comment: 'Fix no debat brand batik lokal paling progresif. Filosofi daun Talas Bogor-nya kena banget, terus packaging-nya 100% cassava bag tanpa plastik. Bangga pakai Talaswara di kampus!',
    userPhoto: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80',
    likes: 54
  },
  {
    id: 'ugc-3',
    author: 'Nadine Aurelia (@nadineaurell)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verifiedBuyer: true,
    rating: 5,
    date: '1 minggu lalu',
    productPurchased: 'Blouse Loose-Fit Spirulina (Size S)',
    fitFeedback: 'Bahan Adem & Lembut',
    comment: 'Pertama kali nyobain batik pewarna mikroalga Spirulina, tekstur kainnya halus dan gak bikin gatal di kulit sensitif. Desainnya minimalis elegan banget.',
    userPhoto: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
    likes: 42
  }
];

export const VALUE_PROPS = [
  {
    icon: 'Microscope',
    title: 'Pewarna Hayati Spirulina',
    subtitle: 'Ekstrak Pigmen Alami Phycocyanin',
    description: 'Inovasi pewarna biru alami dari mikroalga Arthrospira platensis. Ramah ekosistem air dan aman untuk kulit sensitif.'
  },
  {
    icon: 'Leaf',
    title: 'Motif Khas Talas Bogor',
    subtitle: 'Warisan Botani Kota Hujan',
    description: 'Eksplorasi geometris daun talas lokal yang diterjemahkan ke dalam bahasa visual streetwear modern Gen Z.'
  },
  {
    icon: 'Sparkles',
    title: '100% Katun Serat Alami',
    subtitle: 'Zero Microplastics Guarantee',
    description: 'Kain katun organik tersertifikasi dengan fiksasi mordan tawas alami. Biodegradable dan kembali ke tanah.'
  },
  {
    icon: 'Users',
    title: 'Pengrajin Lokal Berdaya',
    subtitle: 'Kampung Batik Cibuluh Bogor',
    description: 'Diproduksi etis bersama Bu Dwika Lestari & komunitas pembatik Cibuluh dengan sistem upah adil (Fair Wage).'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Apa itu pewarna alami Spirulina pada batik TALASWARA?',
    answer: 'Kami mengekstrak pigmen biru hayati (Phycocyanin) dari mikroalga Arthrospira platensis budidaya lokal. Pewarna ini 100% organik, tidak menghasilkan limbah logam berat berbahaya seperti pewarna sintetis naphtol/indanthrene konvensional, serta aman untuk ekosistem sungai.'
  },
  {
    question: 'Bagaimana cara merawat pakaian batik TALASWARA agar tahan lama?',
    answer: 'Cukup cuci dengan tangan menggunakan air dingin dan sabun lerak atau deterjen cair yang ber-pH seimbang. Jangan menggunakan pemutih klorin, jangan diperas kencang, dan cukup diangin-anginkan di tempat teduh (hindari sinar matahari langsung).'
  },
  {
    question: 'Apakah bisa melakukan retur atau tukar ukuran bila tidak pas?',
    answer: 'Tentu bisa! Kami memberikan Garansi Retur & Tukar Ukuran Maksimal 3 Hari kerja sejak paket diterima dengan syarat hangtag masih terpasang dan produk belum dicuci.'
  },
  {
    question: 'Di mana saya bisa melihat dan mencoba produk TALASWARA secara langsung?',
    answer: 'Anda dapat mengunjungi Galeri Mitra kami di Bogor Creative Center (BCC), Workshop Kampung Batik Cibuluh, atau Museum Etnobotani Indonesia di Kota Bogor.'
  }
];
