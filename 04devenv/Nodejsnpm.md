
Khuyên dùng: Hãy ưu tiên dùng pnpm thay vì npm mặc định để tiết kiệm tối đa bộ nhớ Android.

# Lệnh 1: Cài đặt Node.js (Nếu bạn đã cài ở bước trước rồi thì bỏ qua)
pkg install nodejs -y

# Lệnh 2: Dùng npm đi kèm để cài đặt pnpm ra toàn hệ thống (Global)
npm install -g pnpm


1. Khởi Tạo & Quản Lý Thư Viện (NPM / PNPM)
Đây là nhóm lệnh dùng để cài đặt, gỡ bỏ và quản lý các package (thư viện) trong dự án Next.js của bạn.
Khởi tạo dự án mới hoàn toàn
# Tạo một dự án Next.js mới bằng pnpm (Mồi mạng để chạy lần đầu)
pnpm create next-app@latest

# Hoặc khởi tạo một file package.json trống cho dự án tự chế
pnpm init

Cài đặt thư viện (Install Packages)
# Cài đặt lại toàn bộ thư viện ghi trong file package.json (Khi vừa clone dự án từ GitHub về)
pnpm install

# Thêm một thư viện mới vào dự án (Ví dụ: tailwindcss, lucide-react)
pnpm add <tên_thư_viện>

# Thêm thư viện chỉ dùng lúc Code/Dev, không dùng khi chạy thật (Dependencies vs DevDependencies)
pnpm add -D <tên_thư_viện>

Gỡ bỏ thư viện (Uninstall)
# Xóa một thư viện khỏi dự án
pnpm remove <tên_thư_viện>

2. Các Lệnh Điều Khiển Dự Án Next.js
Nhóm lệnh này dùng để vận hành dự án Next.js sau khi bạn đã di chuyển vào đúng thư mục code (cd /sdcard/Download/tên_dự_án).
# 1. Chạy server ở chế độ Development (Để vừa sửa code ở Acode vừa xem thay đổi trên trình duyệt)
pnpm dev

--webpack
# 2. Biên dịch dự án thành sản phẩm hoàn chỉnh (Kiểm tra lỗi Type, tối ưu hóa code trước khi deploy)
pnpm build

# 3. Chạy thử sản phẩm sau khi đã Build xong (Chế độ Production Local)
pnpm start

3. Quản Lý Môi Trường Ảo / Phiên Bản Node.js (nvm)
Next.js cập nhật rất nhanh. Dự án cũ có thể bắt dùng Node v18, nhưng dự án Next.js mới lại bắt dùng Node v20 hoặc v22. Để đổi qua lại giữa các phiên bản Node.js trên Termux mà không bị lỗi, chúng ta dùng công cụ NVM (Node Version Manager) – đây chính là "môi trường ảo" của dân Web.
(Cài đặt nvm lần đầu bằng lệnh: curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash)
# 1. Xem danh sách các phiên bản Node.js đang có sẵn trên mạng để tải
nvm ls-remote

# 2. Cài đặt một phiên bản Node.js cụ thể (Ví dụ cài bản v20)
nvm install 20

# 3. Kiểm tra xem trong máy đã cài những phiên bản Node nào
nvm ls

# 4. Kích hoạt môi trường ảo Node v18 cho dự án cũ
nvm use 18

# 5. Đặt phiên bản mặc định mỗi khi mở Termux lên là Node v20
nvm alias default 20

4. Bảo Trì & Tối Ưu Dung Lượng (Dọn rác dự án)
Lập trình Next.js trên điện thoại rất dễ bị đầy bộ nhớ nếu không biết các lệnh dọn dẹp này:
# Xóa sạch kho lưu trữ chung của pnpm (Tìm và xóa các thư viện rác lâu ngày không dùng đến)
pnpm store prune

# Lệnh xóa nhanh thư mục node_modules khi dự án bị lỗi hoặc muốn dọn dẹp để lưu trữ offline
rm -rf node_modules .next

# Mẹo kiểm tra xem thư mục node_modules hiện tại đang nặng bao nhiêu MB
du -sh node_modules






# 🟢 Môi Trường NodeJS & NPM

Cách chạy các ứng dụng JavaScript, React, Vue, Express...

---

## 1. Kiểm tra môi trường
*   **Xem phiên bản Node:** `node -v`
*   **Xem phiên bản NPM:** `npm -v`

## 2. Chạy file JavaScript thuần (`node`)
*   **Cú pháp:** `node <tên_file.js>`
*   **Ví dụ:** `node index.js` (Lệnh này sẽ chạy file và in kết quả ra màn hình terminal).

## 3. Khởi tạo dự án NPM (`npm init`)
*   **Ý nghĩa:** Tạo file `package.json` để quản lý thông tin dự án và các thư viện cần dùng.
*   **Tạo và trả lời từng câu hỏi:** `npm init`
*   **Tạo nhanh bỏ qua câu hỏi:** `npm init -y`

## 4. Cài đặt thư viện (`npm install` hoặc `npm i`)
*   **Cài toàn bộ thư viện (Dựa trên package.json có sẵn):** `npm install` (Thường dùng sau khi vừa `git clone` project về).
*   **Cài một thư viện mới:** `npm i <tên_thư_viện>` (ví dụ: `npm i express`).
*   **Cài thư viện chỉ cho môi trường Dev:** `npm i <tên_thư_viện> -D` (ví dụ: `npm i nodemon -D`).

## 5. Chạy các kịch bản trong package.json (`npm run`)
*   **Ý nghĩa:** Chạy các lệnh được định nghĩa trong mục `"scripts"` của file `package.json`.
*   **Cú pháp:** `npm run <tên_script>`
*   **Ví dụ phổ biến:** `npm run dev`, `npm run build`, `npm run start`.


# 🚀 Quản Lý NPM Nâng Cao (Advanced NPM)

Tập hợp các lệnh nâng cao để tối ưu kịch bản (scripts), sửa lỗi bảo mật, quản lý phiên bản và dọn dẹp bộ nhớ trên điện thoại.

---

## 1. Thực thi Package nhanh không cần cài (`npx`)
*   **Ý nghĩa:** Node Package Execute - Tự động tải phiên bản mới nhất của một công cụ về, chạy nó một lần duy nhất rồi tự xóa đi. Rất có lợi cho bộ nhớ điện thoại vì không làm tốn dung lượng lưu trữ lâu dài.
*   **Cú pháp:** `npx <tên_package> [tham_số]`
*   **Ví dụ thực tế:**
    *   Tạo nhanh một dự án React: `npx create-react-app my-app`
    *   Tạo nhanh một dự án Vite (React/Vue): `npx create-vite my-project --template react`
    *   Biến thư mục hiện tại thành một web server để test nhanh: `npx serve`

## 2. Cài đặt nghiêm ngặt cho Production / Team (`npm ci`)
*   **Ý nghĩa:** Clean Install - Khác với `npm install` (có thể tự cập nhật package lên bản mới hơn), `npm ci` sẽ xóa sạch thư mục `node_modules` cũ và cài **chính xác 100%** theo các phiên bản được khóa trong file `package-lock.json`.
*   **Ưu điểm:** Tốc độ cài đặt nhanh hơn `npm install` và đảm bảo code không bị lỗi do thư viện tự động cập nhật phiên bản mới.
*   **Cú pháp:** `npm ci`

## 3. Tối ưu hóa bộ nhớ trên điện thoại (Quan trọng!)
Khi code trên điện thoại, thư mục `node_modules` và bộ nhớ đệm (cache) rất dễ làm đầy bộ nhớ máy. Hãy dùng các lệnh sau để dọn dẹp:

*   **Xóa các thư viện thừa (`npm prune`):** Tìm và xóa bỏ tất cả các package có trong `node_modules` nhưng không được khai báo trong file `package-json` (ví dụ sau khi bạn xóa bớt thư viện thủ công).
    *   Cú pháp: `npm prune`
*   **Dọn dẹp bộ nhớ đệm (`npm cache clean`):** NPM luôn lưu lại file đã tải để lần sau cài cho nhanh, nhưng nó chiếm rất nhiều dung lượng.
    *   Cú pháp: `npm cache clean --force`
*   **Kiểm tra xem bộ nhớ đệm có lỗi không:** `npm cache verify`

## 4. Quản lý và kiểm tra bảo mật (`npm audit`)
*   **Kiểm tra lỗ hổng bảo mật:** Quét toàn bộ các thư viện đang dùng xem có cái nào bị cảnh báo bảo mật nguy hiểm hay không.
    *   Cú pháp: `npm audit`
*   **Tự động sửa lỗi bảo mật:** NPM sẽ tự động cập nhật các thư viện bị lỗi lên phiên bản an toàn hơn mà không làm hỏng cấu trúc code hiện tại.
    *   Cú pháp: `npm audit fix`
*   **Ép buộc sửa lỗi (Cẩn thận!):** Nâng cấp bất chấp, có thể gây xung đột code cũ.
    *   Cú pháp: `npm audit fix --force`

## 5. Mẹo viết Script nâng cao trong `package.json`
Bạn có thể chuỗi các lệnh lại với nhau trong mục `"scripts"` của file `package.json` để chạy bằng một lệnh duy nhất:

*   **Chạy nối tiếp (`&&`):** Lệnh trước chạy thành công thì lệnh sau mới chạy.
    *   *Ví dụ:* `"build-and-run": "npm run build && node dist/index.js"`
*   **Truyền tham số vào script:** Khi chạy lệnh, nếu muốn truyền thêm tham số vào công cụ bên trong, bạn phải dùng dấu `--`.
    *   *Ví dụ:* Nếu cấu hình `"test": "jest"`, bạn muốn chạy test và bật chế độ theo dõi thay đổi thì gõ: `npm run test -- --watch`

## 6. Thay đổi Server tải để tăng tốc (`Registry`)
Nếu mạng yếu hoặc sever mặc định của NPM bị chậm, bạn có thể đổi sang server mirror (ví dụ của bên thứ ba uy tín) để tải thư viện nhanh gấp nhiều lần.
*   **Đổi sang Registry nhanh hơn:** `npm config set registry https://registry.npmmirror.com` (Server mirror rất nhanh).
*   **Kiểm tra Registry hiện tại:** `npm config get registry`
*   **Quay về mặc định:** `npm config set registry https://registry.npmjs.org`

