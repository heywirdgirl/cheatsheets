Có, Termux có một trang Wiki cực kỳ chi tiết và đầy đủ! (Cụm từ "cos kiwi" của bạn chính là Wiki đúng không nè).
Trang chủ của Termux dẫn thẳng đến Termux Wiki (địa chỉ chính thức là: wiki.termux.com). Đây được coi là "cuốn bách khoa toàn thư" chứa mọi hướng dẫn, danh sách câu lệnh từ cơ bản đến nâng cao cho người dùng.
Trên Termux Wiki có những gì?
 * Touch Keyboard / Phím tắt: Hướng dẫn cách dùng các phím đặc biệt (Ctrl, Alt, Tab, mũi tên) trên bàn phím cảm ứng của điện thoại.
 * Package Management: Hướng dẫn cách dùng lệnh pkg hoặc apt để tìm kiếm, cài đặt và xóa phần mềm.
 * Development Environments: Hướng dẫn chi tiết cách cấu hình các môi trường lập trình như Node.js, Python, Ruby, C/C++...
 * Sharing Data: Cách kết nối bộ nhớ của điện thoại với Termux (chính là lệnh termux-setup-storage để bạn vào thư mục code đó).
Phao cứu sinh: Các câu lệnh cơ bản nhất bạn cần biết
Để bạn đỡ phải bơi trong đống tài liệu tiếng Anh của Wiki, đây là những lệnh cốt lõi nhất để bạn thiết lập môi trường chạy dự án Next.js của mình:
1. Nhóm lệnh hệ thống (Phải chạy đầu tiên)
# Cập nhật danh sách gói và nâng cấp các phần mềm hệ thống lên bản mới nhất
pkg update && pkg upgrade

2. Nhóm lệnh cài đặt môi trường (Dành cho dự án của bạn)
# Cài đặt Node.js (bao gồm cả npm)
pkg install nodejs

# Cài đặt Git (nếu bạn cần kéo code từ GitHub về)
pkg install git

# Cài đặt trình quản lý code gọn nhẹ như Nano hoặc Vim nếu muốn sửa code nhanh ngay trong Termux
pkg install nano

3. Nhóm lệnh liên kết dữ liệu
# Cấp quyền cho Termux truy cập bộ nhớ máy (như ảnh, tài liệu, thư mục dự án)
termux-setup-storage

> Mẹo nhỏ: Sau khi chạy lệnh này, bạn gõ cd /sdcard là có thể đi thẳng vào bộ nhớ trong của điện thoại để tìm đến thư mục chứa project của bạn rồi.
> 





# 📦 Quản Lý Phần Mềm Bằng APK (Alpine Package Keeper)

`apk` là trình quản lý gói mặc định của Alpine Linux (tương tự như `apt` trên Ubuntu hay `brew` trên Mac). Trong Acode Terminal, bạn luôn ở quyền cao nhất nên **không cần gõ `sudo`** trước lệnh.

---

## 1. Cập nhật danh sách gói (`apk update`)
*   **Ý nghĩa:** Tải về danh sách phần mềm mới nhất từ máy chủ của Alpine. Luôn chạy lệnh này trước khi muốn cài bất kỳ phần mềm nào để tránh lỗi không tìm thấy gói.
*   **Cú pháp:** `apk update`
*    apk update && apk upgrade   

## 2. Tìm kiếm phần mềm (`apk search`)
*   **Ý nghĩa:** Tìm xem phần mềm hoặc công cụ bạn cần có sẵn trong kho của Alpine hay không.
*   **Cú pháp:** `apk search <tên_phần_mềm>`
*   **Ví dụ:** `apk search python3`

## 3. Cài đặt phần mềm mới (`apk add`)
*   **Ý nghĩa:** Tải và cài đặt phần mềm vào terminal.
*   **Cú pháp:** `apk add <tên_gói_1> <tên_gói_2>`
*   **Các gói phổ biến cho dân dev:**
    *   Cài NodeJS và NPM: `apk add nodejs npm`
    *   Cài Python 3 và Pip: `apk add python3 py3-pip`
    *   Cài Git: `apk add git`
    *   Cài Curl (để tải file từ link): `apk add curl`
    *   Cài công cụ build C/C++ (để sửa lỗi khi cài một số package node/python nặng): `apk add build-base`

## 4. Gỡ bỏ phần mềm (`apk del`)
*   **Ý nghĩa:** Delete - Xóa phần mềm khỏi hệ thống để giải phóng dung lượng cho điện thoại.
*   **Cú pháp:** `apk del <tên_phần_mềm>`
*   **Ví dụ:** `apk del python3`

## 5. Xem thông tin các gói đã cài (`apk info`)
*   **Ý nghĩa:** Liệt kê các phần mềm đang có trên hệ thống hoặc kiểm tra chi tiết một gói.
*   **Cú pháp:** 
    *   `apk info` (Xem toàn bộ danh sách đã cài).
    *   `apk info <tên_phần_mềm>` (Xem chi tiết phiên bản, dung lượng của phần mềm đó).
