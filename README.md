# Standalone Mock Lazada REST API Server

Máy chủ mô phỏng chuẩn xác REST API của **Lazada Open Platform** phục vụ kiểm thử tích hợp sàn thương mại điện tử.

---

## 🌟 Tính Năng Nổi Bật

1. **Chuẩn Định Dạng Lazada Open Platform:**
   - `GET /rest/orders/get`: Danh sách đơn hàng với phân trang (`offset`, `limit`), lọc trạng thái, lọc theo thời gian (`created_after`, `update_after`).
   - `GET /rest/order/get`: Chi tiết 1 đơn hàng theo `order_id`.
   - `GET /rest/order/items/get`: Danh sách sản phẩm con (`items`) của đơn hàng.
2. **Hỗ Trợ Nhiều Tập Dữ Liệu Mẫu (Multi-Seed Dataset Profiles):**
   - `default`: 5 đơn hàng mẫu đa dạng trạng thái (`ready_to_ship`, `shipped`, `delivered`, `unpaid`, `canceled`).
   - `mega_sale`: Đơn hàng Mega Sale 9.9 giá trị lớn, áp voucher khủng, khách VIP.
   - `high_returns`: Đơn hàng khiếu nại, hủy, hoàn tiền để test kịch bản CSKH & AI Copilot.
   - `fresh_orders`: Đơn hàng mới tạo trong vòng 1 giờ qua.
3. **Cơ Chế Ký Chữ Ký Số HMAC-SHA256 Chuẩn Lazada:**
   - Xác thực `app_key`, `timestamp`, và `sign`.
   - Hỗ trợ cờ `?bypass_sign=true` để test nhanh trực tiếp trên trình duyệt hoặc Postman.
4. **Deploy Siêu Dễ Dàng:**
   - Chạy local: `npm run dev` (port 4000).
   - Chạy qua Ngrok Tunnel: `ngrok http 4000`.
   - Deploy 1-click lên Vercel qua file `vercel.json` và `api/index.ts`.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy server ở chế độ dev (tự động reload khi sửa code)
npm run dev
```

Server sẽ lắng nghe tại: `http://localhost:4000`

---

## 🔗 Test Nhanh Các Endpoint

- **Danh sách seeds khả dụng:**
  ```bash
  curl http://localhost:4000/rest/mock/seeds
  ```
- **Xem danh sách đơn hàng mặc định (bỏ qua ký chữ ký):**
  ```bash
  curl "http://localhost:4000/rest/orders/get?bypass_sign=true"
  ```
- **Xem danh sách đơn hàng của tập `mega_sale`:**
  ```bash
  curl "http://localhost:4000/rest/orders/get?seed=mega_sale&bypass_sign=true"
  ```
- **Lọc các đơn đang giao (`shipped`):**
  ```bash
  curl "http://localhost:4000/rest/orders/get?status=shipped&bypass_sign=true"
  ```
- **Xem chi tiết 1 đơn hàng:**
  ```bash
  curl "http://localhost:4000/rest/order/get?order_id=1000101&bypass_sign=true"
  ```
- **Xem danh sách sản phẩm của đơn:**
  ```bash
  curl "http://localhost:4000/rest/order/items/get?order_id=1000101&bypass_sign=true"
  ```
