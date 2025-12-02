/* ==========================================================================
   ORIGINAL SCRIPT.JS CONTENT (PRESERVED)
   ========================================================================== */

   function toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

    if (window.innerWidth <= 900) {

    }
}


window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}


let userTier = 'free'; 


const tierLevels = {
    'free': 0,
    'basic': 1,
    'pro': 2
};

const ebooks = [{
        id: 1,
        title: 'Cashflow Quadrant',
        category: 'Finance',
        desc: 'Panduan Robert Kiyosaki tentang 4 tipe penghasil uang (E, S, B, I) dan cara beralih ke kuadran B (Bisnis) dan I (Investor).',
        coverText: 'CQ',
        imgUrl: 'assets/images/cover_CQ.jpg',
        file: 'https://drive.google.com/file/d/1_NUoE0To3VKEpiQgo6EktdwLDPpZ0d7x/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 2,
        title: 'CTK',
        category: 'Money',
        desc: 'Panduan praktis dan strategi jitu untuk mengelola keuangan pribadi Anda sehari-hari agar lebih efektif dan terarah.',
        coverText: 'CT',
        imgUrl: 'assets/images/cover_CT.png',
        file: 'https://drive.google.com/file/d/1aLYjgpdZCpfEIUiABbQkhcvYD1b3Uq0k/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 3,
        title: 'The Ricshest Man in Babylon',
        category: 'Finance',
        desc: 'Kumpulan perumpamaan dari Babilonia kuno yang mengajarkan prinsip abadi tentang menabung, mengelola utang, dan berinvestasi.',
        coverText: 'TB',
        imgUrl: 'assets/images/cover_TB.png',
        file: 'https://drive.google.com/file/d/1ZykyRcAfEWhSNso-vfphiWRYteGTeHQt/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 4,
        title: 'Rich Dad Poor Dad',
        category: 'Money',
        desc: 'Buku klasik yang membandingkan pola pikir "Ayah Kaya" dan "Ayah Miskin" tentang uang, aset, dan literasi finansial.',
        coverText: 'RD',
        imgUrl: 'assets/images/cover_RD.jpg',
        file: 'https://drive.google.com/file/d/1i9PDKpmC9bc9Y42UdMDM_lcIDq7PYyTU/view?usp=drive_link',
        access: 'pro',
        isRecommended: true
    },
    {
        id: 5,
        title: 'TIA Research',
        category: 'Finance',
        desc: 'Laporan riset mendalam mengenai tren keuangan terbaru, analisis pasar, dan proyeksi ekonomi untuk keputusan strategis.',
        coverText: 'TR',
        imgUrl: 'assets/images/cover_TR.png',
        file: 'https://drive.google.com/file/d/1CLLYbZEbrpXBqtB8KI4LZNQXvqus2bv5/view?usp=drive_link',
        access: 'pro',
        isRecommended: true
    },
    {
        id: 6,
        title: 'Kebebasan Financial',
        category: 'Finance',
        desc: 'Sebuah panduan strategi untuk mencapai kebebasan finansial, mulai dari mengelola utang hingga membangun arus pendapatan pasif.',
        coverText: 'KF',
        imgUrl: 'assets/images/cover_KF.png',
        file: 'https://drive.google.com/file/d/1ZqlK6xCKw0cPChuh9Yoj1nBwim82y-gj/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 7,
        title: 'Crypto These For 2024',
        category: 'Finance',
        desc: 'Prediksi crypto teratas untuk 2024. Aset digital dan tren yang wajib Anda pantau di kategori Finance.',
        coverText: 'C2',
        imgUrl: 'assets/images/cover_C2.png',
        file: 'https://drive.google.com/file/d/1grtbClBRw7y9dASxKhtraNV914w_yRd-/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 8,
        title: 'Candlestick Bible',
        category: 'Investment',
        desc: 'Panduan komprehensif untuk trader dalam membaca dan menginterpretasi berbagai pola candlestick untuk analisis teknikal.',
        coverText: 'CB',
        imgUrl: 'assets/images/cover_CB.png',
        file: 'https://drive.google.com/file/d/12yIJZYuRBDWmarLur_XZKZBxOwrt9Jd9/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 9,
        title: 'How to Trade with Price Action',
        category: 'Investment',
        desc: 'Strategi trading yang berfokus pada analisis pergerakan harga murni (price action) tanpa bergantung pada indikator.',
        coverText: 'HT',
        imgUrl: 'assets/images/cover_HT.png',
        file: 'https://drive.google.com/file/d/1ynX1K-qGTADd8kIqDS0xw6TBatHZ_1q6/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 10,
        title: 'AC Research',
        category: 'Investment',
        desc: 'Kumpulan data dan analisis riset eksklusif mengenai peluang investasi, valuasi aset, dan sektor-sektor yang berpotensi.',
        coverText: 'AC',
        imgUrl: 'assets/images/cover_AC.png',
        file: 'https://drive.google.com/file/d/15ZMKVVyvgFMhvSWBloD-II-iEC4lDes2/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 11,
        title: 'SMC Davinci',
        category: 'Investment',
        desc: 'Panduan mendalam tentang strategi trading \'Smart Money Concept\' (SMC), berfokus pada likuiditas dan struktur pasar.',
        coverText: 'SD',
        imgUrl: 'assets/images/cover_SD.png',
        file: 'https://drive.google.com/file/d/1bjqimRx-qOK3Au5rZd7gLmOvgHjyvQdM/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 12,
        title: 'Supply and Demand by Uncensored Trader',
        category: 'Investment',
        desc: 'Metode trading yang berfokus pada identifikasi zona Supply (penawaran) dan Demand (permintaan) di pasar.',
        coverText: 'ST',
        imgUrl: 'assets/images/cover_ST.png',
        file: 'https://drive.google.com/file/d/187CqMumpdNaQCr3U580oo82rgVqjTe8T/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 13,
        title: 'Technical Analiysis For Mega Profit',
        category: 'Investment',
        desc: 'Kumpulan teknik dan strategi analisis teknikal untuk mengidentifikasi tren dan peluang profit di pasar saham atau forex.',
        coverText: 'TA',
        imgUrl: 'assets/images/cover_TA.png',
        file: 'https://drive.google.com/file/d/1IuISTMU5q8B3kpzZS9eI3xZF_xb0DVL8/view?usp=drive_link',
        access: 'basic',
        isRecommended: true
    },
    {
        id: 14,
        title: 'Trade Your Way to Financial Fredom',
        category: 'Investment',
        desc: 'Karya klasik Van K. Tharp yang fokus pada psikologi trading, manajemen risiko, dan position sizing untuk profit konsisten.',
        coverText: 'TY',
        imgUrl: 'assets/images/cover_TY.png',
        file: 'https://drive.google.com/file/d/1Q2Fk7dfslcm7a72WW8giLTaZQ63pKw61/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 15,
        title: 'Dark Psychology The Partical Uses and Best Defenses of Psychological Warfare in Everyday Life',
        category: 'Psychology',
        desc: 'Menjelajahi sisi gelap psikologi, termasuk teknik manipulasi, persuasi, dan cara bertahan dari perang psikologis sehari-hari.',
        coverText: 'DP',
        imgUrl: 'assets/images/cover_DP.png',
        file: 'https://drive.google.com/file/d/1x3uVO9i-kj0jay1hqomY_Kd1SJzQqb-H/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 16,
        title: 'The Communication Book 44 Ideas for Better Conversations Every Day',
        category: 'Psychology',
        desc: 'Kumpulan 44 ide praktis untuk meningkatkan keterampilan komunikasi, percakapan, dan interaksi sosial Anda setiap hari.',
        coverText: 'TC',
        imgUrl: 'assets/images/cover_TC.png',
        file: 'https://drive.google.com/file/d/1_vl6fCiwLwBYHx9hWCDchuT_Er7JQg6i/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 17,
        title: 'The Psychology of Money',
        category: 'Psychology',
        desc: 'Buku populer oleh Morgan Housel yang menjelaskan bahwa kesuksesan finansial lebih tentang perilaku daripada kecerdasan teknis.',
        coverText: 'TM',
        imgUrl: 'assets/images/cover_TM.png',
        file: 'https://drive.google.com/file/d/18EBB-ws_fHWsqJVOK_YWEB39ver2a-dU/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 18,
        title: 'Think and Grow Rich',
        category: 'Psychology',
        desc: 'Karya klasik Napoleon Hill yang menguraikan 13 langkah menuju kesuksesan, berfokus pada kekuatan pikiran dan mindset positif.',
        coverText: 'TG',
        imgUrl: 'assets/images/cover_TG.png',
        file: 'https://drive.google.com/file/d/16LRm8ZWxGu9xvdHQf0YHHzHP2MOF_IUm/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 19,
        title: 'How To Win Friends Influence People In The Digital Age',
        category: 'Psychology',
        desc: 'Adaptasi modern dari buku klasik Dale Carnegie untuk menjalin hubungan dan berkomunikasi di era digital dan media sosial.',
        coverText: 'HI',
        imgUrl: 'assets/images/cover_HI.png',
        file: 'https://drive.google.com/file/d/1HBMr-e1rCpB5vssSUvqdhT_yt7BHFIBz/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 20,
        title: 'Copywriting Revolution',
        category: 'Psychology',
        desc: 'Panduan modern tentang seni *copywriting* yang persuasif, menggabungkan psikologi penjualan dengan teknik menulis era digital.',
        coverText: 'CR',
        imgUrl: 'assets/images/cover_CR.png',
        file: 'https://drive.google.com/file/d/1emXja7c8em7xi501AuNKFvyUCPcMRNnK/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 21,
        title: 'The Art of Manipulation',
        category: 'Psychology',
        desc: 'Mengungkap teknik-teknik manipulasi psikologis, cara kerjanya, dan bagaimana cara mengenali serta melawannya.',
        coverText: 'AM',
        imgUrl: 'assets/images/cover_AM.png',
        file: 'https://drive.google.com/file/d/13mVN741BIZnBQls5UDOZT755uYPU4NtF/view?usp=drive_link',
        access: 'basic',
        isRecommended: true
    },
    {
        id: 22,
        title: 'You Are a Badass at Making Money Master',
        category: 'Psychology',
        desc: 'Panduan motivasional oleh Jen Sincero untuk mengatasi \'mental block\' dan ketakutan Anda seputar uang agar bisa kaya.',
        coverText: 'YB',
        imgUrl: 'assets/images/cover_YB.png',
        file: 'https://drive.google.com/file/d/1HIVQ7jcXx8sJrmvPygF-MV1cYOk9z9WS/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 23,
        title: 'Profit Konsisten (Ichimoku Kinko Hyo)',
        category: 'Investment',
        desc: 'Pelajari strategi trading profit konsisten menggunakan indikator teknikal Ichimoku Kinko Hyo.',
        coverText: 'CP',
        imgUrl: 'assets/images/cover_CP.png',
        file: 'https://drive.google.com/file/d/1PZHRilrqNLiY6dkNe9JIvw8wHQTclUtk/view?usp=drive_link',
        access: 'basic',
        isRecommended: true
    },
    {
        id: 24,
        title: 'Basic Trading',
        category: 'Investment',
        desc: 'Panduan dasar dan pengenalan fundamental untuk memulai trading bagi pemula.',
        coverText: 'BE',
        imgUrl: 'assets/images/cover_BE.png',
        file: 'https://drive.google.com/file/d/1UBTH_4EpWAiOy1LgZZvh05kSKXqviPmR/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 25,
        title: 'Belajar Trading Untuk Pemula',
        category: 'Investment',
        desc: 'Mulai perjalanan Anda di dunia trading dari nol. Panduan langkah demi langkah untuk pemula.',
        coverText: 'BTU',
        imgUrl: 'assets/images/cover_BTU.png',
        file: 'https://drive.google.com/file/d/1S6YaRN2d2yxMG7vhEd1afT2dw3jcVu_9/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 26,
        title: 'Binance Academy Cryptocurrency',
        category: 'Investment',
        desc: 'Kumpulan materi edukasi lengkap seputar dunia cryptocurrency dari Binance Academy.',
        coverText: 'BAC',
        imgUrl: 'assets/images/cover_BAC.png',
        file: 'https://drive.google.com/file/d/1q_lsq3-sz05uwAWM8H6EH7e8yELbPl-f/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 27,
        title: 'Crypto Cash Machine',
        category: 'Investment',
        desc: 'Temukan strategi dan metode untuk membangun aliran pendapatan dari aset crypto.',
        coverText: 'CCM',
        imgUrl: 'assets/images/cover_CCM.png',
        file: 'https://drive.google.com/file/d/1RjKVY_7mKezxYrPp1eWyRPcB1DPnl4pq/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 28,
        title: 'Kamus Candlestick',
        category: 'Investment',
        desc: 'Referensi lengkap berbagai pola candlestick dan interpretasinya dalam analisis trading.',
        coverText: 'KC',
        imgUrl: 'assets/images/cover_KC.png',
        file: 'https://drive.google.com/file/d/1fpNzRz07aknaP_Oq0uR6z0_h29hcoMsb/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 29,
        title: 'Crypto Investing Principles',
        category: 'Investment',
        desc: 'Pahami prinsip-prinsip inti dan fundamental untuk berinvestasi di pasar crypto.',
        coverText: 'CIP',
        imgUrl: 'assets/images/cover_CIP.png',
        file: 'https://drive.google.com/file/d/1wUIQkg0Ixim0DEZYPtSho-pA9A_FimSj/view?usp=drive_linkk',
        access: 'pro',
        isRecommended: true
    },
    {
        id: 30,
        title: 'Cara Cepat Membaca Bahasa Tubuh',
        category: 'Psychology',
        desc: 'Panduan praktis untuk menginterpretasi dan memahami makna di balik bahasa tubuh.',
        coverText: 'CBT',
        imgUrl: 'assets/images/cover_CBT.png',
        file: 'https://drive.google.com/file/d/1KPam7k11NhwoHunNGCUdgaxbhtmLWCuP/view?usp=drive_link',
        access: 'basic',
        isRecommended: true
    },
    {
        id: 31,
        title: 'The Hitler Effect',
        category: 'Psychology',
        desc: 'Analisis psikologis tentang pengaruh, karisma, dan kepatuhan massa.',
        coverText: 'HE',
        imgUrl: 'assets/images/cover_HE.png',
        file: 'https://drive.google.com/file/d/1vwBJfu_m__qGni2vcMOQk6emfch6cOnb/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 32,
        title: 'Atomic Habits',
        category: 'Psychology',
        desc: 'Metode membangun kebiasaan kecil yang baik dan menghilangkan kebiasaan buruk.',
        coverText: 'AH',
        imgUrl: 'assets/images/cover_AH.png',
        file: 'https://drive.google.com/file/d/1A7Fyx8AdKUde_Lj_XrMRKmyVI8jz6y97/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 33,
        title: 'Cara Berbicara Kepada Setiap Orang Dalam Setiap Situasi',
        category: 'Psychology',
        desc: 'Tingkatkan keterampilan komunikasi Anda agar percaya diri di situasi apapun.',
        coverText: 'CBK',
        imgUrl: 'assets/images/cover_CBK.png',
        file: 'https://drive.google.com/file/d/1tWJOaqE8hDQhjfBvdj-alHODkBgjnjQ1/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 34,
        title: 'Sebuah Seni Untuk Bersikap Bodo Amat',
        category: 'Psychology',
        desc: 'Pendekatan unik untuk fokus pada hal-hal penting dan menjalani hidup lebih bahagia.',
        coverText: 'SSU',
        imgUrl: 'assets/images/cover_SSU.png',
        file: 'https://drive.google.com/file/d/110YZiNnbEQokBK2q88facKFx_K-76R_v/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 35,
        title: 'Seni Berbicara Kepada Siapa Saja, Kapan Saja, di Mana Saja',
        category: 'Psychology',
        desc: 'Kiat ahli untuk menjadi pembicara yang lebih efektif dan persuasif di setiap kesempatan.',
        coverText: 'SBK',
        imgUrl: 'assets/images/cover_SBK.png',
        file: 'https://drive.google.com/file/d/1M_5deA3aGBeELIq17BX4WJ_iqH6bLVc4/view?usp=drive_link',
        access: 'free',
        isRecommended: true
    },
    {
        id: 36,
        title: 'Seni Membaca Pikiran',
        category: 'Psychology',
        desc: 'Pelajari cara memahami apa yang dipikirkan dan dirasakan orang lain melalui petunjuk halus.',
        coverText: 'SMP',
        imgUrl: 'assets/images/cover_SMP.png',
        file: 'https://drive.google.com/file/d/1DKUfQ0H08JVY2yhwDnZcX96ZHW2Ngpmg/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 37,
        title: 'Chris Hogan Everyday Millonaires',
        category: 'Money',
        desc: '',
        coverText: 'CHEM',
        imgUrl: 'assets/images/cover_CHEM.png',
        file: 'https://drive.google.com/file/d/1r5Pz8U-xY9G6Qib5vESexY13anaaTMDi/view?usp=drive_link',
        access: 'pro',
        isRecommended: true
    },
    {
        id: 38,
        title: 'I Will Teach You to Be Rich',
        category: 'Finance',
        desc: '',
        coverText: 'RS',
        imgUrl: 'assets/images/cover_RS.png',
        file: 'https://drive.google.com/file/d/1ByBoS0SlIBPEiCJky3ZhkMED576WZS0H/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 39,
        title: 'Money Master the Game Tony Robbins',
        category: 'Money',
        desc: '',
        coverText: 'TRM',
        imgUrl: 'assets/images/cover_TRM.png',
        file: 'https://drive.google.com/file/d/1_oa20wP3bZkNeLTqQLCFDIRtT_bYB48X/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 40,
        title: 'Rich Dad\'s Guide to Investing ',
        category: 'Money',
        desc: '',
        coverText: 'RDG',
        imgUrl: 'assets/images/cover_RDG.png',
        file: 'https://drive.google.com/file/d/14lo7mYRDa5M0FQyFuopYKzQB-gCvlW7g/view?usp=drive_link',
        access: 'pro',
        isRecommended: false
    },
    {
        id: 41,
        title: 'Smart Women Finish Rich',
        category: 'Finance',
        desc: '',
        coverText: 'SWF',
        imgUrl: 'assets/images/cover_SWF.png',
        file: 'https://drive.google.com/file/d/1pGstuUDFJc194VqzoNJoZkqqDkouxOit/view?usp=drive_link',
        access: 'free',
        isRecommended: false
    },
    {
        id: 42,
        title: 'The Automatic Millionaire',
        category: 'Finance',
        desc: '',
        coverText: 'TAM',
        imgUrl: 'assets/images/cover_TAM.png',
        file: 'https://drive.google.com/file/d/1aomrFPPPTgegjun6beriUX-11Ja9JWwf/view?usp=drive_link',
        access: 'free',
        isRecommended: false
    },
    {
        id: 43,
        title: 'The Compound Effect',
        category: 'Money',
        desc: '',
        coverText: 'TCE',
        imgUrl: 'assets/images/cover_TCE.png',
        file: 'https://drive.google.com/file/d/1M3O7burmwRnrWbb4qAKgMdM0cVSofujT/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 44,
        title: 'The Latte Factor',
        category: 'Finance',
        desc: '',
        coverText: 'TLF',
        imgUrl: 'assets/images/cover_TLE.png',
        file: 'https://drive.google.com/file/d/1ZbEsHZfx5KjR60MoldkMF8Y8wWBf8guN/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },
    {
        id: 45,
        title: 'The Millionaire Fastlane',
        category: 'Money',
        desc: '',
        coverText: 'TMF',
        imgUrl: 'assets/images/cover_TMF.png',
        file: 'https://drive.google.com/file/d/1AeBDNpKR0wH1C18wo9IGC4gZcufSm_vt/view?usp=drive_link',
        access: 'free',
        isRecommended: false
    },
    {
        id: 46,
        title: 'The Simple Path to Wealth',
        category: 'Money',
        desc: '',
        coverText: 'TSP',
        imgUrl: 'assets/images/cover_TSP.png',
        file: 'https://drive.google.com/file/d/1pGstuUDFJc194VqzoNJoZkqqDkouxOit/view?usp=drive_link',
        access: 'basic',
        isRecommended: false
    },



];

const posts = [
    {
        id: 1,
        title: '5 Kebiasaan Finansial Sehat',
        excerpt: 'Praktik sederhana yang bisa kamu mulai hari ini untuk memperbaiki kondisi finansial.',
        url: 'https://www.heygotrade.com/en/blog/langkah-bangun-kebiasaan-finansial-sehat/',
        source: 'HeyGotrade', 
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80' 
    },
    {
        id: 2,
        title: 'Cara Mengelola Gaji Pertama',
        excerpt: 'Langkah praktis menyusun prioritas setelah menerima gaji pertama.',
        url: 'https://www.prudential.co.id/id/pulse/article/gaji-pertama/',
        source: 'Prudential', 
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80' 
    },
    {
        id: 3,
        title: 'Mengatasi FOMO saat Investasi',
        excerpt: 'Bagaimana menjaga kepala tetap dingin saat pasar ramai.',
        url: 'https://www.lbs.id/publication/investasi/viral-fatal-7-cara-mengatasi-fomo-investasi-agar-dompet-tebal-merdeka-finansial',
        source: 'LBS ID', 
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80' 
    }
];

const quizQuestions = [{
        question: "Jika Anda mendapat uang bonus, apa yang pertama kali Anda lakukan?",
        options: [{
                text: "Simpan di rekening tabungan agar aman.",
                value: 'A'
            },
            {
                text: "Sebagian ditabung, sebagian diinvestasikan.",
                value: 'B'
            },
            {
                text: "Cari peluang investasi berisiko tinggi untuk untung besar.",
                value: 'C'
            }
        ]
    },
    {
        question: "Bagaimana perasaan Anda jika nilai investasi Anda tiba-tiba turun 15%?",
        options: [{
                text: "Sangat panik dan mungkin akan langsung menjualnya.",
                value: 'A'
            },
            {
                text: "Cemas, tapi akan menahannya dan berharap nilainya kembali.",
                value: 'B'
            },
            {
                text: "Melihatnya sebagai peluang untuk membeli lebih banyak (buy the dip).",
                value: 'C'
            }
        ]
    },
    {
        question: "Apa tujuan utama Anda dalam berinvestasi?",
        options: [{
                text: "Keamanan modal. Yang penting uang tidak hilang.",
                value: 'A'
            },
            {
                text: "Pertumbuhan seimbang untuk jangka panjang (misal: dana pensiun).",
                value: 'B'
            },
            {
                text: "Mendapatkan keuntungan maksimal dalam waktu sesingkat mungkin.",
                value: 'C'
            }
        ]
    }
];

const quizResultsData = {
    'A': {
        title: "Si Penjaga Aman (Konservatif)",
        desc: "Anda sangat menghargai keamanan dan stabilitas. Pilihan investasi Anda cenderung rendah risiko. E-book tentang 'Manajemen Gaji' dan 'Perencanaan Tabungan' sangat cocok untuk Anda."
    },
    'B': {
        title: "Si Perencana Seimbang (Moderat)",
        desc: "Anda memahami pentingnya pertumbuhan jangka panjang namun tetap berhati-hati. Anda siap mengambil risiko terukur. Coba lihat e-book 'Investasi untuk Pemula' dan 'Psikologi Uang'."
    },
    'C': {
        title: "Si Pengambil Risiko (Agresif)",
        desc: "Anda berani dan mencari keuntungan tinggi! Anda tidak takut fluktuasi pasar. E-book tentang 'Diversifikasi Investasi' dan strategi lanjutan akan menantang Anda."
    }
};


let currentQuestionIndex = 0;
let userAnswers = [];
let quizContainer, quizResultContainer, quizQuestionEl, quizOptionsEl, quizRetakeBtn, quizResultTitleEl,
    quizResultDescEl;



function startQuiz() {

    quizContainer = document.getElementById('quiz-container');
    quizResultContainer = document.getElementById('quiz-result');
    quizQuestionEl = document.getElementById('quiz-question');
    quizOptionsEl = document.getElementById('quiz-options');
    quizRetakeBtn = document.getElementById('quiz-retake-btn');
    quizResultTitleEl = document.getElementById('quiz-result-title');
    quizResultDescEl = document.getElementById('quiz-result-desc');

    if (!quizContainer) return;

    currentQuestionIndex = 0;
    userAnswers = [];
    if (quizResultContainer) quizResultContainer.classList.add('hide');
    if (quizContainer) quizContainer.classList.remove('hide');
    showQuestion();

    if (quizRetakeBtn) {
        quizRetakeBtn.removeEventListener('click', startQuiz);
        quizRetakeBtn.addEventListener('click', startQuiz);
    }
}

function showQuestion() {
    if (!quizQuestionEl || !quizQuestions[currentQuestionIndex]) {
        return;
    }
    const questionData = quizQuestions[currentQuestionIndex];
    quizQuestionEl.textContent = questionData.question;
    quizOptionsEl.innerHTML = '';
    questionData.options.forEach(option => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option.text;
        optionBtn.className = 'quiz-option-btn';
        optionBtn.onclick = () => optionClicked(option.value);
        quizOptionsEl.appendChild(optionBtn);
    });
}

function optionClicked(value) {
    userAnswers.push(value);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (quizContainer) quizContainer.classList.add('hide');
    if (quizResultContainer) quizResultContainer.classList.remove('hide');
    const counts = {};
    userAnswers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
    });
    let finalProfile = 'B';
    let maxCount = 0;
    for (const [key, value] of Object.entries(counts)) {
        if (value > maxCount) {
            maxCount = value;
            finalProfile = key;
        }
    }
    const result = quizResultsData[finalProfile];
    if (quizResultTitleEl) quizResultTitleEl.textContent = result.title;
    if (quizResultDescEl) quizResultDescEl.textContent = result.desc;
}


function renderBlog() {
    const blogList = document.getElementById("blogList");
    

    if (blogList) {
        blogList.innerHTML = ''; 

        posts.forEach(post => {
            
            const postEl = document.createElement("a");
            
            
            postEl.classList.add("blog-card"); 
            
            
            postEl.href = post.url;
            postEl.target = "_blank";
            postEl.rel = "noopener noreferrer";


            postEl.innerHTML = `
                <div class="blog-card-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-card-content">
                    <span class="blog-source">Sumber: <b>${post.source}</b></span>
                    <h4 class="blog-title">${post.title}</h4>
                    <p class="blog-excerpt">${post.excerpt}</p>
                </div>
            `;

            blogList.appendChild(postEl);
        });
    }
}


function openReader(e) {

    if (e.file && (e.file.startsWith('https://') || e.file.startsWith('http://'))) {
        window.open(e.file, '_blank');
    } else {
        console.error('Link e-book tidak valid:', e.file);
        alert('Maaf, link e-book ini sepertinya rusak.');
    }
}

function downloadFile(e) {



    const subs = loadSubs();


    if (subs.length === 0) {

        alert("Anda harus subscribe terlebih dahulu untuk men-download e-book ini.");


        const subscribeSection = document.getElementById('subscribeForm');
        if (subscribeSection) {

            subscribeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });


            const subBox = subscribeSection.closest('section');
            if (subBox) {
                subBox.style.transition = 'background-color 0.2s linear';
                subBox.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                setTimeout(() => {
                    subBox.style.backgroundColor = '';
                }, 1500);
            }
        }
    } else {

        alert('Terima kasih sudah subscribe! Download Anda akan dimulai.');


        if (e.file && (e.file.startsWith('https://') || e.file.startsWith('http://'))) {
            window.open(e.file, '_blank');
        } else {
            console.error('Link e-book tidak valid:', e.file);
            alert('Maaf, link e-book ini sepertinya rusak.');
        }
        _
    }
}

const DB_KEY = 'mindwealth_subscribers';

function loadSubs() {
    const dataString = localStorage.getItem(DB_KEY);
    return dataString ? JSON.parse(dataString) : [];
}
function saveSubs(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data, null, 2));
}


function viewBooks(plan) {
    console.log("Tombol 'Lihat Buku' untuk paket:", plan, "diklik.");

    const ebookSection = document.getElementById('library');
    if (ebookSection) {
        ebookSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


        ebookSection.style.transition = 'background-color 0.3s ease-in-out';
        ebookSection.style.backgroundColor = 'rgba(34, 197, 94, 0.05)';
        setTimeout(() => {
            ebookSection.style.backgroundColor = '';
        }, 1500);
    }
}

function handleScroll() {
    const navLinks = document.querySelectorAll(".nav-links a:not(.btn)");
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${currentSection}`) {
            a.classList.add("active");
        }
    });


    const progress = document.getElementById('scroll-progress');
    if (progress) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (window.scrollY / totalHeight) * 100;
        progress.style.width = scrollPercent + '%';
    }
}



document.addEventListener("DOMContentLoaded", () => {


    const welcome = document.getElementById("welcome-screen");
    const enterBtn = document.getElementById("enterBtn");
    if (enterBtn && welcome) {
        enterBtn.addEventListener("click", () => {
            welcome.classList.add("hide");
            document.body.style.opacity = 0;
            setTimeout(() => {
                if (welcome) welcome.remove();
                document.body.style.transition = "opacity 0.6s ease";
                document.body.style.opacity = 1;
            }, 800);
        });
    }


    function renderRecommendations() {
        const grid = document.getElementById('admin-recommendations-grid');
        const template = document.getElementById('ebookTpl');

        if (!grid || !template) return;

        grid.innerHTML = '';

        const recommendedBooks = ebooks.filter(e => e.isRecommended === true);

        recommendedBooks.forEach(e => {

            const tpl = template.content.cloneNode(true);


            const cardElement = tpl.querySelector('.ebook');


            const coverEl = tpl.querySelector('.cover');
            if (e.imgUrl) {
                coverEl.style.backgroundImage = `url('${e.imgUrl}')`;
                coverEl.textContent = '';
            } else {
                coverEl.style.backgroundImage = 'none';
                coverEl.textContent = e.coverText;
            }
            tpl.querySelector('h4').textContent = e.title;
            tpl.querySelector('p').textContent = e.desc;


            const badgeContainer = tpl.querySelector('.ebook-badge-container');
            badgeContainer.innerHTML = '';
            if (e.isRecommended) {
                const recBadge = document.createElement('span');
                recBadge.className = 'ebook-badge ebook-badge--recommended';
                recBadge.textContent = 'Rekomendasi';
                badgeContainer.appendChild(recBadge);
            }
            if (e.access === 'free') {
                const freeBadge = document.createElement('span');
                freeBadge.className = 'ebook-badge ebook-badge--free';
                freeBadge.textContent = 'Free';
                badgeContainer.appendChild(freeBadge);
            } else if (e.access === 'basic') {
                const basicBadge = document.createElement('span');
                basicBadge.className = 'ebook-badge ebook-badge--basic';
                basicBadge.textContent = 'Basic';
                badgeContainer.appendChild(basicBadge);
            } else if (e.access === 'pro') {
                const proBadge = document.createElement('span');
                proBadge.className = 'ebook-badge ebook-badge--pro';
                proBadge.textContent = 'Pro';
                badgeContainer.appendChild(proBadge);
            }

            const readBtn = tpl.querySelector('.readBtn');
            if (readBtn) {
                readBtn.parentElement.style.display = 'none';
            }


            cardElement.style.cursor = 'pointer';

            cardElement.addEventListener('click', () => {
                showEbookModal(e.id);
            });




            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');
            swiperSlide.appendChild(tpl);
            grid.appendChild(swiperSlide);
        });


        new Swiper('#recommendations-section .recommendation-swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 5
                }
            },
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: '#recommendations-section .swiper-button-next',
                prevEl: '#recommendations-section .swiper-button-prev',
            },
            keyboard: true,
        });
    }


    renderRecommendations();

    startQuiz();



    function renderEbooks(list) {
        const ebooksGrid = document.getElementById('ebooksGrid');
        const totalCount = document.getElementById('totalCount');
        const template = document.getElementById('ebookTpl');
    
        if (!ebooksGrid || !totalCount || !template) return;
    
        ebooksGrid.innerHTML = '';
        totalCount.textContent = list.length;
    
        if (list.length === 0) {
            ebooksGrid.innerHTML = '<p class="no-results" style="padding: 20px; text-align: center; width: 100%;">Tidak ada e-book yang ditemukan.</p>';
            return;
        }
    
        list.forEach(e => {
            const tpl = template.content.cloneNode(true);
            const cardElement = tpl.querySelector('.ebook');
            const coverEl = tpl.querySelector('.cover');
    

            if (e.imgUrl) {
                coverEl.style.backgroundImage = `url('${e.imgUrl}')`;
                coverEl.textContent = '';
            } else {
                coverEl.style.backgroundImage = 'none';
                coverEl.textContent = e.coverText;
            }
            

            coverEl.style.position = 'relative'; 
    

            tpl.querySelector('h4').textContent = e.title;
            tpl.querySelector('p').textContent = e.desc;
    
            const badgeContainer = tpl.querySelector('.ebook-badge-container');
            badgeContainer.innerHTML = '';
            
            if (e.isRecommended) {
                const recBadge = document.createElement('span');
                recBadge.className = 'ebook-badge ebook-badge--recommended';
                recBadge.textContent = 'Rekomendasi';
                badgeContainer.appendChild(recBadge);
            }
            if (e.access === 'free') {
                const freeBadge = document.createElement('span');
                freeBadge.className = 'ebook-badge ebook-badge--free';
                freeBadge.textContent = 'Free';
                badgeContainer.appendChild(freeBadge);
            } else if (e.access === 'basic') {
                const basicBadge = document.createElement('span');
                basicBadge.className = 'ebook-badge ebook-badge--basic';
                basicBadge.textContent = 'Basic';
                badgeContainer.appendChild(basicBadge);
            } else if (e.access === 'pro') {
                const proBadge = document.createElement('span');
                proBadge.className = 'ebook-badge ebook-badge--pro';
                proBadge.textContent = 'Pro';
                badgeContainer.appendChild(proBadge);
            }
    
            
            const readBtn = tpl.querySelector('.readBtn');
            if (readBtn) {
                readBtn.parentElement.style.display = 'none';
            }
    
            cardElement.style.cursor = 'pointer';
    
            
            const bookLevel = tierLevels[e.access] || 0;
            const myLevel = tierLevels[userTier] || 0;
            const isLocked = bookLevel > myLevel;
            if (isLocked) {
                
                cardElement.classList.add('is-locked'); 

                
                const lockOverlay = document.createElement('div');
                lockOverlay.className = 'locked-overlay'; 
                lockOverlay.innerHTML = `
                    <svg class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                `;
                coverEl.appendChild(lockOverlay);

                
                cardElement.addEventListener('click', (ev) => {
                    ev.preventDefault();

                    
                    const confirmUnlock = confirm(`白 E-book "${e.title}" Terkunci!\n\nIni khusus member ${e.access.toUpperCase()}.\nIngin membukanya sekarang? Klik OK untuk Subscribe.`);

                    if (confirmUnlock) {
                    
                        const subscribeSection = document.getElementById('subscribe');
                        
                        if (subscribeSection) {
                            
                            subscribeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            
                            
                            setTimeout(() => {
                                const inputName = document.getElementById('subName');
                                if(inputName) inputName.focus();
                            }, 800); 
                        }

                    } else {
                    
                        coverEl.classList.remove('shake-anim');
                        void coverEl.offsetWidth; 
                        coverEl.classList.add('shake-anim');
                    }
                });

            } else {
            
                cardElement.addEventListener('click', () => {
                    showEbookModal(e.id);
                });
            }
    
            ebooksGrid.appendChild(tpl);
        });
    }


    const applyFilters = () => {

        const activeTierBtn = document.querySelector('.tier-filters .filter-btn.active');
        const activeCatBtn = document.querySelector('.filters .filter-btn.active');

        const tierFilter = activeTierBtn ? activeTierBtn.dataset.tier : 'all';
        const catFilter = activeCatBtn ? activeCatBtn.dataset.filter : 'all';


        const filteredList = ebooks.filter(book => {
            const matchTier = tierFilter === 'all' || book.access === tierFilter;
            const matchCat = catFilter === 'all' || book.category === catFilter;
            return matchTier && matchCat;
        });


        renderEbooks(filteredList);
    };


    const tierButtons = document.querySelectorAll('.tier-filters .filter-btn');
    tierButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            tierButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            applyFilters();
        });
    });


    const catButtons = document.querySelectorAll('.filters .filter-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');


            applyFilters();
        });
    });


    applyFilters();



    renderBlog();
    lucide.createIcons();


    const calcForm = document.getElementById('calc-form');
    const calcResultBox = document.getElementById('calc-result');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const principal = parseFloat(document.getElementById('calc-principal').value) || 0;
            const monthly = parseFloat(document.getElementById('calc-monthly').value) || 0;
            const interest = parseFloat(document.getElementById('calc-interest').value) || 0;
            const years = parseFloat(document.getElementById('calc-years').value) || 0;
            const r = interest / 100;
            const n = 12;
            const t = years;
            const totalMonths = n * t;
            const r_monthly = r / n;
            const fv_principal = principal * Math.pow((1 + r_monthly), totalMonths);
            const fv_pmt = monthly * ((Math.pow((1 + r_monthly), totalMonths) - 1) / r_monthly);
            const totalValue = fv_principal + fv_pmt;
            const totalInvested = principal + (monthly * totalMonths);
            const totalInterest = totalValue - totalInvested;
            const formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
            document.getElementById('calc-result-total').textContent = formatter.format(
                totalValue);
            document.getElementById('calc-result-principal').textContent = formatter.format(
                totalInvested);
            document.getElementById('calc-result-interest').textContent = formatter.format(
                totalInterest);
            const resultTitle = calcResultBox.querySelector('h4');
            resultTitle.textContent = `Hasil Investasi Anda dalam ${years} tahun:`;
            calcResultBox.classList.remove('hide');
        });
    }



    const searchBar = document.getElementById('searchBar');


    let currentFilter = 'all';
    let currentSearchTerm = '';


    function applyFiltersAndSearch() {
        let filteredEbooks = ebooks;
        if (currentFilter === 'all') {

            filteredEbooks = ebooks;
        } else if (currentFilter === 'Finance') {

            filteredEbooks = ebooks.filter(e => e.category === 'Finance' || e.category === 'Money');
        } else {

            filteredEbooks = ebooks.filter(e => e.category === currentFilter);
        }


        if (currentSearchTerm !== '') {
            filteredEbooks = filteredEbooks.filter(e =>
                e.title.toLowerCase().includes(currentSearchTerm)
            );
        }
        
        

        renderEbooks(filteredEbooks);
    }


    const modalOverlay = document.getElementById('ebookModalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCover = document.getElementById('modalCover');
    const modalBadgeContainer = document.getElementById('modalBadgeContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalActionButtons = document.getElementById('modalActionButtons');


    function showEbookModal(ebookId) {

        const ebook = ebooks.find(e => e.id === ebookId);
        if (!ebook) return;


        if (ebook.imgUrl) {
            modalCover.style.backgroundImage = `url('${ebook.imgUrl}')`;
            modalCover.textContent = '';
        } else {
            modalCover.style.backgroundImage = 'none';
            modalCover.textContent = ebook.coverText;
        }


        modalTitle.textContent = ebook.title;
        modalDesc.textContent = ebook.desc;


        modalBadgeContainer.innerHTML = '';
        if (ebook.isRecommended) {
            const recBadge = document.createElement('span');
            recBadge.className = 'ebook-badge ebook-badge--recommended';
            recBadge.textContent = 'Rekomendasi';
            modalBadgeContainer.appendChild(recBadge);
        }
        if (ebook.access === 'free') {
            const freeBadge = document.createElement('span');
            freeBadge.className = 'ebook-badge ebook-badge--free';
            freeBadge.textContent = 'Free';
            modalBadgeContainer.appendChild(freeBadge);
        } else if (ebook.access === 'basic') {
            const basicBadge = document.createElement('span');
            basicBadge.className = 'ebook-badge ebook-badge--basic';
            basicBadge.textContent = 'Basic';
            modalBadgeContainer.appendChild(basicBadge);
        } else if (ebook.access === 'pro') {
            const proBadge = document.createElement('span');
            proBadge.className = 'ebook-badge ebook-badge--pro';
            proBadge.textContent = 'Pro';
            modalBadgeContainer.appendChild(proBadge);
        }


        modalActionButtons.innerHTML = '';
        if (ebook.access === 'free') {
            const readBtn = document.createElement('button');
            readBtn.className = 'btn btn-primary';
            readBtn.innerHTML = '<i data-lucide="book-open"></i> Baca Ebook';
            readBtn.addEventListener('click', () => openReader(ebook));
            modalActionButtons.appendChild(readBtn);
        } else {
            const readBtn = document.createElement('button');
            readBtn.className = 'btn btn-primary';
            readBtn.style.marginRight = '10px';
            readBtn.innerHTML = '<i data-lucide="book-open"></i> Baca Ebook';
            readBtn.addEventListener('click', () => openReader(ebook));
            modalActionButtons.appendChild(readBtn);




            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'btn btn-primary';
            downloadBtn.innerHTML = `<i data-lucide="download"></i> Download (${ebook.access})`;
            downloadBtn.addEventListener('click', () => downloadFile(ebook));
            modalActionButtons.appendChild(downloadBtn);
        }


        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }


        modalOverlay.classList.add('active');
    }


    function closeEbookModal() {
        modalOverlay.classList.remove('active');
    }


    modalCloseBtn.addEventListener('click', closeEbookModal);
    modalOverlay.addEventListener('click', (event) => {

        if (event.target === modalOverlay) {
            closeEbookModal();
        }
    });



    searchBar.addEventListener('input', () => {

        currentSearchTerm = searchBar.value.toLowerCase();

        applyFiltersAndSearch();
    });


    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {

            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');


            currentFilter = btn.dataset.filter;


            applyFiltersAndSearch();
        });
    });


    applyFiltersAndSearch();


    const subs = loadSubs(); 


const subscribeForm = document.getElementById('subscribeForm');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        
        const nameVal = document.getElementById('subName').value.trim();
        const emailVal = document.getElementById('subEmail').value.trim();
        const msg = document.getElementById('subscribeMsg');

        if (!nameVal || !emailVal) {
            msg.style.color = 'red';
            return msg.textContent = 'Lengkapi nama dan email.';
        }

        const allSubscribers = loadSubs();
        const newSubscriber = {
            id: Date.now(), 
            name: nameVal,
            email: emailVal,
            joinDate: new Date().toLocaleString('id-ID'),
            status: 'PRO'
        };
        allSubscribers.push(newSubscriber);
        saveSubs(allSubscribers);


        msg.style.color = '#22c55e';
        msg.textContent = `Terima kasih ${nameVal}! Paket BASIC/PRO aktif.`;
        
        userTier = 'pro';
        localStorage.setItem('myUserTier', 'pro'); 


        if (typeof renderEbooks === 'function') {
            const activeBtn = document.querySelector('.category-btn.active');
            if (activeBtn && activeBtn.dataset.category !== 'all') {
                const filtered = ebooks.filter(e => e.category === activeBtn.dataset.category);
                renderEbooks(filtered);
            } else {
                renderEbooks(ebooks);
            }
        }

        subscribeForm.reset();
        

        setTimeout(() => {
            const grid = document.getElementById('ebooksGrid');
            if(grid) grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            alert("Selamat! Akun Anda telah diupgrade ke BASIC/PRO.");
        }, 1500);
    });
}


const contactForm = document.getElementById('contactForm');
const resetContactBtn = document.getElementById('resetContact');
const targetEmail = 'mindwealth.digital@gmail.com'; 

if (contactForm) {
    contactForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        

        const name = document.getElementById('cName').value.trim();
        const email = document.getElementById('cEmail').value.trim();
        const message = document.getElementById('cMessage').value.trim();
        const msgElement = document.getElementById('contactMsg');


        if (!name || !email || !message) {
            msgElement.style.color = 'red';
            msgElement.textContent = 'Mohon lengkapi semua kolom.';
            return;
        }


        const subject = `Pesan dari Website MindWealth: ${name}`;

        const body = `Pesan dari: ${name} (${email})\n\n---\n\n${message}`;


        const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        
        window.location.href = mailtoLink;

        
        msgElement.style.color = '#22c55e';
        msgElement.textContent = 'Pesan telah diformat. Silakan kirim melalui aplikasi email Anda.';
        
    });

    if (resetContactBtn) {
        resetContactBtn.addEventListener('click', () => {
            contactForm.reset();
            document.getElementById('contactMsg').textContent = '';
        });
    }
}


    const backTop = document.getElementById('backTop');
    if (backTop) {
        backTop.addEventListener('click', () => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
        window.addEventListener('scroll', () => {
            backTop.style.display = window.scrollY > 200 ? 'block' : 'none';
        });
    }


    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeMeta = document.querySelector('meta[name="theme-color"]'); // 
    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElement.classList.add('light-mode');

            if (themeMeta) themeMeta.setAttribute('content', '#e2e8f0');
        } else {
            htmlElement.classList.remove('light-mode');

            if (themeMeta) themeMeta.setAttribute('content', '#0f172a');
        }

    }


    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);


    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {

            const currentTheme = htmlElement.classList.contains('light-mode') ? 'light' : 'dark';
            const newTheme = (currentTheme === 'light') ? 'dark' : 'light';

            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);


            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }


    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const submenu = toggle.nextElementSibling;
                if (submenu && submenu.classList.contains('dropdown-menu')) {
                    const isVisible = submenu.style.display === 'block';
                    submenu.style.display = isVisible ? 'none' : 'block';
                }
            });
        });

        navLinks.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', () => {
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menuToggle.click();
            }
        });
    }


    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('show');
        });
    }, {
        threshold: 0.12
    });
    fadeEls.forEach(el => obs.observe(el));


    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    window.addEventListener('scroll', handleScroll);

    lucide.createIcons();

    const grid = document.getElementById('ebooksGrid');
    const btnPrev = document.getElementById('scrollPrev');
    const btnNext = document.getElementById('scrollNext');

    if (grid && btnPrev && btnNext) {

        const checkScroll = () => {
            if (!grid) return;
            const scrollLeft = grid.scrollLeft;

            const maxScroll = grid.scrollWidth - grid.clientWidth;


            btnPrev.classList.toggle('visible', scrollLeft > 0);

            btnNext.classList.toggle('visible', scrollLeft < maxScroll - 5);
        };


        btnNext.addEventListener('click', () => {

            grid.scrollBy({
                left: 338,
                behavior: 'smooth'
            });
        });


        btnPrev.addEventListener('click', () => {
            grid.scrollBy({
                left: -338,
                behavior: 'smooth'
            });
        });


        grid.addEventListener('scroll', checkScroll, {
            passive: true
        });



        const gridObserver = new ResizeObserver(() => {
            checkScroll();
        });
        gridObserver.observe(grid);
    }


    const slider = document.getElementById('ebooksGrid');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {

            if (e.target.closest('button')) return;

            isDown = true;
            slider.classList.add('active-drag');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active-drag');

        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    const comicSwiper = new Swiper('.comic-swiper', {
        grabCursor: true,
        pagination: {
            el: '#journey .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#journey .swiper-button-next',
            prevEl: '#journey .swiper-button-prev',
        },
        keyboard: true,
    });

    const chatBubble = document.getElementById(
        "chatBubble");
    const chatWindow = document.getElementById("chatWindow");
    const closeChat = document.getElementById("closeChat");
    const sendButton = document.getElementById("sendButton");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");


    let chatHistory = [];

    let hasDragged = false;


    if (chatBubble) {
        chatBubble.addEventListener("click", () => {

            if (hasDragged) {
                hasDragged = false;
                return;
            }

            if (chatWindow) chatWindow.classList.toggle("show");
        });
    }

    if (closeChat) {
        closeChat.addEventListener("click", () => {
            if (chatWindow) chatWindow.classList.remove("show");
        });
    }


    if (chatBubble) {
        let isDragging = false;
        let offsetX, offsetY;
        let startX, startY;

        function onDragStart(clientX, clientY) {
            isDragging = true;
            hasDragged = false;


            startX = clientX;
            startY = clientY;


            offsetX = clientX - chatBubble.getBoundingClientRect().left;
            offsetY = clientY - chatBubble.getBoundingClientRect().top;

            chatBubble.style.cursor = 'grabbing';
            chatBubble.style.transition = 'none';
        }

        function onDragMove(clientX, clientY) {
            if (!isDragging) return;


            const deltaX = Math.abs(clientX - startX);
            const deltaY = Math.abs(clientY - startY);
            if (deltaX > 5 || deltaY > 5) {
                hasDragged = true;
            }

            let newLeft = clientX - offsetX;
            let newTop = clientY - offsetY;


            const bubbleWidth = chatBubble.offsetWidth;
            const bubbleHeight = chatBubble.offsetHeight;
            const padding = 10;

            newLeft = Math.max(padding, Math.min(newLeft, window.innerWidth - bubbleWidth - padding));
            newTop = Math.max(padding, Math.min(newTop, window.innerHeight - bubbleHeight - padding));

            chatBubble.style.left = newLeft + 'px';
            chatBubble.style.top = newTop + 'px';


            chatBubble.style.right = 'auto';
            chatBubble.style.bottom = 'auto';
        }

        function onDragEnd() {
            isDragging = false;
            chatBubble.style.cursor = 'grab';
            chatBubble.style.transition = '';

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        }


        chatBubble.addEventListener('mousedown', (e) => {
            onDragStart(e.clientX, e.clientY);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            onDragMove(e.clientX, e.clientY);
        }

        function onMouseUp() {
            onDragEnd();
        }


        chatBubble.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            onDragStart(touch.clientX, touch.clientY);
            document.addEventListener('touchmove', onTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', onTouchEnd);
        }, {
            passive: false
        });

        function onTouchMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            const touch = e.touches[0];
            onDragMove(touch.clientX, touch.clientY);
        }

        function onTouchEnd() {
            onDragEnd();
        }
    }


    if (sendButton) {
        sendButton.addEventListener("click", kirimPesan);
    }
    if (chatInput) {
        chatInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                kirimPesan();
            }
        });
    }

    function kirimPesan() {
        if (!chatInput) return;
        const pesanPengguna = chatInput.value.trim();
        if (pesanPengguna === "") return;

        tampilkanPesan(pesanPengguna, "user");


        chatHistory.push({
            role: "user",
            parts: [{
                text: pesanPengguna
            }]
        });


        chatInput.value = "";


        tampilkanLoading();


        panggilGeminiAPI(pesanPengguna);
    }


    function tampilkanPesan(pesan, pengirim) {
        if (!chatBody) return;
        const divPesan = document.createElement("div");
        divPesan.classList.add("chat-message", pengirim);

        divPesan.innerHTML = escapeHTML(pesan).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        chatBody.appendChild(divPesan);


        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function escapeHTML(str) {
        if (typeof str !== 'string') return '';
        return str.replace(/[&<>"']/g, function (match) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            } [match];
        });
    }


    function tampilkanLoading() {
        if (!chatBody) return;
        const divLoading = document.createElement("div");
        divLoading.classList.add("chat-message", "loading");

        divLoading.textContent = "Wealth Buddy lagi mikir... 験";
        divLoading.id = "loadingIndicator";
        chatBody.appendChild(divLoading);


        chatBody.scrollTop = chatBody.scrollHeight;
    }


    function hapusLoading() {
        const loadingIndicator = document.getElementById("loadingIndicator");
        if (loadingIndicator && chatBody) {
            chatBody.removeChild(loadingIndicator);
        }
    }


    async function panggilGeminiAPI(pesan) {


        const API_URL = "/api/chat";


        const historyForBackend = chatHistory.slice(-5);

        const requestBody = {
            message: pesan,
            history: historyForBackend,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });


            hapusLoading();

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error response dari server:", errorData);
                tampilkanPesan(
                    "Aduh, serverku lagi error nih: " + (errorData.error || response
                        .statusText) + " 丼",
                    "bot"
                );
                chatHistory.pop();
                return;
            }

            const data = await response.json();


            const jawabanBot = data.text;

            tampilkanPesan(jawabanBot, "bot");


            chatHistory.push({
                role: "model",
                parts: [{
                    text: jawabanBot
                }]
            });

        } catch (error) {

            hapusLoading();
            console.error("Error fetching API:", error);
            tampilkanPesan(
                "Maaf ya sedang ada kendala nih dari Wealth Buddy ",
                "bot"
            );
            chatHistory.pop();
        }
    }



});



window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Waktu tunggu: 6000ms (6 detik)
        // Ini sinkron dengan total durasi animasi di CSS agar tidak terpotong
        setTimeout(() => {
            // 1. Mulai hilangkan perlahan (Fade Out)
            preloader.style.opacity = '0'; 
            
            // Efek tambahan: Zoom out sedikit saat menghilang agar terlihat smooth
            preloader.style.transform = 'scale(1.1)'; 
            
            // 2. Hapus elemen dari layar setelah transisi opacity selesai (0.8 detik sesuai CSS)
            setTimeout(() => {
                preloader.classList.add('hide'); 
            }, 800); 
            
        }, 4500); 
    }
    
    // Tambahkan class 'loaded' ke body untuk memicu animasi konten website (jika ada)
    document.body.classList.add('loaded');
});

async function sendMessageToBot(userMessage) {
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: userMessage,
                history: [],
            }),
        });

        const data = await response.json();
        if (data.text) {
            console.log("Bot:", data.text);
            document.getElementById("botReply").innerText = data.text;
        } else {
            console.error("Error:", data.error);
        }
    } catch (err) {
        console.error("Gagal kirim pesan:", err);
    }
}
document.getElementById("sendBtn") && document.getElementById("sendBtn").addEventListener("click", () => {
    const userMsg = document.getElementById("userInput").value;
    sendMessageToBot(userMsg);
});


/* ==========================================================================
   NEW FEATURES (SIDEBAR, FULL LIBRARY, DASHBOARD, PREVIEWS) - APPENDED
   ========================================================================== */

/* --- 1. SIDEBAR LOGIC --- */
function initSidebar() {
    const sidebar = document.getElementById('appSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('closeSidebarBtn');
    const openBtns = document.querySelectorAll('.menu-toggle'); // Selects all menu toggles
    const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');

    if (!sidebar || !overlay) return;

    function toggleSidebar(show) {
        if (show) {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        } else {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSidebar(true);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleSidebar(false));
    }

    overlay.addEventListener('click', () => toggleSidebar(false));

    // Sidebar Theme Toggle logic
    if (sidebarThemeToggle) {
        sidebarThemeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const currentTheme = html.classList.contains('light-mode') ? 'light' : 'dark';
            const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
            
            // Reuse existing applyTheme logic via localStorage event or direct class manipulation
            localStorage.setItem('theme', newTheme);
            
            if (newTheme === 'light') {
                html.classList.add('light-mode');
            } else {
                html.classList.remove('light-mode');
            }

            if (typeof lucide !== 'undefined') lucide.createIcons();
        });
    }
}

/* --- 2. GENERIC RENDERER FOR TARGETED CONTAINERS --- */
function renderEbooksTargeted(list, containerId) {
    const container = document.getElementById(containerId);
    const template = document.getElementById('ebookTpl');
    
    if (!container || !template) return;
    
    container.innerHTML = '';
    
    if (list.length === 0) {
        container.innerHTML = '<p class="no-results">No e-books found in this category.</p>';
        return;
    }

    list.forEach(e => {
        const tpl = template.content.cloneNode(true);
        const cardElement = tpl.querySelector('.ebook');
        const coverEl = tpl.querySelector('.cover');

        // Cover Logic
        if (e.imgUrl) {
            coverEl.style.backgroundImage = `url('${e.imgUrl}')`;
            coverEl.textContent = '';
        } else {
            coverEl.style.backgroundImage = 'none';
            coverEl.textContent = e.coverText;
        }
        coverEl.style.position = 'relative';

        // Content
        tpl.querySelector('h4').textContent = e.title;
        tpl.querySelector('p').textContent = e.desc;

        // Badges
        const badgeContainer = tpl.querySelector('.ebook-badge-container');
        badgeContainer.innerHTML = '';
        if (e.isRecommended) {
            const badge = document.createElement('span');
            badge.className = 'ebook-badge ebook-badge--recommended';
            badge.textContent = 'Recommended';
            badgeContainer.appendChild(badge);
        }
        
        const tierBadge = document.createElement('span');
        tierBadge.className = `ebook-badge ebook-badge--${e.access}`;
        tierBadge.textContent = e.access.charAt(0).toUpperCase() + e.access.slice(1);
        badgeContainer.appendChild(tierBadge);

        // Buttons (Hide readBtn wrapper as per existing style, relies on Modal)
        const readBtn = tpl.querySelector('.readBtn');
        if (readBtn && readBtn.parentElement) {
            readBtn.parentElement.style.display = 'none';
        }

        // Click Event (Modal)
        cardElement.style.cursor = 'pointer';
        cardElement.addEventListener('click', () => {
             if (typeof showEbookModal === 'function') {
                showEbookModal(e.id);
             }
        });

        container.appendChild(tpl);
    });
}

/* --- 3. CATEGORY PREVIEW (Index Page) --- */
function renderCategoryPreview(access, containerId) {
    // Get first 3 items of specific access
    const filtered = ebooks.filter(e => e.access === access).slice(0, 4);
    renderEbooksTargeted(filtered, containerId);
}

function initIndexPagePreviews() {
    if (document.getElementById('preview-free')) {
        renderCategoryPreview('free', 'preview-free');
        renderCategoryPreview('basic', 'preview-basic');
        renderCategoryPreview('pro', 'preview-pro');
    }
}

/* --- 4. FULL LIBRARY PAGE (library-full.html) --- */
function initFullLibraryPage() {
    const grid = document.getElementById('fullLibraryGrid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const accessFilter = params.get('access') || 'all';
    
    // Update Title UI
    const filterLabel = document.getElementById('currentAccessFilter');
    if(filterLabel) filterLabel.textContent = accessFilter;

    // Filter Logic
    let filteredList = ebooks;
    if (accessFilter !== 'all') {
        filteredList = ebooks.filter(e => e.access === accessFilter);
    }

    // Render
    renderEbooksTargeted(filteredList, 'fullLibraryGrid');

    // Update Total Count
    const totalCountEl = document.getElementById('totalCount');
    if(totalCountEl) totalCountEl.textContent = filteredList.length;

    // Local Search on Full Page
    const searchBar = document.getElementById('searchBar');
    if(searchBar) {
        searchBar.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const searchedList = filteredList.filter(b => b.title.toLowerCase().includes(term));
            renderEbooksTargeted(searchedList, 'fullLibraryGrid');
        });
    }
}

/* --- 5. DASHBOARD PAGE (dashboard.html) --- */
function initDashboardPage() {
    const tableBody = document.getElementById('subscriberTableBody');
    if (!tableBody) return;

    const subs = loadSubs(); // Uses existing loadSubs function
    const emptyMsg = document.getElementById('emptyMsg');

    if (subs.length === 0) {
        if(emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    subs.forEach(sub => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.03)';
        tr.innerHTML = `
            <td style="padding:12px;">#${sub.id.toString().slice(-4)}</td>
            <td style="padding:12px;">${sub.name}</td>
            <td style="padding:12px;">${sub.email}</td>
            <td style="padding:12px;"><span class="ebook-badge ebook-badge--pro">PRO</span></td>
            <td style="padding:12px;">${sub.joinDate}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Export JSON Logic
    const exportBtn = document.getElementById('exportJsonBtn');
    if(exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(subs, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "mindwealth_subscribers.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }
}

/* --- 6. INITIALIZE NEW FEATURES --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Init Sidebar (Works on all pages)
    initSidebar();

    // 2. Detect Page and Run Specific Logic
    const path = window.location.pathname;
    
    // Index Page Logic
    if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
        initIndexPagePreviews();
    }

    // Full Library Page Logic
    if (path.includes('library-full.html')) {
        initFullLibraryPage();
    }

    // Dashboard Page Logic
    if (path.includes('dashboard.html')) {
        initDashboardPage();
    }
    
    // Re-run Lucide icons for new elements
    if (typeof lucide !== 'undefined') lucide.createIcons();
});