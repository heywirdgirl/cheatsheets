# 🔀 Git Nâng Cao (Advanced Git)

Dành cho làm việc nhóm, chia nhánh tính năng và xử lý sự cố.

---

## 1. Quản lý nhánh (`branch`)
*   **Ý nghĩa:** Nhánh (branch) giúp bạn thử nghiệm tính năng mới mà không làm hỏng code chính.
*   **Xem danh sách nhánh:** `git branch` (Nhánh đang đứng sẽ có dấu `*`).
*   **Tạo nhánh mới:** `git branch <tên_nhánh_mới>`
*   **Xóa nhánh:** `git branch -d <tên_nhánh>`

## 2. Chuyển đổi giữa các nhánh (`checkout` / `switch`)
*   **Ý nghĩa:** Chuyển sang một nhánh khác để làm việc.
*   **Cú pháp:** `git checkout <tên_nhánh>` hoặc `git switch <tên_nhánh>`
*   **Tạo và chuyển sang nhánh mới ngay lập tức:** `git checkout -b <tên_nhánh_mới>`

## 3. Gộp nhánh (`merge`)
*   **Ý nghĩa:** Gộp các thay đổi từ nhánh phụ vào nhánh chính.
*   **Cách làm:**
    1. Chuyển về nhánh chính (ví dụ main): `git checkout main`
    2. Kéo code từ nhánh phụ vào: `git merge <tên_nhánh_phụ>`

## 4. Xem lịch sử commit (`log`)
*   **Ý nghĩa:** Xem ai đã commit những gì và vào lúc nào.
*   **Cú pháp:** `git log` (Nhấn `q` để thoát).
*   **Xem dạng rút gọn cực đẹp:** `git log --oneline --graph`

## 5. Cất code tạm thời (`stash`)
*   **Ý nghĩa:** Bạn đang code dở dang nhưng cần chuyển sang nhánh khác gấp để fix bug mà chưa muốn commit code rác. `stash` sẽ giấu tạm code đi.
*   **Cất tạm code:** `git stash`
*   **Lấy lại code đã cất:** `git stash pop`
