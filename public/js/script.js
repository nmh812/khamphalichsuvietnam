// --- DỮ LIỆU BẢN ĐỒ MẪU ---
const locations = [
    {
        name: "Chiến trường Điện Biên Phủ",
        lat: 21.38531, lng: 103.00488,
        city: "Tỉnh Điện Biên",
        desc:" Hầm chỉ huy của tướng De Castries, nơi đánh dấu sự sụp đổ của thực dân Pháp tại Điện Biên Phủ năm 1954.",
        pano: "https://pannellum.org/images/alma.jpg" 
    },
    {
        name: "Văn Miếu - Quốc Tử Giám",
        lat: 21.02930, lng: 105.83550,
        city: "Hà Nội",
        desc: "Built in 1070, this was Vietnam's first university and a symbol of scholarship.",
        pano: "https://pannellum.org/images/bma-0.jpg"
    },
    {
        name: "Cố Đô Huế",
        lat: 16.46840, lng: 107.57700,
        city: "Thừa Thiên Huế",
        desc: "Hoàng thành của 13 vị vua triều Nguyễn, một công trình kiến trúc đồ sộ và là Di sản Văn hóa Thế giới.",
        pano: "https://pannellum.org/images/alma.jpg"
    },
    {
        name: "Dinh Độc Lập ",  
        lat: 10.7772, lng: 106.6953,
        city: "Thừa Thiên Huế",
        desc: "Hoàng thành của 13 vị vua triều Nguyễn, một công trình kiến trúc đồ sộ và là Di sản Văn hóa Thế giới.",
        pano: "https://pannellum.org/images/alma.jpg"
    }
];

let currentPano = null;
let currentLessonCode = "";
let currentQuestions = [];
let startTime = 0;

// --- MAP & 360 LOGIC ---
function initMap() {
    // Đặt trung tâm bản đồ ở miền Trung VN để nhìn bao quát
    const map = L.map('map').setView([16.46, 107.58], 5); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(map);
        marker.on('click', () => showInfo(loc));
    });
}

function showInfo(loc) {
    document.getElementById('infoPanel').style.display = 'block';
    document.getElementById('placeName').innerText = loc.name;
    document.getElementById('placeLocation').innerText = loc.city;
    document.getElementById('placeDesc').innerText = loc.desc;

    // Huỷ 360 cũ nếu có để tránh lỗi bộ nhớ
    if (currentPano) currentPano.destroy();
    
    // Khởi tạo Pannellum 360 với ảnh chính xác
    currentPano = pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": loc.pano, 
        "autoLoad": true,
        "compass": true // Bật la bàn định hướng
    });
}

// --- WEB SPEECH API (TTS) ---
let viVoice = null;

// Hàm tìm giọng Tiếng Việt từ hệ thống
function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    // Tìm giọng có chứa 'vi-VN' hoặc 'vi_VN'
    viVoice = voices.find(voice => voice.lang === 'vi-VN' || voice.lang.replace('_', '-') === 'vi-VN');
}

// Trình duyệt load danh sách giọng bất đồng bộ, nên cần lắng nghe sự kiện này
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText() {
    const text = document.getElementById('placeDesc').innerText;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng câu đang đọc dở (nếu có)
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Cố gắng tìm lại giọng Tiếng Việt nếu chưa load kịp
        if (!viVoice) loadVoices(); 
        
        if (viVoice) {
            utterance.voice = viVoice; // Ép dùng giọng Tiếng Việt
        }
        
        utterance.lang = 'vi-VN';
        utterance.rate = 0.9;  // Tốc độ: 0.9 giúp giọng đọc chậm rãi, truyền cảm hơn (mặc định là 1)
        utterance.pitch = 1;   // Độ cao của âm thanh
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ chức năng đọc văn bản.");
    }
}

// --- AUTHENTICATION LOGIC ---
async function handleAuth(action) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role, action })
    });
    const data = await res.json();
    
    document.getElementById('authMessage').innerText = data.message || "";
    
    if (data.success && action === 'login') {
        localStorage.setItem('currentUser', username);
        localStorage.setItem('role', data.role);
        window.location.href = data.role === 'teacher' ? 'teacher.html' : 'quiz.html';
    }
}

function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

// --- TEACHER LOGIC ---
async function createLesson() {
    const code = document.getElementById('lessonCode').value;
    const theory = document.getElementById('lessonTheory').value;
    
    const questions = [];
    document.querySelectorAll('.question-block').forEach(block => {
        const text = block.querySelector('.q-text').value;
        const ans = block.querySelector('.q-ans').value;
        if(text && ans) questions.push({ text, ans });
    });

    if(!code) return alert("Vui lòng nhập mã bài học!");

    try {
        const res = await fetch('/api/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, theory, questions })
        });
        const data = await res.json();
        
        if(data.success) {
            alert(data.message);
            // Có thể reset form ở đây
        }
    } catch (err) {
        console.error("Lỗi gửi dữ liệu:", err);
    }
}

// --- STUDENT LOGIC ---
async function loadLesson() {
    const rawCode = document.getElementById('studentCode').value;
    if(!rawCode) return alert("Vui lòng nhập mã!");

    try {
        // Gửi yêu cầu lên server
        const res = await fetch(`/api/lessons/${rawCode}`);
        const data = await res.json();

        if (data.success) {
            currentLessonCode = rawCode.trim().toUpperCase();
            currentQuestions = data.lesson.questions;
            
            // Hiển thị nội dung
            document.getElementById('codeSection').style.display = 'none';
            document.getElementById('lessonSection').style.display = 'block';
            document.getElementById('lTheoryText').innerText = data.lesson.theory;

            // Render câu hỏi
            let html = '';
            currentQuestions.forEach((q, index) => {
                html += `
                <div class="question-block">
                    <p><b>Câu ${index + 1}:</b> ${q.text}</p>
                    <input type="text" id="ans_${index}" class="q-ans-input" placeholder="Câu trả lời của bạn...">
                </div>`;
            });
            document.getElementById('quizForm').innerHTML = html;
            startTime = Date.now();
        } else {
            // Thông báo lỗi nếu không tìm thấy mã
            const msgEl = document.getElementById('studentMsg');
            msgEl.innerText = data.message;
            msgEl.style.color = "red";
        }
    } catch (err) {
        alert("Không thể kết nối đến máy chủ!");
    }
}

async function submitQuiz() {
    let score = 0;
    currentQuestions.forEach((q, index) => {
        const userAns = document.getElementById(`ans_${index}`).value;
        if (userAns.toLowerCase() === q.ans.toLowerCase()) score++;
    });

    const timeTaken = Math.floor((Date.now() - startTime) / 1000); // tính bằng giây
    const username = localStorage.getItem('currentUser') || 'Khách';

    const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: currentLessonCode, studentName: username, score: score, time: timeTaken })
    });
    const data = await res.json();

    document.getElementById('lessonSection').style.display = 'none';
    document.getElementById('leaderboardSection').style.display = 'block';
    document.getElementById('myScore').innerText = `${score} / ${currentQuestions.length} (Thời gian: ${timeTaken}s)`;

    // Render Bảng xếp hạng
    let trHtml = '<tr><th>Hạng</th><th>Tên</th><th>Điểm</th><th>Thời gian(s)</th></tr>';
    data.leaderboard.forEach((entry, idx) => {
        trHtml += `<tr><td>${idx + 1}</td><td>${entry.studentName}</td><td>${entry.score}</td><td>${entry.time}</td></tr>`;
    });
    document.getElementById('leaderboardTable').innerHTML = trHtml;
}