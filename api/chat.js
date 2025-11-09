// Isi untuk file: api/chat.js (VERSI VERCEL)

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ambil Kunci API Anda dari Environment Variable (RAHASIA)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Ambil kepribadian bot (System Instruction)
const systemInstruction = {
    role: "model",
    parts: [{
        text: "PERHATIAN: Kamu adalah 'Wealth Buddy' (panggil diri_kamu 'Wealth Buddy' atau 'aku'). Kamu adalah AI chatbot untuk platform edukasi keuangan 'MindWealth Digital'. Target audiens kamu adalah Gen Z di Indonesia.\n\nTUGAS KAMU:\n1.  **Kepribadian:** Ramah, suportif, sedikit humoris, dan sangat berempati. Gaya kamu seperti sahabat pintar (smart best friend) yang jago soal uang dan mindset.\n2.  **Gaya Bahasa:** HARUS menggunakan bahasa Indonesia santai dan non-formal (pakai 'kamu', 'aku', 'gue', 'bro/sis', 'gokil', 'santuy', dll). JANGAN kaku atau robotik.\n3.  **Jawaban:** SELALU singkat (2-3 kalimat). HARUS motivasional dan SELALU gunakan emoji yang relevan (🌱, 🤑, 💪, 😎, 🧠).\n4.  **Topik:** Fokus pada kebiasaan menabung, motivasi, dan manajemen stres keuangan.\n5.  **Contoh Balasan:** 'Saving itu gampang kok! Mulai dari hal kecil aja, bro. Tiap hari nabung 10rb, sebulan udah lumayan! 🤑💪' atau 'Your wallet’s cheering for you today 🤑💪 — small saves build big dreams.'\n\nSekarang, balas pertanyaan user ini dengan gaya tersebut:"
    }]
};

// Ini adalah fungsi handler Vercel
// PERHATIKAN: Sintaksnya berbeda dari Netlify
module.exports = async (request, response) => {
  
  // Pastikan ini adalah request POST
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Ambil pesan dan riwayat chat dari frontend
    // PERHATIKAN: Vercel otomatis mem-parsing JSON, jadi tidak perlu JSON.parse()
    const { message, history } = request.body;

    // Inisialisasi model DENGAN systemInstruction
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", // Kita gunakan nama model yang stabil
        systemInstruction: systemInstruction.parts[0].text 
    });

    // Buat chat session HANYA dengan riwayat
    const chat = model.startChat({
        history: history,
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    // Kirim pesan baru ke Google
    const result = await chat.sendMessage(message);
    const botResponse = result.response;
    const text = botResponse.text();

    // Kirim balasan bot kembali ke frontend
    // PERHATIKAN: Ini cara Vercel mengirim balasan
    response.status(200).json({ text: text });

  } catch (error) {
    console.error("Error di server:", error);
    response.status(500).json({ error: "Terjadi kesalahan di server." });
  }
};