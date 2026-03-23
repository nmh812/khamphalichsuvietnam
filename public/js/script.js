// --- DỮ LIỆU BẢN ĐỒ MẪU ---
const locations = [
    {
        name: "Chiến trường Điện Biên Phủ",
        lat: 21.38531, lng: 103.00488,
        city: "Tỉnh Điện Biên",
        desc:" Quần thể di tích chiến trường Điện Biên Phủ là một quần thể các di tích lịch sử nằm tại tỉnh Điện Biên ghi lại chiến công của Quân đội nhân dân Việt Nam trong chiến dịch Điện Biên Phủ. Hiện nay, nơi đây đã được thủ tướng chính phủ Việt Nam đưa vào danh sách xếp hạng 130 di tích quốc gia đặc biệt.Các di tích nổi bật của chiến trường Điện Biên bao gồm đồi A1, C1, C2, D1, cứ điểm Hồng Cúm, Him Lam, đồi Độc Lập, cầu Mường Thanh, sân bay Mường Thanh (nay là sân bay Điện Biên Phủ) và hầm chỉ huy tập đoàn cứ điểm Điện Biên Phủ.",
        pano: "../images/db1.jpg",
        pano: "../images/db2.jpg"
    },
    {
        name: "Văn Miếu - Quốc Tử Giám",
        lat: 21.02930, lng: 105.83550,
        city: "Hà Nội",
        desc: "Văn Miếu – Quốc Tử Giám là quần thể di tích đa dạng, phong phú hàng đầu của thành phố Hà Nội, nằm ở phía Nam kinh thành Thăng Long. Quần thể kiến trúc Văn Miếu – Quốc Tử Giám bao gồm: hồ Văn, khu Văn Miếu – Quốc Tử Giám và vườn Giám, mà kiến trúc chủ thể là Văn miếu (chữ Hán: 文廟) - nơi thờ Khổng Tử, và Quốc tử giám (chữ Hán: 國子監) - trường đại học đầu tiên của Việt Nam. Khu Văn Miếu – Quốc Tử Giám có tường gạch vồ bao quanh, phía trong chia thành 5 lớp không gian với các kiến trúc khác nhau. Mỗi lớp không gian đó được giới hạn bởi các tường gạch có 3 cửa để thông với nhau (gồm cửa chính giữa và hai cửa phụ hai bên). Từ ngoài vào trong có các cổng lần lượt là: cổng Văn Miếu, Đại Trung, Khuê Văn các, Đại Thành và cổng Thái Học.[1] Với hơn 700 năm hoạt động đã đào tạo hàng nghìn nhân tài cho đất nước. Ngày nay, Văn Miếu – Quốc Tử Giám là nơi tham quan của du khách trong và ngoài nước đồng thời cũng là nơi khen tặng cho học sinh xuất sắc và còn là nơi tổ chức hội thơ hàng năm vào ngày rằm tháng giêng. Đặc biệt, đây còn là nơi các sĩ tử ngày nay đến cầu may trước mỗi kỳ thi quan trọng.",
        pano: "../images/anh-360-do-di-tich-van-mieu-quoc-tu-giam-ivivu-2.jpg"
    },
    {
        name: "Cố Đô Huế",
        lat: 16.46840, lng: 107.57700,
        city: "Thừa Thiên Huế",
        desc: "QUẦN THỂ DI TÍCH CỐ ĐÔ HUẾ I. VỊ TRÍ ĐỊA LÝ Quần thể di tích nằm dọc hai bên bờ sông Hương thuộc thành phố Huế và các vùng phụ cận (hương lộ) thuộc tỉnh Thừa Thiên Huế•	Đặc điểm địa hình: Nằm trên vùng đồng bằng duyên hải hẹp, dựa lưng vào dãy Trường Sơn, phía trước hướng ra biển Đông.	Yếu tố phong thủy: Kinh thành được xây dựng dựa trên sự tính toán kỹ lưỡng về phong thủy:	Tiền án: Núi Ngự Bình (như bức bình phong che chắn).Minh đường: Sông Hương (đoạn chảy qua trước kinh thành).Tả Thanh Long - Hữu Bạch Hổ: Cồn Hến và Cồn Dã Viên (hai hòn đảo nhỏ trên sông Hương).II. LỊCH SỬ HÌNH THÀNH Lịch sử Cố đô Huế gắn liền với vận mệnh của triều đại nhà Nguyễn - triều đại phong kiến cuối cùng của Việt Nam.	Giai đoạn tiền thân (1687 - 1774): Các chúa Nguyễn đã chọn Kim Long và sau đó là Phú Xuân (Huế ngày nay) làm thủ phủ Đàng Trong.	Giai đoạn xây dựng (1802 - 1833): * Năm 1802, Vua Gia Long lên ngôi, chọn Phú Xuân làm kinh đô.	Năm 1805, bắt đầu khởi công xây dựng Kinh Thành.	Năm 1832 - 1833, dưới thời Vua Minh Mạng, toàn bộ hệ thống kiến trúc cung đình cơ bản hoàn thiện như diện mạo ngày nay.	Giai đoạn duy trì (1833 - 1945): Các đời vua tiếp theo tiếp tục xây dựng thêm các lăng tẩm và công trình phụ trợ.	Giai đoạn bảo tồn (1945 - nay): Sau khi triều Nguyễn kết thúc, di tích trải qua chiến tranh hư hại nặng nề. Năm 1993, UNESCO công nhận là Di sản Văn hóa Thế giới, bắt đầu giai đoạn phục hồi quy mô lớn.III. CẤU TRÚC VÀ CÁC BỘ PHẬN CHÍNH Kiến trúc Cố đô Huế là sự kết hợp giữa kiến trúc phương Đông (triết lý Nho giáo) và kiến trúc quân sự phương Tây (kiểu Vauban). Cấu trúc gồm 3 vòng thành lồng vào nhau, xây lệch về phía Nam.1. TỔNG THỂ QUY HOẠCH: TAM TRÙNG THÀNH QUÁCH Cấu trúc cốt lõi của Huế là hệ thống 3 vòng thành lồng vào nhau, có chung một trục thần đạo (trục trung tâm) chạy theo hướng Tây Bắc - Đông Nam. A. Kinh Thành (Vòng ngoài cùng) - Bảo vệ và Dân sinh•	Kiến trúc Vauban: Đây là điểm độc đáo nhất. Khác với thành quách Trung Hoa thuần túy, Kinh Thành Huế áp dụng kỹ thuật phòng thủ của kỹ sư quân sự Pháp Vauban với các pháo đài lồi ra ngoài để tạo góc bắn tối ưu.•	Hệ thống thủy đạo: Bao quanh thành là Hộ Thành Hà (hào nước) vừa để phòng thủ, vừa để thoát nước và giao thông thủy.•	Số lượng pháo đài: Có 24 pháo đài kiên cố bao quanh để đặt súng thần công.B. Hoàng Thành (Vòng giữa) - Trung tâm Chính trị•	Chức năng: Là nơi đặt các cơ quan điều hành cao nhất và các miếu thờ tổ tiên nhà Nguyễn.•	Giới hạn: Thành cao khoảng 4m, dày 1m, chu vi 2.450m.•	Bố cục Tả Chiêu Hữu Mục: Các miếu thờ bên trái (phía Đông) thờ tổ tiên, bên phải (phía Tây) thờ các vị công thần hoặc các miếu phụ.o	Khu vực cử hành đại lễ: Nằm trên trục chính (Ngọ Môn -> Điện Thái Hòa).o	Khu vực thờ tự: Nằm hai bên trục chính (Thế Miếu, Thái Miếu...).C. Tử Cấm Thành (Vòng trong cùng) - Không gian Riêng tư•	Đối tượng: Chỉ dành riêng cho Vua và hoàng gia (Cung phi, thái giám, thị nữ). Bất cứ ai xâm nhập bất hợp pháp đều bị trọng tội.•	Cấu trúc: Có 7 cửa ra vào. Trung tâm là Điện Cần Chánh (nơi vua làm việc hàng ngày - hiện đang phục dựng).2. PHÂN TÍCH TRỤC THẦN ĐẠO (XƯƠNG SỐNG CỦA CỐ ĐÔ)Mọi công trình quan trọng nhất đều nằm trên một đường thẳng tắp xuyên suốt từ ngoài vào trong:1.	Núi Ngự Bình: Tiền án (điểm kết thúc tầm nhìn phía Nam).2.	Kỳ Đài: Cột cờ trung tâm.3.	Ngọ Môn: Cổng chính của Hoàng Thành.4.	Cầu Trung Đạo: Bắc qua hồ Thái Dịch.5.	Điện Thái Hòa: Trung tâm quyền lực tối cao.6.	Điện Cần Chánh - Điện Càn Thành - Điện Khôn Thái: Nơi ở của Vua và Hoàng Hậu.7.	Lầu Kiến Trung: Điểm kết thúc của trục thần đạo bên trong thành.3. CẤU TRÚC VẬT LIỆU VÀ NGHỆ THUẬT TRANG TRÍ Để hiểu sâu về cái hồn của cấu trúc Huế, phải nhìn vào chi tiết •	Vật liệu: Sử dụng gạch vồ, đá thanh (từ Thanh Hóa vận chuyển vào) và gỗ lim. Đặc biệt là vôi vữa trộn với mật mía và giấy bản để tạo độ kết dính cực cao.•	Nghệ thuật Khảm Sành Sứ: Đây là đặc trưng riêng biệt của Huế. Các mảnh bát đĩa, bình hoa vỡ được nghệ nhân cắt gọt tỉ mỉ để ghép thành hình rồng, phượng, hoa lá trên các bờ quyết, mái nhà.•	Hệ thống Nhất thi nhất họa: Trên các cổ diêm (phần chuyển tiếp giữa hai tầng mái) luôn có cấu trúc một ô thơ chữ Hán đi kèm một ô hình vẽ. Đây là một thư viện ngoài trời khổng lồ.4. Ý NGHĨA BIỂU TƯỢNG CỦA CÁC CON SỐCấu trúc Huế gắn liền với các con số mang tính triết học:•	Số 5: Tượng trưng cho Ngũ hành (Kim, Mộc, Thủy, Hỏa, Thổ) và Ngũ đức. Kinh thành có 10 cửa (5 cặp đối xứng).•	Số 9: Tượng trưng cho sự cực trọng, vĩnh cửu và quyền uy của Hoàng đế.o	Cửu Đỉnh: 9 đỉnh đồng tượng trưng cho sự vững chãi của vương triều.o	Cửu Vị Thần Công: 9 khẩu súng thần công bảo vệ kinh đô.5. CẤU TRÚC PHONG THỦY CẢNH QUANHuế không chỉ là xây nhà trên đất, mà là xây nhà trong vườn.•	Sông Hương: Không chỉ là hào nước tự nhiên mà còn là Minh đường - nơi tụ hội sinh khí.•	Cồn Hến & Cồn Dã Viên: Đóng vai trò như hai vệ sĩ (Tả Thanh Long, Hữu Bạch Hổ) trấn giữ hai bên kinh thành.IV. GIÁ TRỊ VÀ Ý NGHĨA 1. Giá trị lịch sử•	Là chứng tích sống động nhất về một triều đại phong kiến đóng vai trò quan trọng trong việc định hình lãnh thổ Việt Nam hiện đại.•	Lưu giữ các dấu tích về thể chế chính trị, quân sự và ngoại giao thế kỷ XIX.2. Giá trị văn hóa - kiến trúc•	Kiến trúc: Mẫu mực về sự hòa hợp giữa công trình nhân tạo và cảnh quan thiên nhiên.•	Mỹ thuật: Đỉnh cao của nghệ thuật chạm khắc gỗ, khảm sành sứ và trang trí cung đình.•	Di sản phi vật thể: Nơi sản sinh và lưu giữ Nhã nhạc cung đình Huế, ẩm thực cung đình và các lễ hội truyền thống.3. Ý nghĩa đối với nhân loại•	Là Di sản Thế giới đầu tiên của Việt Nam được UNESCO vinh danh (1993).•	Được đánh giá là một bài thơ đô thị tuyệt tác, đóng góp vào kho tàng kiến trúc nhân loại một mô hình kinh đô phương Đông độc đáo. V. CÁC DI SẢN ĐƯỢC CÔNG NHẬN TẠI HUẾKhông chỉ có kiến trúc, Huế còn sở hữu 7 danh hiệu Di sản được UNESCO công nhận:1.	Quần thể Di tích Cố đô Huế (Di sản Văn hóa Thế giới - 1993).2.	Nhã nhạc Cung đình Huế (Kiệt tác truyền khẩu và phi vật thể - 2003).3.	Mộc bản triều Nguyễn (Di sản tư liệu Thế giới - 2009).4.	Châu bản triều Nguyễn (Di sản tư liệu Thế giới - 2014).5.	Thơ văn trên kiến trúc cung đình Huế (Di sản tư liệu thế giới khu vực châu Á - Thái Bình Dương - 2016).6.	Thực hành tín ngưỡng thờ Mẫu Tam phủ (Huế là một trung tâm lớn - 2016).7.Nghệ thuật Bài Chòi Trung Bộ (2017).",
        pano: "../images/dai-noi-hue-1_1624858181.jpg"
    },
    {
        name: "Dinh Độc Lập ",  
        lat: 10.7772, lng: 106.6953,
        city: "Thừa Thiên Huế",
        desc: "1. Lịch sử hình thành và Biến thiên thời đại Giai đoạn 1868 – 1962 (Dinh Norodom): *  Do Thống đốc Pháp Lagrandière đặt viên đá đầu tiên. Xây dựng theo phong cách kiến trúc Tân cổ điển Pháp. Năm 1954, Pháp bàn giao lại cho chính quyền Ngô Đình Diệm.Giai đoạn 1962 – 1966 (Xây mới): * Ngày 27/02/1962, phe đảo chính ném bom làm sập toàn bộ cánh trái của Dinh. Do không thể khôi phục, Ngô Đình Diệm cho san bằng và xây mới hoàn toàn trên nền đất cũ (12ha). Khánh thành ngày 31/10/1966 (lúc này Ngô Đình Diệm đã bị ám sát, người chủ trì khánh thành là Nguyễn Văn Thiệu). Sau 1975: Tên gọi chính thức là Hội trường Thống Nhất.2. Giải mã kiến trúc  (Cực kỳ chi tiết)Kiến trúc sư Ngô Viết Thụ đã biến một khối bê tông hiện đại thành một", 
        pano: "../images/dinh-doc-lap-1-1545.jpg"
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