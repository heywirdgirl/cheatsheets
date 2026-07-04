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


Quản Lý Phần Mềm Bằng PKG (Termux Package Manager)
pkg là trình quản lý gói mặc định của Termux (thực chất là một lớp bọc thân thiện cho lệnh apt quen thuộc trên Ubuntu/Debian). Trong môi trường Termux, hệ thống đã tự cấp toàn quyền cài đặt trong phân vùng của app nên bạn không cần gõ sudo trước lệnh.
1. Cập cập nhật danh sách gói (pkg update)
 * Ý nghĩa: Tải về danh sách phần mềm mới nhất từ máy chủ của Termux và nâng cấp các công cụ cũ. Luôn chạy chuỗi lệnh này trước khi muốn cài bất kỳ phần mềm nào để tránh lỗi không tìm thấy gói hoặc xung đột phiên bản.
 * Cú pháp:
   pkg update && pkg upgrade

2. Tìm kiếm phần mềm (pkg search)
 * Ý nghĩa: Tìm xem phần mềm hoặc công cụ bạn cần có sẵn trong kho lưu trữ của Termux hay không.
 * Cú pháp: pkg search <tên_phần_mềm>
 * Ví dụ: pkg search python
3. Cài đặt phần mềm mới (pkg install)
 * Ý nghĩa: Tải và cài đặt phần mềm/môi trường vào Termux.
 * Cú pháp: pkg install <tên_gói_1> <tên_gói_2>
 * Các gói phổ biến cho dân dev:
   * Cài NodeJS: pkg install nodejs (Trong Termux, gói này đã tích hợp sẵn cả NPM và Corepack, không cần cài tách rời).
   * Cài Python 3: pkg install python (Tự động đi kèm trình quản lý gói pip).
   * Cài Git: pkg install git
   * Cài Curl: pkg install curl (Dùng để tải file hoặc gọi API).
   * Cài công cụ build C/C++: pkg install build-essential (Cực kỳ quan trọng, dùng để biên dịch và sửa lỗi khi bạn cài các package Node.js nặng hoặc các thư viện Python cần build từ mã nguồn gốc).
4. Gỡ bỏ phần mềm (pkg uninstall)
 * Ý nghĩa: Xóa bỏ hoàn toàn phần mềm khỏi Termux để lấy lại dung lượng trống cho điện thoại.
 * Cú pháp: pkg uninstall <tên_phần_mềm> (Hoặc dùng pkg remove <tên_phần_mềm>)
 * Ví dụ: pkg uninstall python
5. Xem thông tin các gói đã cài (pkg list-installed / pkg show)
 * Ý nghĩa: Liệt kê các phần mềm đang có trên hệ thống hoặc xem thông tin chi tiết của một gói cụ thể.
 * Cú pháp:
   * pkg list-installed (Xem toàn bộ danh sách các phần mềm đã cài vào Termux).
   * pkg show <tên_phần_mềm> (Xem chi tiết phiên bản, mô tả và dung lượng của phần mềm đó).
