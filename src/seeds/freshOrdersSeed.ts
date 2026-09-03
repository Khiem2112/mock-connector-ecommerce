import type { LazadaOrderDTO, SeedProfile } from './types.js';

export const freshOrders: LazadaOrderDTO[] = [
  {
    "order_id": 4000001,
    "order_number": "LAZ-NEW-4000001",
    "created_at": "2026-09-03 18:29:14",
    "updated_at": "2026-09-03 20:58:14",
    "statuses": [
      "pending"
    ],
    "price": "630000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 40000011,
        "order_id": 4000001,
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
        "status": "pending",
        "tracking_code": "LEXVN4000001B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000002,
    "order_number": "LAZ-NEW-4000002",
    "created_at": "2026-09-03 07:24:00",
    "updated_at": "2026-09-03 09:20:00",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "585000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000021,
        "order_id": 4000002,
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
        "tracking_code": "LEXVN4000002B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000003,
    "order_number": "LAZ-NEW-4000003",
    "created_at": "2026-09-03 13:11:43",
    "updated_at": "2026-09-03 13:33:43",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6825000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
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
        "order_item_id": 40000031,
        "order_id": 4000003,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000003B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 4000004,
    "order_number": "LAZ-NEW-4000004",
    "created_at": "2026-09-03 10:16:46",
    "updated_at": "2026-09-03 13:10:46",
    "statuses": [
      "unpaid"
    ],
    "price": "1665000",
    "items_count": 1,
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
        "order_item_id": 40000041,
        "order_id": 4000004,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000004B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000005,
    "order_number": "LAZ-NEW-4000005",
    "created_at": "2026-09-03 07:42:31",
    "updated_at": "2026-09-03 09:04:31",
    "statuses": [
      "pending"
    ],
    "price": "195000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 40000051,
        "order_id": 4000005,
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
        "status": "pending",
        "tracking_code": "LEXVN4000005B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000006,
    "order_number": "LAZ-NEW-4000006",
    "created_at": "2026-09-03 21:37:16",
    "updated_at": "2026-09-03 22:07:16",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "565000",
    "items_count": 1,
    "payment_method": "ShopeePay",
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
        "order_item_id": 40000061,
        "order_id": 4000006,
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
        "tracking_code": "LEXVN4000006B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000007,
    "order_number": "LAZ-NEW-4000007",
    "created_at": "2026-09-03 06:40:18",
    "updated_at": "2026-09-03 07:26:18",
    "statuses": [
      "unpaid"
    ],
    "price": "2335000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 35000,
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
        "order_item_id": 40000071,
        "order_id": 4000007,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000007B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 40000072,
        "order_id": 4000007,
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
        "tracking_code": "LEXVN4000007C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000008,
    "order_number": "LAZ-NEW-4000008",
    "created_at": "2026-09-03 09:35:00",
    "updated_at": "2026-09-03 10:31:00",
    "statuses": [
      "unpaid"
    ],
    "price": "3455000",
    "items_count": 1,
    "payment_method": "ShopeePay",
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
        "order_item_id": 40000081,
        "order_id": 4000008,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000008B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 4000009,
    "order_number": "LAZ-NEW-4000009",
    "created_at": "2026-09-03 09:41:36",
    "updated_at": "2026-09-03 11:05:36",
    "statuses": [
      "pending"
    ],
    "price": "4820000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 40000091,
        "order_id": 4000009,
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
        "status": "pending",
        "tracking_code": "LEXVN4000009B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 40000092,
        "order_id": 4000009,
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
        "status": "pending",
        "tracking_code": "LEXVN4000009C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000010,
    "order_number": "LAZ-NEW-4000010",
    "created_at": "2026-09-03 03:29:31",
    "updated_at": "2026-09-03 04:37:31",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28515000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
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
        "order_item_id": 40000101,
        "order_id": 4000010,
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
        "tracking_code": "LEXVN4000010B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 4000011,
    "order_number": "LAZ-NEW-4000011",
    "created_at": "2026-09-03 04:40:53",
    "updated_at": "2026-09-03 05:24:53",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3325000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
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
        "order_item_id": 40000111,
        "order_id": 4000011,
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
        "tracking_code": "LEXVN4000011B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 40000112,
        "order_id": 4000011,
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
        "tracking_code": "LEXVN4000011C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 4000012,
    "order_number": "LAZ-NEW-4000012",
    "created_at": "2026-09-03 13:41:07",
    "updated_at": "2026-09-03 14:36:07",
    "statuses": [
      "pending"
    ],
    "price": "1805000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000121,
        "order_id": 4000012,
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
        "status": "pending",
        "tracking_code": "LEXVN4000012B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 4000013,
    "order_number": "LAZ-NEW-4000013",
    "created_at": "2026-09-03 10:49:54",
    "updated_at": "2026-09-03 11:04:54",
    "statuses": [
      "unpaid"
    ],
    "price": "2745000",
    "items_count": 2,
    "payment_method": "Credit Card",
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
        "order_item_id": 40000131,
        "order_id": 4000013,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000013B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 40000132,
        "order_id": 4000013,
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
        "tracking_code": "LEXVN4000013C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000014,
    "order_number": "LAZ-NEW-4000014",
    "created_at": "2026-09-03 02:31:02",
    "updated_at": "2026-09-03 03:13:02",
    "statuses": [
      "unpaid"
    ],
    "price": "8645000",
    "items_count": 2,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000141,
        "order_id": 4000014,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-SLV",
        "item_price": 6800000,
        "paid_price": 6780000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000014B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 40000142,
        "order_id": 4000014,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000014C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000015,
    "order_number": "LAZ-NEW-4000015",
    "created_at": "2026-09-03 01:57:25",
    "updated_at": "2026-09-03 03:47:25",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6770000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
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
        "order_item_id": 40000151,
        "order_id": 4000015,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000015B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 4000016,
    "order_number": "LAZ-NEW-4000016",
    "created_at": "2026-09-03 19:32:11",
    "updated_at": "2026-09-03 20:05:11",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2055000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
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
        "order_item_id": 40000161,
        "order_id": 4000016,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000016B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 40000162,
        "order_id": 4000016,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 730000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000016C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 4000017,
    "order_number": "LAZ-NEW-4000017",
    "created_at": "2026-09-03 20:46:19",
    "updated_at": "2026-09-03 23:10:19",
    "statuses": [
      "pending"
    ],
    "price": "1305000",
    "items_count": 2,
    "payment_method": "Credit Card",
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
        "order_item_id": 40000171,
        "order_id": 4000017,
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
        "status": "pending",
        "tracking_code": "LEXVN4000017B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 40000172,
        "order_id": 4000017,
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
        "status": "pending",
        "tracking_code": "LEXVN4000017C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000018,
    "order_number": "LAZ-NEW-4000018",
    "created_at": "2026-09-03 21:54:57",
    "updated_at": "2026-09-03 22:38:57",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1805000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
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
        "order_item_id": 40000181,
        "order_id": 4000018,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000018B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 40000182,
        "order_id": 4000018,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000018C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000019,
    "order_number": "LAZ-NEW-4000019",
    "created_at": "2026-09-03 06:36:22",
    "updated_at": "2026-09-03 08:03:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "8045000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
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
        "order_item_id": 40000191,
        "order_id": 4000019,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1240000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000019B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 40000192,
        "order_id": 4000019,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLK",
        "item_price": 6800000,
        "paid_price": 6780000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000019C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 4000020,
    "order_number": "LAZ-NEW-4000020",
    "created_at": "2026-09-03 21:05:33",
    "updated_at": "2026-09-04 00:05:33",
    "statuses": [
      "pending"
    ],
    "price": "3465000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 40000201,
        "order_id": 4000020,
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
        "status": "pending",
        "tracking_code": "LEXVN4000020B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 4000021,
    "order_number": "LAZ-NEW-4000021",
    "created_at": "2026-09-03 12:45:18",
    "updated_at": "2026-09-03 13:38:18",
    "statuses": [
      "pending"
    ],
    "price": "4200000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000211,
        "order_id": 4000021,
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
        "status": "pending",
        "tracking_code": "LEXVN4000021B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 4000022,
    "order_number": "LAZ-NEW-4000022",
    "created_at": "2026-09-03 09:16:45",
    "updated_at": "2026-09-03 10:07:45",
    "statuses": [
      "unpaid"
    ],
    "price": "770000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
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
        "order_item_id": 40000221,
        "order_id": 4000022,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-GRY",
        "item_price": 790000,
        "paid_price": 770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000022B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 4000023,
    "order_number": "LAZ-NEW-4000023",
    "created_at": "2026-09-03 13:48:12",
    "updated_at": "2026-09-03 16:36:12",
    "statuses": [
      "unpaid"
    ],
    "price": "785000",
    "items_count": 1,
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
        "order_item_id": 40000231,
        "order_id": 4000023,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000023B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 4000024,
    "order_number": "LAZ-NEW-4000024",
    "created_at": "2026-09-03 04:17:23",
    "updated_at": "2026-09-03 04:38:23",
    "statuses": [
      "pending"
    ],
    "price": "3455000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000241,
        "order_id": 4000024,
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
        "status": "pending",
        "tracking_code": "LEXVN4000024B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 4000025,
    "order_number": "LAZ-NEW-4000025",
    "created_at": "2026-09-03 01:17:31",
    "updated_at": "2026-09-03 03:01:31",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "195000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
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
        "order_item_id": 40000251,
        "order_id": 4000025,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000025B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000026,
    "order_number": "LAZ-NEW-4000026",
    "created_at": "2026-09-03 06:00:20",
    "updated_at": "2026-09-03 07:21:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "305000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000261,
        "order_id": 4000026,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000026B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 4000027,
    "order_number": "LAZ-NEW-4000027",
    "created_at": "2026-09-03 22:03:11",
    "updated_at": "2026-09-03 22:20:11",
    "statuses": [
      "pending"
    ],
    "price": "8095000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
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
        "order_item_id": 40000271,
        "order_id": 4000027,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000027B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 40000272,
        "order_id": 4000027,
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
        "status": "pending",
        "tracking_code": "LEXVN4000027C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 4000028,
    "order_number": "LAZ-NEW-4000028",
    "created_at": "2026-09-03 12:26:16",
    "updated_at": "2026-09-03 14:22:16",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3035000",
    "items_count": 3,
    "payment_method": "Momo",
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
        "order_item_id": 40000281,
        "order_id": 4000028,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000028B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 40000282,
        "order_id": 4000028,
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
        "tracking_code": "LEXVN4000028C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 40000283,
        "order_id": 4000028,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000028D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000029,
    "order_number": "LAZ-NEW-4000029",
    "created_at": "2026-09-03 01:39:46",
    "updated_at": "2026-09-03 02:08:46",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4725000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000291,
        "order_id": 4000029,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000029B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 40000292,
        "order_id": 4000029,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLU",
        "item_price": 1290000,
        "paid_price": 1260000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000029C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000030,
    "order_number": "LAZ-NEW-4000030",
    "created_at": "2026-09-03 08:44:59",
    "updated_at": "2026-09-03 10:58:59",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1835000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
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
        "order_item_id": 40000301,
        "order_id": 4000030,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000030B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000031,
    "order_number": "LAZ-NEW-4000031",
    "created_at": "2026-09-03 23:36:34",
    "updated_at": "2026-09-03 23:47:34",
    "statuses": [
      "pending"
    ],
    "price": "2010000",
    "items_count": 2,
    "payment_method": "COD",
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
        "order_item_id": 40000311,
        "order_id": 4000031,
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
        "status": "pending",
        "tracking_code": "LEXVN4000031B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 40000312,
        "order_id": 4000031,
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
        "status": "pending",
        "tracking_code": "LEXVN4000031C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 4000032,
    "order_number": "LAZ-NEW-4000032",
    "created_at": "2026-09-03 12:54:13",
    "updated_at": "2026-09-03 13:05:13",
    "statuses": [
      "pending"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
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
        "order_item_id": 40000321,
        "order_id": 4000032,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 530000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000032B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000033,
    "order_number": "LAZ-NEW-4000033",
    "created_at": "2026-09-03 01:18:26",
    "updated_at": "2026-09-03 02:11:26",
    "statuses": [
      "unpaid"
    ],
    "price": "535000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
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
        "order_item_id": 40000331,
        "order_id": 4000033,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000033B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 4000034,
    "order_number": "LAZ-NEW-4000034",
    "created_at": "2026-09-03 20:11:17",
    "updated_at": "2026-09-03 21:30:17",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1450000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000341,
        "order_id": 4000034,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLU",
        "item_price": 1450000,
        "paid_price": 1450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000034B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 4000035,
    "order_number": "LAZ-NEW-4000035",
    "created_at": "2026-09-03 04:53:25",
    "updated_at": "2026-09-03 06:11:25",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5095000",
    "items_count": 2,
    "payment_method": "Credit Card",
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
        "order_item_id": 40000351,
        "order_id": 4000035,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000035B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 40000352,
        "order_id": 4000035,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000035C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000036,
    "order_number": "LAZ-NEW-4000036",
    "created_at": "2026-09-03 10:53:26",
    "updated_at": "2026-09-03 11:46:26",
    "statuses": [
      "unpaid"
    ],
    "price": "840000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 40000361,
        "order_id": 4000036,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 840000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000036B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 4000037,
    "order_number": "LAZ-NEW-4000037",
    "created_at": "2026-09-03 17:46:05",
    "updated_at": "2026-09-03 20:02:05",
    "statuses": [
      "pending"
    ],
    "price": "2715000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
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
        "order_item_id": 40000371,
        "order_id": 4000037,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-WHT",
        "item_price": 1450000,
        "paid_price": 1400000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000037B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 40000372,
        "order_id": 4000037,
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
        "status": "pending",
        "tracking_code": "LEXVN4000037C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000038,
    "order_number": "LAZ-NEW-4000038",
    "created_at": "2026-09-03 16:49:55",
    "updated_at": "2026-09-03 17:25:55",
    "statuses": [
      "unpaid"
    ],
    "price": "1650000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000381,
        "order_id": 4000038,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000038B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000039,
    "order_number": "LAZ-NEW-4000039",
    "created_at": "2026-09-03 11:41:58",
    "updated_at": "2026-09-03 12:10:58",
    "statuses": [
      "unpaid"
    ],
    "price": "2485000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 40000,
    "voucher_platform": 0,
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
        "order_item_id": 40000391,
        "order_id": 4000039,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000039B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 40000392,
        "order_id": 4000039,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLK",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000039C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000040,
    "order_number": "LAZ-NEW-4000040",
    "created_at": "2026-09-03 03:44:02",
    "updated_at": "2026-09-03 05:35:02",
    "statuses": [
      "unpaid"
    ],
    "price": "1305000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
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
        "order_item_id": 40000401,
        "order_id": 4000040,
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
        "tracking_code": "LEXVN4000040B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000041,
    "order_number": "LAZ-NEW-4000041",
    "created_at": "2026-09-03 12:34:11",
    "updated_at": "2026-09-03 14:35:11",
    "statuses": [
      "unpaid"
    ],
    "price": "31965000",
    "items_count": 2,
    "payment_method": "COD",
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
        "order_item_id": 40000411,
        "order_id": 4000041,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000041B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 40000412,
        "order_id": 4000041,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000041C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 4000042,
    "order_number": "LAZ-NEW-4000042",
    "created_at": "2026-09-03 04:32:21",
    "updated_at": "2026-09-03 06:22:21",
    "statuses": [
      "pending"
    ],
    "price": "525000",
    "items_count": 1,
    "payment_method": "COD",
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
        "order_item_id": 40000421,
        "order_id": 4000042,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLU",
        "item_price": 520000,
        "paid_price": 490000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000042B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 4000043,
    "order_number": "LAZ-NEW-4000043",
    "created_at": "2026-09-03 03:13:02",
    "updated_at": "2026-09-03 04:12:02",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5515000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
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
        "order_item_id": 40000431,
        "order_id": 4000043,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000043B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000044,
    "order_number": "LAZ-NEW-4000044",
    "created_at": "2026-09-03 13:25:49",
    "updated_at": "2026-09-03 15:12:49",
    "statuses": [
      "pending"
    ],
    "price": "945000",
    "items_count": 1,
    "payment_method": "COD",
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
        "order_item_id": 40000441,
        "order_id": 4000044,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000044B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000045,
    "order_number": "LAZ-NEW-4000045",
    "created_at": "2026-09-03 23:35:34",
    "updated_at": "2026-09-04 01:46:34",
    "statuses": [
      "unpaid"
    ],
    "price": "1850000",
    "items_count": 1,
    "payment_method": "Momo",
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
        "order_item_id": 40000451,
        "order_id": 4000045,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000045B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000046,
    "order_number": "LAZ-NEW-4000046",
    "created_at": "2026-09-03 22:12:23",
    "updated_at": "2026-09-04 00:44:23",
    "statuses": [
      "pending"
    ],
    "price": "920000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 40000461,
        "order_id": 4000046,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000046B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000047,
    "order_number": "LAZ-NEW-4000047",
    "created_at": "2026-09-03 11:03:26",
    "updated_at": "2026-09-03 11:22:26",
    "statuses": [
      "pending"
    ],
    "price": "885000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
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
        "order_item_id": 40000471,
        "order_id": 4000047,
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
        "status": "pending",
        "tracking_code": "LEXVN4000047B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 4000048,
    "order_number": "LAZ-NEW-4000048",
    "created_at": "2026-09-03 11:28:10",
    "updated_at": "2026-09-03 14:19:10",
    "statuses": [
      "unpaid"
    ],
    "price": "6125000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
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
        "order_item_id": 40000481,
        "order_id": 4000048,
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
        "tracking_code": "LEXVN4000048B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 40000482,
        "order_id": 4000048,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLK",
        "item_price": 5490000,
        "paid_price": 5440000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000048C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000049,
    "order_number": "LAZ-NEW-4000049",
    "created_at": "2026-09-03 16:28:51",
    "updated_at": "2026-09-03 18:29:51",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5650000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
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
        "order_item_id": 40000491,
        "order_id": 4000049,
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
        "tracking_code": "LEXVN4000049B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 40000492,
        "order_id": 4000049,
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
        "tracking_code": "LEXVN4000049C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000050,
    "order_number": "LAZ-NEW-4000050",
    "created_at": "2026-09-03 07:51:45",
    "updated_at": "2026-09-03 10:37:45",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1465000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
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
        "order_item_id": 40000501,
        "order_id": 4000050,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000050B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 40000502,
        "order_id": 4000050,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000050C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000051,
    "order_number": "LAZ-NEW-4000051",
    "created_at": "2026-09-03 09:59:07",
    "updated_at": "2026-09-03 10:09:07",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2045000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 35000,
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
        "order_item_id": 40000511,
        "order_id": 4000051,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000051B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 40000512,
        "order_id": 4000051,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000051C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000052,
    "order_number": "LAZ-NEW-4000052",
    "created_at": "2026-09-03 15:38:34",
    "updated_at": "2026-09-03 16:04:34",
    "statuses": [
      "unpaid"
    ],
    "price": "1875000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
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
        "order_item_id": 40000521,
        "order_id": 4000052,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000052B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000053,
    "order_number": "LAZ-NEW-4000053",
    "created_at": "2026-09-03 03:33:10",
    "updated_at": "2026-09-03 04:41:10",
    "statuses": [
      "pending"
    ],
    "price": "1615000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000531,
        "order_id": 4000053,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000053B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 40000532,
        "order_id": 4000053,
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
        "status": "pending",
        "tracking_code": "LEXVN4000053C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000054,
    "order_number": "LAZ-NEW-4000054",
    "created_at": "2026-09-03 16:52:30",
    "updated_at": "2026-09-03 18:35:30",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1800000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
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
        "order_item_id": 40000541,
        "order_id": 4000054,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1800000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000054B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000055,
    "order_number": "LAZ-NEW-4000055",
    "created_at": "2026-09-03 18:36:26",
    "updated_at": "2026-09-03 20:25:26",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "985000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
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
        "order_item_id": 40000551,
        "order_id": 4000055,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-GRY",
        "item_price": 950000,
        "paid_price": 950000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000055B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000056,
    "order_number": "LAZ-NEW-4000056",
    "created_at": "2026-09-03 18:12:14",
    "updated_at": "2026-09-03 19:16:14",
    "statuses": [
      "pending"
    ],
    "price": "2075000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000561,
        "order_id": 4000056,
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
        "status": "pending",
        "tracking_code": "LEXVN4000056B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 40000562,
        "order_id": 4000056,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-GRY",
        "item_price": 790000,
        "paid_price": 760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000056C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 4000057,
    "order_number": "LAZ-NEW-4000057",
    "created_at": "2026-09-03 21:58:55",
    "updated_at": "2026-09-04 00:36:55",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2420000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
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
        "order_item_id": 40000571,
        "order_id": 4000057,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000057B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 40000572,
        "order_id": 4000057,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-WHT",
        "item_price": 1790000,
        "paid_price": 1790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000057C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 4000058,
    "order_number": "LAZ-NEW-4000058",
    "created_at": "2026-09-03 03:31:58",
    "updated_at": "2026-09-03 05:07:58",
    "statuses": [
      "pending"
    ],
    "price": "355000",
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
        "order_item_id": 40000581,
        "order_id": 4000058,
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
        "status": "pending",
        "tracking_code": "LEXVN4000058B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 4000059,
    "order_number": "LAZ-NEW-4000059",
    "created_at": "2026-09-03 08:40:55",
    "updated_at": "2026-09-03 09:16:55",
    "statuses": [
      "unpaid"
    ],
    "price": "265000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000591,
        "order_id": 4000059,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000059B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 4000060,
    "order_number": "LAZ-NEW-4000060",
    "created_at": "2026-09-03 06:13:33",
    "updated_at": "2026-09-03 08:25:33",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "665000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
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
        "order_item_id": 40000601,
        "order_id": 4000060,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000060B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000061,
    "order_number": "LAZ-NEW-4000061",
    "created_at": "2026-09-03 21:37:21",
    "updated_at": "2026-09-03 21:49:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1965000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
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
        "order_item_id": 40000611,
        "order_id": 4000061,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000061B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 40000612,
        "order_id": 4000061,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000061C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000062,
    "order_number": "LAZ-NEW-4000062",
    "created_at": "2026-09-04 00:14:10",
    "updated_at": "2026-09-04 01:48:10",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "10960000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 40000621,
        "order_id": 4000062,
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
        "tracking_code": "LEXVN4000062B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 40000622,
        "order_id": 4000062,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000062C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000063,
    "order_number": "LAZ-NEW-4000063",
    "created_at": "2026-09-03 09:55:07",
    "updated_at": "2026-09-03 11:57:07",
    "statuses": [
      "pending"
    ],
    "price": "785000",
    "items_count": 2,
    "payment_method": "Credit Card",
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
        "order_item_id": 40000631,
        "order_id": 4000063,
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
        "status": "pending",
        "tracking_code": "LEXVN4000063B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 40000632,
        "order_id": 4000063,
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
        "status": "pending",
        "tracking_code": "LEXVN4000063C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000064,
    "order_number": "LAZ-NEW-4000064",
    "created_at": "2026-09-03 03:03:22",
    "updated_at": "2026-09-03 03:17:22",
    "statuses": [
      "unpaid"
    ],
    "price": "6355000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
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
        "order_item_id": 40000641,
        "order_id": 4000064,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-SLV",
        "item_price": 890000,
        "paid_price": 870000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000064B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      },
      {
        "order_item_id": 40000642,
        "order_id": 4000064,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 5470000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000064C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000065,
    "order_number": "LAZ-NEW-4000065",
    "created_at": "2026-09-03 15:10:52",
    "updated_at": "2026-09-03 18:06:52",
    "statuses": [
      "unpaid"
    ],
    "price": "500000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
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
        "order_item_id": 40000651,
        "order_id": 4000065,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000065B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 4000066,
    "order_number": "LAZ-NEW-4000066",
    "created_at": "2026-09-03 17:47:50",
    "updated_at": "2026-09-03 19:00:50",
    "statuses": [
      "unpaid"
    ],
    "price": "875000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
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
        "order_item_id": 40000661,
        "order_id": 4000066,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-SLV",
        "item_price": 890000,
        "paid_price": 860000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000066B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 4000067,
    "order_number": "LAZ-NEW-4000067",
    "created_at": "2026-09-03 02:17:35",
    "updated_at": "2026-09-03 04:58:35",
    "statuses": [
      "pending"
    ],
    "price": "1275000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000671,
        "order_id": 4000067,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 1240000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000067B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000068,
    "order_number": "LAZ-NEW-4000068",
    "created_at": "2026-09-03 08:42:35",
    "updated_at": "2026-09-03 09:25:35",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2410000",
    "items_count": 2,
    "payment_method": "ShopeePay",
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
        "order_item_id": 40000681,
        "order_id": 4000068,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000068B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 40000682,
        "order_id": 4000068,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000068C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000069,
    "order_number": "LAZ-NEW-4000069",
    "created_at": "2026-09-03 16:29:02",
    "updated_at": "2026-09-03 16:56:02",
    "statuses": [
      "pending"
    ],
    "price": "2535000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
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
        "order_item_id": 40000691,
        "order_id": 4000069,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000069B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 40000692,
        "order_id": 4000069,
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
        "status": "pending",
        "tracking_code": "LEXVN4000069C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000070,
    "order_number": "LAZ-NEW-4000070",
    "created_at": "2026-09-04 00:36:39",
    "updated_at": "2026-09-04 01:29:39",
    "statuses": [
      "unpaid"
    ],
    "price": "965000",
    "items_count": 1,
    "payment_method": "ShopeePay",
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
        "order_item_id": 40000701,
        "order_id": 4000070,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 930000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000070B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000071,
    "order_number": "LAZ-NEW-4000071",
    "created_at": "2026-09-03 11:53:01",
    "updated_at": "2026-09-03 13:05:01",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1355000",
    "items_count": 2,
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
        "order_item_id": 40000711,
        "order_id": 4000071,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 530000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000071B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 40000712,
        "order_id": 4000071,
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
        "tracking_code": "LEXVN4000071C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 4000072,
    "order_number": "LAZ-NEW-4000072",
    "created_at": "2026-09-03 19:50:21",
    "updated_at": "2026-09-03 22:24:21",
    "statuses": [
      "pending"
    ],
    "price": "1295000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
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
        "order_item_id": 40000721,
        "order_id": 4000072,
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
        "status": "pending",
        "tracking_code": "LEXVN4000072B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000073,
    "order_number": "LAZ-NEW-4000073",
    "created_at": "2026-09-03 14:16:28",
    "updated_at": "2026-09-03 15:16:28",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "605000",
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
        "order_item_id": 40000731,
        "order_id": 4000073,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000073B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000074,
    "order_number": "LAZ-NEW-4000074",
    "created_at": "2026-09-03 12:19:04",
    "updated_at": "2026-09-03 12:32:04",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1305000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
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
        "order_item_id": 40000741,
        "order_id": 4000074,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000074B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000075,
    "order_number": "LAZ-NEW-4000075",
    "created_at": "2026-09-03 20:27:39",
    "updated_at": "2026-09-03 21:03:39",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1295000",
    "items_count": 1,
    "payment_method": "COD",
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
        "order_item_id": 40000751,
        "order_id": 4000075,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000075B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000076,
    "order_number": "LAZ-NEW-4000076",
    "created_at": "2026-09-03 02:29:41",
    "updated_at": "2026-09-03 03:36:41",
    "statuses": [
      "unpaid"
    ],
    "price": "165000",
    "items_count": 1,
    "payment_method": "Momo",
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
        "order_item_id": 40000761,
        "order_id": 4000076,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000076B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000077,
    "order_number": "LAZ-NEW-4000077",
    "created_at": "2026-09-03 23:41:50",
    "updated_at": "2026-09-04 00:10:50",
    "statuses": [
      "pending"
    ],
    "price": "965000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000771,
        "order_id": 4000077,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 930000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000077B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 4000078,
    "order_number": "LAZ-NEW-4000078",
    "created_at": "2026-09-03 07:58:03",
    "updated_at": "2026-09-03 10:29:03",
    "statuses": [
      "pending"
    ],
    "price": "28505000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
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
        "order_item_id": 40000781,
        "order_id": 4000078,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-GRY",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "pending",
        "tracking_code": "LEXVN4000078B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 4000079,
    "order_number": "LAZ-NEW-4000079",
    "created_at": "2026-09-03 14:04:23",
    "updated_at": "2026-09-03 14:20:23",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2655000",
    "items_count": 2,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000791,
        "order_id": 4000079,
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
        "tracking_code": "LEXVN4000079B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 40000792,
        "order_id": 4000079,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1850000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000079C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 4000080,
    "order_number": "LAZ-NEW-4000080",
    "created_at": "2026-09-03 12:33:20",
    "updated_at": "2026-09-03 15:11:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4205000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
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
        "order_item_id": 40000801,
        "order_id": 4000080,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000080B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 4000081,
    "order_number": "LAZ-NEW-4000081",
    "created_at": "2026-09-03 23:21:54",
    "updated_at": "2026-09-04 01:52:54",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1290000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 40000811,
        "order_id": 4000081,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000081B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 4000082,
    "order_number": "LAZ-NEW-4000082",
    "created_at": "2026-09-03 21:52:12",
    "updated_at": "2026-09-03 23:51:12",
    "statuses": [
      "pending"
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
        "order_item_id": 40000821,
        "order_id": 4000082,
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
        "status": "pending",
        "tracking_code": "LEXVN4000082B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 4000083,
    "order_number": "LAZ-NEW-4000083",
    "created_at": "2026-09-03 08:47:48",
    "updated_at": "2026-09-03 10:53:48",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "200000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 40000831,
        "order_id": 4000083,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000083B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 4000084,
    "order_number": "LAZ-NEW-4000084",
    "created_at": "2026-09-03 16:26:38",
    "updated_at": "2026-09-03 17:39:38",
    "statuses": [
      "pending"
    ],
    "price": "630000",
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
        "order_item_id": 40000841,
        "order_id": 4000084,
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
        "status": "pending",
        "tracking_code": "LEXVN4000084B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000085,
    "order_number": "LAZ-NEW-4000085",
    "created_at": "2026-09-03 06:54:27",
    "updated_at": "2026-09-03 09:38:27",
    "statuses": [
      "unpaid"
    ],
    "price": "1675000",
    "items_count": 1,
    "payment_method": "COD",
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
        "order_item_id": 40000851,
        "order_id": 4000085,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000085B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000086,
    "order_number": "LAZ-NEW-4000086",
    "created_at": "2026-09-03 20:15:50",
    "updated_at": "2026-09-03 22:05:50",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1475000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
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
        "order_item_id": 40000861,
        "order_id": 4000086,
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
        "tracking_code": "LEXVN4000086B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 4000087,
    "order_number": "LAZ-NEW-4000087",
    "created_at": "2026-09-03 07:20:24",
    "updated_at": "2026-09-03 10:19:24",
    "statuses": [
      "unpaid"
    ],
    "price": "6800000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
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
        "order_item_id": 40000871,
        "order_id": 4000087,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000087B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 4000088,
    "order_number": "LAZ-NEW-4000088",
    "created_at": "2026-09-03 03:49:08",
    "updated_at": "2026-09-03 06:49:08",
    "statuses": [
      "unpaid"
    ],
    "price": "185000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 40000881,
        "order_id": 4000088,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000088B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 4000089,
    "order_number": "LAZ-NEW-4000089",
    "created_at": "2026-09-03 18:33:59",
    "updated_at": "2026-09-03 19:30:59",
    "statuses": [
      "unpaid"
    ],
    "price": "5220000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000891,
        "order_id": 4000089,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000089B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 40000892,
        "order_id": 4000089,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000089C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 4000090,
    "order_number": "LAZ-NEW-4000090",
    "created_at": "2026-09-03 05:25:10",
    "updated_at": "2026-09-03 06:30:10",
    "statuses": [
      "unpaid"
    ],
    "price": "635000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
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
        "order_item_id": 40000901,
        "order_id": 4000090,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000090B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 4000091,
    "order_number": "LAZ-NEW-4000091",
    "created_at": "2026-09-03 06:49:17",
    "updated_at": "2026-09-03 08:20:17",
    "statuses": [
      "unpaid"
    ],
    "price": "3255000",
    "items_count": 3,
    "payment_method": "COD",
    "shipping_fee": 35000,
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
        "order_item_id": 40000911,
        "order_id": 4000091,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000091B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 40000912,
        "order_id": 4000091,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000091C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 40000913,
        "order_id": 4000091,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000091D",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000092,
    "order_number": "LAZ-NEW-4000092",
    "created_at": "2026-09-03 12:44:25",
    "updated_at": "2026-09-03 15:24:25",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1635000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000921,
        "order_id": 4000092,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000092B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 4000093,
    "order_number": "LAZ-NEW-4000093",
    "created_at": "2026-09-03 23:47:02",
    "updated_at": "2026-09-04 00:20:02",
    "statuses": [
      "unpaid"
    ],
    "price": "805000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 40000931,
        "order_id": 4000093,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000093B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 4000094,
    "order_number": "LAZ-NEW-4000094",
    "created_at": "2026-09-03 09:12:27",
    "updated_at": "2026-09-03 12:09:27",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "335000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
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
        "order_item_id": 40000941,
        "order_id": 4000094,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000094B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 4000095,
    "order_number": "LAZ-NEW-4000095",
    "created_at": "2026-09-03 15:11:22",
    "updated_at": "2026-09-03 15:48:22",
    "statuses": [
      "pending"
    ],
    "price": "4200000",
    "items_count": 1,
    "payment_method": "ShopeePay",
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
        "order_item_id": 40000951,
        "order_id": 4000095,
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
        "status": "pending",
        "tracking_code": "LEXVN4000095B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 4000096,
    "order_number": "LAZ-NEW-4000096",
    "created_at": "2026-09-03 02:51:48",
    "updated_at": "2026-09-03 05:46:48",
    "statuses": [
      "pending"
    ],
    "price": "1435000",
    "items_count": 1,
    "payment_method": "Momo",
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
        "order_item_id": 40000961,
        "order_id": 4000096,
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
        "status": "pending",
        "tracking_code": "LEXVN4000096B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 4000097,
    "order_number": "LAZ-NEW-4000097",
    "created_at": "2026-09-03 21:58:54",
    "updated_at": "2026-09-03 22:20:54",
    "statuses": [
      "unpaid"
    ],
    "price": "585000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
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
        "order_item_id": 40000971,
        "order_id": 4000097,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 550000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000097B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 4000098,
    "order_number": "LAZ-NEW-4000098",
    "created_at": "2026-09-03 10:17:29",
    "updated_at": "2026-09-03 11:14:29",
    "statuses": [
      "unpaid"
    ],
    "price": "755000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 40000981,
        "order_id": 4000098,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLU",
        "item_price": 790000,
        "paid_price": 740000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "unpaid",
        "tracking_code": "LEXVN4000098B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 4000099,
    "order_number": "LAZ-NEW-4000099",
    "created_at": "2026-09-03 14:06:07",
    "updated_at": "2026-09-03 15:39:07",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "28500000",
    "items_count": 1,
    "payment_method": "Credit Card",
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
        "order_item_id": 40000991,
        "order_id": 4000099,
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
        "status": "ready_to_ship",
        "tracking_code": "LEXVN4000099B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 4000100,
    "order_number": "LAZ-NEW-4000100",
    "created_at": "2026-09-03 07:56:44",
    "updated_at": "2026-09-03 09:23:44",
    "statuses": [
      "unpaid"
    ],
    "price": "195000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
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
        "order_item_id": 40001001,
        "order_id": 4000100,
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
        "status": "unpaid",
        "tracking_code": "LEXVN4000100B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  }
];

export const freshOrdersSeedProfile: SeedProfile = {
  key: 'fresh_orders',
  name: 'Real-time Fresh Inbound Orders (100 Orders)',
  description: 'Tập dữ liệu 100 đơn hàng mới tạo trong vòng 24 giờ qua phục vụ test luồng Polling và Sync tức thời.',
  orders: freshOrders,
};
