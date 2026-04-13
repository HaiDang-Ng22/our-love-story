<div align="center">

# 💖 LoveCode Web

**Ứng dụng web tình yêu — Nơi lưu giữ những kỷ niệm đẹp nhất của hai đứa mình**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

<br/>

> *"Đây là trang web mà anh làm ra để thay lời mình muốn nói với em"* ❤️

</div>

---

## 📌 Giới thiệu

**LoveCode** là một ứng dụng web được xây dựng như một món quà tình yêu — nơi admin (người yêu) có thể tạo và quản lý các đoạn code HTML/CSS/JS để hiển thị cho người dùng (người được yêu) xem. Kèm theo đó là nhật ký tình yêu số, trò chơi lựa chọn tương tác và giao diện đầy cảm xúc.

---

## ✨ Tính năng chính

### 🔐 Xác thực người dùng
- Đăng nhập bằng email & mật khẩu qua Firebase Authentication
- Phân quyền tự động: **Admin** (người yêu) / **User** (cục dàng)
- Quản lý session ổn định, không mất đăng nhập khi tải lại trang

### 🎨 Code Editor (Admin)
- Soạn thảo code HTML / CSS / JavaScript trực tiếp trên trình duyệt
- **Live Preview** — xem kết quả render ngay lập tức qua `<iframe>`
- Thanh kéo resize linh hoạt giữa Editor và Preview (kéo ngang trên desktop, kéo dọc trên mobile)
- Quản lý nhiều đoạn code: thêm, sửa, xóa, đặt code hiển thị cho user

### 💌 Trang tỏ tình (User View)
- Toàn màn hình, immersive — chỉ hiện nội dung code mà admin chọn
- Giao diện tối giản, lãng mạn, tập trung vào cảm xúc
- Nút nổi để mở nhật ký tình yêu

### 📖 Nhật ký tình yêu (Diary)
- Thêm / sửa / xóa nhật ký kỷ niệm
- Dữ liệu được lưu và đồng bộ real-time qua Firebase Realtime Database
- Hiển thị danh sách nhật ký theo thời gian

### 🎮 Trò chơi lựa chọn (Choice)
- Người dùng chọn câu trả lời tương tác
- Logic xử lý riêng cho vai trò User và Admin
- Lưu kết quả lựa chọn lên Firebase

### ⚙️ Admin Dashboard
- Sidebar quản lý danh sách code
- Trình soạn thảo code tích hợp resize handle
- Xem trước real-time trong khung preview
- Kiểm soát code nào được hiển thị cho user

---

## 📁 Cấu trúc thư mục

```
LoveCode/
│
├── Index.html              # Entry point duy nhất của ứng dụng
│
├── css/
│   ├── style.css           # Style chính (layout, auth, admin, user view)
│   ├── auth.css            # Style trang đăng nhập
│   ├── diary.css           # Style giao diện nhật ký
│   └── choice.css          # Style trò chơi lựa chọn
│
└── js/
    ├── firebase-api.js     # Khởi tạo Firebase & các hàm API dữ liệu
    ├── auth.js             # Xử lý đăng nhập / đăng xuất / phân quyền
    ├── admin.js            # Logic Admin Dashboard (quản lý code)
    ├── user.js             # Logic User View (hiển thị code cho user)
    ├── diary.js            # Toàn bộ chức năng nhật ký tình yêu
    ├── app.js              # Điều phối khởi động ứng dụng
    │
    └── choice/
        ├── choice-api.js   # Firebase API cho tính năng lựa chọn
        ├── choice-user.js  # Logic lựa chọn phía User
        └── choice-admin.js # Logic lựa chọn phía Admin
```

---

## 🔧 Cài đặt & Chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/HaiDang-Ng22/our-love-story.git
cd our-love-story
```

### 2. Cấu hình Firebase

Mở file `js/firebase-api.js` và điền thông tin Firebase project của bạn:

```javascript
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

> 💡 Lấy config tại: [Firebase Console](https://console.firebase.google.com/) → Project Settings → Your apps → Firebase SDK snippet

### 3. Cấu hình Firebase Rules (Realtime Database)

Trong Firebase Console → Realtime Database → Rules, dùng cấu hình phù hợp:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

### 4. Chạy ứng dụng

Mở `Index.html` trực tiếp bằng trình duyệt, hoặc dùng **Live Server** (VS Code extension):

```
Click chuột phải vào Index.html → "Open with Live Server"
```

---

## 🧠 Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| **HTML5** | Cấu trúc giao diện (SPA - Single Page Application) |
| **CSS3** | Styling, animations, responsive layout |
| **Vanilla JavaScript** | Logic ứng dụng, DOM manipulation |
| **Firebase Authentication** | Đăng nhập, phân quyền user/admin |
| **Firebase Realtime Database** | Lưu trữ và đồng bộ dữ liệu real-time |
| **Font Awesome 6** | Icon bộ icon phong phú |
| **Google Fonts** | Typography (Poppins, Dancing Script) |

---

## 📸 Giao diện

| Màn hình | Mô tả |
|---|---|
| 🔐 **Login Screen** | Giao diện đăng nhập lãng mạn với quote tình yêu |
| ⚙️ **Admin Dashboard** | Editor code + live preview + quản lý code |
| 💌 **User View** | Xem code fullscreen do admin chọn |
| 📖 **Diary** | Nhật ký kỷ niệm tình yêu |

---

## ⚠️ Hạn chế hiện tại

- Chưa có backend riêng — phụ thuộc hoàn toàn vào Firebase
- Chưa có validate input chặt chẽ phía client
- Firebase Rules cần được cấu hình cẩn thận trước khi deploy
- Chưa tối ưu đầy đủ cho mobile

---

## 🚀 Hướng phát triển

- [ ] 📱 Tối ưu responsive cho mobile
- [ ] 🌙 Dark mode / Light mode toggle
- [ ] 💬 Chat real-time giữa hai người
- [ ] 🖼️ Upload & lưu ảnh kỷ niệm (Firebase Storage)
- [ ] 📧 Gửi thiệp tình yêu qua email
- [ ] 📅 Timeline kỷ niệm theo ngày tháng
- [ ] 🔔 Push notification nhắc nhở ngày kỷ niệm
- [ ] ☁️ Deploy lên Firebase Hosting / Vercel

---

## 👨‍💻 Tác giả

**Đăng Hải** — làm ra trang web này với tất cả tình yêu ❤️

[![Instagram](https://img.shields.io/badge/@he__den.ng2407-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/he_den.ng2407/)

---

<div align="center">

*Được tạo ra với ❤️ — Dành riêng cho em yêu*

</div>