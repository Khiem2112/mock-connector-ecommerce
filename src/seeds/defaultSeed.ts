import type { LazadaOrderDTO, SeedProfile } from './types.js';

export const defaultOrders: LazadaOrderDTO[] = [
  {
    "order_id": 1000001,
    "order_number": "LAZ-VN-1000001",
    "created_at": "2026-07-19 14:50:26",
    "updated_at": "2026-07-19 17:19:26",
    "statuses": [
      "shipped"
    ],
    "price": "28515000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000011,
        "order_id": 1000001,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLU",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000001B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000002,
    "order_number": "LAZ-VN-1000002",
    "created_at": "2026-08-24 15:58:32",
    "updated_at": "2026-08-24 18:29:32",
    "statuses": [
      "delivered"
    ],
    "price": "1795000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000021,
        "order_id": 1000002,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000002B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000003,
    "order_number": "LAZ-VN-1000003",
    "created_at": "2026-08-16 21:45:23",
    "updated_at": "2026-08-16 22:48:23",
    "statuses": [
      "shipped"
    ],
    "price": "28535000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10000031,
        "order_id": 1000003,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000003B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000004,
    "order_number": "LAZ-VN-1000004",
    "created_at": "2026-07-19 06:36:18",
    "updated_at": "2026-07-19 08:44:18",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28495000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10000041,
        "order_id": 1000004,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000004B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000005,
    "order_number": "LAZ-VN-1000005",
    "created_at": "2026-07-21 09:00:17",
    "updated_at": "2026-07-21 11:48:17",
    "statuses": [
      "delivered"
    ],
    "price": "185000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000051,
        "order_id": 1000005,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000005B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000006,
    "order_number": "LAZ-VN-1000006",
    "created_at": "2026-08-22 13:14:43",
    "updated_at": "2026-08-22 14:02:43",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "300000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10000061,
        "order_id": 1000006,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-GRY",
        "item_price": 320000,
        "paid_price": 300000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000006B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000007,
    "order_number": "LAZ-VN-1000007",
    "created_at": "2026-08-13 00:49:10",
    "updated_at": "2026-08-13 02:02:10",
    "statuses": [
      "canceled"
    ],
    "price": "1815000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10000071,
        "order_id": 1000007,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000007B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 1000008,
    "order_number": "LAZ-VN-1000008",
    "created_at": "2026-07-06 11:27:18",
    "updated_at": "2026-07-06 13:15:18",
    "statuses": [
      "shipped"
    ],
    "price": "1955000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000081,
        "order_id": 1000008,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000008B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10000082,
        "order_id": 1000008,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000008C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000009,
    "order_number": "LAZ-VN-1000009",
    "created_at": "2026-07-24 21:04:40",
    "updated_at": "2026-07-24 22:19:40",
    "statuses": [
      "delivered"
    ],
    "price": "4835000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10000091,
        "order_id": 1000009,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-SLV",
        "item_price": 650000,
        "paid_price": 630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000009B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 10000092,
        "order_id": 1000009,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4170000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000009C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000010,
    "order_number": "LAZ-VN-1000010",
    "created_at": "2026-08-17 03:07:59",
    "updated_at": "2026-08-17 05:00:59",
    "statuses": [
      "unpaid"
    ],
    "price": "29785000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000101,
        "order_id": 1000010,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1260000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000010B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 10000102,
        "order_id": 1000010,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000010C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000011,
    "order_number": "LAZ-VN-1000011",
    "created_at": "2026-07-28 13:31:48",
    "updated_at": "2026-07-28 15:01:48",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1075000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 70000,
    "voucher_platform": 30000,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10000111,
        "order_id": 1000011,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 130000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000011B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10000112,
        "order_id": 1000011,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 930000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000011C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000012,
    "order_number": "LAZ-VN-1000012",
    "created_at": "2026-08-10 11:20:32",
    "updated_at": "2026-08-10 12:00:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "620000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10000121,
        "order_id": 1000012,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-SLV",
        "item_price": 650000,
        "paid_price": 620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000012B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000013,
    "order_number": "LAZ-VN-1000013",
    "created_at": "2026-08-13 08:43:09",
    "updated_at": "2026-08-13 08:55:09",
    "statuses": [
      "shipped"
    ],
    "price": "1775000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000131,
        "order_id": 1000013,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000013B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000014,
    "order_number": "LAZ-VN-1000014",
    "created_at": "2026-08-18 06:41:34",
    "updated_at": "2026-08-18 08:31:34",
    "statuses": [
      "delivered"
    ],
    "price": "8465000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000141,
        "order_id": 1000014,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000014B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 10000142,
        "order_id": 1000014,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000014C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000015,
    "order_number": "LAZ-VN-1000015",
    "created_at": "2026-08-21 21:26:11",
    "updated_at": "2026-08-21 23:54:11",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4180000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10000151,
        "order_id": 1000015,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLU",
        "item_price": 4200000,
        "paid_price": 4180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000015B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000016,
    "order_number": "LAZ-VN-1000016",
    "created_at": "2026-08-12 09:41:32",
    "updated_at": "2026-08-12 11:48:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "205000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10000161,
        "order_id": 1000016,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000016B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000017,
    "order_number": "LAZ-VN-1000017",
    "created_at": "2026-08-01 04:24:36",
    "updated_at": "2026-08-01 04:46:36",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000171,
        "order_id": 1000017,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000017B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000018,
    "order_number": "LAZ-VN-1000018",
    "created_at": "2026-08-05 06:59:27",
    "updated_at": "2026-08-05 08:36:27",
    "statuses": [
      "delivered"
    ],
    "price": "1450000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000181,
        "order_id": 1000018,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000018B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000019,
    "order_number": "LAZ-VN-1000019",
    "created_at": "2026-09-02 00:14:25",
    "updated_at": "2026-09-02 02:09:25",
    "statuses": [
      "unpaid"
    ],
    "price": "1450000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10000191,
        "order_id": 1000019,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000019B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10000192,
        "order_id": 1000019,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000019C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000020,
    "order_number": "LAZ-VN-1000020",
    "created_at": "2026-08-13 13:38:05",
    "updated_at": "2026-08-13 13:59:05",
    "statuses": [
      "shipped"
    ],
    "price": "555000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000201,
        "order_id": 1000020,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000020B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000021,
    "order_number": "LAZ-VN-1000021",
    "created_at": "2026-07-08 04:20:54",
    "updated_at": "2026-07-08 04:55:54",
    "statuses": [
      "unpaid"
    ],
    "price": "595000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10000211,
        "order_id": 1000021,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000021B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000022,
    "order_number": "LAZ-VN-1000022",
    "created_at": "2026-07-20 06:52:44",
    "updated_at": "2026-07-20 08:32:44",
    "statuses": [
      "shipped"
    ],
    "price": "235000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000221,
        "order_id": 1000022,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 220000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000022B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000023,
    "order_number": "LAZ-VN-1000023",
    "created_at": "2026-08-06 09:14:32",
    "updated_at": "2026-08-06 11:15:32",
    "statuses": [
      "delivered"
    ],
    "price": "5485000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000231,
        "order_id": 1000023,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000023B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000024,
    "order_number": "LAZ-VN-1000024",
    "created_at": "2026-08-16 16:58:48",
    "updated_at": "2026-08-16 17:29:48",
    "statuses": [
      "delivered"
    ],
    "price": "895000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10000241,
        "order_id": 1000024,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000024B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000025,
    "order_number": "LAZ-VN-1000025",
    "created_at": "2026-08-09 11:49:23",
    "updated_at": "2026-08-09 14:41:23",
    "statuses": [
      "unpaid"
    ],
    "price": "6085000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000251,
        "order_id": 1000025,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 560000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000025B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 10000252,
        "order_id": 1000025,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000025C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000026,
    "order_number": "LAZ-VN-1000026",
    "created_at": "2026-08-12 19:12:40",
    "updated_at": "2026-08-12 19:41:40",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000261,
        "order_id": 1000026,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-SLV",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000026B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000027,
    "order_number": "LAZ-VN-1000027",
    "created_at": "2026-07-20 11:38:20",
    "updated_at": "2026-07-20 14:25:20",
    "statuses": [
      "unpaid"
    ],
    "price": "750000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10000271,
        "order_id": 1000027,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000027B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000028,
    "order_number": "LAZ-VN-1000028",
    "created_at": "2026-07-13 08:52:39",
    "updated_at": "2026-07-13 09:57:39",
    "statuses": [
      "delivered"
    ],
    "price": "1770000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10000281,
        "order_id": 1000028,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000028B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10000282,
        "order_id": 1000028,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000028C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000029,
    "order_number": "LAZ-VN-1000029",
    "created_at": "2026-07-10 15:24:33",
    "updated_at": "2026-07-10 17:04:33",
    "statuses": [
      "shipped"
    ],
    "price": "5905000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 100000,
    "voucher_platform": 60000,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000291,
        "order_id": 1000029,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1740000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000029B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 10000292,
        "order_id": 1000029,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000029C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000030,
    "order_number": "LAZ-VN-1000030",
    "created_at": "2026-08-10 20:21:57",
    "updated_at": "2026-08-10 21:06:57",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6815000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000301,
        "order_id": 1000030,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-WHT",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000030B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000031,
    "order_number": "LAZ-VN-1000031",
    "created_at": "2026-08-22 17:34:02",
    "updated_at": "2026-08-22 20:19:02",
    "statuses": [
      "delivered"
    ],
    "price": "4205000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000311,
        "order_id": 1000031,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLK",
        "item_price": 4200000,
        "paid_price": 4180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000031B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000032,
    "order_number": "LAZ-VN-1000032",
    "created_at": "2026-08-09 23:03:40",
    "updated_at": "2026-08-09 23:27:40",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3455000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10000321,
        "order_id": 1000032,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 3430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000032B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000033,
    "order_number": "LAZ-VN-1000033",
    "created_at": "2026-08-28 00:10:48",
    "updated_at": "2026-08-28 00:42:48",
    "statuses": [
      "delivered"
    ],
    "price": "185000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10000331,
        "order_id": 1000033,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000033B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000034,
    "order_number": "LAZ-VN-1000034",
    "created_at": "2026-08-07 04:41:21",
    "updated_at": "2026-08-07 06:28:21",
    "statuses": [
      "delivered"
    ],
    "price": "28500000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10000341,
        "order_id": 1000034,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-GRY",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000034B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000035,
    "order_number": "LAZ-VN-1000035",
    "created_at": "2026-07-21 20:27:03",
    "updated_at": "2026-07-21 20:44:03",
    "statuses": [
      "delivered"
    ],
    "price": "160000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10000351,
        "order_id": 1000035,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000035B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000036,
    "order_number": "LAZ-VN-1000036",
    "created_at": "2026-08-15 20:38:15",
    "updated_at": "2026-08-15 22:16:15",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "595000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000361,
        "order_id": 1000036,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000036B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000037,
    "order_number": "LAZ-VN-1000037",
    "created_at": "2026-07-09 06:09:49",
    "updated_at": "2026-07-09 08:04:49",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4200000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000371,
        "order_id": 1000037,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLU",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000037B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000038,
    "order_number": "LAZ-VN-1000038",
    "created_at": "2026-08-21 04:51:17",
    "updated_at": "2026-08-21 07:36:17",
    "statuses": [
      "shipped"
    ],
    "price": "655000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10000381,
        "order_id": 1000038,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000038B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000039,
    "order_number": "LAZ-VN-1000039",
    "created_at": "2026-07-11 21:05:43",
    "updated_at": "2026-07-11 21:55:43",
    "statuses": [
      "delivered"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10000391,
        "order_id": 1000039,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000039B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000040,
    "order_number": "LAZ-VN-1000040",
    "created_at": "2026-07-27 13:19:31",
    "updated_at": "2026-07-27 15:00:31",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "785000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10000401,
        "order_id": 1000040,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000040B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000041,
    "order_number": "LAZ-VN-1000041",
    "created_at": "2026-07-19 15:40:30",
    "updated_at": "2026-07-19 18:17:30",
    "statuses": [
      "unpaid"
    ],
    "price": "2635000",
    "items_count": 3,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10000411,
        "order_id": 1000041,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000041B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 10000412,
        "order_id": 1000041,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000041C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10000413,
        "order_id": 1000041,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-GRY",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000041D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000042,
    "order_number": "LAZ-VN-1000042",
    "created_at": "2026-08-11 01:58:03",
    "updated_at": "2026-08-11 02:55:03",
    "statuses": [
      "shipped"
    ],
    "price": "5515000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10000421,
        "order_id": 1000042,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLK",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000042B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000043,
    "order_number": "LAZ-VN-1000043",
    "created_at": "2026-08-12 07:28:46",
    "updated_at": "2026-08-12 10:14:46",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1475000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000431,
        "order_id": 1000043,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000043B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000044,
    "order_number": "LAZ-VN-1000044",
    "created_at": "2026-08-01 15:32:07",
    "updated_at": "2026-08-01 16:49:07",
    "statuses": [
      "returned"
    ],
    "price": "1285000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000441,
        "order_id": 1000044,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000044B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 1000045,
    "order_number": "LAZ-VN-1000045",
    "created_at": "2026-08-18 06:36:13",
    "updated_at": "2026-08-18 07:57:13",
    "statuses": [
      "canceled"
    ],
    "price": "645000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10000451,
        "order_id": 1000045,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000045B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Delivery time estimate too long"
      },
      {
        "order_item_id": 10000452,
        "order_id": 1000045,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLK",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000045C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 1000046,
    "order_number": "LAZ-VN-1000046",
    "created_at": "2026-08-25 02:42:24",
    "updated_at": "2026-08-25 03:46:24",
    "statuses": [
      "shipped"
    ],
    "price": "555000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10000461,
        "order_id": 1000046,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000046B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000047,
    "order_number": "LAZ-VN-1000047",
    "created_at": "2026-08-22 02:55:16",
    "updated_at": "2026-08-22 04:52:16",
    "statuses": [
      "delivered"
    ],
    "price": "1760000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10000471,
        "order_id": 1000047,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLK",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000047B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000048,
    "order_number": "LAZ-VN-1000048",
    "created_at": "2026-08-10 21:42:20",
    "updated_at": "2026-08-10 21:56:20",
    "statuses": [
      "unpaid"
    ],
    "price": "2085000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000481,
        "order_id": 1000048,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1260000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000048B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 10000482,
        "order_id": 1000048,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000048C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000049,
    "order_number": "LAZ-VN-1000049",
    "created_at": "2026-07-26 11:58:04",
    "updated_at": "2026-07-26 14:45:04",
    "statuses": [
      "delivered"
    ],
    "price": "760000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10000491,
        "order_id": 1000049,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLU",
        "item_price": 790000,
        "paid_price": 760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000049B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000050,
    "order_number": "LAZ-VN-1000050",
    "created_at": "2026-08-14 12:12:54",
    "updated_at": "2026-08-14 15:11:54",
    "statuses": [
      "unpaid"
    ],
    "price": "5655000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10000501,
        "order_id": 1000050,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000050B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 10000502,
        "order_id": 1000050,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLU",
        "item_price": 1450000,
        "paid_price": 1420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000050C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000051,
    "order_number": "LAZ-VN-1000051",
    "created_at": "2026-07-28 01:41:13",
    "updated_at": "2026-07-28 04:30:13",
    "statuses": [
      "unpaid"
    ],
    "price": "1315000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000511,
        "order_id": 1000051,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000051B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000052,
    "order_number": "LAZ-VN-1000052",
    "created_at": "2026-08-27 23:59:32",
    "updated_at": "2026-08-28 02:01:32",
    "statuses": [
      "shipped"
    ],
    "price": "1775000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000521,
        "order_id": 1000052,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000052B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000053,
    "order_number": "LAZ-VN-1000053",
    "created_at": "2026-08-20 20:07:11",
    "updated_at": "2026-08-20 20:22:11",
    "statuses": [
      "delivered"
    ],
    "price": "785000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10000531,
        "order_id": 1000053,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000053B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000054,
    "order_number": "LAZ-VN-1000054",
    "created_at": "2026-07-20 05:48:13",
    "updated_at": "2026-07-20 05:59:13",
    "statuses": [
      "shipped"
    ],
    "price": "3935000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000541,
        "order_id": 1000054,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000054B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10000542,
        "order_id": 1000054,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000054C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000055,
    "order_number": "LAZ-VN-1000055",
    "created_at": "2026-07-26 18:17:26",
    "updated_at": "2026-07-26 18:48:26",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5095000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000551,
        "order_id": 1000055,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000055B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 10000552,
        "order_id": 1000055,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000055C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000056,
    "order_number": "LAZ-VN-1000056",
    "created_at": "2026-07-29 14:36:02",
    "updated_at": "2026-07-29 15:27:02",
    "statuses": [
      "unpaid"
    ],
    "price": "1830000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000561,
        "order_id": 1000056,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000056B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000057,
    "order_number": "LAZ-VN-1000057",
    "created_at": "2026-07-29 00:29:37",
    "updated_at": "2026-07-29 01:42:37",
    "statuses": [
      "shipped"
    ],
    "price": "5525000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000571,
        "order_id": 1000057,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000057B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000058,
    "order_number": "LAZ-VN-1000058",
    "created_at": "2026-08-27 12:15:43",
    "updated_at": "2026-08-27 14:22:43",
    "statuses": [
      "delivered"
    ],
    "price": "175000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000581,
        "order_id": 1000058,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000058B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000059,
    "order_number": "LAZ-VN-1000059",
    "created_at": "2026-08-14 02:55:19",
    "updated_at": "2026-08-14 05:02:19",
    "statuses": [
      "shipped"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000591,
        "order_id": 1000059,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000059B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000060,
    "order_number": "LAZ-VN-1000060",
    "created_at": "2026-07-19 01:20:17",
    "updated_at": "2026-07-19 03:57:17",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1815000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10000601,
        "order_id": 1000060,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLK",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000060B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000061,
    "order_number": "LAZ-VN-1000061",
    "created_at": "2026-08-27 15:42:53",
    "updated_at": "2026-08-27 16:12:53",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "955000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000611,
        "order_id": 1000061,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-GRY",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000061B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000062,
    "order_number": "LAZ-VN-1000062",
    "created_at": "2026-07-19 01:28:35",
    "updated_at": "2026-07-19 03:33:35",
    "statuses": [
      "canceled"
    ],
    "price": "1200000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10000621,
        "order_id": 1000062,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000062B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Buyer changed mind"
      },
      {
        "order_item_id": 10000622,
        "order_id": 1000062,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000062C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 1000063,
    "order_number": "LAZ-VN-1000063",
    "created_at": "2026-07-22 13:33:37",
    "updated_at": "2026-07-22 13:52:37",
    "statuses": [
      "unpaid"
    ],
    "price": "920000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000631,
        "order_id": 1000063,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-GRY",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000063B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000064,
    "order_number": "LAZ-VN-1000064",
    "created_at": "2026-07-15 23:39:21",
    "updated_at": "2026-07-16 02:11:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1765000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000641,
        "order_id": 1000064,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000064B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 10000642,
        "order_id": 1000064,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000064C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000065,
    "order_number": "LAZ-VN-1000065",
    "created_at": "2026-08-12 00:49:46",
    "updated_at": "2026-08-12 01:12:46",
    "statuses": [
      "canceled"
    ],
    "price": "3485000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000651,
        "order_id": 1000065,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000065B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 1000066,
    "order_number": "LAZ-VN-1000066",
    "created_at": "2026-08-27 15:17:36",
    "updated_at": "2026-08-27 16:50:36",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2385000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10000661,
        "order_id": 1000066,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLU",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000066B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10000662,
        "order_id": 1000066,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000066C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000067,
    "order_number": "LAZ-VN-1000067",
    "created_at": "2026-08-16 07:51:21",
    "updated_at": "2026-08-16 09:41:21",
    "statuses": [
      "delivered"
    ],
    "price": "250000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10000671,
        "order_id": 1000067,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000067B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000068,
    "order_number": "LAZ-VN-1000068",
    "created_at": "2026-08-11 08:51:39",
    "updated_at": "2026-08-11 10:58:39",
    "statuses": [
      "delivered"
    ],
    "price": "5485000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10000681,
        "order_id": 1000068,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000068B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000069,
    "order_number": "LAZ-VN-1000069",
    "created_at": "2026-08-12 15:11:16",
    "updated_at": "2026-08-12 16:04:16",
    "statuses": [
      "unpaid"
    ],
    "price": "4845000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000691,
        "order_id": 1000069,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000069B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 10000692,
        "order_id": 1000069,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000069C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000070,
    "order_number": "LAZ-VN-1000070",
    "created_at": "2026-07-25 00:46:17",
    "updated_at": "2026-07-25 02:04:17",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28495000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10000701,
        "order_id": 1000070,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000070B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000071,
    "order_number": "LAZ-VN-1000071",
    "created_at": "2026-08-12 15:35:50",
    "updated_at": "2026-08-12 16:22:50",
    "statuses": [
      "returned"
    ],
    "price": "2195000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000711,
        "order_id": 1000071,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000071B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 10000712,
        "order_id": 1000071,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000071C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 1000072,
    "order_number": "LAZ-VN-1000072",
    "created_at": "2026-07-10 23:42:45",
    "updated_at": "2026-07-11 00:10:45",
    "statuses": [
      "delivered"
    ],
    "price": "6375000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000721,
        "order_id": 1000072,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000072B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 10000722,
        "order_id": 1000072,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000072C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000073,
    "order_number": "LAZ-VN-1000073",
    "created_at": "2026-08-11 09:07:03",
    "updated_at": "2026-08-11 10:06:03",
    "statuses": [
      "shipped"
    ],
    "price": "805000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000731,
        "order_id": 1000073,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000073B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000074,
    "order_number": "LAZ-VN-1000074",
    "created_at": "2026-08-24 13:36:04",
    "updated_at": "2026-08-24 16:19:04",
    "statuses": [
      "returned"
    ],
    "price": "1620000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000741,
        "order_id": 1000074,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000074B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 1000075,
    "order_number": "LAZ-VN-1000075",
    "created_at": "2026-08-22 16:27:02",
    "updated_at": "2026-08-22 18:43:02",
    "statuses": [
      "shipped"
    ],
    "price": "28515000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10000751,
        "order_id": 1000075,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000075B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000076,
    "order_number": "LAZ-VN-1000076",
    "created_at": "2026-09-04 00:40:55",
    "updated_at": "2026-09-04 02:00:55",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "765000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10000761,
        "order_id": 1000076,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000076B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000077,
    "order_number": "LAZ-VN-1000077",
    "created_at": "2026-08-09 18:39:13",
    "updated_at": "2026-08-09 19:13:13",
    "statuses": [
      "canceled"
    ],
    "price": "28535000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000771,
        "order_id": 1000077,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000077B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 1000078,
    "order_number": "LAZ-VN-1000078",
    "created_at": "2026-08-29 09:44:38",
    "updated_at": "2026-08-29 12:11:38",
    "statuses": [
      "shipped"
    ],
    "price": "790000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000781,
        "order_id": 1000078,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000078B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000079,
    "order_number": "LAZ-VN-1000079",
    "created_at": "2026-08-06 05:08:01",
    "updated_at": "2026-08-06 07:23:01",
    "statuses": [
      "delivered"
    ],
    "price": "1805000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000791,
        "order_id": 1000079,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000079B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000080,
    "order_number": "LAZ-VN-1000080",
    "created_at": "2026-07-24 18:16:53",
    "updated_at": "2026-07-24 18:59:53",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "335000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10000801,
        "order_id": 1000080,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000080B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000081,
    "order_number": "LAZ-VN-1000081",
    "created_at": "2026-07-24 11:42:14",
    "updated_at": "2026-07-24 13:55:14",
    "statuses": [
      "delivered"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10000811,
        "order_id": 1000081,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-SLV",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000081B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000082,
    "order_number": "LAZ-VN-1000082",
    "created_at": "2026-08-25 20:17:07",
    "updated_at": "2026-08-25 22:04:07",
    "statuses": [
      "shipped"
    ],
    "price": "6795000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000821,
        "order_id": 1000082,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLU",
        "item_price": 6800000,
        "paid_price": 6770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000082B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000083,
    "order_number": "LAZ-VN-1000083",
    "created_at": "2026-08-14 16:29:18",
    "updated_at": "2026-08-14 18:24:18",
    "statuses": [
      "canceled"
    ],
    "price": "785000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 60000,
    "voucher_platform": 60000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000831,
        "order_id": 1000083,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 220000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000083B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Found cheaper alternative elsewhere"
      },
      {
        "order_item_id": 10000832,
        "order_id": 1000083,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 550000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000083C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 1000084,
    "order_number": "LAZ-VN-1000084",
    "created_at": "2026-08-30 23:53:55",
    "updated_at": "2026-08-31 02:13:55",
    "statuses": [
      "delivered"
    ],
    "price": "6805000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000841,
        "order_id": 1000084,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLK",
        "item_price": 6800000,
        "paid_price": 6770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000084B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000085,
    "order_number": "LAZ-VN-1000085",
    "created_at": "2026-08-14 08:12:14",
    "updated_at": "2026-08-14 10:57:14",
    "statuses": [
      "shipped"
    ],
    "price": "295000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000851,
        "order_id": 1000085,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000085B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000086,
    "order_number": "LAZ-VN-1000086",
    "created_at": "2026-08-24 15:58:45",
    "updated_at": "2026-08-24 17:24:45",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "785000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000861,
        "order_id": 1000086,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-WHT",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000086B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000087,
    "order_number": "LAZ-VN-1000087",
    "created_at": "2026-08-20 04:46:01",
    "updated_at": "2026-08-20 05:21:01",
    "statuses": [
      "delivered"
    ],
    "price": "31985000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000871,
        "order_id": 1000087,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLU",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000087B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 10000872,
        "order_id": 1000087,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-WHT",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000087C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000088,
    "order_number": "LAZ-VN-1000088",
    "created_at": "2026-08-25 11:11:32",
    "updated_at": "2026-08-25 14:05:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "950000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000881,
        "order_id": 1000088,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000088B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000089,
    "order_number": "LAZ-VN-1000089",
    "created_at": "2026-08-07 01:08:28",
    "updated_at": "2026-08-07 04:06:28",
    "statuses": [
      "shipped"
    ],
    "price": "1845000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000891,
        "order_id": 1000089,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000089B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10000892,
        "order_id": 1000089,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000089C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000090,
    "order_number": "LAZ-VN-1000090",
    "created_at": "2026-07-24 13:10:34",
    "updated_at": "2026-07-24 13:47:34",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2045000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10000901,
        "order_id": 1000090,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000090B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10000902,
        "order_id": 1000090,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000090C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000091,
    "order_number": "LAZ-VN-1000091",
    "created_at": "2026-08-24 04:47:40",
    "updated_at": "2026-08-24 05:30:40",
    "statuses": [
      "delivered"
    ],
    "price": "6800000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000911,
        "order_id": 1000091,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-SLV",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000091B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000092,
    "order_number": "LAZ-VN-1000092",
    "created_at": "2026-08-10 19:12:55",
    "updated_at": "2026-08-10 21:53:55",
    "statuses": [
      "returned"
    ],
    "price": "645000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000921,
        "order_id": 1000092,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000092B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 1000093,
    "order_number": "LAZ-VN-1000093",
    "created_at": "2026-08-23 04:50:22",
    "updated_at": "2026-08-23 07:16:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1455000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10000931,
        "order_id": 1000093,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000093B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000094,
    "order_number": "LAZ-VN-1000094",
    "created_at": "2026-07-26 10:09:28",
    "updated_at": "2026-07-26 11:12:28",
    "statuses": [
      "shipped"
    ],
    "price": "935000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10000941,
        "order_id": 1000094,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000094B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000095,
    "order_number": "LAZ-VN-1000095",
    "created_at": "2026-08-30 15:55:35",
    "updated_at": "2026-08-30 18:40:35",
    "statuses": [
      "delivered"
    ],
    "price": "1760000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10000951,
        "order_id": 1000095,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000095B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000096,
    "order_number": "LAZ-VN-1000096",
    "created_at": "2026-07-12 16:16:55",
    "updated_at": "2026-07-12 17:54:55",
    "statuses": [
      "shipped"
    ],
    "price": "1445000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10000961,
        "order_id": 1000096,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000096B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 10000962,
        "order_id": 1000096,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 840000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000096C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000097,
    "order_number": "LAZ-VN-1000097",
    "created_at": "2026-08-04 04:08:39",
    "updated_at": "2026-08-04 06:40:39",
    "statuses": [
      "returned"
    ],
    "price": "28725000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10000971,
        "order_id": 1000097,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLK",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000097B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 10000972,
        "order_id": 1000097,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLU",
        "item_price": 28500000,
        "paid_price": 28450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000097C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 1000098,
    "order_number": "LAZ-VN-1000098",
    "created_at": "2026-07-13 07:37:25",
    "updated_at": "2026-07-13 09:04:25",
    "statuses": [
      "delivered"
    ],
    "price": "935000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10000981,
        "order_id": 1000098,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-GRY",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000098B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000099,
    "order_number": "LAZ-VN-1000099",
    "created_at": "2026-08-07 13:30:34",
    "updated_at": "2026-08-07 15:57:34",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1835000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10000991,
        "order_id": 1000099,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1820000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000099B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000100,
    "order_number": "LAZ-VN-1000100",
    "created_at": "2026-08-17 03:31:52",
    "updated_at": "2026-08-17 05:39:52",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "595000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001001,
        "order_id": 1000100,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000100B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000101,
    "order_number": "LAZ-VN-1000101",
    "created_at": "2026-07-08 17:46:34",
    "updated_at": "2026-07-08 18:06:34",
    "statuses": [
      "delivered"
    ],
    "price": "3450000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001011,
        "order_id": 1000101,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000101B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000102,
    "order_number": "LAZ-VN-1000102",
    "created_at": "2026-07-18 00:27:22",
    "updated_at": "2026-07-18 02:54:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "825000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10001021,
        "order_id": 1000102,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000102B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000103,
    "order_number": "LAZ-VN-1000103",
    "created_at": "2026-08-17 15:22:59",
    "updated_at": "2026-08-17 17:37:59",
    "statuses": [
      "delivered"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001031,
        "order_id": 1000103,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000103B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000104,
    "order_number": "LAZ-VN-1000104",
    "created_at": "2026-08-04 21:37:37",
    "updated_at": "2026-08-04 22:10:37",
    "statuses": [
      "returned"
    ],
    "price": "515000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001041,
        "order_id": 1000104,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000104B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 1000105,
    "order_number": "LAZ-VN-1000105",
    "created_at": "2026-08-20 14:58:16",
    "updated_at": "2026-08-20 16:59:16",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3445000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001051,
        "order_id": 1000105,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000105B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000106,
    "order_number": "LAZ-VN-1000106",
    "created_at": "2026-08-21 12:15:49",
    "updated_at": "2026-08-21 12:53:49",
    "statuses": [
      "delivered"
    ],
    "price": "1430000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001061,
        "order_id": 1000106,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000106B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000107,
    "order_number": "LAZ-VN-1000107",
    "created_at": "2026-07-31 10:11:09",
    "updated_at": "2026-07-31 11:54:09",
    "statuses": [
      "delivered"
    ],
    "price": "7465000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001071,
        "order_id": 1000107,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000107B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 10001072,
        "order_id": 1000107,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000107C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000108,
    "order_number": "LAZ-VN-1000108",
    "created_at": "2026-08-25 05:53:00",
    "updated_at": "2026-08-25 08:46:00",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5485000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001081,
        "order_id": 1000108,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5460000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000108B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000109,
    "order_number": "LAZ-VN-1000109",
    "created_at": "2026-08-21 00:53:16",
    "updated_at": "2026-08-21 01:56:16",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "215000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001091,
        "order_id": 1000109,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLK",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000109B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000110,
    "order_number": "LAZ-VN-1000110",
    "created_at": "2026-07-21 21:02:37",
    "updated_at": "2026-07-21 22:35:37",
    "statuses": [
      "shipped"
    ],
    "price": "1830000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001101,
        "order_id": 1000110,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000110B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000111,
    "order_number": "LAZ-VN-1000111",
    "created_at": "2026-08-13 00:59:03",
    "updated_at": "2026-08-13 01:19:03",
    "statuses": [
      "unpaid"
    ],
    "price": "1290000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10001111,
        "order_id": 1000111,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000111B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000112,
    "order_number": "LAZ-VN-1000112",
    "created_at": "2026-08-19 19:56:01",
    "updated_at": "2026-08-19 20:32:01",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "800000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001121,
        "order_id": 1000112,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 220000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000112B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 10001122,
        "order_id": 1000112,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000112C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000113,
    "order_number": "LAZ-VN-1000113",
    "created_at": "2026-08-26 02:42:36",
    "updated_at": "2026-08-26 03:34:36",
    "statuses": [
      "shipped"
    ],
    "price": "2075000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001131,
        "order_id": 1000113,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 1260000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000113B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 10001132,
        "order_id": 1000113,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000113C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000114,
    "order_number": "LAZ-VN-1000114",
    "created_at": "2026-08-14 07:27:58",
    "updated_at": "2026-08-14 10:25:58",
    "statuses": [
      "delivered"
    ],
    "price": "1775000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10001141,
        "order_id": 1000114,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLK",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000114B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000115,
    "order_number": "LAZ-VN-1000115",
    "created_at": "2026-08-28 08:38:44",
    "updated_at": "2026-08-28 10:38:44",
    "statuses": [
      "shipped"
    ],
    "price": "905000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001151,
        "order_id": 1000115,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000115B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000116,
    "order_number": "LAZ-VN-1000116",
    "created_at": "2026-07-29 08:30:22",
    "updated_at": "2026-07-29 09:57:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "965000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10001161,
        "order_id": 1000116,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000116B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000117,
    "order_number": "LAZ-VN-1000117",
    "created_at": "2026-08-22 20:21:45",
    "updated_at": "2026-08-22 22:39:45",
    "statuses": [
      "delivered"
    ],
    "price": "6925000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001171,
        "order_id": 1000117,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000117B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 10001172,
        "order_id": 1000117,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000117C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000118,
    "order_number": "LAZ-VN-1000118",
    "created_at": "2026-07-18 15:43:37",
    "updated_at": "2026-07-18 17:34:37",
    "statuses": [
      "shipped"
    ],
    "price": "1305000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001181,
        "order_id": 1000118,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000118B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000119,
    "order_number": "LAZ-VN-1000119",
    "created_at": "2026-08-29 03:55:32",
    "updated_at": "2026-08-29 06:30:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "535000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001191,
        "order_id": 1000119,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000119B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000120,
    "order_number": "LAZ-VN-1000120",
    "created_at": "2026-07-13 17:38:47",
    "updated_at": "2026-07-13 18:14:47",
    "statuses": [
      "shipped"
    ],
    "price": "605000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001201,
        "order_id": 1000120,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000120B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000121,
    "order_number": "LAZ-VN-1000121",
    "created_at": "2026-08-14 23:25:18",
    "updated_at": "2026-08-15 02:16:18",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "925000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10001211,
        "order_id": 1000121,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000121B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000122,
    "order_number": "LAZ-VN-1000122",
    "created_at": "2026-08-21 19:44:06",
    "updated_at": "2026-08-21 21:30:06",
    "statuses": [
      "returned"
    ],
    "price": "735000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10001221,
        "order_id": 1000122,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000122B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 1000123,
    "order_number": "LAZ-VN-1000123",
    "created_at": "2026-07-20 09:27:15",
    "updated_at": "2026-07-20 10:37:15",
    "statuses": [
      "unpaid"
    ],
    "price": "7940000",
    "items_count": 3,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10001231,
        "order_id": 1000123,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000123B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 10001232,
        "order_id": 1000123,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLU",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000123C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 10001233,
        "order_id": 1000123,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-GRY",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000123D",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000124,
    "order_number": "LAZ-VN-1000124",
    "created_at": "2026-08-07 19:06:11",
    "updated_at": "2026-08-07 20:59:11",
    "statuses": [
      "shipped"
    ],
    "price": "1290000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10001241,
        "order_id": 1000124,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000124B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000125,
    "order_number": "LAZ-VN-1000125",
    "created_at": "2026-07-29 09:23:27",
    "updated_at": "2026-07-29 11:04:27",
    "statuses": [
      "delivered"
    ],
    "price": "1040000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10001251,
        "order_id": 1000125,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000125B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 10001252,
        "order_id": 1000125,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000125C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000126,
    "order_number": "LAZ-VN-1000126",
    "created_at": "2026-08-02 00:59:39",
    "updated_at": "2026-08-02 02:45:39",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "235000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10001261,
        "order_id": 1000126,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000126B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000127,
    "order_number": "LAZ-VN-1000127",
    "created_at": "2026-07-06 22:10:46",
    "updated_at": "2026-07-06 22:39:46",
    "statuses": [
      "canceled"
    ],
    "price": "1465000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10001271,
        "order_id": 1000127,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000127B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 1000128,
    "order_number": "LAZ-VN-1000128",
    "created_at": "2026-07-29 03:10:37",
    "updated_at": "2026-07-29 04:30:37",
    "statuses": [
      "delivered"
    ],
    "price": "4195000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10001281,
        "order_id": 1000128,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000128B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 10001282,
        "order_id": 1000128,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000128C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000129,
    "order_number": "LAZ-VN-1000129",
    "created_at": "2026-09-02 14:32:20",
    "updated_at": "2026-09-02 16:21:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "965000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10001291,
        "order_id": 1000129,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000129B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000130,
    "order_number": "LAZ-VN-1000130",
    "created_at": "2026-07-20 18:59:11",
    "updated_at": "2026-07-20 21:30:11",
    "statuses": [
      "shipped"
    ],
    "price": "805000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10001301,
        "order_id": 1000130,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000130B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000131,
    "order_number": "LAZ-VN-1000131",
    "created_at": "2026-08-17 10:46:21",
    "updated_at": "2026-08-17 11:47:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "755000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001311,
        "order_id": 1000131,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 730000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000131B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000132,
    "order_number": "LAZ-VN-1000132",
    "created_at": "2026-08-16 20:51:02",
    "updated_at": "2026-08-16 22:36:02",
    "statuses": [
      "delivered"
    ],
    "price": "4945000",
    "items_count": 3,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 80000,
    "voucher_platform": 60000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001321,
        "order_id": 1000132,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-GRY",
        "item_price": 790000,
        "paid_price": 740000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000132B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 10001322,
        "order_id": 1000132,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000132C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 10001323,
        "order_id": 1000132,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000132D",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000133,
    "order_number": "LAZ-VN-1000133",
    "created_at": "2026-09-01 15:49:25",
    "updated_at": "2026-09-01 18:13:25",
    "statuses": [
      "delivered"
    ],
    "price": "715000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001331,
        "order_id": 1000133,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 700000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000133B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000134,
    "order_number": "LAZ-VN-1000134",
    "created_at": "2026-08-20 18:17:06",
    "updated_at": "2026-08-20 19:21:06",
    "statuses": [
      "shipped"
    ],
    "price": "1665000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001341,
        "order_id": 1000134,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-SLV",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000134B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000135,
    "order_number": "LAZ-VN-1000135",
    "created_at": "2026-08-04 22:32:24",
    "updated_at": "2026-08-04 23:57:24",
    "statuses": [
      "delivered"
    ],
    "price": "3465000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001351,
        "order_id": 1000135,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 3430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000135B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000136,
    "order_number": "LAZ-VN-1000136",
    "created_at": "2026-07-11 06:21:29",
    "updated_at": "2026-07-11 09:03:29",
    "statuses": [
      "canceled"
    ],
    "price": "5650000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001361,
        "order_id": 1000136,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLK",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000136B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        "reason": "Buyer changed mind"
      },
      {
        "order_item_id": 10001362,
        "order_id": 1000136,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000136C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 1000137,
    "order_number": "LAZ-VN-1000137",
    "created_at": "2026-07-10 13:43:24",
    "updated_at": "2026-07-10 14:24:24",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "665000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10001371,
        "order_id": 1000137,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000137B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000138,
    "order_number": "LAZ-VN-1000138",
    "created_at": "2026-08-02 04:12:27",
    "updated_at": "2026-08-02 05:45:27",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1105000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001381,
        "order_id": 1000138,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-GRY",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000138B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 10001382,
        "order_id": 1000138,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000138C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000139,
    "order_number": "LAZ-VN-1000139",
    "created_at": "2026-09-02 09:01:08",
    "updated_at": "2026-09-02 09:32:08",
    "statuses": [
      "unpaid"
    ],
    "price": "2320000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10001391,
        "order_id": 1000139,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000139B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      },
      {
        "order_item_id": 10001392,
        "order_id": 1000139,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000139C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000140,
    "order_number": "LAZ-VN-1000140",
    "created_at": "2026-07-29 11:07:28",
    "updated_at": "2026-07-29 14:05:28",
    "statuses": [
      "delivered"
    ],
    "price": "150000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001401,
        "order_id": 1000140,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000140B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000141,
    "order_number": "LAZ-VN-1000141",
    "created_at": "2026-08-16 20:54:49",
    "updated_at": "2026-08-16 21:22:49",
    "statuses": [
      "shipped"
    ],
    "price": "1315000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001411,
        "order_id": 1000141,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000141B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000142,
    "order_number": "LAZ-VN-1000142",
    "created_at": "2026-09-03 21:20:32",
    "updated_at": "2026-09-03 23:18:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6985000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10001421,
        "order_id": 1000142,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000142B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10001422,
        "order_id": 1000142,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6780000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000142C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000143,
    "order_number": "LAZ-VN-1000143",
    "created_at": "2026-08-27 09:23:25",
    "updated_at": "2026-08-27 11:19:25",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28500000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001431,
        "order_id": 1000143,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000143B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000144,
    "order_number": "LAZ-VN-1000144",
    "created_at": "2026-07-16 10:39:49",
    "updated_at": "2026-07-16 13:28:49",
    "statuses": [
      "shipped"
    ],
    "price": "950000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001441,
        "order_id": 1000144,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000144B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000145,
    "order_number": "LAZ-VN-1000145",
    "created_at": "2026-08-01 16:59:24",
    "updated_at": "2026-08-01 17:10:24",
    "statuses": [
      "delivered"
    ],
    "price": "4215000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001451,
        "order_id": 1000145,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000145B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000146,
    "order_number": "LAZ-VN-1000146",
    "created_at": "2026-07-08 06:22:01",
    "updated_at": "2026-07-08 09:20:01",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2745000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001461,
        "order_id": 1000146,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000146B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10001462,
        "order_id": 1000146,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000146C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000147,
    "order_number": "LAZ-VN-1000147",
    "created_at": "2026-07-24 22:46:38",
    "updated_at": "2026-07-24 23:01:38",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6800000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001471,
        "order_id": 1000147,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLU",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000147B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000148,
    "order_number": "LAZ-VN-1000148",
    "created_at": "2026-07-10 06:49:31",
    "updated_at": "2026-07-10 07:29:31",
    "statuses": [
      "shipped"
    ],
    "price": "1635000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10001481,
        "order_id": 1000148,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000148B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10001482,
        "order_id": 1000148,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000148C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000149,
    "order_number": "LAZ-VN-1000149",
    "created_at": "2026-07-27 14:16:29",
    "updated_at": "2026-07-27 17:16:29",
    "statuses": [
      "canceled"
    ],
    "price": "215000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001491,
        "order_id": 1000149,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000149B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 1000150,
    "order_number": "LAZ-VN-1000150",
    "created_at": "2026-07-29 05:47:30",
    "updated_at": "2026-07-29 07:36:30",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "750000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001501,
        "order_id": 1000150,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000150B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000151,
    "order_number": "LAZ-VN-1000151",
    "created_at": "2026-08-22 11:48:32",
    "updated_at": "2026-08-22 12:30:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1805000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001511,
        "order_id": 1000151,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000151B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000152,
    "order_number": "LAZ-VN-1000152",
    "created_at": "2026-07-25 01:49:40",
    "updated_at": "2026-07-25 04:12:40",
    "statuses": [
      "unpaid"
    ],
    "price": "1865000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001521,
        "order_id": 1000152,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000152B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000153,
    "order_number": "LAZ-VN-1000153",
    "created_at": "2026-08-19 05:17:22",
    "updated_at": "2026-08-19 06:27:22",
    "statuses": [
      "canceled"
    ],
    "price": "28515000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001531,
        "order_id": 1000153,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-GRY",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000153B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 1000154,
    "order_number": "LAZ-VN-1000154",
    "created_at": "2026-07-12 07:25:32",
    "updated_at": "2026-07-12 08:27:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1455000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10001541,
        "order_id": 1000154,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000154B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000155,
    "order_number": "LAZ-VN-1000155",
    "created_at": "2026-08-07 09:26:12",
    "updated_at": "2026-08-07 11:08:12",
    "statuses": [
      "unpaid"
    ],
    "price": "5490000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001551,
        "order_id": 1000155,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000155B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000156,
    "order_number": "LAZ-VN-1000156",
    "created_at": "2026-09-01 00:53:36",
    "updated_at": "2026-09-01 01:08:36",
    "statuses": [
      "delivered"
    ],
    "price": "175000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001561,
        "order_id": 1000156,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000156B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000157,
    "order_number": "LAZ-VN-1000157",
    "created_at": "2026-08-07 12:41:33",
    "updated_at": "2026-08-07 14:42:33",
    "statuses": [
      "delivered"
    ],
    "price": "28495000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001571,
        "order_id": 1000157,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000157B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000158,
    "order_number": "LAZ-VN-1000158",
    "created_at": "2026-07-08 12:58:19",
    "updated_at": "2026-07-08 14:14:19",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5495000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001581,
        "order_id": 1000158,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000158B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000159,
    "order_number": "LAZ-VN-1000159",
    "created_at": "2026-08-16 01:48:22",
    "updated_at": "2026-08-16 02:46:22",
    "statuses": [
      "unpaid"
    ],
    "price": "685000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001591,
        "order_id": 1000159,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000159B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000160,
    "order_number": "LAZ-VN-1000160",
    "created_at": "2026-08-17 09:54:24",
    "updated_at": "2026-08-17 12:26:24",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28650000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001601,
        "order_id": 1000160,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000160B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10001602,
        "order_id": 1000160,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000160C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000161,
    "order_number": "LAZ-VN-1000161",
    "created_at": "2026-08-13 17:48:30",
    "updated_at": "2026-08-13 20:33:30",
    "statuses": [
      "shipped"
    ],
    "price": "205000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001611,
        "order_id": 1000161,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000161B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000162,
    "order_number": "LAZ-VN-1000162",
    "created_at": "2026-08-31 00:19:50",
    "updated_at": "2026-08-31 01:30:50",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "975000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10001621,
        "order_id": 1000162,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000162B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000163,
    "order_number": "LAZ-VN-1000163",
    "created_at": "2026-07-20 23:56:01",
    "updated_at": "2026-07-21 01:55:01",
    "statuses": [
      "delivered"
    ],
    "price": "1260000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001631,
        "order_id": 1000163,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1260000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000163B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000164,
    "order_number": "LAZ-VN-1000164",
    "created_at": "2026-08-18 17:27:37",
    "updated_at": "2026-08-18 20:23:37",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5505000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001641,
        "order_id": 1000164,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000164B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000165,
    "order_number": "LAZ-VN-1000165",
    "created_at": "2026-08-21 21:58:42",
    "updated_at": "2026-08-21 22:30:42",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1645000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001651,
        "order_id": 1000165,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000165B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10001652,
        "order_id": 1000165,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000165C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000166,
    "order_number": "LAZ-VN-1000166",
    "created_at": "2026-08-12 07:07:45",
    "updated_at": "2026-08-12 09:03:45",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2265000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10001661,
        "order_id": 1000166,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000166B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 10001662,
        "order_id": 1000166,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000166C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000167,
    "order_number": "LAZ-VN-1000167",
    "created_at": "2026-07-21 10:18:44",
    "updated_at": "2026-07-21 13:09:44",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1655000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10001671,
        "order_id": 1000167,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000167B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000168,
    "order_number": "LAZ-VN-1000168",
    "created_at": "2026-08-11 23:26:23",
    "updated_at": "2026-08-12 01:41:23",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "815000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001681,
        "order_id": 1000168,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLU",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000168B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000169,
    "order_number": "LAZ-VN-1000169",
    "created_at": "2026-07-14 16:18:15",
    "updated_at": "2026-07-14 17:28:15",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1660000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10001691,
        "order_id": 1000169,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000169B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 10001692,
        "order_id": 1000169,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000169C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000170,
    "order_number": "LAZ-VN-1000170",
    "created_at": "2026-08-22 11:42:56",
    "updated_at": "2026-08-22 13:52:56",
    "statuses": [
      "shipped"
    ],
    "price": "2340000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001701,
        "order_id": 1000170,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000170B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10001702,
        "order_id": 1000170,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000170C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000171,
    "order_number": "LAZ-VN-1000171",
    "created_at": "2026-09-02 01:51:40",
    "updated_at": "2026-09-02 02:30:40",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "825000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001711,
        "order_id": 1000171,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000171B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 1000172,
    "order_number": "LAZ-VN-1000172",
    "created_at": "2026-08-18 16:36:32",
    "updated_at": "2026-08-18 18:28:32",
    "statuses": [
      "returned"
    ],
    "price": "1855000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10001721,
        "order_id": 1000172,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000172B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 1000173,
    "order_number": "LAZ-VN-1000173",
    "created_at": "2026-07-11 11:19:21",
    "updated_at": "2026-07-11 11:29:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1270000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001731,
        "order_id": 1000173,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000173B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000174,
    "order_number": "LAZ-VN-1000174",
    "created_at": "2026-07-12 06:13:38",
    "updated_at": "2026-07-12 08:46:38",
    "statuses": [
      "shipped"
    ],
    "price": "1270000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001741,
        "order_id": 1000174,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000174B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000175,
    "order_number": "LAZ-VN-1000175",
    "created_at": "2026-09-01 18:42:55",
    "updated_at": "2026-09-01 20:35:55",
    "statuses": [
      "delivered"
    ],
    "price": "28525000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001751,
        "order_id": 1000175,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-GRY",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000175B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000176,
    "order_number": "LAZ-VN-1000176",
    "created_at": "2026-07-20 21:34:03",
    "updated_at": "2026-07-20 22:39:03",
    "statuses": [
      "delivered"
    ],
    "price": "5645000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001761,
        "order_id": 1000176,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLU",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000176B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 10001762,
        "order_id": 1000176,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000176C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000177,
    "order_number": "LAZ-VN-1000177",
    "created_at": "2026-07-15 23:35:52",
    "updated_at": "2026-07-16 00:19:52",
    "statuses": [
      "unpaid"
    ],
    "price": "1105000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001771,
        "order_id": 1000177,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLU",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000177B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10001772,
        "order_id": 1000177,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000177C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000178,
    "order_number": "LAZ-VN-1000178",
    "created_at": "2026-07-14 13:09:28",
    "updated_at": "2026-07-14 13:47:28",
    "statuses": [
      "delivered"
    ],
    "price": "925000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10001781,
        "order_id": 1000178,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 900000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000178B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000179,
    "order_number": "LAZ-VN-1000179",
    "created_at": "2026-08-16 01:44:09",
    "updated_at": "2026-08-16 03:25:09",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1575000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 70000,
    "voucher_platform": 30000,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10001791,
        "order_id": 1000179,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1400000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000179B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 10001792,
        "order_id": 1000179,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000179C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000180,
    "order_number": "LAZ-VN-1000180",
    "created_at": "2026-07-28 18:54:47",
    "updated_at": "2026-07-28 21:52:47",
    "statuses": [
      "unpaid"
    ],
    "price": "4105000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10001801,
        "order_id": 1000180,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000180B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 10001802,
        "order_id": 1000180,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-WHT",
        "item_price": 3450000,
        "paid_price": 3420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000180C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000181,
    "order_number": "LAZ-VN-1000181",
    "created_at": "2026-08-23 12:34:40",
    "updated_at": "2026-08-23 14:32:40",
    "statuses": [
      "shipped"
    ],
    "price": "4215000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001811,
        "order_id": 1000181,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-GRY",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000181B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000182,
    "order_number": "LAZ-VN-1000182",
    "created_at": "2026-08-11 23:31:35",
    "updated_at": "2026-08-12 02:22:35",
    "statuses": [
      "shipped"
    ],
    "price": "3905000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 80000,
    "voucher_platform": 60000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10001821,
        "order_id": 1000182,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000182B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 10001822,
        "order_id": 1000182,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLU",
        "item_price": 520000,
        "paid_price": 470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000182C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000183,
    "order_number": "LAZ-VN-1000183",
    "created_at": "2026-09-02 15:20:03",
    "updated_at": "2026-09-02 15:31:03",
    "statuses": [
      "unpaid"
    ],
    "price": "4975000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001831,
        "order_id": 1000183,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLU",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000183B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 10001832,
        "order_id": 1000183,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-WHT",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000183C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000184,
    "order_number": "LAZ-VN-1000184",
    "created_at": "2026-09-01 22:01:36",
    "updated_at": "2026-09-02 00:12:36",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1885000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001841,
        "order_id": 1000184,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000184B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000185,
    "order_number": "LAZ-VN-1000185",
    "created_at": "2026-08-10 03:43:31",
    "updated_at": "2026-08-10 05:05:31",
    "statuses": [
      "delivered"
    ],
    "price": "650000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001851,
        "order_id": 1000185,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000185B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000186,
    "order_number": "LAZ-VN-1000186",
    "created_at": "2026-08-14 16:17:57",
    "updated_at": "2026-08-14 18:17:57",
    "statuses": [
      "shipped"
    ],
    "price": "6815000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Bach",
      "last_name": "Truong",
      "phone": "+84931223344",
      "address1": "18 Hai Ba Trung, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_020",
      "first_name": "Bach",
      "last_name": "Truong",
      "email": "bach.truong@example.com",
      "phone": "+84931223344"
    },
    "items": [
      {
        "order_item_id": 10001861,
        "order_id": 1000186,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000186B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000187,
    "order_number": "LAZ-VN-1000187",
    "created_at": "2026-07-29 10:35:44",
    "updated_at": "2026-07-29 11:25:44",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28480000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10001871,
        "order_id": 1000187,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000187B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 1000188,
    "order_number": "LAZ-VN-1000188",
    "created_at": "2026-07-08 16:08:05",
    "updated_at": "2026-07-08 18:20:05",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4195000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10001881,
        "order_id": 1000188,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 4170000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000188B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000189,
    "order_number": "LAZ-VN-1000189",
    "created_at": "2026-07-14 07:30:32",
    "updated_at": "2026-07-14 10:29:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "615000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001891,
        "order_id": 1000189,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000189B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000190,
    "order_number": "LAZ-VN-1000190",
    "created_at": "2026-08-13 21:57:51",
    "updated_at": "2026-08-13 23:03:51",
    "statuses": [
      "shipped"
    ],
    "price": "29025000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10001901,
        "order_id": 1000190,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000190B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 10001902,
        "order_id": 1000190,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000190C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000191,
    "order_number": "LAZ-VN-1000191",
    "created_at": "2026-07-13 14:07:52",
    "updated_at": "2026-07-13 15:53:52",
    "statuses": [
      "shipped"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10001911,
        "order_id": 1000191,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000191B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000192,
    "order_number": "LAZ-VN-1000192",
    "created_at": "2026-07-20 13:56:04",
    "updated_at": "2026-07-20 15:54:04",
    "statuses": [
      "delivered"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10001921,
        "order_id": 1000192,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-GRY",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000192B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000193,
    "order_number": "LAZ-VN-1000193",
    "created_at": "2026-07-19 10:10:14",
    "updated_at": "2026-07-19 12:38:14",
    "statuses": [
      "unpaid"
    ],
    "price": "475000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10001931,
        "order_id": 1000193,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000193B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10001932,
        "order_id": 1000193,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-SLV",
        "item_price": 320000,
        "paid_price": 300000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000193C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000194,
    "order_number": "LAZ-VN-1000194",
    "created_at": "2026-07-15 05:38:42",
    "updated_at": "2026-07-15 08:28:42",
    "statuses": [
      "shipped"
    ],
    "price": "1665000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10001941,
        "order_id": 1000194,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLU",
        "item_price": 1650000,
        "paid_price": 1630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000194B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000195,
    "order_number": "LAZ-VN-1000195",
    "created_at": "2026-08-27 00:40:47",
    "updated_at": "2026-08-27 02:44:47",
    "statuses": [
      "delivered"
    ],
    "price": "4715000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10001951,
        "order_id": 1000195,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000195B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10001952,
        "order_id": 1000195,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLK",
        "item_price": 4200000,
        "paid_price": 4180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000195C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000196,
    "order_number": "LAZ-VN-1000196",
    "created_at": "2026-08-31 11:32:53",
    "updated_at": "2026-08-31 14:26:53",
    "statuses": [
      "shipped"
    ],
    "price": "875000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10001961,
        "order_id": 1000196,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 840000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000196B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000197,
    "order_number": "LAZ-VN-1000197",
    "created_at": "2026-08-12 08:15:20",
    "updated_at": "2026-08-12 11:09:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "645000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10001971,
        "order_id": 1000197,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 630000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000197B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000198,
    "order_number": "LAZ-VN-1000198",
    "created_at": "2026-07-21 15:45:09",
    "updated_at": "2026-07-21 16:26:09",
    "statuses": [
      "delivered"
    ],
    "price": "12325000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10001981,
        "order_id": 1000198,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000198B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 10001982,
        "order_id": 1000198,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLU",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000198C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000199,
    "order_number": "LAZ-VN-1000199",
    "created_at": "2026-08-26 20:09:21",
    "updated_at": "2026-08-26 20:36:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "785000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10001991,
        "order_id": 1000199,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 750000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000199B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000200,
    "order_number": "LAZ-VN-1000200",
    "created_at": "2026-07-28 09:49:02",
    "updated_at": "2026-07-28 10:46:02",
    "statuses": [
      "shipped"
    ],
    "price": "1525000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10002001,
        "order_id": 1000200,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000200B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 10002002,
        "order_id": 1000200,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-GRY",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000200C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000201,
    "order_number": "LAZ-VN-1000201",
    "created_at": "2026-08-02 00:48:12",
    "updated_at": "2026-08-02 01:47:12",
    "statuses": [
      "shipped"
    ],
    "price": "3725000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10002011,
        "order_id": 1000201,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000201B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 10002012,
        "order_id": 1000201,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLK",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000201C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000202,
    "order_number": "LAZ-VN-1000202",
    "created_at": "2026-07-20 09:58:01",
    "updated_at": "2026-07-20 12:17:01",
    "statuses": [
      "delivered"
    ],
    "price": "1825000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10002021,
        "order_id": 1000202,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000202B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000203,
    "order_number": "LAZ-VN-1000203",
    "created_at": "2026-07-18 13:16:50",
    "updated_at": "2026-07-18 14:09:50",
    "statuses": [
      "delivered"
    ],
    "price": "195000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10002031,
        "order_id": 1000203,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000203B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 1000204,
    "order_number": "LAZ-VN-1000204",
    "created_at": "2026-08-30 03:51:42",
    "updated_at": "2026-08-30 04:38:42",
    "statuses": [
      "returned"
    ],
    "price": "685000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10002041,
        "order_id": 1000204,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000204B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 1000205,
    "order_number": "LAZ-VN-1000205",
    "created_at": "2026-08-05 23:50:52",
    "updated_at": "2026-08-06 00:26:52",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "34005000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10002051,
        "order_id": 1000205,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000205B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 10002052,
        "order_id": 1000205,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000205C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000206,
    "order_number": "LAZ-VN-1000206",
    "created_at": "2026-07-16 10:17:14",
    "updated_at": "2026-07-16 12:23:14",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "575000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10002061,
        "order_id": 1000206,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 550000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000206B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000207,
    "order_number": "LAZ-VN-1000207",
    "created_at": "2026-08-25 08:48:26",
    "updated_at": "2026-08-25 10:55:26",
    "statuses": [
      "canceled"
    ],
    "price": "950000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10002071,
        "order_id": 1000207,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLU",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000207B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 1000208,
    "order_number": "LAZ-VN-1000208",
    "created_at": "2026-08-18 03:00:26",
    "updated_at": "2026-08-18 03:29:26",
    "statuses": [
      "delivered"
    ],
    "price": "2275000",
    "items_count": 3,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Trang",
      "last_name": "Cao",
      "phone": "+84976554433",
      "address1": "42 Le Van Sy, Phu Nhuan",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_017",
      "first_name": "Trang",
      "last_name": "Cao",
      "email": "trang.cao@example.com",
      "phone": "+84976554433"
    },
    "items": [
      {
        "order_item_id": 10002081,
        "order_id": 1000208,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000208B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10002082,
        "order_id": 1000208,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1820000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000208C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 10002083,
        "order_id": 1000208,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000208D",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000209,
    "order_number": "LAZ-VN-1000209",
    "created_at": "2026-08-07 07:39:58",
    "updated_at": "2026-08-07 07:49:58",
    "statuses": [
      "shipped"
    ],
    "price": "1645000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10002091,
        "order_id": 1000209,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000209B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000210,
    "order_number": "LAZ-VN-1000210",
    "created_at": "2026-07-13 16:26:03",
    "updated_at": "2026-07-13 18:13:03",
    "statuses": [
      "returned"
    ],
    "price": "4235000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002101,
        "order_id": 1000210,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000210B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 1000211,
    "order_number": "LAZ-VN-1000211",
    "created_at": "2026-08-09 23:51:23",
    "updated_at": "2026-08-10 02:01:23",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "605000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10002111,
        "order_id": 1000211,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 580000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000211B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000212,
    "order_number": "LAZ-VN-1000212",
    "created_at": "2026-08-21 06:44:30",
    "updated_at": "2026-08-21 09:34:30",
    "statuses": [
      "shipped"
    ],
    "price": "3425000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Minh",
      "last_name": "Nguyen",
      "phone": "+84901234567",
      "address1": "123 Nguyen Hue, Quan 1",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_001",
      "first_name": "Minh",
      "last_name": "Nguyen",
      "email": "minh.nguyen@example.com",
      "phone": "+84901234567"
    },
    "items": [
      {
        "order_item_id": 10002121,
        "order_id": 1000212,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-WHT",
        "item_price": 3450000,
        "paid_price": 3400000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000212B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 1000213,
    "order_number": "LAZ-VN-1000213",
    "created_at": "2026-08-10 20:11:35",
    "updated_at": "2026-08-10 22:41:35",
    "statuses": [
      "unpaid"
    ],
    "price": "1845000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10002131,
        "order_id": 1000213,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLK",
        "item_price": 1850000,
        "paid_price": 1820000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000213B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000214,
    "order_number": "LAZ-VN-1000214",
    "created_at": "2026-08-12 06:45:11",
    "updated_at": "2026-08-12 09:33:11",
    "statuses": [
      "returned"
    ],
    "price": "4235000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10002141,
        "order_id": 1000214,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000214B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 10002142,
        "order_id": 1000214,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000214C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 1000215,
    "order_number": "LAZ-VN-1000215",
    "created_at": "2026-07-09 03:09:52",
    "updated_at": "2026-07-09 03:49:52",
    "statuses": [
      "shipped"
    ],
    "price": "1865000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10002151,
        "order_id": 1000215,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000215B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000216,
    "order_number": "LAZ-VN-1000216",
    "created_at": "2026-08-05 16:08:40",
    "updated_at": "2026-08-05 18:38:40",
    "statuses": [
      "unpaid"
    ],
    "price": "620000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10002161,
        "order_id": 1000216,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000216B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 1000217,
    "order_number": "LAZ-VN-1000217",
    "created_at": "2026-08-16 11:47:59",
    "updated_at": "2026-08-16 13:09:59",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "315000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002171,
        "order_id": 1000217,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 300000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000217B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000218,
    "order_number": "LAZ-VN-1000218",
    "created_at": "2026-08-26 04:31:58",
    "updated_at": "2026-08-26 06:43:58",
    "statuses": [
      "unpaid"
    ],
    "price": "7270000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Long",
      "last_name": "Vo",
      "phone": "+84903445566",
      "address1": "30 Nguyen Van Linh, Thanh Khe",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_016",
      "first_name": "Long",
      "last_name": "Vo",
      "email": "long.vo@example.com",
      "phone": "+84903445566"
    },
    "items": [
      {
        "order_item_id": 10002181,
        "order_id": 1000218,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000218B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 10002182,
        "order_id": 1000218,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6780000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000218C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 1000219,
    "order_number": "LAZ-VN-1000219",
    "created_at": "2026-07-27 23:05:51",
    "updated_at": "2026-07-28 01:08:51",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "895000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10002191,
        "order_id": 1000219,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000219B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000220,
    "order_number": "LAZ-VN-1000220",
    "created_at": "2026-07-20 21:56:22",
    "updated_at": "2026-07-21 00:41:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Nam",
      "last_name": "Phan",
      "phone": "+84944332211",
      "address1": "66 Phan Chu Trinh, Phu Nhuan",
      "city": "Hue",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_010",
      "first_name": "Nam",
      "last_name": "Phan",
      "email": "nam.phan@example.com",
      "phone": "+84944332211"
    },
    "items": [
      {
        "order_item_id": 10002201,
        "order_id": 1000220,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 530000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000220B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 1000221,
    "order_number": "LAZ-VN-1000221",
    "created_at": "2026-09-03 22:54:56",
    "updated_at": "2026-09-04 00:54:56",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "335000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "An",
      "last_name": "Doan",
      "phone": "+84933221100",
      "address1": "12 Vo Van Kiet, Ninh Kieu",
      "city": "Can Tho",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_004",
      "first_name": "An",
      "last_name": "Doan",
      "email": "an.doan@example.com",
      "phone": "+84933221100"
    },
    "items": [
      {
        "order_item_id": 10002211,
        "order_id": 1000221,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-GRY",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000221B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000222,
    "order_number": "LAZ-VN-1000222",
    "created_at": "2026-08-07 09:33:00",
    "updated_at": "2026-08-07 09:58:00",
    "statuses": [
      "shipped"
    ],
    "price": "3135000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002221,
        "order_id": 1000222,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000222B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 10002222,
        "order_id": 1000222,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-WHT",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000222C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 1000223,
    "order_number": "LAZ-VN-1000223",
    "created_at": "2026-08-17 08:27:08",
    "updated_at": "2026-08-17 09:02:08",
    "statuses": [
      "shipped"
    ],
    "price": "5460000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10002231,
        "order_id": 1000223,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5460000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000223B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000224,
    "order_number": "LAZ-VN-1000224",
    "created_at": "2026-08-12 09:51:50",
    "updated_at": "2026-08-12 11:24:50",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "220000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10002241,
        "order_id": 1000224,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 220000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000224B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000225,
    "order_number": "LAZ-VN-1000225",
    "created_at": "2026-07-06 15:28:18",
    "updated_at": "2026-07-06 16:31:18",
    "statuses": [
      "delivered"
    ],
    "price": "1875000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10002251,
        "order_id": 1000225,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000225B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000226,
    "order_number": "LAZ-VN-1000226",
    "created_at": "2026-08-02 19:30:46",
    "updated_at": "2026-08-02 20:13:46",
    "statuses": [
      "shipped"
    ],
    "price": "1305000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002261,
        "order_id": 1000226,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLU",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000226B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 1000227,
    "order_number": "LAZ-VN-1000227",
    "created_at": "2026-07-31 13:14:45",
    "updated_at": "2026-07-31 15:49:45",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1625000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10002271,
        "order_id": 1000227,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1600000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000227B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 1000228,
    "order_number": "LAZ-VN-1000228",
    "created_at": "2026-08-12 13:31:38",
    "updated_at": "2026-08-12 15:51:38",
    "statuses": [
      "shipped"
    ],
    "price": "835000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Dung",
      "last_name": "Bui",
      "phone": "+84911223344",
      "address1": "24 Trang Tien, Hoan Kiem",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_008",
      "first_name": "Dung",
      "last_name": "Bui",
      "email": "dung.bui@example.com",
      "phone": "+84911223344"
    },
    "items": [
      {
        "order_item_id": 10002281,
        "order_id": 1000228,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 550000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000228B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 10002282,
        "order_id": 1000228,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-GRY",
        "item_price": 250000,
        "paid_price": 250000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000228C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000229,
    "order_number": "LAZ-VN-1000229",
    "created_at": "2026-08-24 03:59:23",
    "updated_at": "2026-08-24 05:53:23",
    "statuses": [
      "delivered"
    ],
    "price": "1845000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Mai",
      "last_name": "Duong",
      "phone": "+84938112233",
      "address1": "50 Hoang Hoa Tham, Ba Dinh",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_015",
      "first_name": "Mai",
      "last_name": "Duong",
      "email": "mai.duong@example.com",
      "phone": "+84938112233"
    },
    "items": [
      {
        "order_item_id": 10002291,
        "order_id": 1000229,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000229B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000230,
    "order_number": "LAZ-VN-1000230",
    "created_at": "2026-07-14 04:13:23",
    "updated_at": "2026-07-14 05:50:23",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3645000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 70000,
    "voucher_platform": 30000,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10002301,
        "order_id": 1000230,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3400000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000230B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 10002302,
        "order_id": 1000230,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-SLV",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000230C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000231,
    "order_number": "LAZ-VN-1000231",
    "created_at": "2026-07-11 00:36:26",
    "updated_at": "2026-07-11 01:23:26",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1785000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Hoang",
      "last_name": "Tran",
      "phone": "+84988776655",
      "address1": "456 Le Duan, Hai Chau",
      "city": "Da Nang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_002",
      "first_name": "Hoang",
      "last_name": "Tran",
      "email": "hoang.tran@example.com",
      "phone": "+84988776655"
    },
    "items": [
      {
        "order_item_id": 10002311,
        "order_id": 1000231,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000231B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000232,
    "order_number": "LAZ-VN-1000232",
    "created_at": "2026-07-22 07:29:49",
    "updated_at": "2026-07-22 08:31:49",
    "statuses": [
      "unpaid"
    ],
    "price": "29425000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10002321,
        "order_id": 1000232,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000232B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 10002322,
        "order_id": 1000232,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000232C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000233,
    "order_number": "LAZ-VN-1000233",
    "created_at": "2026-09-02 07:19:16",
    "updated_at": "2026-09-02 07:50:16",
    "statuses": [
      "delivered"
    ],
    "price": "1055000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10002331,
        "order_id": 1000233,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLK",
        "item_price": 180000,
        "paid_price": 150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000233B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10002332,
        "order_id": 1000233,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000233C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 1000234,
    "order_number": "LAZ-VN-1000234",
    "created_at": "2026-07-13 18:49:54",
    "updated_at": "2026-07-13 20:27:54",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4205000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10002341,
        "order_id": 1000234,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLK",
        "item_price": 4200000,
        "paid_price": 4170000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000234B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 1000235,
    "order_number": "LAZ-VN-1000235",
    "created_at": "2026-07-29 02:31:54",
    "updated_at": "2026-07-29 03:51:54",
    "statuses": [
      "shipped"
    ],
    "price": "5645000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10002351,
        "order_id": 1000235,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000235B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 10002352,
        "order_id": 1000235,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000235C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 1000236,
    "order_number": "LAZ-VN-1000236",
    "created_at": "2026-07-16 09:02:49",
    "updated_at": "2026-07-16 11:45:49",
    "statuses": [
      "shipped"
    ],
    "price": "320000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Linh",
      "last_name": "Pham",
      "phone": "+84912334455",
      "address1": "789 Ba Trieu, Hai Ba Trung",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_003",
      "first_name": "Linh",
      "last_name": "Pham",
      "email": "linh.pham@example.com",
      "phone": "+84912334455"
    },
    "items": [
      {
        "order_item_id": 10002361,
        "order_id": 1000236,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-SLV",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000236B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 1000237,
    "order_number": "LAZ-VN-1000237",
    "created_at": "2026-07-08 13:44:33",
    "updated_at": "2026-07-08 14:09:33",
    "statuses": [
      "returned"
    ],
    "price": "230000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10002371,
        "order_id": 1000237,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000237B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 1000238,
    "order_number": "LAZ-VN-1000238",
    "created_at": "2026-07-15 09:08:33",
    "updated_at": "2026-07-15 10:38:33",
    "statuses": [
      "delivered"
    ],
    "price": "745000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002381,
        "order_id": 1000238,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN1000238B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000239,
    "order_number": "LAZ-VN-1000239",
    "created_at": "2026-07-26 11:10:57",
    "updated_at": "2026-07-26 12:33:57",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "515000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Tuan",
      "last_name": "Dinh",
      "phone": "+84922334455",
      "address1": "202 Dai Lo Binh Duong, Thu Dau Mot",
      "city": "Binh Duong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_012",
      "first_name": "Tuan",
      "last_name": "Dinh",
      "email": "tuan.dinh@example.com",
      "phone": "+84922334455"
    },
    "items": [
      {
        "order_item_id": 10002391,
        "order_id": 1000239,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000239B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 1000240,
    "order_number": "LAZ-VN-1000240",
    "created_at": "2026-08-07 18:01:21",
    "updated_at": "2026-08-07 19:00:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1790000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10002401,
        "order_id": 1000240,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000240B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000241,
    "order_number": "LAZ-VN-1000241",
    "created_at": "2026-07-15 02:33:24",
    "updated_at": "2026-07-15 03:18:24",
    "statuses": [
      "canceled"
    ],
    "price": "3485000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10002411,
        "order_id": 1000241,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000241B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 1000242,
    "order_number": "LAZ-VN-1000242",
    "created_at": "2026-08-27 19:45:42",
    "updated_at": "2026-08-27 22:42:42",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "10330000",
    "items_count": 3,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Anh",
      "last_name": "Vu",
      "phone": "+84918293847",
      "address1": "55 Tran Phu, Loc Tho",
      "city": "Nha Trang",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_006",
      "first_name": "Anh",
      "last_name": "Vu",
      "email": "anh.vu@example.com",
      "phone": "+84918293847"
    },
    "items": [
      {
        "order_item_id": 10002421,
        "order_id": 1000242,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000242B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 10002422,
        "order_id": 1000242,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLK",
        "item_price": 6800000,
        "paid_price": 6800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000242C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 10002423,
        "order_id": 1000242,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1740000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000242D",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000243,
    "order_number": "LAZ-VN-1000243",
    "created_at": "2026-07-26 06:50:26",
    "updated_at": "2026-07-26 07:52:26",
    "statuses": [
      "shipped"
    ],
    "price": "915000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Quoc",
      "last_name": "Dang",
      "phone": "+84977112233",
      "address1": "88 Landmark Plus, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_005",
      "first_name": "Quoc",
      "last_name": "Dang",
      "email": "quoc.dang.vip@example.com",
      "phone": "+84977112233"
    },
    "items": [
      {
        "order_item_id": 10002431,
        "order_id": 1000243,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 900000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000243B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 1000244,
    "order_number": "LAZ-VN-1000244",
    "created_at": "2026-07-29 04:51:47",
    "updated_at": "2026-07-29 07:03:47",
    "statuses": [
      "returned"
    ],
    "price": "1830000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
    "address_billing": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Kien",
      "last_name": "Ngo",
      "phone": "+84966554433",
      "address1": "18 Quang Trung, Hong Bang",
      "city": "Hai Phong",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_009",
      "first_name": "Kien",
      "last_name": "Ngo",
      "email": "kien.ngo@example.com",
      "phone": "+84966554433"
    },
    "items": [
      {
        "order_item_id": 10002441,
        "order_id": 1000244,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN1000244B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 1000245,
    "order_number": "LAZ-VN-1000245",
    "created_at": "2026-08-19 04:31:17",
    "updated_at": "2026-08-19 06:25:17",
    "statuses": [
      "canceled"
    ],
    "price": "185000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
    "address_billing": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huyen",
      "last_name": "Hoang",
      "phone": "+84919887766",
      "address1": "15 Thuy Van, Thang Tam",
      "city": "Vung Tau",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_013",
      "first_name": "Huyen",
      "last_name": "Hoang",
      "email": "huyen.hoang@example.com",
      "phone": "+84919887766"
    },
    "items": [
      {
        "order_item_id": 10002451,
        "order_id": 1000245,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN1000245B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 1000246,
    "order_number": "LAZ-VN-1000246",
    "created_at": "2026-07-08 07:55:10",
    "updated_at": "2026-07-08 10:49:10",
    "statuses": [
      "shipped"
    ],
    "price": "1785000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "phone": "+84982113355",
      "address1": "350 Dien Bien Phu, Binh Thanh",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_014",
      "first_name": "Phuc",
      "last_name": "Nguyen",
      "email": "phuc.nguyen@example.com",
      "phone": "+84982113355"
    },
    "items": [
      {
        "order_item_id": 10002461,
        "order_id": 1000246,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000246B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 1000247,
    "order_number": "LAZ-VN-1000247",
    "created_at": "2026-08-26 17:54:19",
    "updated_at": "2026-08-26 19:37:19",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "245000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "address_billing": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Thao",
      "last_name": "Le",
      "phone": "+84909876543",
      "address1": "101 Nguyen Van Cu, Quan 5",
      "city": "Ho Chi Minh",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_007",
      "first_name": "Thao",
      "last_name": "Le",
      "email": "thao.le@example.com",
      "phone": "+84909876543"
    },
    "items": [
      {
        "order_item_id": 10002471,
        "order_id": 1000247,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000247B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 1000248,
    "order_number": "LAZ-VN-1000248",
    "created_at": "2026-08-22 00:49:34",
    "updated_at": "2026-08-22 02:05:34",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "720000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
    "address_billing": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Yen",
      "last_name": "Trinh",
      "phone": "+84933445566",
      "address1": "89 Tran Hung Dao",
      "city": "Quy Nhon",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_011",
      "first_name": "Yen",
      "last_name": "Trinh",
      "email": "yen.trinh@example.com",
      "phone": "+84933445566"
    },
    "items": [
      {
        "order_item_id": 10002481,
        "order_id": 1000248,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN1000248B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 1000249,
    "order_number": "LAZ-VN-1000249",
    "created_at": "2026-07-27 17:09:35",
    "updated_at": "2026-07-27 19:02:35",
    "statuses": [
      "shipped"
    ],
    "price": "1850000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Huong",
      "last_name": "Vu",
      "phone": "+84915667788",
      "address1": "15 Dong Khoi, Bien Hoa",
      "city": "Dong Nai",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_019",
      "first_name": "Huong",
      "last_name": "Vu",
      "email": "huong.vu@example.com",
      "phone": "+84915667788"
    },
    "items": [
      {
        "order_item_id": 10002491,
        "order_id": 1000249,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN1000249B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 1000250,
    "order_number": "LAZ-VN-1000250",
    "created_at": "2026-08-04 00:12:47",
    "updated_at": "2026-08-04 02:46:47",
    "statuses": [
      "unpaid"
    ],
    "price": "1615000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "address_billing": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "address_shipping": {
      "first_name": "Duc",
      "last_name": "Lam",
      "phone": "+84989001122",
      "address1": "99 Cau Giay, Quan Cau Giay",
      "city": "Ha Noi",
      "post_code": "700000",
      "country": "Vietnam"
    },
    "buyer": {
      "buyer_id": "LAZ_BUYER_018",
      "first_name": "Duc",
      "last_name": "Lam",
      "email": "duc.lam@example.com",
      "phone": "+84989001122"
    },
    "items": [
      {
        "order_item_id": 10002501,
        "order_id": 1000250,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 1290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000250B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 10002502,
        "order_id": 1000250,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN1000250C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  }
];

export const defaultSeedProfile: SeedProfile = {
  key: 'default',
  name: 'Standard Diverse Orders (250 Orders)',
  description: 'Tập dữ liệu chuẩn lớn gồm 250 đơn hàng đầy đủ các trạng thái, phân bổ theo thời gian trong 60 ngày qua.',
  orders: defaultOrders,
};
