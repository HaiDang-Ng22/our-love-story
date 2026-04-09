# 💖 LoveCode - Ứng dụng Web Tỏ Tình & Lưu Kỷ Niệm

## 📌 Giới thiệu
LoveCode là một ứng dụng web đơn giản giúp:
- Tạo trang tỏ tình 💌
- Lưu nhật ký tình yêu 📖
- Tạo các lựa chọn (choice game) tương tác 😆
- Quản lý người dùng (admin)

Ứng dụng sử dụng:
- HTML, CSS, JavaScript
- Firebase (Authentication + Realtime Database)

---

## 🚀 Tính năng chính

### 🔐 1. Xác thực người dùng
- Đăng ký / đăng nhập
- Quản lý session
- Phân quyền (user / admin)

### 💌 2. Trang tỏ tình
- Giao diện dễ thương
- Hiệu ứng tương tác (nút né tránh, câu hỏi...)
- Tùy chỉnh nội dung

### 📖 3. Diary (Nhật ký)
- Thêm / sửa / xóa nhật ký
- Lưu dữ liệu lên Firebase
- Hiển thị danh sách kỷ niệm

### 🎮 4. Choice (Trò chơi lựa chọn)
- Người dùng chọn câu trả lời
- Có logic xử lý riêng cho user/admin
- Lưu kết quả

### ⚙️ 5. Admin Panel
- Quản lý dữ liệu
- Quản lý user
- Theo dõi hoạt động

---

## 📁 Cấu trúc thư mục
LoveCode/
│
├── Index.html
│
├── css/
│ ├── style.css
│ ├── auth.css
│ ├── diary.css
│ └── choice.css
│
├── js/
│ ├── app.js
│ ├── auth.js
│ ├── user.js
│ ├── admin.js
│ ├── diary.js
│ ├── firebase-api.js
│ │
│ └── choice/
│ ├── choice-api.js
│ ├── choice-user.js
│ └── choice-admin.js


---

## 🔧 Cài đặt & chạy project

### 1. Clone project
```bash
git clone https://github.com/HaiDang-Ng22/our-love-story.git

2. Cấu hình Firebase

Mở file:

js/firebase-api.js

Thêm config Firebase:

var firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
3. Chạy project
Mở Index.html bằng trình duyệt
hoặc dùng Live Server
🧠 Công nghệ sử dụng
HTML5
CSS3
JavaScript (Vanilla JS)
Firebase Authentication
Firebase Realtime Database
📌 Hạn chế hiện tại
Chưa có backend riêng (phụ thuộc Firebase)
Code JS chưa tách module rõ ràng
UI chưa responsive tốt
Chưa có bảo mật nâng cao
Chưa deploy production chuẩn
🚀 Hướng phát triển (Cải tiến trong tương lai)
🔥 1. Nâng cấp giao diện (UI/UX)
Responsive mobile 📱
Animation mượt hơn
Dark mode 🌙
🔐 2. Bảo mật
Validate input
Firebase rules chặt chẽ hơn
Chống spam
⚙️ 3. Refactor code
Chia module rõ ràng (MVC hoặc MVVM)
Sử dụng ES6 Modules
Tách API riêng
🌐 4. Backend riêng (Nâng cao)
Node.js + Express
Kết nối database (MongoDB / MySQL)
REST API
📊 5. Tính năng mới
Chat real-time 💬
Gửi email tỏ tình 📧
Timeline tình yêu
Upload ảnh kỷ niệm 🖼️
Notification 🔔
☁️ 6. Deploy
Hosting: Vercel / Netlify
Firebase Hosting
Domain riêng
👨‍💻 Tác giả
Đăng Hải
❤️ Ghi chú

Project phù hợp làm:

Đồ án môn học
Demo web tương tác
Project cá nhân



---

# 🎯 Gợi ý để bạn làm đồ án "xịn hơn"

Mình nói thật nhé: project này **ý tưởng rất tốt**, nhưng nếu đem đi nộp đồ án thì bạn nên nâng cấp thêm 3 thứ này:

### 1. 🔥 Quan trọng nhất (nên làm)
- Viết **báo cáo UML**
  - Use Case Diagram
  - Sequence Diagram
  - ERD (Firebase hoặc DB)

### 2. 💻 Code level
- Tách rõ:
  - `services/` (Firebase API)
  - `controllers/`
  - `views/`

### 3. 🌐 Demo thực tế
- Deploy lên:
  - Vercel / Netlify
- Có link demo → điểm cao hơn hẳn

---

# 👉 Nếu bạn muốn
Mình có thể giúp bạn tiếp:

- Viết **báo cáo Word full đồ án (30–50 trang)**  
- Vẽ **Use Case + ERD + Sequence**
- Refactor code lên chuẩn **điểm A**
- Thêm tính năng **chat realtime / upload ảnh**

Chỉ cần nói:  
👉 *"làm tiếp phần báo cáo cho tôi"* hoặc *"cải tiến code cho tôi"*