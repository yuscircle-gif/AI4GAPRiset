import { BonusItem, FaqItem, ModuleItem, PainPoint, WorkflowStep } from '../types';

export const MAIN_PRODUCT = {
  title: "Unlock Research Potential: Panduan Cepat Temu Research Gap & Novelty dengan Kombinasi NotebookLM + ChatGPT",
  shortTitle: "Unlock Research Potential",
  normalPrice: 149000,
  promoPrice: 49000,
  savingsPercent: 67,
  totalBonusValue: 397000,
  grandTotalValue: 546000,
  coverImage: "/assets/aistudio/Cover_2_9f6c1c4e.jpg",
  pageCount: "138 Halaman A4 E-Book Interaktif",
  format: "High-Resolution PDF + Notational Prompts Library + Excel/Sheets Matrix Template",
  targetAudience: "Dosen, Peneliti, Mahasiswa Pascasarjana (S2/S3) & Mahasiswa Tingkat Akhir (Skripsi/Tesis)"
};

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "literature-overload",
    quote: "\"Folder download saya penuh ratusan PDF, tapi semakin banyak membaca, saya justru makin bingung merangkumnya.\"",
    title: "Terjebak 'Literature Overload' Tanpa Ujung",
    description: "Membaca puluhan hingga ratusan artikel jurnal internasional secara manual menghabiskan waktu berminggu-minggu, sering kali berakhir dengan catatan yang tercecer, lelah kognitif, dan tanpa draf tulisan yang konkret.",
    impact: "Waktu terbuang 3–6 bulan hanya untuk membaca tanpa arah matriks yang jelas."
  },
  {
    id: "hard-to-prove-novelty",
    quote: "\"Dosen penguji atau reviewer jurnal selalu bilang: 'Penelitian Anda hanya mengulang riset sebelumnya, mana kebaruannya?'\"",
    title: "Sulit Membuktikan Kebaruan (Novelty) yang Kokoh",
    description: "Menemukan celah riset yang benar-benar belum diteliti membutuhkan perbandingan metodologis dan teoretis yang sangat teliti. Tanpa kerangka terstruktur, Anda rentan menyajikan gap semu yang mudah dipatahkan saat sidang atau peer-review.",
    impact: "Draf proposal ditolak, revisi berulang kali, atau status 'Desk Reject' dari jurnal Scopus/SINTA."
  },
  {
    id: "ai-hallucination-fear",
    quote: "\"Pernah minta ChatGPT carikan referensi, ternyata judul paper dan DOI-nya fiktif! Saya takut integritas akademik saya hancur.\"",
    title: "Trauma Halusinasi & Sitasi Palsu dari AI Generik",
    description: "Menggunakan AI publik secara langsung untuk tinjauan pustaka sangat berisiko. AI sering kali 'mengarang bebas' sitasi, nama penulis, dan angka temuan yang tidak pernah ada di dunia nyata.",
    impact: "Risiko pelanggaran etika akademik dan hilangnya kredibilitas di hadapan dewan penguji."
  },
  {
    id: "semester-delay",
    quote: "\"Target lulus semester ini terancam meleset hanya karena Bab 1 & 2 macet di perumusan gap riset.\"",
    title: "Stagnasi Akademik & Biaya Kuliah yang Terus Berjalan",
    description: "Setiap semester yang tertunda berarti SPP/UKT tambahan, penundaan promosi jabatan fungsional dosen, serta beban psikologis yang berat bagi keluarga dan karier profesional Anda.",
    impact: "Biaya jutaan rupiah terbuang untuk SPP tambahan dan hilangnya peluang hibah riset."
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Kurasi Presisi Koleksi Literatur",
    tool: "Dimensions.ai",
    role: "Kurator Data Ilmiah Primer",
    timeTaken: "20 Menit",
    manualTime: "3–5 Hari",
    action: "Menyaring artikel Open Access 3 tahun terakhir dengan filter Field Citation Ratio (FCR) dan sub-disiplin presisi.",
    samplePromptOrAction: "Filter: Publication Year [2023-2026] + Open Access + Research Categories + Source Type [Peer-reviewed Journals]",
    outputArtifact: "Kumpulan 20–30 PDF inti paling relevan & bereputasi tinggi siap ekstraksi."
  },
  {
    step: "02",
    title: "Ekstraksi Matriks Komparatif Tanpa Halusinasi",
    tool: "Google NotebookLM",
    role: "Analis Ekstraksi Grounded (Bebas Halusinasi)",
    timeTaken: "25 Menit",
    manualTime: "1–2 Minggu",
    action: "NotebookLM memproses seluruh 20-30 paper secara simultan dengan sistem sitasi tertutup berbasis halaman asli.",
    samplePromptOrAction: "\"Ekstraksi ke dalam tabel perbandingan: (1) Tujuan Riset, (2) Metodologi & Sampel, (3) Temuan Kunci, (4) Keterbatasan yang diakui penulis, dan (5) Rekomendasi masa depan. Sertakan kutipan sitasi nomor halaman untuk setiap baris.\"",
    outputArtifact: "Matriks Komparasi Sintesis lengkap dengan nomor rujukan halaman verbatim."
  },
  {
    step: "03",
    title: "Sintesis Lintas Paper & Perumusan 3 Gap",
    tool: "ChatGPT (Prompt Chain Terstruktur)",
    role: "Arsitek Sintesis & Evaluator Kebaruan",
    timeTaken: "30 Menit",
    manualTime: "2–3 Minggu",
    action: "Menganalisis pola cross-paper dari matriks NotebookLM untuk merumuskan Gap Teoretis, Gap Metodologis, dan Gap Praktis.",
    samplePromptOrAction: "\"Berdasarkan matriks terlampir, rumuskan 3 Gap Teoretis, 2 Gap Metodologis, dan 2 Gap Kontekstual/Praktis. Lakukan scoring Feasibility (1-10) dan Publishability (1-10) untuk masing-masing gap.\"",
    outputArtifact: "Daftar 5 kandidat Research Gap terverifikasi dengan skor kelayakan eksekusi."
  },
  {
    step: "04",
    title: "Visualisasi Posisi Riset & Draf Naskah Ilmiah",
    tool: "Mind Map & Matriks Justifikasi",
    role: "Formulator Naskah Siap Jurnal / Proposal",
    timeTaken: "45 Menit",
    manualTime: "1 Minggu",
    action: "Menyusun peta posisi riset (visual positioning map) dan mengonversinya menjadi paragraf 'The Present Study' yang elegan.",
    samplePromptOrAction: "\"Formula 4-Paragraf Novelty: (1) Status Quo Literasi, (2) Keterbatasan Konsensus Saat Ini, (3) Gap Spesifik yang Diintervensi, (4) Kontribusi Unik Riset Ini.\"",
    outputArtifact: "Diagram Mind Map posisi riset + 3 halaman draf justifikasi novelty siap masuk Bab 1 / Naskah Scopus."
  }
];

export const MODULES: ModuleItem[] = [
  {
    number: "01",
    title: "Kurasi Presisi dengan Dimensions.ai: Mengunci 20 Paper Inti dalam 20 Menit",
    description: "Cara mengidentifikasi artikel paling berpengaruh 3 tahun terakhir tanpa terjebak ribuan hasil pencarian tak relevan.",
    topics: [
      "Strategi boolean query berbasis topik tesis/disertasi",
      "Pemanfaatan filter Open Access & Field Citation Ratio (FCR)",
      "Ekspor metadata dan penataan repositori PDF yang rapi untuk pemrosesan AI"
    ],
    output: "Koleksi 20-30 paper kunci terkurasi berstandar internasional",
    tools: ["Dimensions.ai", "Zotero / Folder Repositori"]
  },
  {
    number: "02",
    title: "Arsitektur Google NotebookLM: Ekstraksi Data Matriks Tanpa Halusinasi",
    description: "Memanfaatkan teknologi Grounded RAG Google untuk membaca puluhan paper sekaligus dengan verifikasi halaman asli.",
    topics: [
      "Setup workspace NotebookLM untuk proyek proposal/tesis",
      "Formula prompt ekstraksi: Metode, Objek/Subjek, Variabel, Temuan Kunci, & Keterbatasan",
      "Cara melacak kutipan verbatim ke nomor halaman paper asli (Zero Hallucination Proof)"
    ],
    output: "Matriks perbandingan literatur (literature comparative matrix) siap pakai",
    tools: ["Google NotebookLM (100% Gratis)"]
  },
  {
    number: "03",
    title: "Prompt Engineering Sintesis Gap: Membongkar 3 Lapis Kebaruan",
    description: "Mengoperasikan ChatGPT sebagai partner intelektual untuk menemukan celah yang luput dari peneliti lain.",
    topics: [
      "Mendeteksi Gap Teoretis (teori yang bertolak belakang atau belum teruji)",
      "Mendeteksi Gap Metodologis (keterbatasan instrumen, sampel, atau teknik analisis lama)",
      "Mendeteksi Gap Kontekstual/Praktis (perbedaan lokus geografis, budaya, regulasi industri)",
      "Matriks Skoring: Mengukur Feasibility (dapat dieksekusi) vs Publishability (potensi diterima jurnal)"
    ],
    output: "Daftar 3-5 Research Gap berdaya saing tinggi lengkap dengan justifikasi ilmiah",
    tools: ["ChatGPT (Free/Plus Tier)"]
  },
  {
    number: "04",
    title: "Visualisasi Posisi Riset: Mengubah Gap Menjadi Mind Map & Flowchart",
    description: "Membuat representasi visual yang meyakinkan penguji dan reviewer tentang di mana posisi riset Anda berdiri.",
    topics: [
      "Mengubah data sintesis menjadi prompt visual Mermaid.js dan diagram alur",
      "Memetakan State of the Art vs Our Proposed Study secara grafis",
      "Membuat tabel 'Matriks Justifikasi Kebaruan' untuk lampiran proposal"
    ],
    output: "Grafik posisi riset dan flowchart alur konseptual",
    tools: ["ChatGPT", "Mermaid.js / Draw.io / Miro"]
  },
  {
    number: "05",
    title: "Artikulasi Akademik: Menuliskan Novelty ke Bab 1 & Naskah Jurnal Bereputasi",
    description: "Template kalimat dan struktur paragraf pengantar yang meyakinkan reviewer Scopus dan dewan penguji.",
    topics: [
      "Formulasi paragraf 'The Present Study' berstandar jurnal Q1/Q2",
      "Teknik menulis kalimat transisi dari keterbatasan literatur masa lalu menuju kontribusi Anda",
      "Checklist audit mandiri: Apakah novelty Anda sudah kedap bantahan?"
    ],
    output: "Draf teks justifikasi novelty Bab 1 / Paper siap dikonsultasikan ke promotor",
    tools: ["Template Formulir Tulisan Akademik"]
  }
];

export const BONUS_STACK: BonusItem[] = [
  {
    id: "bonus-1",
    badge: "BONUS #1 (E-BOOK EKSKLUSIF)",
    title: "Panduan Praktis Pemetaan Research Gap & Novelty dengan VOSviewer, Mendeley, & Publish or Perish",
    subtitle: "Validasi Bibliometrik Visual, Bukti Jaringan Sitasi, dan Pemetaan Klaster Topik yang Belum Padat Diteliti",
    originalPrice: 149000,
    highlightBenefit: "Sajikan bukti visual scientific landscape kepada penguji bahwa topik Anda benar-benar belum ramai dieksplorasi.",
    deliverables: [
      "Tutorial langkah-demi-langkah Publish or Perish (PoP) untuk scraping metadata Scopus, CrossRef, & Google Scholar",
      "Teknik visualisasi co-occurrence kata kunci dan co-authorship di VOSviewer",
      "Cara menemukan 'Klaster Sepi' (Under-explored clusters) sebagai bukti empiris novelty",
      "Sinkronisasi mulus ke Mendeley Reference Manager untuk sitasi instan"
    ],
    toolsUsed: ["VOSviewer", "Publish or Perish", "Mendeley"]
  },
  {
    id: "bonus-2",
    badge: "BONUS #2 (E-BOOK EKSKLUSIF)",
    title: "Panduan Mencari Referensi Utama & Research Gap dengan 3 AI: Claude, Consensus & ResearchRabbit",
    subtitle: "Triad Riset AI untuk Verifikasi Fakta Lintas 200 Juta+ Artikel Ilmiah Peer-Reviewed Bebas Halusinasi",
    originalPrice: 149000,
    highlightBenefit: "Kombinasi 3 mesin cerdas untuk melacak 'akar silsilah' penelitian dan memverifikasi klaim ilmiah dalam detik.",
    deliverables: [
      "ResearchRabbit: Membuat 'Spotify for Research' untuk melacak jejaring paper terhubung (Earlier & Later Works)",
      "Consensus.ai: Mesin pencari AI berbasis konsensus 200 juta paper dengan 'Consensus Meter' ilmiah",
      "Claude AI: Analisis dokumen panjang berkapasitas 200k token untuk sintesis bab metodologi",
      "Kombinasi workflow triad untuk memvalidasi setiap kutipan sebelum dimasukkan ke naskah"
    ],
    toolsUsed: ["Consensus.ai", "ResearchRabbit", "Claude AI"]
  },
  {
    id: "bonus-3",
    badge: "BONUS #3 (E-BOOK EKSKLUSIF)",
    title: "Open Knowledge Maps: Panduan Cepat Visualisasi Klaster Riset & Celah Penelitian",
    subtitle: "Cara Instan Melihat Peta Literatur Open Access Tanpa Harus Membaca Ratusan Artikel Satu per Satu",
    originalPrice: 99000,
    highlightBenefit: "Dapatkan 'helikopter view' dari seluruh lanskap pengetahuan dalam 1 peta gelembung visual interaktif.",
    deliverables: [
      "Panduan membuat peta pengetahuan berbasis 100 artikel open access teratas dalam hitungan detik",
      "Cara membaca gelembung topik dan mengidentifikasi area yang belum tersambung (inter-cluster gaps)",
      "Teknik menemukan paper seminal (buku babon/paper perintis) yang wajib disitir di tesis Anda",
      "Integrasi tangkapan layar peta ke dalam proposal sebagai pembuktian visual State of the Art"
    ],
    toolsUsed: ["Open Knowledge Maps (Web Platform Gratis)"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Apakah panduan ini cocok untuk pemula yang belum pernah memakai AI sama sekali?",
    answer: "Sangat cocok! E-book ini disusun dengan pendekatan tutorial praktis langkah-demi-langkah (step-by-step with screenshots). Anda tidak memerlukan latar belakang teknologi atau coding sama sekali. Cukup ikuti panduan klik dan gunakan template prompt bahasa Indonesia/Inggris yang sudah kami sediakan."
  },
  {
    question: "Apakah saya wajib berlangganan akun ChatGPT Plus (berbayar) atau tools lainnya?",
    answer: "TIDAK PERLU. 100% alur kerja utama dalam panduan ini dirancang menggunakan tools yang sepenuhnya GRATIS: Google NotebookLM (100% gratis dengan akun Google), Dimensions.ai (fitur gratis sangat lengkap), ChatGPT Free Tier (GPT-4o mini gratis), VOSviewer (gratis open source), Publish or Perish (gratis), dan Open Knowledge Maps (gratis). Anda tidak perlu mengeluarkan biaya langganan bulanan sepeser pun."
  },
  {
    question: "Apakah aman dari tuduhan plagiasi atau detektor AI oleh kampus/jurnal?",
    answer: "Sangat aman. Metode ini mengajarkan penggunaan AI sebagai 'asisten ekstraksi dan komparator logis', BUKAN untuk menyalin-tempel teks fiktif. Seluruh data yang diekstraksi bersumber langsung dari paper riil yang Anda upload ke NotebookLM dengan nomor halaman resmi. Anda tetap menulis dengan gaya ilmiah Anda sendiri menggunakan matriks fakta yang sudah terverifikasi."
  },
  {
    question: "Apa saja format berkas yang akan saya terima setelah pembelian?",
    answer: "Anda akan mendapatkan berkas High-Resolution PDF untuk E-Book Utama dan ke-3 E-Book Bonus yang nyaman dibaca di laptop, tablet, maupun smartphone. Selain itu, Anda juga menerima akses ke Google Docs Prompt Repository (50+ prompt tinggal copy-paste) dan Template Spreadsheet Matriks Perbandingan Literatur."
  },
  {
    question: "Bagaimana cara mengakses 3 E-Book Bonusnya?",
    answer: "Semua bonus (Bonus #1, Bonus #2, dan Bonus #3) telah dikemas langsung di dalam satu bundle folder Google Drive eksklusif. Begitu pembayaran terverifikasi otomatis, tautan akses instan akan langsung dikirimkan ke email dan nomor WhatsApp Anda detik itu juga."
  },
  {
    question: "Bisakah digunakan untuk semua bidang ilmu (Sosial, Humaniora, Teknik, Kesehatan, dll.)?",
    answer: "Bisa! Metodologi komparasi NotebookLM dan sintesis Dimensions.ai bersifat universal. Telah diuji dan sukses diterapkan pada bidang Manajemen, Pendidikan, Ilmu Komputer, Teknik Elektro, Hukum, Ilmu Komunikasi, hingga Farmasi dan Kedokteran."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Hendra Wijaya, M.T.",
    role: "Dosen & Peneliti Teknik Informatika",
    institution: "Universitas Negeri di Yogyakarta",
    avatar: "HW",
    rating: 5,
    text: "Sebagai dosen yang membimbing belasan mahasiswa S2, saya selalu kehabisan waktu membedah draft mereka yang miskin kebaruan. Workflow NotebookLM di e-book ini benar-benar revolusioner: mahasiswa saya suruh upload 25 paper acuan, ekstraksi matriksnya, dan dalam 2 hari gap metodologisnya langsung terlihat jelas!"
  },
  {
    name: "Siti Rahmawati, M.Si.",
    role: "Kandidat Doktor (S3) Manajemen",
    institution: "Universitas Brawijaya",
    avatar: "SR",
    rating: 5,
    text: "Proposal disertasi saya sempat tertunda hampir 8 bulan karena promotor terus menanyakan 'dimana novelty-nya?'. Setelah membaca modul 3 dan bonus VOSviewer, saya bisa membuktikan adanya klaster variabel yang belum pernah diteliti di konteks Asia Tenggara. Akhirnya proposal saya disetujui tanpa revisi mayor!"
  },
  {
    name: "Rian Prasetyo, S.Pd.",
    role: "Mahasiswa Magister (S2) Pendidikan",
    institution: "Universitas Pendidikan Indonesia",
    avatar: "RP",
    rating: 5,
    text: "Dulu trauma pakai ChatGPT karena pernah disemprot dosen gara-gara sitasinya fiktif. Di e-book ini saya baru tahu rahasia memakai NotebookLM: sitasinya terkunci rapat ke nomor halaman asli. Harganya Rp 49.000 tapi dampaknya jauh lebih berharga dari bimbingan privat jutaan rupiah."
  }
];

export const SAMPLE_SIMULATION_DATA = {
  paperTopic: "Penerapan Blended Learning Berbasis Gamifikasi pada Kemandirian Belajar Siswa",
  extractedGaps: [
    {
      type: "Gap Metodologis",
      title: "Dominasi Metode Kuantitatif Cross-Sectional Jangka Pendek",
      evidence: "Dari 24 paper terindeks Scopus (2023-2025), 88% hanya meneliti dampak gamifikasi dalam rentang waktu < 8 minggu (NotebookLM Source #3, #11, #19).",
      noveltyRecommendation: "Lakukan studi quasi-experimental longitudinal selama minimal 1 semester akademik dengan evaluasi retensi berkala.",
      feasibilityScore: 9.2,
      publishabilityScore: 9.5
    },
    {
      type: "Gap Teoretis",
      title: "Minimnya Integrasi Self-Determination Theory (SDT) dengan Cognitive Load Theory",
      evidence: "Sebagian besar artikel hanya mengukur motivasi intrinsik tanpa mengontrol beban kognitif pada antarmuka permainan edukatif (NotebookLM Source #7, #14).",
      noveltyRecommendation: "Bangun model struktural terintegrasi yang memediasi beban kognitif germane terhadap motivasi intrinsik.",
      feasibilityScore: 8.8,
      publishabilityScore: 9.4
    },
    {
      type: "Gap Kontekstual / Praktis",
      title: "Kesenjangan Infrastruktur pada Wilayah Semi-Urban / Berkembang",
      evidence: "Hampir seluruh model acuan diuji di negara maju dengan bandwidth stabil dan perangkat 1-to-1 siswa (NotebookLM Source #2, #5, #18).",
      noveltyRecommendation: "Uji efektivitas model blended gamifikasi hybrid (asynchronous low-bandwidth) di sekolah semi-urban Indonesia.",
      feasibilityScore: 9.5,
      publishabilityScore: 9.0
    }
  ]
};
