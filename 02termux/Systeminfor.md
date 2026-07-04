# ⚙️ Thông Tin Hệ Thống & Giám Sát Tài Nguyên (System Info)

Các lệnh giúp bạn kiểm tra cấu hình phần cứng ảo, dung lượng lưu trữ và quản lý các tác vụ đang chạy ngầm trong Terminal.

---

## 1. Kiểm tra dung lượng lưu trữ (`df`)
*   **Ý nghĩa:** Disk Free - Xem bộ nhớ của môi trường ảo còn trống bao nhiêu.
*   **Cú pháp hay dùng:** `df -h`
    *   *(Tham số `-h` giúp hiển thị dung lượng dưới dạng dễ đọc như MB, GB thay vì những con số byte dài dằng dặc).*

## 2. Kiểm tra dung lượng RAM (`free`)
*   **Ý nghĩa:** Xem terminal đang chiếm bao nhiêu RAM của điện thoại.
*   **Cú pháp hay dùng:** `free -m` (Hiển thị đơn vị Megabyte) hoặc `free -h`.

## 3. Quản lý tác vụ và CPU theo thời gian thực (`top`)
*   **Ý nghĩa:** Giống như Task Manager trên Windows. Lệnh này hiển thị các ứng dụng/script nào đang chạy ngầm và tốn bao nhiêu % CPU/RAM.
*   **Cú pháp:** `top`
    *   *💡 Mẹo thoát:* Khi đang ở màn hình `top`, nhấn phím **`q`** hoặc tổ hợp phím **`Ctrl + C`** để quay lại dòng lệnh bình thường.

## 4. Kiểm tra thông tin hệ điều hành (`os-release`)
*   **Ý nghĩa:** Xem chính xác phiên bản Alpine Linux mà terminal của Acode đang chạy là bản mấy.
*   **Cú pháp:** `cat /etc/os-release`

## 5. Kiểm tra danh tính User (`whoami` & `id`)
*   **Ý nghĩa:** Xem bạn đang đăng nhập bằng user tên là gì trong môi trường Linux ảo này.
*   **Cú pháp:** `whoami`
