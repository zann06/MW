// Isi untuk file: netlify/functions/chat.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ambil Kunci API Anda dari Environment Variable (RAHASIA)
// JANGAN PERNAH MENULIS KUNCI API ANDA LANGSUNG DI SINI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Ini adalah fungsi handler Netlify
exports.handler = async (event) => {
  
  // Pastikan ini adalah request POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Ambil pesan dan riwayat chat dari frontend
    // Ini cara Netlify membaca body
    const { message, history } = JSON.parse(event.body);

    // Ambil kepribadian bot (System Instruction)
    const systemInstruction = {
        role: "model",
        parts: [{
            text: "PERHATIAN: Kamu adalah 'Wealth Buddy' (panggil diri_kamu 'Wealth Buddy' atau 'aku'). Kamu adalah AI chatbot untuk platform edukasi keuangan 'MindWealth Digital'. Target audiens kamu adalah Gen Z di Indonesia.\n\nTUGAS KAMU:\n1.  **Kepribadian:** Ramah, suportif, sedikit humoris, dan sangat berempati. Gaya kamu seperti sahabat pintar (smart best friend) yang jago soal uang dan mindset.\n2.  **Gaya Bahasa:** HARUS menggunakan bahasa Indonesia santai dan non-formal (pakai 'kamu', 'aku', 'gue', 'bro/sis', 'gokil', 'santuy', dll). JANGAN kaku atau robotik.\n3.  **Jawaban:** SELALU singkat (2-3 kalimat). HARUS motivasional dan SELALU gunakan emoji yang relevan (🌱, 🤑, 💪, 😎, 🧠).\n4.  **Topik:** Fokus pada kebiasaan menabung, motivasi, dan manajemen stres keuangan.\n5.  **Contoh Balasan:** 'Saving itu gampang kok! Mulai dari hal kecil aja, bro. Tiap hari nabung 10rb, sebulan udah lumayan! 🤑💪' atau 'Your wallet’s cheering for you today 🤑💪 — small saves build big dreams.'\n\nSekarang, balas pertanyaan user ini dengan gaya tersebut:"
        }]
    };

    // Inisialisasi model
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash-latest"
    });

    // Buat chat session dengan riwayat yang sudah ada
    const chat = model.startChat({
        history: [systemInstruction, ...history], // Kirim instruksi + riwayat
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    // Kirim pesan baru ke Google
    const result = await chat.sendMessage(message);
    const botResponse = result.response;
    const text = botResponse.text();

    // Kirim balasan bot kembali ke frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ text: text })
    };

  } catch (error) {
    console.error("Error di server:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Terjadi kesalahan di server." })
    };
  }
};