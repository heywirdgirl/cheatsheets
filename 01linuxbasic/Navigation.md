# 📑 Lệnh Điều Hướng Hệ Thống (Navigation)

Tập hợp các lệnh cơ bản để di chuyển, kiểm tra vị trí và tạo thư mục trong môi trường dòng lệnh Linux.

---

## 1. Kiểm tra vị trí hiện tại (`pwd`)
*   **Ý nghĩa:** Print Working Directory - Hiển thị đường dẫn tuyệt đối của thư mục bạn đang đứng.
*   **Cú pháp:** `pwd`
*   **Ví dụ kết quả:** `/home/acode`

## 2. Liệt kê danh sách file và thư mục (`ls`)
*   **Ý nghĩa:** List - Xem trong thư mục hiện tại có những gì.
*   **Cú pháp cơ bản:** `ls`
*   **Các tham số mở rộng (Rất hay dùng):**
    *   `ls -l`: Hiển thị danh sách chi tiết (quyền truy cập, dung lượng, ngày tạo).
    *   `ls -a`: Hiển thị tất cả các file, bao gồm cả **file ẩn** (file có dấu chấm ở đầu như `.gitignore`, `.git`).
    *   `ls -la`: Kết hợp cả 2 lệnh trên (Xem chi tiết tất cả các file kể cả file ẩn).

## 3. Di chuyển giữa các thư mục (`cd`)
*   **Ý nghĩa:** Change Directory - Chuyển sang thư mục khác.
*   **Cú pháp:** `cd <đường_dẫn_thư_mục>`
*   **Các mẹo di chuyển nhanh:**
    *   `cd ..`: Lùi lại một cấp thư mục (ra thư mục cha).
    *   `cd ~` hoặc chỉ gõ `cd`: Quay nhanh về thư mục gốc (`home`).
    *   `cd -`: Quay lại thư mục vừa đứng trước đó (như nút Back).
*   **Ví dụ:** `cd cheatsheets/01-linux-basic`

## 4. Tạo thư mục mới (`mkdir`)
*   **Ý nghĩa:** Make Directory - Tạo một thư mục mới.
*   **Cú pháp:** `mkdir <tên_thư_mục>`
*   **Mẹo nâng cao:** 
    *   `mkdir -p thu-muc-1/thu-muc-2`: Tạo thư mục lồng nhau (tạo luôn thư mục cha nếu chưa có).
*   **Ví dụ:** `mkdir my-project`

## 5. Xóa thư mục RỖNG (`rmdir`)
*   **Ý nghĩa:** Remove Directory - Chỉ xóa được thư mục khi bên trong **không có file nào**.
*   **Cú pháp:** `rmdir <tên_thư_mục>`
*   *(Lưu ý: Nếu thư mục có chứa file, bạn phải dùng lệnh xóa trong file `file-ops.md`)*
