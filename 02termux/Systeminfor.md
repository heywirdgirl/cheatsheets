Dưới đây là nội dung file hướng dẫn về thông tin hệ thống và giám sát tài nguyên đã được chuyển đổi toàn bộ sang môi trường Termux:
Thông Tin Hệ Thống & Giám Sát Tài Nguyên trên Termux (System Info)
Các lệnh giúp bạn kiểm tra cấu hình phần cứng, dung lượng lưu trữ thực tế và quản lý các tác vụ, script đang chạy ngầm bên trong Termux.
1. Kiểm tra dung lượng lưu trữ (df)
 * Ý nghĩa: Disk Free - Xem bộ nhớ điện thoại còn trống bao nhiêu dung lượng để bạn tính toán cài đặt các package hoặc clone dự án.
 * Cú pháp hay dùng: df -h
   * (Tham số -h hiển thị dung lượng dưới dạng dễ đọc như MB, GB thay vì các con số byte dài dòng).
   * Lưu ý trên Termux: Lệnh này sẽ hiển thị toàn bộ các phân vùng của Android, bạn chỉ cần chú ý đến dòng có chứa /storage/emulated hoặc /data để biết dung lượng bộ nhớ chung của máy.
2. Kiểm tra dung lượng RAM (free)
 * Ý nghĩa: Xem tổng dung lượng RAM của điện thoại và lượng RAM còn trống. Vì Termux chạy trực tiếp trên nhân Android nên con số này phản ánh tài nguyên của toàn bộ thiết bị.
 * Cú pháp hay dùng: free -h hoặc free -m (Hiển thị đơn vị Megabyte).
3. Quản lý tác vụ và CPU theo thời gian thực (top / htop)
 * Ý nghĩa: Giống như Task Manager trên Windows. Lệnh này hiển thị các tiến trình (như server Node.js, Python script) đang chạy tốn bao nhiêu % CPU và RAM của máy.
 * Cú pháp mặc định: top
   * Cách thoát: Nhấn phím q hoặc tổ hợp phím Ctrl + C.
 * 💡 Nâng cấp khuyên dùng (htop): Lệnh top mặc định của Termux khá xấu và khó nhìn. Bạn nên cài htop – một phiên bản đồ họa cực đẹp, có thanh màu hiển thị trực quan và hỗ trợ dùng ngón tay lướt/chạm trên màn hình điện thoại để tắt tác vụ.
   * Cài đặt: pkg install htop
   * Sử dụng: htop
4. Kiểm tra thông tin hệ thống Termux và Android (termux-info)
 * Ý nghĩa: Thay vì dùng lệnh cat /etc/os-release của Alpine, Termux có một lệnh độc quyền siêu mạnh để xem toàn bộ thông tin về phiên bản Android, phiên bản Termux, chip xử lý (CPU Architecture) và các quyền hạn đã cấp.
 * Cú pháp: termux-info
 * (Nếu bạn chỉ muốn xem phiên bản nhân Linux của điện thoại, có thể dùng lệnh: uname -a)
5. Kiểm tra danh tính User (whoami)
 * Ý nghĩa: Xem tên định danh tài khoản bạn đang dùng trong Termux.
 * Cú pháp: whoami
   * Lưu ý trên Termux: Kết quả trả về sẽ không phải là root hay tên của bạn, mà là một chuỗi ký tự dạng u0_aXXX (ví dụ: u0_a234). Đây là cơ chế bảo mật của Android, nó coi Termux như một user độc lập để cô lập dữ liệu, tránh làm ảnh hưởng đến các ứng dụng khác trong máy.
