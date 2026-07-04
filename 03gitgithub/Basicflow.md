# 🐙 Quy Trình Git Cơ Bản (Basic Flow)

Các lệnh cốt lõi thay thế hoàn toàn app MGit. Dùng để lấy code về, lưu thay đổi và đẩy lên GitHub.

---

## 1. Cấu hình ban đầu (Chỉ làm 1 lần)
Trước khi commit lần đầu, bạn phải khai báo tên và email để Git biết ai là tác giả đoạn code.
git config --global user.name "a71termux"
git config --global user.email "awsmydream@gmail.com"

## 2. Lấy code từ GitHub về (`clone`)
*   **Ý nghĩa:** Tải toàn bộ mã nguồn từ một kho (repository) trên mạng về terminal.
*   **Cú pháp:** `git clone <URL_của_repo>`
   git clone git@github.com:heywirdgirl/cheatsheets.git

## 3. Khởi tạo kho chứa mới (`init`)
*   **Ý nghĩa:** Biến một thư mục bình thường thành một Git repository để bắt đầu theo dõi file.
*   **Cú pháp:** `git init`

## 4. Kiểm tra trạng thái file (`status`)
*   **Ý nghĩa:** Xem file nào mới tạo, file nào bị sửa, file nào đã sẵn sàng commit. Lệnh này được dùng nhiều nhất để tránh lỗi!
*   **Cú pháp:** `git status`

## 5. Chọn file để lưu (`add`)
*   **Ý nghĩa:** Đưa các file đã thay đổi vào vùng chuẩn bị (staging area).
*   **Lệnh phổ biến:**
    *   `git add .` : (Lệnh hay dùng nhất) Chọn TẤT CẢ các file mới và file bị sửa.
    *   `git add <tên_file>` : Chỉ chọn một file cụ thể (ví dụ: `git add index.html`).

## 6. Lưu lại lịch sử (`commit`)
*   **Ý nghĩa:** "Đóng gói" các file đã add và ghi chú lại bạn vừa làm gì.
*   **Cú pháp:** `git commit -m "Nội dung ghi chú"`
*   **Ví dụ:** `git commit -m "Sửa lỗi giao diện nút bấm"`

## 7. Đẩy code lên mạng (`push`)
*   **Ý nghĩa:** Gửi các commit từ máy lên GitHub.
*   **Cú pháp cơ bản:** `git push`
*   *(Lưu ý: Nếu đẩy lên lần đầu cho một nhánh mới, dùng lệnh `git push -u origin main`)*

## 8. Lấy code mới nhất về máy (`pull`)
*   **Ý nghĩa:** Tải các thay đổi (do người khác làm hoặc bạn làm trên máy tính khác) từ GitHub về điện thoại.
*   **Cú pháp:** `git pull`

   pkg update && pkg install openssh

   ssh-keygen -t ed25519 -C "awsmydream@gmail.com"

   cat ~/.ssh/id_ed25519.pub

# 1. Khởi tạo Git cho thư mục dự án (chỉ làm lần đầu)
git init

# 2. Thêm tất cả các file trong thư mục vào hàng đợi
git add .

# 3. Tạo một điểm lưu trữ (Commit) kèm lời nhắn
git commit -m "Đẩy code lần đầu"

# 4. Đổi tên nhánh mặc định thành 'main' (chuẩn của GitHub)
git branch -M main

# 5. Liên kết thư mục local với Repository trên GitHub
# (Thay link bên dưới bằng link Repo thật bạn vừa tạo)
 git remote add origin git@github.com:heywirdgirl/26nextjstemp.git

# 6. Chính thức đẩy code lên
git push -u origin main

