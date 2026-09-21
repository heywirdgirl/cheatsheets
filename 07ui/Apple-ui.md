 1. Header & Topbar (Kính mờ & Viền siêu mảnh)
 * Hiện tại: Nền trắng thuần, viền khá rõ.
 * Kiểu Apple:
   
   className="sticky top-0 z-50 h-12 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md"

 * Tận dụng backdrop-blur-md kết hợp với màu nền trong suốt bg-white/70 để tạo hiệu ứng xuyên thấu cao cấp khi cuộn trang.
2. Thẻ Card & Layout (Clean Borders thay vì Shadow)
 * Hiện tại: Card có góc bo tròn trung bình và một số lớp nền rời rạc.
 * Kiểu Apple: Bỏ các đổ bóng (shadow) đậm. Dùng viền xám cực nhẹ với bo góc tinh tế.
   
   className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"

3. Typography & Font Chữ
 * Chọn các bộ font chuẩn quốc tế cho developer/creator như Inter, Geist, hoặc SF Pro.
 * Tăng tính tương phản chữ: Tiêu đề dùng font-semibold text-zinc-900, nội dung phụ/thông tin dùng text-xs text-zinc-500.
4. Button & Interactivity
 * Nút chính (Primary CTA) nên dùng tông màu Monochrome đơn giản:
   // Black/Dark Primary Button kiểu Apple/Vercel
   
className="h-8 rounded-lg bg-zinc-900 px-3 text-xs font-medium text-white hover:bg-zinc-800 transition-all"

 * Nút phụ (Secondary): bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200/50.

