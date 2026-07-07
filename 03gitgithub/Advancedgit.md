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


Nếu bạn không còn nhu cầu dùng đến dự án đó ở máy cục bộ (local) nữa, bạn cứ xoá thư mục đó như bình thường (chuột phải chọn Delete hoặc dùng lệnh rm -rf) là xong nhé!

1. Nhóm "Cứu nguy" (Khi lỡ tay làm sai)
 * git checkout -- <tên_file>: Bạn lỡ sửa linh tinh vào một file nhưng chưa commit và muốn nó quay về trạng thái ban đầu? Lệnh này sẽ "xoá sạch" những gì bạn vừa sửa ở file đó.
 * git reset --soft HEAD~1: Bạn vừa commit xong nhưng phát hiện ra bị sai hoặc thiếu file? Lệnh này sẽ huỷ lệnh commit gần nhất nhưng giữ lại nguyên vẹn code bạn đã viết để bạn sửa và commit lại.
 * git commit --amend -m "Tin nhắn mới": Gom các file vừa chỉnh sửa thêm vào ngay commit gần nhất mà không cần tạo commit mới, hoặc đơn giản là để đổi tên commit viết sai chính tả.
2. Nhóm "Tạm cất đồ" (Đang làm dở việc)
 * git stash: Bạn đang code dở một tính năng thì sếp bắt qua fix gấp một lỗi ở nhánh khác? Dùng lệnh này để "giấu tạm" phần code đang làm dở đi để chuyển nhánh mà không bị báo lỗi.
 * git stash pop: Sau khi fix lỗi xong, quay lại nhánh cũ và dùng lệnh này để lấy lại phần code đang làm dở lúc nãy ra làm tiếp.
3. Nhóm "Dọn dẹp & Kiểm tra"
 * git status: Lệnh quốc dân, kiểm tra xem mình đang ở nhánh nào, có file nào mới sửa, file nào chưa được add.
 * git log --oneline: Xem lại lịch sử các commit một cách ngắn gọn, mỗi commit chỉ hiển thị trên một dòng, cực kỳ dễ nhìn thay vì một sớ dài ngoằng.
 * git branch -d <tên_nhánh>: Xoá một nhánh ở local sau khi đã gộp (merge) xong xuôi để đỡ chật máy.
