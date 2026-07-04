# 🐍 Môi Trường Python & PIP

Quản lý thư viện và chạy các script Python.

---

## 1. Kiểm tra môi trường
*   **Xem phiên bản Python:** `python3 -V` hoặc `python -V`
*   **Xem phiên bản PIP (Trình quản lý gói Python):** `pip -V`

## 2. Chạy file Python (`python3`)
*   **Cú pháp:** `python3 <tên_file.py>`
*   **Ví dụ:** `python3 main.py`

## 3. Quản lý thư viện với PIP (`pip`)
*   **Cài đặt thư viện mới:** `pip install <tên_thư_viện>` (ví dụ: `pip install requests`).
*   **Cài đặt hàng loạt theo file cấu hình:** `pip install -r requirements.txt` (Rất hay dùng khi clone project Python trên mạng về).
*   **Xem danh sách thư viện đã cài:** `pip list`

## 4. Môi trường ảo Python (Virtual Environment - `venv`)
*   **Ý nghĩa:** Khuyên dùng! Tạo một không gian cách ly cho từng dự án để các thư viện không bị xung đột phiên bản với nhau.
*   **Tạo môi trường ảo:** `python3 -m venv venv` (Tạo một thư mục tên là `venv` chứa môi trường).
*   **Kích hoạt môi trường ảo (Phải làm mỗi lần mở terminal):** `source venv/bin/activate` (Khi thành công, đầu dòng lệnh sẽ hiện chữ `(venv)`).
*   **Thoát khỏi môi trường ảo:** `deactivate`
