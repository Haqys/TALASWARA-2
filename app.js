/**
 * TALASWARA Eco-Batik Web Application Logic
 * Where Heritage Meets Sustainability — Mobile-First High-Conversion E-Commerce
 */

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

const PRODUCTS = [
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
      'Hindari memeras terlalu keras untuk menjaga elastisitas serat katun organik.',
      'Jemur di tempat teduh (cukup diangin-anginkan), hindari sinar matahari langsung.',
      'Setrika suhu sedang dengan pelapis kain katun tipis.'
    ]
  },
  {
    id: 'talas-02',
    name: 'Blouse Loose-Fit Spirulina Bogor',
    subtitle: 'Relaxed Daily Wear • Siluet Drop-Shoulder',
    category: 'Blouse & Dress',
    price: 289000,
    originalPrice: 349000,
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
    price: 149000,
    originalPrice: 200000,
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
    sizes: ['One Size'],
    stock: { 'One Size': 45 },
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
    name: 'Pouch Souvenir Batik Talas',
    subtitle: 'Multi-Purpose Organizer • Upcycled Fabric',
    category: 'Souvenir (Tote Bag/Pouch/Kipas)',
    price: 149000,
    originalPrice: 200000,
    rating: 4.8,
    reviewsCount: 178,
    badge: 'Upcycled Fabric',
    secondaryBadge: 'Upsell Favorit 🎁',
    isNew: false,
    isBestSeller: true,
    description: 'Pouch elegan dari TALASWARA yang memadukan motif botani daun talas bernuansa hijau zaitun dengan sentuhan etnik modern. Dilengkapi ritsleting beraksen gantungan bunga serta tali pergelangan (wristlet) senada, pouch praktis ini sempurna untuk menyimpan ponsel, kosmetik, atau perlengkapan esensial harian dengan gaya yang rapi dan berkelas.',
    images: [
      'assets/pouch-hijau.jpg',
      'assets/pouch-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['One Size'],
    stock: { 'One Size': 60 },
    tags: ['Pouch', 'Souvenir', 'Upcycle', 'Aksesori'],
    ecoImpact: {
      waterSavedLiters: 15,
      toxicChemicalEliminatedGrams: 80,
      microplastic: '100% Upcycled Fabric'
    },
    materials: 'Perca Katun Organik Primissima Pewarna Spirulina, Furing Katun Alami, Ritsleting Logam.',
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
    subtitle: 'Contemporary Formal • 6cm Slim Cut',
    category: 'Aksesori (Bros/Bandana/Dasi)',
    price: 119000,
    originalPrice: 149000,
    rating: 4.7,
    reviewsCount: 42,
    badge: 'Limited Edition',
    secondaryBadge: 'Eco Dapper',
    isNew: false,
    isBestSeller: false,
    description: 'Dasi siluet slim 6cm dengan motif Daun Talas Bogor. Memberikan sentuhan elegan yang subtil untuk presentasi profesional maupun outfit streetwear blazer.',
    images: [
      'assets/dasi-hijau.jpg',
      'assets/dasi-biru.jpg'
    ],
    colors: [
      { name: 'Hijau Natural', hex: '#556B2F', selected: true },
      { name: 'Biru Spirulina', hex: '#1E2050', selected: false }
    ],
    sizes: ['Standard Slim (6cm)'],
    stock: { 'Standard Slim (6cm)': 18 },
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
    sizes: ['All Size (Fit S-XL)'],
    stock: { 'All Size (Fit S-XL)': 20 },
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
    price: 149000,
    originalPrice: 200000,
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

const LOOKBOOK_ITEMS = [
  {
    id: 'look-01',
    title: 'Creative Urban Fit',
    vibe: 'Streetwear Minimalist / Gen Z Casual',
    modelPhoto: 'assets/outfit-1.jpg',
    description: 'Kombinasi kasual kemeja semi-oversized dengan celana wide-leg motif Talas dan tote bag kanvas ramah lingkungan.',
    hotspots: [
      {
        id: 'hs-1',
        productId: 'talas-01',
        name: 'Kemeja Batik Talas Semi-Oversized',
        price: 289000,
        x: 10,
        y: 15
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
        price: 149000,
        x: 10,
        y: 45
      }
    ]
  },
  {
    id: 'look-02',
    title: 'Casual Elegant',
    vibe: 'Relaxed Daily Elegance / Botanical Hue',
    modelPhoto: 'assets/look-2.jpg',
    description: 'Blouse berpotongan rileks dipadukan dengan rok Motif Talas Modern dan pouch estetik untuk outfit elegan ke kampus.',
    hotspots: [
      {
        id: 'hs-4',
        productId: 'talas-02',
        name: 'Blouse Loose-Fit Spirulina Bogor',
        price: 289000,
        x: 10,
        y: 15
      },
      {
        id: 'hs-5',
        productId: 'talas-05',
        name: 'Pouch Batik Talas',
        price: 149000,
        x: 10,
        y: 30
      },
      {
        id: 'hs-6',
        productId: 'talas-11',
        name: 'Rok Motif Talas Modern',
        price: 279000,
        x: 10,
        y: 45
      }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

const State = {
  isDark: false,
  activeCategory: 'Semua',
  searchQuery: '',
  cart: [],
  wishlist: [],
  activeProductModal: null,
  activeLookbookIndex: 0,
  activeHotspot: null,
  selectedSizeInModal: null,
  selectedColorInModal: 0,
  activeModalImageIndex: 0,
  voucherCode: '',
  voucherDiscount: 0,
  impactPieces: 3,
  freeShippingThreshold: 350000,
  sizeGuideTab: 'adult' // 'adult' | 'kids'
};

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================

function formatIDR(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function showToast(message, icon = 'check-circle') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto ${State.isDark
    ? 'bg-[#282A60] text-white border border-white/20'
    : 'bg-[#1E2050] text-white shadow-indigo-950/20'
    }`;

  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-5 h-5 text-emerald-400 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1E2050', '#38BDF8', '#10B981', '#F4EFE6', '#FFFFFF']
    });
  }
}

// ==========================================
// 4. THEME CONTROLLER
// ==========================================

function initTheme() {
  const savedTheme = localStorage.getItem('talaswara-theme');
  if (savedTheme) {
    State.isDark = savedTheme === 'dark';
  } else {
    State.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme();
}

function toggleTheme() {
  State.isDark = !State.isDark;
  localStorage.setItem('talaswara-theme', State.isDark ? 'dark' : 'light');
  applyTheme();
}

function applyTheme() {
  const html = document.documentElement;
  if (State.isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  updateThemeVisuals();
}

function updateThemeVisuals() {
  // Update theme toggle buttons (desktop & mobile)
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    icon.setAttribute('data-lucide', State.isDark ? 'sun' : 'moon');
  });

  // Update brand logo images (Blue for Light Mode, White for Dark Mode)
  const brandLogoImages = document.querySelectorAll('.brand-logo-img');
  brandLogoImages.forEach(img => {
    img.src = State.isDark ? './assets/talaswara-logo-white.png' : './assets/talaswara-logo-blue.png';
  });

  // Update favicon if present
  const favicon = document.getElementById('favicon-link');
  if (favicon) {
    favicon.href = State.isDark ? './assets/talaswara-logo-white.png' : './assets/talaswara-logo-blue.png';
  }

  // Update brand logos (SVG fallback if any)
  const brandLogos = document.querySelectorAll('.brand-logo-svg');
  brandLogos.forEach(logo => {
    logo.setAttribute('fill', State.isDark ? '#FFFFFF' : '#1E2050');
  });

  lucide.createIcons();
}

// ==========================================
// 5. CART & WISHLIST CONTROLLER
// ==========================================

function addToCart(productId, size = null, color = null, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenSize = size || product.sizes[0];
  const chosenColor = color || product.colors[0].name;

  const existingItemIndex = State.cart.findIndex(
    item => item.id === productId && item.size === chosenSize && item.color === chosenColor
  );

  if (existingItemIndex > -1) {
    State.cart[existingItemIndex].quantity += quantity;
  } else {
    State.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: chosenSize,
      color: chosenColor,
      quantity: quantity
    });
  }

  saveCart();
  updateCartCounters();
  renderCartDrawer();

  // Animation on cart button
  const cartButtons = document.querySelectorAll('.cart-trigger-btn');
  cartButtons.forEach(btn => {
    btn.classList.add('scale-125');
    setTimeout(() => btn.classList.remove('scale-125'), 300);
  });

  showToast(`"${product.name}" (${chosenSize}) masuk keranjang!`, 'shopping-bag');
}

function updateCartItemQty(index, change) {
  if (!State.cart[index]) return;
  State.cart[index].quantity += change;
  if (State.cart[index].quantity <= 0) {
    State.cart.splice(index, 1);
  }
  saveCart();
  updateCartCounters();
  renderCartDrawer();
}

function removeCartItem(index) {
  State.cart.splice(index, 1);
  saveCart();
  updateCartCounters();
  renderCartDrawer();
}

function saveCart() {
  localStorage.setItem('talaswara-cart', JSON.stringify(State.cart));
}

function loadCart() {
  try {
    const saved = localStorage.getItem('talaswara-cart');
    if (saved) State.cart = JSON.parse(saved);
  } catch (e) {
    State.cart = [];
  }
}

function updateCartCounters() {
  const totalCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = State.wishlist.indexOf(productId);
  if (index > -1) {
    State.wishlist.splice(index, 1);
    showToast(`Dihapus dari Wishlist: ${product.name}`, 'heart-off');
  } else {
    State.wishlist.push(productId);
    showToast(`Ditambahkan ke Wishlist: ${product.name}`, 'heart');
  }

  saveWishlist();
  updateWishlistCounters();
  renderProducts();
  renderWishlistDrawer();
}

function saveWishlist() {
  localStorage.setItem('talaswara-wishlist', JSON.stringify(State.wishlist));
}

function loadWishlist() {
  try {
    const saved = localStorage.getItem('talaswara-wishlist');
    if (saved) State.wishlist = JSON.parse(saved);
  } catch (e) {
    State.wishlist = [];
  }
}

function updateWishlistCounters() {
  const count = State.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ==========================================
// 6. RENDER PRODUCT CATALOG
// ==========================================

function filterCategory(categoryName) {
  State.activeCategory = categoryName;

  // Update filter pills UI
  const pills = document.querySelectorAll('.category-filter-pill');
  pills.forEach(pill => {
    const cat = pill.getAttribute('data-category');
    if (cat === categoryName) {
      pill.className = "category-filter-pill px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] shadow-sm";
    } else {
      pill.className = "category-filter-pill px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 bg-[#F8F9FA] text-[#1E2050] border border-[#1E2050]/10 hover:bg-[#1E2050]/5 dark:bg-[#282A60] dark:text-white dark:border-white/15 dark:hover:bg-white/10";
    }
  });

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    if (State.activeCategory === 'Semua') return true;
    return p.category === State.activeCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i data-lucide="package-search" class="w-12 h-12 mx-auto text-gray-400 mb-3"></i>
        <p class="text-lg font-semibold">Tidak ada produk ditemukan untuk kategori ini.</p>
        <button onclick="filterCategory('Semua')" class="mt-4 px-5 py-2 rounded-full bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] text-sm font-medium">
          Lihat Semua Produk
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = State.wishlist.includes(product.id);
    const primaryColor = product.colors[0];

    return `
      <div class="product-card group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 card-hover-lift bg-[#F8F9FA] border border-[#1E2050]/10 dark:bg-[#282A60] dark:border-white/15 shadow-sm hover:shadow-xl">
        
        <!-- Image Container (3:4 ratio) -->
        <div class="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-slate-800 cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          
          <!-- Badges Overlay -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-[#1E2050]/85 text-white dark:bg-white/90 dark:text-[#1E2050] shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ${product.badge}
            </span>
            ${product.secondaryBadge ? `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-amber-500/90 text-white shadow-sm">
                ${product.secondaryBadge}
              </span>
            ` : ''}
          </div>

          <!-- Wishlist Button -->
          <button 
            type="button"
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
            aria-label="Wishlist"
            class="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 z-10 ${isWishlisted
        ? 'bg-rose-500 text-white shadow-md'
        : 'bg-white/80 text-[#1E2050] hover:bg-white dark:bg-[#1E2050]/80 dark:text-white dark:hover:bg-[#1E2050]'
      }"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-current' : ''}"></i>
          </button>

          <!-- Quick View Hover Pill (Desktop) -->
          <div class="absolute inset-x-3 bottom-3 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
            <span class="w-full py-2.5 rounded-xl text-xs font-bold text-center uppercase tracking-wider backdrop-blur-md bg-[#1E2050]/90 text-white dark:bg-white/95 dark:text-[#1E2050] shadow-lg">
              Detail & Panduan Ukuran
            </span>
          </div>
        </div>

        <!-- Product Content -->
        <div class="p-4 flex flex-col flex-grow justify-between">
          <div>
            <!-- Swatches & Rating Row -->
            <div class="flex items-center justify-between gap-2 mb-2">
              <!-- Color Swatches -->
              <div class="flex items-center gap-1.5">
                ${product.colors.map(c => `
                  <span 
                    class="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/30 shadow-xs cursor-pointer" 
                    style="background-color: ${c.hex};" 
                    title="${c.name}"
                  ></span>
                `).join('')}
              </div>

              <!-- Rating -->
              <div class="flex items-center gap-1 text-xs font-bold text-amber-500">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <span class="text-[#1E2050] dark:text-white font-medium text-[11px]">${product.rating}</span>
                <span class="text-gray-400 text-[10px]">(${product.reviewsCount})</span>
              </div>
            </div>

            <!-- Title -->
            <h3 
              class="font-bold text-sm md:text-base leading-snug line-clamp-2 hover:text-[#2A3F75] dark:hover:text-sky-300 transition-colors cursor-pointer mb-1"
              onclick="openProductModal('${product.id}')"
            >
              ${product.name}
            </h3>
            
            <p class="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mb-3">
              ${product.subtitle}
            </p>
          </div>

          <!-- Price & Quick Add Button -->
          <div class="flex items-center justify-between pt-2 border-t border-[#1E2050]/5 dark:border-white/10 mt-auto">
            <div class="flex flex-col">
              <span class="text-base md:text-lg font-black tracking-tight text-[#1E2050] dark:text-white">
                ${formatIDR(product.price)}
              </span>
              ${product.originalPrice ? `
                <span class="text-[11px] text-gray-400 line-through">
                  ${formatIDR(product.originalPrice)}
                </span>
              ` : ''}
            </div>

            <!-- Quick Add to Cart Button -->
            <button 
              type="button"
              onclick="event.stopPropagation(); addToCart('${product.id}')"
              class="group/btn flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full transition-all duration-200 active:scale-95 bg-[#1E2050] text-white hover:bg-[#282A60] dark:bg-white dark:text-[#1E2050] dark:hover:bg-gray-100 shadow-md"
              title="Tambah Cepat ke Keranjang"
            >
              <i data-lucide="plus" class="w-5 h-5 transition-transform duration-200 group-hover/btn:rotate-90"></i>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ==========================================
// 7. INTERACTIVE LOOKBOOK CONTROLLER
// ==========================================

function renderLookbook() {
  const container = document.getElementById('lookbook-container');
  if (!container) return;

  const currentLook = LOOKBOOK_ITEMS[State.activeLookbookIndex];
  if (!currentLook) return;

  container.innerHTML = `
    <div class="relative w-full rounded-3xl overflow-hidden border border-[#1E2050]/15 dark:border-white/15 bg-slate-900 shadow-2xl">
      
      <!-- Lookbook Main Photo with Responsive Aspect Ratio -->
      <div class="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <img 
          src="${currentLook.modelPhoto}" 
          alt="${currentLook.title}" 
          class="w-full h-full object-cover object-center filter brightness-[0.92]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <!-- Clickable Hotspots -->
        ${currentLook.hotspots.map(hs => {
    const product = PRODUCTS.find(p => p.id === hs.productId);
    const isActive = State.activeHotspot === hs.id;

    return `
            <div 
              class="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style="left: ${hs.x}%; top: ${hs.y}%;"
              onclick="toggleHotspot('${hs.id}')"
            >
              <!-- Hotspot Button Beacon -->
              <div class="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#1E2050] shadow-xl transition-all duration-300 group-hover:scale-110 ${isActive ? 'ring-4 ring-sky-400' : 'hotspot-beacon'}">
                <i data-lucide="plus" class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isActive ? 'rotate-45' : ''}"></i>
              </div>

              <!-- Hotspot Popover Card -->
              <div class="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 md:w-64 p-3.5 rounded-2xl bg-white/95 text-[#1E2050] dark:bg-[#1E2050]/95 dark:text-white backdrop-blur-md shadow-2xl border border-white/30 dark:border-white/20 transition-all duration-300 z-30 ${isActive ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}">
                <div class="flex items-center gap-3">
                  <img src="${product?.images[0]}" class="w-12 h-16 rounded-lg object-cover flex-shrink-0" />
                  <div class="flex-grow min-w-0">
                    <p class="text-xs font-bold leading-snug line-clamp-1">${hs.name}</p>
                    <p class="text-xs font-black text-sky-600 dark:text-sky-300 mt-0.5">${formatIDR(hs.price)}</p>
                    <div class="flex items-center gap-2 mt-2">
                      <button 
                        type="button" 
                        onclick="event.stopPropagation(); addToCart('${hs.productId}');"
                        class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] flex items-center gap-1"
                      >
                        <i data-lucide="shopping-bag" class="w-3 h-3"></i> +Keranjang
                      </button>
                      <button 
                        type="button" 
                        onclick="event.stopPropagation(); openProductModal('${hs.productId}');"
                        class="text-[10px] font-semibold underline text-gray-500 hover:text-black dark:text-gray-300"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Triangle Pointer -->
                <div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/95 dark:bg-[#1E2050]/95 rotate-45 border-b border-l border-white/20"></div>
              </div>
            </div>
          `;
  }).join('')}

        <!-- Lookbook Editorial Details (Bottom Overlay) -->
        <div class="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white z-10">
          <div class="max-w-md">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md mb-2">
              ${currentLook.vibe}
            </span>
            <h3 class="text-2xl md:text-3xl font-black tracking-tight">${currentLook.title}</h3>
            <p class="text-xs md:text-sm text-gray-200 mt-1 line-clamp-2">${currentLook.description}</p>
          </div>

          <!-- Quick Buy Full Look Action -->
          <div class="flex items-center gap-3">
            <button 
              type="button" 
              onclick="buyFullLook('${currentLook.id}')"
              class="px-5 py-3 rounded-xl bg-white text-[#1E2050] font-black text-xs md:text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 active:scale-95 shadow-xl flex items-center gap-2"
            >
              <i data-lucide="sparkles" class="w-4 h-4 text-emerald-600"></i>
              Beli 1 Set Look Ini (${formatIDR(currentLook.hotspots.reduce((sum, h) => sum + h.price, 0))})
            </button>
          </div>
        </div>

        <!-- Look Switcher Buttons -->
        <div class="absolute top-4 right-4 flex items-center gap-2 z-10">
          ${LOOKBOOK_ITEMS.map((item, idx) => `
            <button 
              type="button"
              onclick="switchLookbook(${idx})"
              class="px-3 py-1.5 rounded-full text-xs font-bold transition-all ${idx === State.activeLookbookIndex
      ? 'bg-white text-[#1E2050] shadow-md'
      : 'bg-black/40 text-white backdrop-blur-md hover:bg-black/60'
    }"
            >
              Look 0${idx + 1}
            </button>
          `).join('')}
        </div>

      </div>

    </div>
  `;

  lucide.createIcons();
}

function toggleHotspot(hotspotId) {
  State.activeHotspot = State.activeHotspot === hotspotId ? null : hotspotId;
  renderLookbook();
}

function switchLookbook(index) {
  State.activeLookbookIndex = index;
  State.activeHotspot = null;
  renderLookbook();
}

function buyFullLook(lookId) {
  const look = LOOKBOOK_ITEMS.find(l => l.id === lookId);
  if (!look) return;

  look.hotspots.forEach(hs => {
    addToCart(hs.productId);
  });

  showToast(`Semua outfit dalam Lookbook berhasil ditambahkan ke keranjang! 🎉`, 'sparkles');
  triggerConfetti();
  openCartDrawer();
}

// ==========================================
// 8. ECO-IMPACT CALCULATOR
// ==========================================

function updateEcoCalculator(value) {
  State.impactPieces = parseInt(value, 10) || 1;
  const count = State.impactPieces;

  const waterSaved = count * 48; // Liters
  const chemicalEliminated = count * 320; // Grams
  const co2Prevented = (count * 1.8).toFixed(1); // kg

  const piecesDisplay = document.getElementById('calc-pieces-display');
  const waterDisplay = document.getElementById('calc-water-display');
  const chemDisplay = document.getElementById('calc-chem-display');
  const co2Display = document.getElementById('calc-co2-display');
  const sliderInput = document.getElementById('eco-range-slider');

  if (piecesDisplay) piecesDisplay.textContent = `${count} Helai Busana`;
  if (waterDisplay) waterDisplay.textContent = `${waterSaved.toLocaleString('id-ID')} Liter`;
  if (chemDisplay) chemDisplay.textContent = `${chemicalEliminated.toLocaleString('id-ID')} Gram`;
  if (co2Display) co2Display.textContent = `${co2Prevented} kg`;
  if (sliderInput && sliderInput.value !== count.toString()) sliderInput.value = count;
}

// ==========================================
// 9. CART DRAWER & CHECKOUT
// ==========================================

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;

  renderCartDrawer();

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  drawer.classList.remove('translate-x-full');
  drawer.classList.add('translate-x-0');
  document.body.classList.add('overflow-hidden');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  drawer.classList.remove('translate-x-0');
  drawer.classList.add('translate-x-full');
  document.body.classList.remove('overflow-hidden');
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalDisplay = document.getElementById('cart-subtotal-display');
  const discountDisplay = document.getElementById('cart-discount-display');
  const totalDisplay = document.getElementById('cart-total-display');
  const freeShippingBar = document.getElementById('free-shipping-progress');
  const freeShippingText = document.getElementById('free-shipping-text');
  if (!itemsContainer) return;

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * State.voucherDiscount);
  const total = Math.max(0, subtotal - discountAmount);

  // Free shipping logic
  const remainingForFreeShipping = Math.max(0, State.freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / State.freeShippingThreshold) * 100);

  if (freeShippingBar) {
    freeShippingBar.style.width = `${progressPercent}%`;
  }

  if (freeShippingText) {
    if (subtotal >= State.freeShippingThreshold) {
      freeShippingText.innerHTML = `
        <span class="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
          Selamat! Anda Mendapatkan Bebas Ongkir & Kemasan Ramah Lingkungan! 🌿
        </span>
      `;
    } else {
      freeShippingText.innerHTML = `
        Tambah <span class="font-bold text-[#1E2050] dark:text-white">${formatIDR(remainingForFreeShipping)}</span> lagi untuk <b>Bebas Ongkir</b> se-Indonesia!
      `;
    }
  }

  if (subtotalDisplay) subtotalDisplay.textContent = formatIDR(subtotal);
  if (discountDisplay) discountDisplay.textContent = discountAmount > 0 ? `-${formatIDR(discountAmount)}` : 'Rp0';
  if (totalDisplay) totalDisplay.textContent = formatIDR(total);

  if (State.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center flex flex-col items-center justify-center">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-[#1E2050]/5 dark:bg-white/10 mb-4">
          <i data-lucide="shopping-bag" class="w-8 h-8 text-gray-400"></i>
        </div>
        <h4 class="font-bold text-base">Keranjang Belanja Masih Kosong</h4>
        <p class="text-xs text-gray-400 max-w-xs mt-1">Temukan busana batik berpewarna Spirulina ramah lingkungan impianmu.</p>
        <button 
          type="button" 
          onclick="closeCartDrawer(); document.getElementById('katalog').scrollIntoView({behavior: 'smooth'});"
          class="mt-5 px-6 py-2.5 rounded-full bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] text-xs font-bold uppercase tracking-wider"
        >
          Mulai Belanja
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  itemsContainer.innerHTML = State.cart.map((item, index) => `
    <div class="flex gap-3.5 p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#282A60] border border-[#1E2050]/10 dark:border-white/15">
      <!-- Image -->
      <img src="${item.image}" alt="${item.name}" class="w-20 h-24 rounded-xl object-cover flex-shrink-0" />
      
      <!-- Details -->
      <div class="flex flex-col justify-between flex-grow min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h5 class="font-bold text-xs md:text-sm leading-snug line-clamp-1">${item.name}</h5>
            <div class="flex items-center gap-2 mt-1 text-[11px] text-gray-500 dark:text-gray-400">
              <span class="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-semibold">${item.size}</span>
              <span class="truncate">${item.color}</span>
            </div>
          </div>
          <button 
            type="button" 
            onclick="removeCartItem(${index})"
            class="text-gray-400 hover:text-rose-500 transition-colors p-1"
            title="Hapus"
          >
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Price & Qty Adjust -->
        <div class="flex items-center justify-between mt-2 pt-2 border-t border-[#1E2050]/5 dark:border-white/10">
          <span class="font-black text-sm text-[#1E2050] dark:text-white">
            ${formatIDR(item.price * item.quantity)}
          </span>
          
          <div class="flex items-center border border-[#1E2050]/20 dark:border-white/25 rounded-lg overflow-hidden bg-white dark:bg-[#1E2050]">
            <button 
              type="button" 
              onclick="updateCartItemQty(${index}, -1)" 
              class="w-7 h-7 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200"
            >
              <i data-lucide="minus" class="w-3 h-3"></i>
            </button>
            <span class="w-8 text-center text-xs font-bold">${item.quantity}</span>
            <button 
              type="button" 
              onclick="updateCartItemQty(${index}, 1)" 
              class="w-7 h-7 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200"
            >
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function applyVoucher() {
  const input = document.getElementById('voucher-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'TALASWARAGENZ' || code === 'SPIRULINA10' || code === 'BOGORLEAF') {
    State.voucherCode = code;
    State.voucherDiscount = 0.10; // 10%
    showToast(`Voucher ${code} berhasil! Diskon 10% diaktifkan 🎉`, 'check-circle');
    renderCartDrawer();
  } else {
    showToast('Kode voucher tidak valid atau sudah kedaluwarsa.', 'alert-circle');
  }
}

// ==========================================
// 10. PRODUCT DETAIL MODAL (PDP)
// ==========================================

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  State.activeProductModal = product;
  State.selectedSizeInModal = product.sizes[0];
  State.selectedColorInModal = 0;
  State.activeModalImageIndex = 0;

  renderProductModal();

  const modal = document.getElementById('pdp-modal');
  const backdrop = document.getElementById('pdp-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  modal.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
  modal.classList.add('pointer-events-auto', 'opacity-100', 'scale-100');
  document.body.classList.add('overflow-hidden');
}

function closeProductModal() {
  const modal = document.getElementById('pdp-modal');
  const backdrop = document.getElementById('pdp-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  modal.classList.remove('pointer-events-auto', 'opacity-100', 'scale-100');
  modal.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
  document.body.classList.remove('overflow-hidden');
}

function renderProductModal() {
  const product = State.activeProductModal;
  if (!product) return;

  const content = document.getElementById('pdp-modal-content');
  if (!content) return;

  const isWishlisted = State.wishlist.includes(product.id);

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      
      <!-- Gallery Column -->
      <div class="flex flex-col gap-3">
        <!-- Main Image with Zoom container -->
        <div class="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-800 border border-[#1E2050]/10 dark:border-white/15">
          <img 
            id="pdp-main-img" 
            src="${product.images[State.activeModalImageIndex]}" 
            alt="${product.name}" 
            class="w-full h-full object-cover transition-all duration-300"
          />
          <div class="absolute top-3 left-3 flex flex-col gap-1.5">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-[#1E2050]/85 text-white dark:bg-white/90 dark:text-[#1E2050]">
              ${product.badge}
            </span>
          </div>
        </div>

        <!-- Thumbnails -->
        <div class="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
          ${product.images.map((img, idx) => `
            <button 
              type="button" 
              onclick="setModalImageIndex(${idx})"
              class="w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${idx === State.activeModalImageIndex
      ? 'border-[#1E2050] dark:border-white scale-105 shadow-md'
      : 'border-transparent opacity-60 hover:opacity-100'
    }"
            >
              <img src="${img}" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>

        <!-- Eco Highlight Capsule -->
        <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 mt-1">
          <i data-lucide="droplets" class="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"></i>
          <p class="text-xs font-semibold leading-tight">
            Hemat <b>${product.ecoImpact.waterSavedLiters} Liter</b> air & bebas <b>${product.ecoImpact.toxicChemicalEliminatedGrams}g</b> pewarna kimia sintetis.
          </p>
        </div>
      </div>

      <!-- Details Column -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Title & Badges -->
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-xs font-bold uppercase tracking-widest text-[#2A3F75] dark:text-sky-300">
              ${product.category}
            </span>
            <div class="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <span>${product.rating}</span>
              <span class="text-gray-400 font-normal">(${product.reviewsCount} Ulasan)</span>
            </div>
          </div>

          <h2 class="text-xl md:text-2xl font-black leading-snug">${product.name}</h2>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${product.subtitle}</p>

          <!-- Price -->
          <div class="flex items-baseline gap-3 my-4">
            <span class="text-2xl md:text-3xl font-black text-[#1E2050] dark:text-white">
              ${formatIDR(product.price)}
            </span>
            ${product.originalPrice ? `
              <span class="text-sm text-gray-400 line-through font-medium">
                ${formatIDR(product.originalPrice)}
              </span>
              <span class="text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                Hemat ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            ` : ''}
          </div>

          <!-- Color Selector -->
          <div class="mb-4">
            <div class="flex items-center justify-between text-xs font-bold mb-2">
              <span>Warna: <b class="text-sky-600 dark:text-sky-300 font-normal">${product.colors[State.selectedColorInModal].name}</b></span>
            </div>
            <div class="flex items-center gap-2.5">
              ${product.colors.map((color, idx) => `
                <button 
                  type="button" 
                  onclick="setModalColorIndex(${idx})"
                  class="relative w-8 h-8 rounded-full border-2 transition-all ${idx === State.selectedColorInModal
        ? 'ring-2 ring-offset-2 ring-[#1E2050] dark:ring-white scale-110'
        : 'border-black/20 dark:border-white/20'
      }"
                  style="background-color: ${color.hex};"
                  title="${color.name}"
                ></button>
              `).join('')}
            </div>
          </div>

          <!-- Size Selector with Size Guide Trigger -->
          <div class="mb-5">
            <div class="flex items-center justify-between text-xs font-bold mb-2">
              <span>Ukuran Tersedia:</span>
              <button 
                type="button" 
                onclick="openSizeGuideModal()"
                class="flex items-center gap-1 text-[#2A3F75] dark:text-sky-300 hover:underline font-bold"
              >
                <i data-lucide="ruler" class="w-3.5 h-3.5"></i> Panduan Ukuran
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${product.sizes.map(size => {
        const isSelected = State.selectedSizeInModal === size;
        const stockQty = product.stock[size] || 0;
        return `
                  <button 
                    type="button" 
                    onclick="setModalSize('${size}')"
                    class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${isSelected
            ? 'bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] shadow-md scale-105'
            : 'bg-black/5 text-[#1E2050] dark:bg-white/10 dark:text-white hover:bg-black/10'
          }"
                  >
                    ${size} ${stockQty < 5 ? `<span class="text-[10px] text-amber-500 ml-1">Sisa ${stockQty}</span>` : ''}
                  </button>
                `;
      }).join('')}
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            ${product.description}
          </p>

          <!-- Expandable Accordion Tabs -->
          <div class="border-t border-[#1E2050]/10 dark:border-white/15 pt-3 space-y-2">
            <!-- Accordion 1: Bahan & Perawatan -->
            <details class="group rounded-xl p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-[#1E2050]/5 dark:border-white/10">
              <summary class="flex items-center justify-between font-bold text-xs md:text-sm cursor-pointer list-none">
                <span class="flex items-center gap-2">
                  <i data-lucide="sparkles" class="w-4 h-4 text-sky-500"></i> Bahan & Cara Perawatan
                </span>
                <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
              </summary>
              <div class="mt-3 text-xs text-gray-600 dark:text-gray-300 space-y-2 border-t border-black/5 dark:border-white/10 pt-2">
                <p><b>Komposisi:</b> ${product.materials}</p>
                <ul class="list-disc pl-4 space-y-1">
                  ${product.careInstructions.map(c => `<li>${c}</li>`).join('')}
                </ul>
              </div>
            </details>

            <!-- Accordion 2: Kisah Pengrajin & Spirulina -->
            <details class="group rounded-xl p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-[#1E2050]/5 dark:border-white/10">
              <summary class="flex items-center justify-between font-bold text-xs md:text-sm cursor-pointer list-none">
                <span class="flex items-center gap-2">
                  <i data-lucide="users" class="w-4 h-4 text-emerald-500"></i> Kisah Pengrajin Cibuluh
                </span>
                <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
              </summary>
              <div class="mt-3 text-xs text-gray-600 dark:text-gray-300 space-y-2 border-t border-black/5 dark:border-white/10 pt-2">
                <p>${product.artisanStory}</p>
              </div>
            </details>

            <!-- Accordion 3: Pengiriman & Garansi Retur -->
            <details class="group rounded-xl p-3 bg-black/[0.02] dark:bg-white/[0.03] border border-[#1E2050]/5 dark:border-white/10">
              <summary class="flex items-center justify-between font-bold text-xs md:text-sm cursor-pointer list-none">
                <span class="flex items-center gap-2">
                  <i data-lucide="shield-check" class="w-4 h-4 text-indigo-500"></i> Garansi Retur 3 Hari & Pengiriman
                </span>
                <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
              </summary>
              <div class="mt-3 text-xs text-gray-600 dark:text-gray-300 space-y-2 border-t border-black/5 dark:border-white/10 pt-2">
                <p>• <b>Pengiriman:</b> Dikirim hari yang sama untuk order sebelum pukul 15.00 WIB dari Bogor.</p>
                <p>• <b>Garansi Ukuran:</b> Bebas tukar ukuran maksimal 3 hari kerja sejak produk diterima (syarat hangtag utuh & belum dicuci).</p>
                <p>• <b>Packaging:</b> 100% biodegradable Cassava Bag bebas plastik konvensional.</p>
              </div>
            </details>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-5 mt-4 border-t border-[#1E2050]/10 dark:border-white/15">
          <button 
            type="button" 
            onclick="toggleWishlist('${product.id}')"
            class="p-3.5 rounded-xl border border-[#1E2050]/20 dark:border-white/25 flex items-center justify-center transition-colors ${isWishlisted ? 'text-rose-500 bg-rose-500/10' : 'hover:bg-black/5 dark:hover:bg-white/10'
    }"
            title="Simpan ke Wishlist"
          >
            <i data-lucide="heart" class="w-5 h-5 ${isWishlisted ? 'fill-current' : ''}"></i>
          </button>

          <button 
            type="button" 
            onclick="addToCart('${product.id}', State.selectedSizeInModal, '${product.colors[State.selectedColorInModal].name}'); closeProductModal(); openCartDrawer();"
            class="flex-grow py-3.5 px-6 rounded-xl font-black text-xs md:text-sm uppercase tracking-wider bg-[#1E2050] text-white hover:bg-[#282A60] dark:bg-white dark:text-[#1E2050] dark:hover:bg-gray-100 transition-all duration-200 active:scale-98 shadow-xl flex items-center justify-center gap-2"
          >
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            Tambah ke Keranjang • ${formatIDR(product.price)}
          </button>
        </div>

      </div>

    </div>
  `;

  lucide.createIcons();
}

function setModalImageIndex(idx) {
  State.activeModalImageIndex = idx;
  const imgEl = document.getElementById('pdp-main-img');
  if (imgEl && State.activeProductModal) {
    imgEl.src = State.activeProductModal.images[idx];
  }
  renderProductModal();
}

function setModalColorIndex(idx) {
  State.selectedColorInModal = idx;
  renderProductModal();
}

function setModalSize(size) {
  State.selectedSizeInModal = size;
  renderProductModal();
}

// ==========================================
// 11. SIZE GUIDE MODAL
// ==========================================

function openSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  const backdrop = document.getElementById('size-guide-backdrop');
  if (!modal || !backdrop) return;

  renderSizeGuideTables();

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  modal.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
  modal.classList.add('pointer-events-auto', 'opacity-100', 'scale-100');
}

function closeSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  const backdrop = document.getElementById('size-guide-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  modal.classList.remove('pointer-events-auto', 'opacity-100', 'scale-100');
  modal.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
}

function switchSizeGuideTab(tab) {
  State.sizeGuideTab = tab;
  renderSizeGuideTables();
}

function renderSizeGuideTables() {
  const content = document.getElementById('size-guide-content');
  if (!content) return;

  const isAdult = State.sizeGuideTab === 'adult';

  content.innerHTML = `
    <!-- Tab Controls -->
    <div class="flex items-center p-1 rounded-xl bg-black/5 dark:bg-white/10 mb-5">
      <button 
        type="button" 
        onclick="switchSizeGuideTab('adult')"
        class="flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${isAdult
      ? 'bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] shadow-sm'
      : 'text-gray-500 hover:text-black dark:text-gray-300'
    }"
      >
        Ukuran Dewasa (S - XXL)
      </button>
      <button 
        type="button" 
        onclick="switchSizeGuideTab('kids')"
        class="flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${!isAdult
      ? 'bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] shadow-sm'
      : 'text-gray-500 hover:text-black dark:text-gray-300'
    }"
      >
        Ukuran Anak (4 - 14 Tahun)
      </button>
    </div>

    <!-- Tables -->
    ${isAdult ? `
      <div class="overflow-x-auto">
        <table class="w-full text-xs md:text-sm text-left border-collapse">
          <thead>
            <tr class="border-b border-[#1E2050]/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[11px] font-bold uppercase tracking-wider">
              <th class="py-3 px-3">Ukuran</th>
              <th class="py-3 px-3">Lebar Dada</th>
              <th class="py-3 px-3">Panjang Baju</th>
              <th class="py-3 px-3">Lebar Bahu</th>
              <th class="py-3 px-3">Panjang Lengan</th>
              <th class="py-3 px-3">Rekomendasi BB</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#1E2050]/10 dark:divide-white/10">
            <tr>
              <td class="py-3 px-3 font-bold">S</td>
              <td class="py-3 px-3">52 cm</td>
              <td class="py-3 px-3">70 cm</td>
              <td class="py-3 px-3">46 cm</td>
              <td class="py-3 px-3">24 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">45 - 58 kg</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">M</td>
              <td class="py-3 px-3">55 cm</td>
              <td class="py-3 px-3">72 cm</td>
              <td class="py-3 px-3">48 cm</td>
              <td class="py-3 px-3">25 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">58 - 68 kg</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">L</td>
              <td class="py-3 px-3">58 cm</td>
              <td class="py-3 px-3">74 cm</td>
              <td class="py-3 px-3">50 cm</td>
              <td class="py-3 px-3">26 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">68 - 78 kg</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">XL</td>
              <td class="py-3 px-3">61 cm</td>
              <td class="py-3 px-3">76 cm</td>
              <td class="py-3 px-3">52 cm</td>
              <td class="py-3 px-3">27 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">78 - 90 kg</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">XXL</td>
              <td class="py-3 px-3">64 cm</td>
              <td class="py-3 px-3">78 cm</td>
              <td class="py-3 px-3">54 cm</td>
              <td class="py-3 px-3">28 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">90 - 105 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    ` : `
      <div class="overflow-x-auto">
        <table class="w-full text-xs md:text-sm text-left border-collapse">
          <thead>
            <tr class="border-b border-[#1E2050]/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[11px] font-bold uppercase tracking-wider">
              <th class="py-3 px-3">Kelompok Usia</th>
              <th class="py-3 px-3">Lebar Dada</th>
              <th class="py-3 px-3">Panjang Baju</th>
              <th class="py-3 px-3">Lebar Bahu</th>
              <th class="py-3 px-3">Rekomendasi Tinggi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#1E2050]/10 dark:divide-white/10">
            <tr>
              <td class="py-3 px-3 font-bold">4 - 6 Tahun (S)</td>
              <td class="py-3 px-3">36 cm</td>
              <td class="py-3 px-3">46 cm</td>
              <td class="py-3 px-3">30 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">100 - 115 cm</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">7 - 9 Tahun (M)</td>
              <td class="py-3 px-3">40 cm</td>
              <td class="py-3 px-3">52 cm</td>
              <td class="py-3 px-3">33 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">116 - 130 cm</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">10 - 12 Tahun (L)</td>
              <td class="py-3 px-3">44 cm</td>
              <td class="py-3 px-3">58 cm</td>
              <td class="py-3 px-3">36 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">131 - 145 cm</td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-bold">13 - 14 Tahun (XL)</td>
              <td class="py-3 px-3">48 cm</td>
              <td class="py-3 px-3">64 cm</td>
              <td class="py-3 px-3">40 cm</td>
              <td class="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">146 - 158 cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}

    <!-- How to measure tip -->
    <div class="mt-5 p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400">
      <p class="font-bold text-[#1E2050] dark:text-white mb-1">💡 Tips Menentukan Ukuran:</p>
      <p>Jika kamu menyukai gaya <b>boxy / streetwear oversized</b> yang longgar, kami sarankan memilih 1 tingkat ukuran di atas ukuran normalmu.</p>
    </div>
  `;

  lucide.createIcons();
}

// ==========================================
// 12. WISHLIST DRAWER
// ==========================================

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-backdrop');
  if (!drawer || !backdrop) return;

  renderWishlistDrawer();

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  drawer.classList.remove('translate-x-full');
  drawer.classList.add('translate-x-0');
  document.body.classList.add('overflow-hidden');
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-backdrop');
  if (!drawer || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  drawer.classList.remove('translate-x-0');
  drawer.classList.add('translate-x-full');
  document.body.classList.remove('overflow-hidden');
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;

  const wishlistedProducts = PRODUCTS.filter(p => State.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center flex flex-col items-center justify-center">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-rose-500/10 text-rose-500 mb-4">
          <i data-lucide="heart" class="w-8 h-8"></i>
        </div>
        <h4 class="font-bold text-base">Wishlist Masih Kosong</h4>
        <p class="text-xs text-gray-400 max-w-xs mt-1">Klik ikon hati pada produk favoritmu untuk menyimpannya di sini.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = wishlistedProducts.map(product => `
    <div class="flex gap-3.5 p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#282A60] border border-[#1E2050]/10 dark:border-white/15">
      <img src="${product.images[0]}" class="w-20 h-24 rounded-xl object-cover flex-shrink-0" />
      <div class="flex flex-col justify-between flex-grow min-w-0">
        <div>
          <h5 class="font-bold text-xs md:text-sm leading-snug line-clamp-1">${product.name}</h5>
          <p class="text-xs font-black text-[#1E2050] dark:text-white mt-1">${formatIDR(product.price)}</p>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <button 
            type="button" 
            onclick="addToCart('${product.id}'); toggleWishlist('${product.id}');"
            class="px-3 py-1.5 rounded-lg bg-[#1E2050] text-white dark:bg-white dark:text-[#1E2050] text-xs font-bold flex items-center gap-1.5"
          >
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> +Keranjang
          </button>
          <button 
            type="button" 
            onclick="toggleWishlist('${product.id}')"
            class="text-xs text-rose-500 hover:underline p-1"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 13. LIVE SEARCH MODAL
// ==========================================

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const backdrop = document.getElementById('search-backdrop');
  const input = document.getElementById('search-live-input');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  modal.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
  modal.classList.add('pointer-events-auto', 'opacity-100', 'scale-100');

  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }

  handleSearchInput('');
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  const backdrop = document.getElementById('search-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  modal.classList.remove('pointer-events-auto', 'opacity-100', 'scale-100');
  modal.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
}

function handleSearchInput(query) {
  const q = query.toLowerCase().trim();
  const resultsContainer = document.getElementById('search-results-container');
  if (!resultsContainer) return;

  if (!q) {
    resultsContainer.innerHTML = `
      <div class="py-4 text-xs text-gray-400">
        <p class="font-bold text-[#1E2050] dark:text-white mb-2">Pencarian Populer Gen Z:</p>
        <div class="flex flex-wrap gap-2">
          ${['Kemeja Oversized', 'Spirulina Blue', 'Celana Wide Leg', 'Tote Bag Kanvas', 'Bandana Eco'].map(tag => `
            <button 
              type="button" 
              onclick="document.getElementById('search-live-input').value = '${tag}'; handleSearchInput('${tag}');"
              class="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 text-xs font-semibold text-[#1E2050] dark:text-white"
            >
              # ${tag}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="py-8 text-center text-xs text-gray-400">
        <p>Tidak ada produk yang cocok dengan pencarian "<b>${query}</b>".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div 
      onclick="closeSearchModal(); openProductModal('${p.id}');"
      class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
    >
      <img src="${p.images[0]}" class="w-12 h-14 rounded-lg object-cover flex-shrink-0" />
      <div class="flex-grow min-w-0">
        <h6 class="font-bold text-xs md:text-sm truncate">${p.name}</h6>
        <p class="text-[11px] text-gray-400">${p.category}</p>
      </div>
      <span class="font-black text-xs md:text-sm text-[#1E2050] dark:text-white">
        ${formatIDR(p.price)}
      </span>
    </div>
  `).join('');
}

// ==========================================
// 14. CHECKOUT MODAL & SIMULATOR
// ==========================================

function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast('Keranjang belanjamu masih kosong!', 'alert-circle');
    return;
  }

  closeCartDrawer();

  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('checkout-backdrop');
  if (!modal || !backdrop) return;

  renderCheckoutSummary();

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  modal.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
  modal.classList.add('pointer-events-auto', 'opacity-100', 'scale-100');
  document.body.classList.add('overflow-hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('checkout-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  modal.classList.remove('pointer-events-auto', 'opacity-100', 'scale-100');
  modal.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
  document.body.classList.remove('overflow-hidden');
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-order-summary');
  if (!container) return;

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * State.voucherDiscount);
  const total = Math.max(0, subtotal - discountAmount);
  const isFreeShipping = subtotal >= State.freeShippingThreshold;

  container.innerHTML = `
    <div class="space-y-2 mb-4 max-h-40 overflow-y-auto pr-1">
      ${State.cart.map(item => `
        <div class="flex items-center justify-between text-xs">
          <span class="truncate max-w-[200px]">${item.quantity}x ${item.name} (${item.size})</span>
          <span class="font-bold">${formatIDR(item.price * item.quantity)}</span>
        </div>
      `).join('')}
    </div>
    
    <div class="border-t border-[#1E2050]/10 dark:border-white/15 pt-3 space-y-1.5 text-xs">
      <div class="flex justify-between text-gray-500 dark:text-gray-400">
        <span>Subtotal</span>
        <span>${formatIDR(subtotal)}</span>
      </div>
      ${discountAmount > 0 ? `
        <div class="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
          <span>Diskon Voucher (${State.voucherCode})</span>
          <span>-${formatIDR(discountAmount)}</span>
        </div>
      ` : ''}
      <div class="flex justify-between text-gray-500 dark:text-gray-400">
        <span>Ongkos Kirim</span>
        <span class="${isFreeShipping ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}">
          ${isFreeShipping ? 'GRATIS (Promo Eco-Ship)' : 'Rp15.000'}
        </span>
      </div>
      <div class="flex justify-between text-base font-black pt-2 border-t border-black/5 dark:border-white/10">
        <span>Total Pembayaran</span>
        <span class="text-sky-600 dark:text-sky-300">${formatIDR(total + (isFreeShipping ? 0 : 15000))}</span>
      </div>
    </div>
  `;
}

function processPayment(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('pay-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>
      Memproses Transaksi Berkelanjutan...
    `;
    lucide.createIcons();
  }

  setTimeout(() => {
    // Clear cart
    State.cart = [];
    saveCart();
    updateCartCounters();

    closeCheckoutModal();
    triggerConfetti();

    // Open Success Modal
    openSuccessModal();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i data-lucide="lock" class="w-4 h-4"></i>
        Bayar Sekarang & Berdayakan Pengrajin
      `;
    }
  }, 1600);
}

function openSuccessModal() {
  const modal = document.getElementById('success-modal');
  const backdrop = document.getElementById('success-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('pointer-events-auto', 'opacity-100');

  modal.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
  modal.classList.add('pointer-events-auto', 'opacity-100', 'scale-100');
  document.body.classList.add('overflow-hidden');
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  const backdrop = document.getElementById('success-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.remove('pointer-events-auto', 'opacity-100');
  backdrop.classList.add('pointer-events-none', 'opacity-0');

  modal.classList.remove('pointer-events-auto', 'opacity-100', 'scale-100');
  modal.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
  document.body.classList.remove('overflow-hidden');
}

// ==========================================
// 15. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadCart();
  loadWishlist();
  updateCartCounters();
  updateWishlistCounters();
  renderProducts();
  renderLookbook();
  updateEcoCalculator(3);
  lucide.createIcons();
});


// Expose functions to window for inline HTML handlers
window.formatIDR = formatIDR;
window.showToast = showToast;
window.triggerConfetti = triggerConfetti;
window.initTheme = initTheme;
window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;
window.updateThemeVisuals = updateThemeVisuals;
window.addToCart = addToCart;
window.updateCartItemQty = updateCartItemQty;
window.removeCartItem = removeCartItem;
window.saveCart = saveCart;
window.loadCart = loadCart;
window.updateCartCounters = updateCartCounters;
window.toggleWishlist = toggleWishlist;
window.saveWishlist = saveWishlist;
window.loadWishlist = loadWishlist;
window.updateWishlistCounters = updateWishlistCounters;
window.filterCategory = filterCategory;
window.renderProducts = renderProducts;
window.renderLookbook = renderLookbook;
window.toggleHotspot = toggleHotspot;
window.switchLookbook = switchLookbook;
window.buyFullLook = buyFullLook;
window.updateEcoCalculator = updateEcoCalculator;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.renderCartDrawer = renderCartDrawer;
window.applyVoucher = applyVoucher;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.renderProductModal = renderProductModal;
window.setModalImageIndex = setModalImageIndex;
window.setModalColorIndex = setModalColorIndex;
window.setModalSize = setModalSize;
window.openSizeGuideModal = openSizeGuideModal;
window.closeSizeGuideModal = closeSizeGuideModal;
window.switchSizeGuideTab = switchSizeGuideTab;
window.renderSizeGuideTables = renderSizeGuideTables;
window.openWishlistDrawer = openWishlistDrawer;
window.closeWishlistDrawer = closeWishlistDrawer;
window.renderWishlistDrawer = renderWishlistDrawer;
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.handleSearchInput = handleSearchInput;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.renderCheckoutSummary = renderCheckoutSummary;
window.processPayment = processPayment;
window.openSuccessModal = openSuccessModal;
window.closeSuccessModal = closeSuccessModal;

window.State = State;

window.PRODUCTS = PRODUCTS;
