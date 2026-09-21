Đúng, đây là hành vi **có chủ đích** của Cloudflare Workers, không phải bug: mỗi lần deploy, Wrangler coi **file cấu hình** (`wrangler.jsonc`) là "nguồn sự thật duy nhất" — nó **ghi đè toàn bộ** biến môi trường, xoá sạch bất kỳ biến nào bạn từng thêm tay qua Dashboard mà không khai báo trong file. Đây là thiết kế để đảm bảo môi trường luôn tái lập được y hệt từ code, tránh tình trạng "chỉ chạy đúng vì ai đó từng bấm tay 1 lần".

**2 cách xử lý — chọn cách 2, phù hợp hơn cho đúng biến này:**

**Cách 1 (vá tạm, phải nhớ làm mỗi lần):** thêm cờ `--keep-vars` vào lệnh deploy để Wrangler **không xoá** biến đã set tay qua Dashboard:
```json
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy -- --keep-vars"
```

**Cách 2 (đúng đắn hơn, làm 1 lần là xong vĩnh viễn):** `R2_PUBLIC_URL` **không phải bí mật** — nó là URL public, sẽ nằm ngay trong thẻ `<img src>` mà ai xem trang cũng thấy được. Không có lý do gì phải giấu nó khỏi code, nên đưa thẳng vào `wrangler.jsonc`, commit vào Git — mỗi lần deploy tự động có, không bao giờ "biến mất" nữa, không cần nhớ cờ `--keep-vars` gì cả:

```jsonc
{
  "r2_buckets": [
    { "binding": "THUMBNAILS_BUCKET", "bucket_name": "26visualbuilder-image" }
  ],
  "vars": {
    "R2_PUBLIC_URL": "https://pub-xxxx.r2.dev"
  }
}
```

Sau khi thêm vào `wrangler.jsonc`, **xoá** biến đã set tay trên Cloudflare Dashboard (không cần nữa, tránh 2 nguồn cùng tồn tại gây nhầm lẫn sau này). Deploy lại 1 lần — từ giờ về sau mọi lần deploy đều tự có biến này, kể cả khi bạn không đụng gì tới Dashboard.

**Ghi nhớ cho tương lai:** bất kỳ giá trị nào **thật sự nhạy cảm** (VD sau này có API key/secret nào đó) — **không** nên đưa vào `wrangler.jsonc` (file commit vào Git, ai đọc code cũng thấy) — những giá trị đó mới nên dùng Cách 1 (`--keep-vars` + set tay qua Dashboard, hoặc dùng `wrangler secret put` cho bí mật thật sự). `R2_PUBLIC_URL` là ngoại lệ hợp lý để đưa vào file vì bản chất nó vốn dĩ công khai.