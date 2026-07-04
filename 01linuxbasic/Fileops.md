# 📂 Thao Tác Với Tập Tin & Thư Mục (File Operations)

Tập hợp các lệnh để tạo, xem, sao chép, di chuyển và xóa file/thư mục.

---

## 1. Tạo file rỗng (`touch`)
*   **Ý nghĩa:** Tạo nhanh một tập tin mới chưa có nội dung.
*   **Cú pháp:** `touch <tên_file>.<phần_mở_rộng>`
*   **Ví dụ:** `touch index.html script.js` (Tạo cùng lúc 2 file).

## 2. Xem nhanh nội dung file (`cat`)
*   **Ý nghĩa:** Đọc và hiển thị toàn bộ nội dung của file ra màn hình terminal mà không cần mở trình chỉnh sửa.
*   **Cú pháp:** `cat <tên_file>`
*   **Ví dụ:** `cat package.json`

## 3. Sao chép file hoặc thư mục (`cp`)
*   **Ý nghĩa:** Copy - Nhân bản file hoặc thư mục sang vị trí mới.
*   **Cú pháp cho FILE:** `cp <file_nguồn> <file_đích_hoặc_thư_mục_đích>`
    *   *Ví dụ:* `cp index.html backup-index.html`
*   **Cú pháp cho THƯ MỤC:** Phải thêm tham số `-r` (recursive - sao chép toàn bộ bên trong).
    *   *Ví dụ:* `cp -r project1/ project-backup/`

## 4. Di chuyển hoặc Đổi tên (`mv`)
*   **Ý nghĩa:** Move - Lệnh này vừa dùng để di chuyển file sang chỗ khác, vừa dùng để đổi tên file.
*   **Đổi tên file:** `mv <tên_cũ> <tên_mới>`
    *   *Ví dụ:* `mv main.js app.js`
*   **Di chuyển file:** `mv <tên_file> <thư_mục_đích/>`
    *   *Ví dụ:* `mv app.js src/`

## 5. Xóa file hoặc thư mục (`rm`)
*   **Ý nghĩa:** Remove - Xóa vĩnh viễn (Không có thùng rác, hãy cẩn thận!).
*   **Xóa FILE:** `rm <tên_file>`
    *   *Ví dụ:* `rm test.log`
*   **Xóa THƯ MỤC CÓ CHỨA FILE:** Phải dùng tham số `-rf` (r = bao gồm bên trong, f = ép buộc xóa không hỏi lại).
    *   *Ví dụ:* `rm -rf node_modules/`
    *   *⚠️ CẢNH BÁO:* Hãy kiểm tra kỹ tên thư mục trước khi nhấn Enter với lệnh `rm -rf`.

## 6. Thay đổi quyền truy cập file (`chmod`)
*   **Ý nghĩa:** Change Mode - Cấp quyền đọc/ghi/chạy cho file (Rất hay dùng khi viết script shell).
*   **Lệnh phổ biến:** `chmod +x <tên_file>` (Cấp quyền thực thi/chạy file script `.sh`).
    *   *Ví dụ:* `chmod +x deploy.sh`
