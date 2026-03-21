const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database
const users = []; // { username, password, role }
const lessons = {}; // { quizCode: { theory, questions: [] } }
const leaderboards = {}; // { quizCode: [{ studentName, score, time }] }

// API Đăng ký / Đăng nhập
app.post('/api/auth', (req, res) => {
    const { username, password, role, action } = req.body;
    if (action === 'register') {
        users.push({ username, password, role });
        return res.json({ success: true, message: 'Đăng ký thành công!' });
    } else {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) return res.json({ success: true, role: user.role, username });
        return res.json({ success: false, message: 'Sai thông tin đăng nhập!' });
    }
});

// Đảm bảo object lessons nằm ở phạm vi toàn cục (global) trong file server.js


// API Giáo viên tạo bài học
app.post('/api/lessons', (req, res) => {
    const { code, theory, questions } = req.body;
    
    // Chuẩn hóa mã: Chuyển về chữ hoa và xóa khoảng trắng thừa
    const normalizedCode = code.trim().toUpperCase();
    
    lessons[normalizedCode] = { theory, questions };
    leaderboards[normalizedCode] = []; 
    
    console.log(`[Server] Đã tạo bài học mới: ${normalizedCode}`); // Log để kiểm tra
    res.json({ success: true, message: `Đã tạo bài học mã: ${normalizedCode}` });
});

// API Học sinh lấy bài học
app.get('/api/lessons/:code', (req, res) => {
    const searchCode = req.params.code.trim().toUpperCase(); // Chuẩn hóa mã khi tìm
    const lesson = lessons[searchCode];

    if (lesson) {
        res.json({ success: true, lesson });
    } else {
        res.json({ success: false, message: 'Mã bài học không tồn tại! Hãy kiểm tra lại.' });
    }
});

// API Nộp bài và cập nhật Leaderboard
app.post('/api/submit', (req, res) => {
    const { code, studentName, score, time } = req.body;
    if (!leaderboards[code]) leaderboards[code] = [];
    leaderboards[code].push({ studentName, score, time });
    
    // Sắp xếp điểm cao xuống thấp, thời gian ít lên trên
    leaderboards[code].sort((a, b) => b.score - a.score || a.time - b.time);
    
    res.json({ success: true, leaderboard: leaderboards[code] });
});

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});