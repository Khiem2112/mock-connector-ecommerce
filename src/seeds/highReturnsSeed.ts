import type { LazadaOrderDTO, SeedProfile } from './types.js';

export const highReturnsOrders: LazadaOrderDTO[] = [
  {
    "order_id": 3000001,
    "order_number": "LAZ-RET-3000001",
    "created_at": "2026-08-21 19:32:57",
    "updated_at": "2026-08-21 22:11:57",
    "statuses": [
      "failed"
    ],
    "price": "6305000",
    "items_count": 2,
    "payment_method": "ShopeePay",
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
        "order_item_id": 30000011,
        "order_id": 3000001,
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
        "status": "failed",
        "tracking_code": "LEXVN3000001B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 30000012,
        "order_id": 3000001,
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
        "status": "failed",
        "tracking_code": "LEXVN3000001C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 3000002,
    "order_number": "LAZ-RET-3000002",
    "created_at": "2026-08-12 18:47:20",
    "updated_at": "2026-08-12 19:00:20",
    "statuses": [
      "canceled"
    ],
    "price": "3475000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000021,
        "order_id": 3000002,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000002B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000003,
    "order_number": "LAZ-RET-3000003",
    "created_at": "2026-08-11 00:23:54",
    "updated_at": "2026-08-11 02:20:54",
    "statuses": [
      "canceled"
    ],
    "price": "6800000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000031,
        "order_id": 3000003,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000003B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000004,
    "order_number": "LAZ-RET-3000004",
    "created_at": "2026-09-01 11:23:45",
    "updated_at": "2026-09-01 13:17:45",
    "statuses": [
      "canceled"
    ],
    "price": "29285000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000041,
        "order_id": 3000004,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000004B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000042,
        "order_id": 3000004,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000004C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000005,
    "order_number": "LAZ-RET-3000005",
    "created_at": "2026-08-27 11:50:01",
    "updated_at": "2026-08-27 13:10:01",
    "statuses": [
      "failed"
    ],
    "price": "915000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 30000051,
        "order_id": 3000005,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 900000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000005B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 3000006,
    "order_number": "LAZ-RET-3000006",
    "created_at": "2026-08-30 21:25:32",
    "updated_at": "2026-08-30 22:52:32",
    "statuses": [
      "failed"
    ],
    "price": "7355000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
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
        "order_item_id": 30000061,
        "order_id": 3000006,
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
        "status": "failed",
        "tracking_code": "LEXVN3000006B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 30000062,
        "order_id": 3000006,
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
        "status": "failed",
        "tracking_code": "LEXVN3000006C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 3000007,
    "order_number": "LAZ-RET-3000007",
    "created_at": "2026-08-27 07:48:16",
    "updated_at": "2026-08-27 09:23:16",
    "statuses": [
      "canceled"
    ],
    "price": "915000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
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
        "order_item_id": 30000071,
        "order_id": 3000007,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000007B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000008,
    "order_number": "LAZ-RET-3000008",
    "created_at": "2026-09-01 02:07:59",
    "updated_at": "2026-09-01 04:55:59",
    "statuses": [
      "canceled"
    ],
    "price": "4235000",
    "items_count": 1,
    "payment_method": "Momo",
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
        "order_item_id": 30000081,
        "order_id": 3000008,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000008B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000009,
    "order_number": "LAZ-RET-3000009",
    "created_at": "2026-08-17 23:59:07",
    "updated_at": "2026-08-18 02:50:07",
    "statuses": [
      "returned"
    ],
    "price": "6815000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30000091,
        "order_id": 3000009,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-WHT",
        "item_price": 6800000,
        "paid_price": 6780000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000009B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000010,
    "order_number": "LAZ-RET-3000010",
    "created_at": "2026-08-20 20:58:34",
    "updated_at": "2026-08-20 23:19:34",
    "statuses": [
      "canceled"
    ],
    "price": "4080000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000101,
        "order_id": 3000010,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000010B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000102,
        "order_id": 3000010,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000010C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000011,
    "order_number": "LAZ-RET-3000011",
    "created_at": "2026-08-08 07:23:56",
    "updated_at": "2026-08-08 09:41:56",
    "statuses": [
      "returned"
    ],
    "price": "665000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30000111,
        "order_id": 3000011,
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
        "tracking_code": "LEXVN3000011B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000012,
    "order_number": "LAZ-RET-3000012",
    "created_at": "2026-08-17 18:37:25",
    "updated_at": "2026-08-17 19:55:25",
    "statuses": [
      "returned"
    ],
    "price": "975000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000121,
        "order_id": 3000012,
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
        "status": "returned",
        "tracking_code": "LEXVN3000012B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000013,
    "order_number": "LAZ-RET-3000013",
    "created_at": "2026-08-30 00:27:02",
    "updated_at": "2026-08-30 02:34:02",
    "statuses": [
      "failed"
    ],
    "price": "150000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
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
        "order_item_id": 30000131,
        "order_id": 3000013,
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
        "status": "failed",
        "tracking_code": "LEXVN3000013B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 3000014,
    "order_number": "LAZ-RET-3000014",
    "created_at": "2026-09-01 10:32:27",
    "updated_at": "2026-09-01 13:20:27",
    "statuses": [
      "returned"
    ],
    "price": "935000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 30000141,
        "order_id": 3000014,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000014B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Received wrong color / variation"
      },
      {
        "order_item_id": 30000142,
        "order_id": 3000014,
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
        "status": "returned",
        "tracking_code": "LEXVN3000014C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000015,
    "order_number": "LAZ-RET-3000015",
    "created_at": "2026-08-19 09:12:00",
    "updated_at": "2026-08-19 10:46:00",
    "statuses": [
      "returned"
    ],
    "price": "2205000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000151,
        "order_id": 3000015,
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
        "status": "returned",
        "tracking_code": "LEXVN3000015B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Damaged packaging during shipping"
      },
      {
        "order_item_id": 30000152,
        "order_id": 3000015,
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
        "status": "returned",
        "tracking_code": "LEXVN3000015C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000016,
    "order_number": "LAZ-RET-3000016",
    "created_at": "2026-08-06 10:42:39",
    "updated_at": "2026-08-06 12:24:39",
    "statuses": [
      "returned"
    ],
    "price": "3695000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30000161,
        "order_id": 3000016,
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
        "status": "returned",
        "tracking_code": "LEXVN3000016B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 30000162,
        "order_id": 3000016,
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
        "status": "returned",
        "tracking_code": "LEXVN3000016C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000017,
    "order_number": "LAZ-RET-3000017",
    "created_at": "2026-08-20 16:41:34",
    "updated_at": "2026-08-20 17:10:34",
    "statuses": [
      "returned"
    ],
    "price": "5490000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
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
        "order_item_id": 30000171,
        "order_id": 3000017,
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
        "status": "returned",
        "tracking_code": "LEXVN3000017B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000018,
    "order_number": "LAZ-RET-3000018",
    "created_at": "2026-08-11 07:43:49",
    "updated_at": "2026-08-11 07:58:49",
    "statuses": [
      "canceled"
    ],
    "price": "985000",
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
        "order_item_id": 30000181,
        "order_id": 3000018,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000018B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000019,
    "order_number": "LAZ-RET-3000019",
    "created_at": "2026-08-11 14:19:04",
    "updated_at": "2026-08-11 16:55:04",
    "statuses": [
      "failed"
    ],
    "price": "1855000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 30000191,
        "order_id": 3000019,
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
        "status": "failed",
        "tracking_code": "LEXVN3000019B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 30000192,
        "order_id": 3000019,
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
        "status": "failed",
        "tracking_code": "LEXVN3000019C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 3000020,
    "order_number": "LAZ-RET-3000020",
    "created_at": "2026-08-19 09:45:21",
    "updated_at": "2026-08-19 10:01:21",
    "statuses": [
      "canceled"
    ],
    "price": "915000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000201,
        "order_id": 3000020,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000020B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000021,
    "order_number": "LAZ-RET-3000021",
    "created_at": "2026-08-30 04:54:17",
    "updated_at": "2026-08-30 06:54:17",
    "statuses": [
      "failed"
    ],
    "price": "4180000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
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
        "order_item_id": 30000211,
        "order_id": 3000021,
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
        "status": "failed",
        "tracking_code": "LEXVN3000021B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 3000022,
    "order_number": "LAZ-RET-3000022",
    "created_at": "2026-08-06 22:40:04",
    "updated_at": "2026-08-06 23:40:04",
    "statuses": [
      "failed"
    ],
    "price": "4315000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
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
        "order_item_id": 30000221,
        "order_id": 3000022,
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
        "status": "failed",
        "tracking_code": "LEXVN3000022B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 30000222,
        "order_id": 3000022,
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
        "status": "failed",
        "tracking_code": "LEXVN3000022C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 3000023,
    "order_number": "LAZ-RET-3000023",
    "created_at": "2026-09-02 22:10:44",
    "updated_at": "2026-09-03 00:50:44",
    "statuses": [
      "returned"
    ],
    "price": "615000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000231,
        "order_id": 3000023,
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
        "status": "returned",
        "tracking_code": "LEXVN3000023B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000024,
    "order_number": "LAZ-RET-3000024",
    "created_at": "2026-08-08 12:46:23",
    "updated_at": "2026-08-08 14:26:23",
    "statuses": [
      "failed"
    ],
    "price": "4200000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30000241,
        "order_id": 3000024,
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
        "status": "failed",
        "tracking_code": "LEXVN3000024B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 3000025,
    "order_number": "LAZ-RET-3000025",
    "created_at": "2026-08-27 00:23:39",
    "updated_at": "2026-08-27 01:23:39",
    "statuses": [
      "returned"
    ],
    "price": "3455000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30000251,
        "order_id": 3000025,
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
        "status": "returned",
        "tracking_code": "LEXVN3000025B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000026,
    "order_number": "LAZ-RET-3000026",
    "created_at": "2026-08-11 19:36:36",
    "updated_at": "2026-08-11 21:50:36",
    "statuses": [
      "failed"
    ],
    "price": "1455000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
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
        "order_item_id": 30000261,
        "order_id": 3000026,
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
        "status": "failed",
        "tracking_code": "LEXVN3000026B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000027,
    "order_number": "LAZ-RET-3000027",
    "created_at": "2026-08-22 10:46:07",
    "updated_at": "2026-08-22 13:30:07",
    "statuses": [
      "canceled"
    ],
    "price": "4215000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000271,
        "order_id": 3000027,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000027B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000028,
    "order_number": "LAZ-RET-3000028",
    "created_at": "2026-08-18 05:35:47",
    "updated_at": "2026-08-18 07:40:47",
    "statuses": [
      "canceled"
    ],
    "price": "180000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000281,
        "order_id": 3000028,
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
        "tracking_code": "LEXVN3000028B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000029,
    "order_number": "LAZ-RET-3000029",
    "created_at": "2026-08-09 00:19:48",
    "updated_at": "2026-08-09 02:20:48",
    "statuses": [
      "canceled"
    ],
    "price": "3455000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000291,
        "order_id": 3000029,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000029B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000030,
    "order_number": "LAZ-RET-3000030",
    "created_at": "2026-08-05 18:26:37",
    "updated_at": "2026-08-05 18:36:37",
    "statuses": [
      "returned"
    ],
    "price": "5465000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 30000301,
        "order_id": 3000030,
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
        "status": "returned",
        "tracking_code": "LEXVN3000030B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30000302,
        "order_id": 3000030,
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
        "status": "returned",
        "tracking_code": "LEXVN3000030C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000031,
    "order_number": "LAZ-RET-3000031",
    "created_at": "2026-08-23 03:48:34",
    "updated_at": "2026-08-23 04:57:34",
    "statuses": [
      "returned"
    ],
    "price": "1420000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000311,
        "order_id": 3000031,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000031B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000032,
    "order_number": "LAZ-RET-3000032",
    "created_at": "2026-08-12 21:23:40",
    "updated_at": "2026-08-12 21:46:40",
    "statuses": [
      "canceled"
    ],
    "price": "750000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000321,
        "order_id": 3000032,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000032B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000033,
    "order_number": "LAZ-RET-3000033",
    "created_at": "2026-08-10 19:04:42",
    "updated_at": "2026-08-10 20:39:42",
    "statuses": [
      "failed"
    ],
    "price": "4435000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
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
        "order_item_id": 30000331,
        "order_id": 3000033,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 3450000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000033B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 30000332,
        "order_id": 3000033,
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
        "status": "failed",
        "tracking_code": "LEXVN3000033C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 3000034,
    "order_number": "LAZ-RET-3000034",
    "created_at": "2026-08-19 02:29:13",
    "updated_at": "2026-08-19 03:33:13",
    "statuses": [
      "canceled"
    ],
    "price": "1685000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000341,
        "order_id": 3000034,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000034B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000035,
    "order_number": "LAZ-RET-3000035",
    "created_at": "2026-08-31 07:05:58",
    "updated_at": "2026-08-31 07:50:58",
    "statuses": [
      "failed"
    ],
    "price": "1450000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 30000351,
        "order_id": 3000035,
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
        "status": "failed",
        "tracking_code": "LEXVN3000035B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000036,
    "order_number": "LAZ-RET-3000036",
    "created_at": "2026-08-06 21:52:54",
    "updated_at": "2026-08-06 22:15:54",
    "statuses": [
      "returned"
    ],
    "price": "8785000",
    "items_count": 3,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000361,
        "order_id": 3000036,
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
        "status": "returned",
        "tracking_code": "LEXVN3000036B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30000362,
        "order_id": 3000036,
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
        "status": "returned",
        "tracking_code": "LEXVN3000036C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Received wrong color / variation"
      },
      {
        "order_item_id": 30000363,
        "order_id": 3000036,
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
        "status": "returned",
        "tracking_code": "LEXVN3000036D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000037,
    "order_number": "LAZ-RET-3000037",
    "created_at": "2026-08-08 13:39:50",
    "updated_at": "2026-08-08 16:39:50",
    "statuses": [
      "returned"
    ],
    "price": "5640000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000371,
        "order_id": 3000037,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5460000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000037B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        "reason": "Damaged packaging during shipping"
      },
      {
        "order_item_id": 30000372,
        "order_id": 3000037,
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
        "status": "returned",
        "tracking_code": "LEXVN3000037C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000038,
    "order_number": "LAZ-RET-3000038",
    "created_at": "2026-08-30 02:51:27",
    "updated_at": "2026-08-30 04:09:27",
    "statuses": [
      "returned"
    ],
    "price": "1685000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000381,
        "order_id": 3000038,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLU",
        "item_price": 1650000,
        "paid_price": 1650000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000038B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000039,
    "order_number": "LAZ-RET-3000039",
    "created_at": "2026-08-20 11:37:11",
    "updated_at": "2026-08-20 12:51:11",
    "statuses": [
      "failed"
    ],
    "price": "1450000",
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
        "order_item_id": 30000391,
        "order_id": 3000039,
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
        "status": "failed",
        "tracking_code": "LEXVN3000039B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000040,
    "order_number": "LAZ-RET-3000040",
    "created_at": "2026-08-19 08:39:11",
    "updated_at": "2026-08-19 09:36:11",
    "statuses": [
      "canceled"
    ],
    "price": "5490000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000401,
        "order_id": 3000040,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000040B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000041,
    "order_number": "LAZ-RET-3000041",
    "created_at": "2026-09-03 13:08:45",
    "updated_at": "2026-09-03 14:43:45",
    "statuses": [
      "canceled"
    ],
    "price": "345000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30000411,
        "order_id": 3000041,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 320000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000041B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000042,
    "order_number": "LAZ-RET-3000042",
    "created_at": "2026-09-02 13:42:23",
    "updated_at": "2026-09-02 14:36:23",
    "statuses": [
      "canceled"
    ],
    "price": "955000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000421,
        "order_id": 3000042,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000042B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Found cheaper alternative elsewhere"
      },
      {
        "order_item_id": 30000422,
        "order_id": 3000042,
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
        "tracking_code": "LEXVN3000042C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000043,
    "order_number": "LAZ-RET-3000043",
    "created_at": "2026-08-23 14:38:07",
    "updated_at": "2026-08-23 16:54:07",
    "statuses": [
      "returned"
    ],
    "price": "320000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000431,
        "order_id": 3000043,
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
        "status": "returned",
        "tracking_code": "LEXVN3000043B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000044,
    "order_number": "LAZ-RET-3000044",
    "created_at": "2026-08-14 08:41:59",
    "updated_at": "2026-08-14 11:10:59",
    "statuses": [
      "failed"
    ],
    "price": "735000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 30000441,
        "order_id": 3000044,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-WHT",
        "item_price": 750000,
        "paid_price": 720000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000044B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 3000045,
    "order_number": "LAZ-RET-3000045",
    "created_at": "2026-08-31 05:13:45",
    "updated_at": "2026-08-31 06:31:45",
    "statuses": [
      "canceled"
    ],
    "price": "975000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
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
        "order_item_id": 30000451,
        "order_id": 3000045,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000045B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000046,
    "order_number": "LAZ-RET-3000046",
    "created_at": "2026-08-13 01:39:30",
    "updated_at": "2026-08-13 04:07:30",
    "statuses": [
      "returned"
    ],
    "price": "665000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000461,
        "order_id": 3000046,
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
        "status": "returned",
        "tracking_code": "LEXVN3000046B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000047,
    "order_number": "LAZ-RET-3000047",
    "created_at": "2026-08-12 19:29:53",
    "updated_at": "2026-08-12 20:46:53",
    "statuses": [
      "failed"
    ],
    "price": "215000",
    "items_count": 1,
    "payment_method": "COD",
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
        "order_item_id": 30000471,
        "order_id": 3000047,
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
        "status": "failed",
        "tracking_code": "LEXVN3000047B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 3000048,
    "order_number": "LAZ-RET-3000048",
    "created_at": "2026-08-07 12:21:17",
    "updated_at": "2026-08-07 14:39:17",
    "statuses": [
      "returned"
    ],
    "price": "545000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000481,
        "order_id": 3000048,
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
        "status": "returned",
        "tracking_code": "LEXVN3000048B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000049,
    "order_number": "LAZ-RET-3000049",
    "created_at": "2026-08-07 22:57:25",
    "updated_at": "2026-08-07 23:08:25",
    "statuses": [
      "returned"
    ],
    "price": "215000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000491,
        "order_id": 3000049,
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
        "status": "returned",
        "tracking_code": "LEXVN3000049B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000050,
    "order_number": "LAZ-RET-3000050",
    "created_at": "2026-08-15 23:58:46",
    "updated_at": "2026-08-16 02:18:46",
    "statuses": [
      "canceled"
    ],
    "price": "230000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000501,
        "order_id": 3000050,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000050B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000051,
    "order_number": "LAZ-RET-3000051",
    "created_at": "2026-08-11 15:36:48",
    "updated_at": "2026-08-11 17:10:48",
    "statuses": [
      "returned"
    ],
    "price": "4465000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000511,
        "order_id": 3000051,
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
        "status": "returned",
        "tracking_code": "LEXVN3000051B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30000512,
        "order_id": 3000051,
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
        "status": "returned",
        "tracking_code": "LEXVN3000051C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000052,
    "order_number": "LAZ-RET-3000052",
    "created_at": "2026-08-05 23:09:50",
    "updated_at": "2026-08-05 23:36:50",
    "statuses": [
      "failed"
    ],
    "price": "3785000",
    "items_count": 2,
    "payment_method": "COD",
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
        "order_item_id": 30000521,
        "order_id": 3000052,
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
        "status": "failed",
        "tracking_code": "LEXVN3000052B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 30000522,
        "order_id": 3000052,
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
        "status": "failed",
        "tracking_code": "LEXVN3000052C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 3000053,
    "order_number": "LAZ-RET-3000053",
    "created_at": "2026-08-29 11:21:54",
    "updated_at": "2026-08-29 14:09:54",
    "statuses": [
      "failed"
    ],
    "price": "1485000",
    "items_count": 1,
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
        "order_item_id": 30000531,
        "order_id": 3000053,
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
        "status": "failed",
        "tracking_code": "LEXVN3000053B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000054,
    "order_number": "LAZ-RET-3000054",
    "created_at": "2026-08-25 00:36:04",
    "updated_at": "2026-08-25 01:42:04",
    "statuses": [
      "failed"
    ],
    "price": "825000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
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
        "order_item_id": 30000541,
        "order_id": 3000054,
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
        "status": "failed",
        "tracking_code": "LEXVN3000054B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 3000055,
    "order_number": "LAZ-RET-3000055",
    "created_at": "2026-08-06 11:00:00",
    "updated_at": "2026-08-06 12:15:00",
    "statuses": [
      "canceled"
    ],
    "price": "3430000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000551,
        "order_id": 3000055,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000055B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000056,
    "order_number": "LAZ-RET-3000056",
    "created_at": "2026-08-09 23:30:52",
    "updated_at": "2026-08-09 23:57:52",
    "statuses": [
      "returned"
    ],
    "price": "900000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 30000561,
        "order_id": 3000056,
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
        "status": "returned",
        "tracking_code": "LEXVN3000056B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000057,
    "order_number": "LAZ-RET-3000057",
    "created_at": "2026-09-02 14:20:31",
    "updated_at": "2026-09-02 16:49:31",
    "statuses": [
      "returned"
    ],
    "price": "150000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
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
        "order_item_id": 30000571,
        "order_id": 3000057,
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
        "status": "returned",
        "tracking_code": "LEXVN3000057B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000058,
    "order_number": "LAZ-RET-3000058",
    "created_at": "2026-08-15 14:39:16",
    "updated_at": "2026-08-15 16:35:16",
    "statuses": [
      "canceled"
    ],
    "price": "1865000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000581,
        "order_id": 3000058,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000058B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000059,
    "order_number": "LAZ-RET-3000059",
    "created_at": "2026-08-13 02:14:51",
    "updated_at": "2026-08-13 04:39:51",
    "statuses": [
      "returned"
    ],
    "price": "615000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30000591,
        "order_id": 3000059,
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
        "status": "returned",
        "tracking_code": "LEXVN3000059B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000060,
    "order_number": "LAZ-RET-3000060",
    "created_at": "2026-08-28 21:20:33",
    "updated_at": "2026-08-28 21:32:33",
    "statuses": [
      "failed"
    ],
    "price": "1285000",
    "items_count": 1,
    "payment_method": "Credit Card",
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
        "order_item_id": 30000601,
        "order_id": 3000060,
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
        "status": "failed",
        "tracking_code": "LEXVN3000060B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 3000061,
    "order_number": "LAZ-RET-3000061",
    "created_at": "2026-08-20 23:43:17",
    "updated_at": "2026-08-21 00:14:17",
    "statuses": [
      "failed"
    ],
    "price": "3085000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
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
        "order_item_id": 30000611,
        "order_id": 3000061,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLU",
        "item_price": 1650000,
        "paid_price": 1620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000061B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 30000612,
        "order_id": 3000061,
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
        "status": "failed",
        "tracking_code": "LEXVN3000061C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000062,
    "order_number": "LAZ-RET-3000062",
    "created_at": "2026-08-29 16:44:53",
    "updated_at": "2026-08-29 18:21:53",
    "statuses": [
      "returned"
    ],
    "price": "160000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000621,
        "order_id": 3000062,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLK",
        "item_price": 180000,
        "paid_price": 160000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000062B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000063,
    "order_number": "LAZ-RET-3000063",
    "created_at": "2026-08-24 17:51:43",
    "updated_at": "2026-08-24 18:48:43",
    "statuses": [
      "failed"
    ],
    "price": "4235000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30000631,
        "order_id": 3000063,
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
        "status": "failed",
        "tracking_code": "LEXVN3000063B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 3000064,
    "order_number": "LAZ-RET-3000064",
    "created_at": "2026-08-19 01:17:34",
    "updated_at": "2026-08-19 03:37:34",
    "statuses": [
      "failed"
    ],
    "price": "28525000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30000641,
        "order_id": 3000064,
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
        "status": "failed",
        "tracking_code": "LEXVN3000064B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 3000065,
    "order_number": "LAZ-RET-3000065",
    "created_at": "2026-08-08 17:38:55",
    "updated_at": "2026-08-08 20:07:55",
    "statuses": [
      "returned"
    ],
    "price": "1315000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000651,
        "order_id": 3000065,
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
        "status": "returned",
        "tracking_code": "LEXVN3000065B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000066,
    "order_number": "LAZ-RET-3000066",
    "created_at": "2026-08-26 12:37:55",
    "updated_at": "2026-08-26 15:10:55",
    "statuses": [
      "failed"
    ],
    "price": "7380000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 30000661,
        "order_id": 3000066,
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
        "status": "failed",
        "tracking_code": "LEXVN3000066B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 30000662,
        "order_id": 3000066,
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
        "status": "failed",
        "tracking_code": "LEXVN3000066C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 3000067,
    "order_number": "LAZ-RET-3000067",
    "created_at": "2026-08-23 10:46:46",
    "updated_at": "2026-08-23 13:03:46",
    "statuses": [
      "canceled"
    ],
    "price": "28705000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000671,
        "order_id": 3000067,
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
        "tracking_code": "LEXVN3000067B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000672,
        "order_id": 3000067,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000067C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000068,
    "order_number": "LAZ-RET-3000068",
    "created_at": "2026-08-23 13:21:59",
    "updated_at": "2026-08-23 14:58:59",
    "statuses": [
      "returned"
    ],
    "price": "6825000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30000681,
        "order_id": 3000068,
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
        "status": "returned",
        "tracking_code": "LEXVN3000068B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000069,
    "order_number": "LAZ-RET-3000069",
    "created_at": "2026-08-30 21:11:41",
    "updated_at": "2026-08-30 22:57:41",
    "statuses": [
      "returned"
    ],
    "price": "2300000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30000691,
        "order_id": 3000069,
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
        "status": "returned",
        "tracking_code": "LEXVN3000069B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30000692,
        "order_id": 3000069,
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
        "status": "returned",
        "tracking_code": "LEXVN3000069C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000070,
    "order_number": "LAZ-RET-3000070",
    "created_at": "2026-08-24 23:52:01",
    "updated_at": "2026-08-25 00:21:01",
    "statuses": [
      "returned"
    ],
    "price": "1315000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000701,
        "order_id": 3000070,
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
        "status": "returned",
        "tracking_code": "LEXVN3000070B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000071,
    "order_number": "LAZ-RET-3000071",
    "created_at": "2026-09-01 12:38:38",
    "updated_at": "2026-09-01 12:53:38",
    "statuses": [
      "returned"
    ],
    "price": "28485000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
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
        "order_item_id": 30000711,
        "order_id": 3000071,
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
        "status": "returned",
        "tracking_code": "LEXVN3000071B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000072,
    "order_number": "LAZ-RET-3000072",
    "created_at": "2026-08-07 21:19:07",
    "updated_at": "2026-08-07 23:18:07",
    "statuses": [
      "returned"
    ],
    "price": "28480000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000721,
        "order_id": 3000072,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28480000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000072B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000073,
    "order_number": "LAZ-RET-3000073",
    "created_at": "2026-08-16 15:44:38",
    "updated_at": "2026-08-16 18:36:38",
    "statuses": [
      "returned"
    ],
    "price": "805000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000731,
        "order_id": 3000073,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-GRY",
        "item_price": 790000,
        "paid_price": 790000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000073B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000074,
    "order_number": "LAZ-RET-3000074",
    "created_at": "2026-08-12 15:16:42",
    "updated_at": "2026-08-12 16:46:42",
    "statuses": [
      "canceled"
    ],
    "price": "1825000",
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
        "order_item_id": 30000741,
        "order_id": 3000074,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000074B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000075,
    "order_number": "LAZ-RET-3000075",
    "created_at": "2026-08-15 12:55:03",
    "updated_at": "2026-08-15 14:58:03",
    "statuses": [
      "canceled"
    ],
    "price": "6735000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 80000,
    "voucher_platform": 60000,
    "voucher_seller": 20000,
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
        "order_item_id": 30000751,
        "order_id": 3000075,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000075B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Buyer changed mind"
      },
      {
        "order_item_id": 30000752,
        "order_id": 3000075,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5440000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000075C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000076,
    "order_number": "LAZ-RET-3000076",
    "created_at": "2026-08-19 22:40:44",
    "updated_at": "2026-08-20 01:12:44",
    "statuses": [
      "failed"
    ],
    "price": "585000",
    "items_count": 1,
    "payment_method": "Momo",
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
        "order_item_id": 30000761,
        "order_id": 3000076,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 560000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000076B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 3000077,
    "order_number": "LAZ-RET-3000077",
    "created_at": "2026-08-11 02:44:58",
    "updated_at": "2026-08-11 05:38:58",
    "statuses": [
      "returned"
    ],
    "price": "1785000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
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
        "order_item_id": 30000771,
        "order_id": 3000077,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLK",
        "item_price": 1790000,
        "paid_price": 1770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000077B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000078,
    "order_number": "LAZ-RET-3000078",
    "created_at": "2026-08-28 23:01:34",
    "updated_at": "2026-08-29 01:03:34",
    "statuses": [
      "returned"
    ],
    "price": "6415000",
    "items_count": 3,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000781,
        "order_id": 3000078,
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
        "status": "returned",
        "tracking_code": "LEXVN3000078B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 30000782,
        "order_id": 3000078,
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
        "status": "returned",
        "tracking_code": "LEXVN3000078C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Damaged packaging during shipping"
      },
      {
        "order_item_id": 30000783,
        "order_id": 3000078,
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
        "status": "returned",
        "tracking_code": "LEXVN3000078D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000079,
    "order_number": "LAZ-RET-3000079",
    "created_at": "2026-08-26 02:32:43",
    "updated_at": "2026-08-26 03:17:43",
    "statuses": [
      "returned"
    ],
    "price": "765000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000791,
        "order_id": 3000079,
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
        "status": "returned",
        "tracking_code": "LEXVN3000079B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000080,
    "order_number": "LAZ-RET-3000080",
    "created_at": "2026-08-31 11:18:19",
    "updated_at": "2026-08-31 12:06:19",
    "statuses": [
      "canceled"
    ],
    "price": "815000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000801,
        "order_id": 3000080,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000080B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000081,
    "order_number": "LAZ-RET-3000081",
    "created_at": "2026-09-01 05:53:41",
    "updated_at": "2026-09-01 07:12:41",
    "statuses": [
      "returned"
    ],
    "price": "320000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30000811,
        "order_id": 3000081,
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
        "status": "returned",
        "tracking_code": "LEXVN3000081B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000082,
    "order_number": "LAZ-RET-3000082",
    "created_at": "2026-08-15 21:29:17",
    "updated_at": "2026-08-15 22:20:17",
    "statuses": [
      "canceled"
    ],
    "price": "3455000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000821,
        "order_id": 3000082,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000082B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Found cheaper alternative elsewhere"
      },
      {
        "order_item_id": 30000822,
        "order_id": 3000082,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000082C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000083,
    "order_number": "LAZ-RET-3000083",
    "created_at": "2026-08-18 15:02:33",
    "updated_at": "2026-08-18 15:14:33",
    "statuses": [
      "canceled"
    ],
    "price": "195000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30000831,
        "order_id": 3000083,
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
        "tracking_code": "LEXVN3000083B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000084,
    "order_number": "LAZ-RET-3000084",
    "created_at": "2026-08-06 13:17:17",
    "updated_at": "2026-08-06 14:46:17",
    "statuses": [
      "returned"
    ],
    "price": "675000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000841,
        "order_id": 3000084,
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
        "status": "returned",
        "tracking_code": "LEXVN3000084B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000085,
    "order_number": "LAZ-RET-3000085",
    "created_at": "2026-08-24 12:36:05",
    "updated_at": "2026-08-24 14:22:05",
    "statuses": [
      "returned"
    ],
    "price": "940000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 60000,
    "voucher_platform": 60000,
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
        "order_item_id": 30000851,
        "order_id": 3000085,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 220000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000085B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Received wrong color / variation"
      },
      {
        "order_item_id": 30000852,
        "order_id": 3000085,
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
        "status": "returned",
        "tracking_code": "LEXVN3000085C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000086,
    "order_number": "LAZ-RET-3000086",
    "created_at": "2026-08-18 13:02:49",
    "updated_at": "2026-08-18 15:36:49",
    "statuses": [
      "canceled"
    ],
    "price": "555000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000861,
        "order_id": 3000086,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000086B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000087,
    "order_number": "LAZ-RET-3000087",
    "created_at": "2026-08-18 01:35:49",
    "updated_at": "2026-08-18 03:57:49",
    "statuses": [
      "returned"
    ],
    "price": "1805000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
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
        "order_item_id": 30000871,
        "order_id": 3000087,
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
        "status": "returned",
        "tracking_code": "LEXVN3000087B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000088,
    "order_number": "LAZ-RET-3000088",
    "created_at": "2026-08-09 05:00:10",
    "updated_at": "2026-08-09 05:36:10",
    "statuses": [
      "returned"
    ],
    "price": "1920000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000881,
        "order_id": 3000088,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000088B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Damaged packaging during shipping"
      },
      {
        "order_item_id": 30000882,
        "order_id": 3000088,
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
        "status": "returned",
        "tracking_code": "LEXVN3000088C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000089,
    "order_number": "LAZ-RET-3000089",
    "created_at": "2026-08-30 17:51:13",
    "updated_at": "2026-08-30 18:56:13",
    "statuses": [
      "returned"
    ],
    "price": "1315000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000891,
        "order_id": 3000089,
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
        "status": "returned",
        "tracking_code": "LEXVN3000089B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000090,
    "order_number": "LAZ-RET-3000090",
    "created_at": "2026-08-06 01:23:29",
    "updated_at": "2026-08-06 04:00:29",
    "statuses": [
      "failed"
    ],
    "price": "1830000",
    "items_count": 1,
    "payment_method": "Credit Card",
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
        "order_item_id": 30000901,
        "order_id": 3000090,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1830000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000090B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 3000091,
    "order_number": "LAZ-RET-3000091",
    "created_at": "2026-09-02 11:32:10",
    "updated_at": "2026-09-02 13:47:10",
    "statuses": [
      "failed"
    ],
    "price": "3465000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30000911,
        "order_id": 3000091,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3430000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000091B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 3000092,
    "order_number": "LAZ-RET-3000092",
    "created_at": "2026-08-20 05:43:59",
    "updated_at": "2026-08-20 07:07:59",
    "statuses": [
      "canceled"
    ],
    "price": "7665000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000921,
        "order_id": 3000092,
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
        "tracking_code": "LEXVN3000092B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000922,
        "order_id": 3000092,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000092C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000093,
    "order_number": "LAZ-RET-3000093",
    "created_at": "2026-08-09 20:53:48",
    "updated_at": "2026-08-09 21:06:48",
    "statuses": [
      "canceled"
    ],
    "price": "905000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000931,
        "order_id": 3000093,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000093B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000094,
    "order_number": "LAZ-RET-3000094",
    "created_at": "2026-08-15 05:06:06",
    "updated_at": "2026-08-15 07:08:06",
    "statuses": [
      "returned"
    ],
    "price": "4500000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000941,
        "order_id": 3000094,
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
        "status": "returned",
        "tracking_code": "LEXVN3000094B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Received wrong color / variation"
      },
      {
        "order_item_id": 30000942,
        "order_id": 3000094,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-GRY",
        "item_price": 4200000,
        "paid_price": 4180000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000094C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000095,
    "order_number": "LAZ-RET-3000095",
    "created_at": "2026-09-02 16:18:25",
    "updated_at": "2026-09-02 17:27:25",
    "statuses": [
      "failed"
    ],
    "price": "1650000",
    "items_count": 1,
    "payment_method": "Credit Card",
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
        "order_item_id": 30000951,
        "order_id": 3000095,
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
        "status": "failed",
        "tracking_code": "LEXVN3000095B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 3000096,
    "order_number": "LAZ-RET-3000096",
    "created_at": "2026-08-12 16:11:34",
    "updated_at": "2026-08-12 18:45:34",
    "statuses": [
      "canceled"
    ],
    "price": "765000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000961,
        "order_id": 3000096,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000096B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000962,
        "order_id": 3000096,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000096C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000097,
    "order_number": "LAZ-RET-3000097",
    "created_at": "2026-08-07 01:30:17",
    "updated_at": "2026-08-07 02:56:17",
    "statuses": [
      "returned"
    ],
    "price": "5075000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30000971,
        "order_id": 3000097,
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
        "status": "returned",
        "tracking_code": "LEXVN3000097B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30000972,
        "order_id": 3000097,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLK",
        "item_price": 4200000,
        "paid_price": 4150000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000097C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000098,
    "order_number": "LAZ-RET-3000098",
    "created_at": "2026-08-24 18:47:11",
    "updated_at": "2026-08-24 20:01:11",
    "statuses": [
      "canceled"
    ],
    "price": "4200000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000981,
        "order_id": 3000098,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000098B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000099,
    "order_number": "LAZ-RET-3000099",
    "created_at": "2026-08-28 04:02:08",
    "updated_at": "2026-08-28 04:34:08",
    "statuses": [
      "canceled"
    ],
    "price": "8245000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30000991,
        "order_id": 3000099,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-SLV",
        "item_price": 6800000,
        "paid_price": 6770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000099B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30000992,
        "order_id": 3000099,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000099C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000100,
    "order_number": "LAZ-RET-3000100",
    "created_at": "2026-08-08 18:12:48",
    "updated_at": "2026-08-08 21:11:48",
    "statuses": [
      "failed"
    ],
    "price": "2575000",
    "items_count": 2,
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
        "order_item_id": 30001001,
        "order_id": 3000100,
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
        "status": "failed",
        "tracking_code": "LEXVN3000100B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 30001002,
        "order_id": 3000100,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-SLV",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000100C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 3000101,
    "order_number": "LAZ-RET-3000101",
    "created_at": "2026-08-26 01:38:41",
    "updated_at": "2026-08-26 01:54:41",
    "statuses": [
      "failed"
    ],
    "price": "8570000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
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
        "order_item_id": 30001011,
        "order_id": 3000101,
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
        "status": "failed",
        "tracking_code": "LEXVN3000101B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 30001012,
        "order_id": 3000101,
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
        "status": "failed",
        "tracking_code": "LEXVN3000101C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 3000102,
    "order_number": "LAZ-RET-3000102",
    "created_at": "2026-08-30 17:03:16",
    "updated_at": "2026-08-30 17:44:16",
    "statuses": [
      "canceled"
    ],
    "price": "615000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001021,
        "order_id": 3000102,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000102B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000103,
    "order_number": "LAZ-RET-3000103",
    "created_at": "2026-08-25 14:36:53",
    "updated_at": "2026-08-25 17:17:53",
    "statuses": [
      "returned"
    ],
    "price": "165000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001031,
        "order_id": 3000103,
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
        "status": "returned",
        "tracking_code": "LEXVN3000103B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000104,
    "order_number": "LAZ-RET-3000104",
    "created_at": "2026-08-30 17:10:36",
    "updated_at": "2026-08-30 17:48:36",
    "statuses": [
      "canceled"
    ],
    "price": "255000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 25000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30001041,
        "order_id": 3000104,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLK",
        "item_price": 250000,
        "paid_price": 230000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000104B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000105,
    "order_number": "LAZ-RET-3000105",
    "created_at": "2026-08-27 10:01:34",
    "updated_at": "2026-08-27 12:57:34",
    "statuses": [
      "returned"
    ],
    "price": "1760000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001051,
        "order_id": 3000105,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000105B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30001052,
        "order_id": 3000105,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1240000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000105C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000106,
    "order_number": "LAZ-RET-3000106",
    "created_at": "2026-08-05 08:59:03",
    "updated_at": "2026-08-05 10:59:03",
    "statuses": [
      "returned"
    ],
    "price": "6780000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 30001061,
        "order_id": 3000106,
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
        "status": "returned",
        "tracking_code": "LEXVN3000106B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000107,
    "order_number": "LAZ-RET-3000107",
    "created_at": "2026-08-26 03:19:45",
    "updated_at": "2026-08-26 04:13:45",
    "statuses": [
      "canceled"
    ],
    "price": "1595000",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001071,
        "order_id": 3000107,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000107B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Buyer changed mind"
      },
      {
        "order_item_id": 30001072,
        "order_id": 3000107,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000107C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000108,
    "order_number": "LAZ-RET-3000108",
    "created_at": "2026-08-12 09:06:42",
    "updated_at": "2026-08-12 09:44:42",
    "statuses": [
      "canceled"
    ],
    "price": "1345000",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 25000,
    "voucher": 50000,
    "voucher_platform": 30000,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001081,
        "order_id": 3000108,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000108B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Found cheaper alternative elsewhere"
      },
      {
        "order_item_id": 30001082,
        "order_id": 3000108,
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
        "tracking_code": "LEXVN3000108C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000109,
    "order_number": "LAZ-RET-3000109",
    "created_at": "2026-08-31 15:55:36",
    "updated_at": "2026-08-31 17:33:36",
    "statuses": [
      "failed"
    ],
    "price": "525000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
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
        "order_item_id": 30001091,
        "order_id": 3000109,
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
        "status": "failed",
        "tracking_code": "LEXVN3000109B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 3000110,
    "order_number": "LAZ-RET-3000110",
    "created_at": "2026-08-25 17:06:55",
    "updated_at": "2026-08-25 20:01:55",
    "statuses": [
      "canceled"
    ],
    "price": "965000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001101,
        "order_id": 3000110,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000110B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000111,
    "order_number": "LAZ-RET-3000111",
    "created_at": "2026-08-05 09:54:47",
    "updated_at": "2026-08-05 12:34:47",
    "statuses": [
      "failed"
    ],
    "price": "325000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30001111,
        "order_id": 3000111,
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
        "status": "failed",
        "tracking_code": "LEXVN3000111B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 3000112,
    "order_number": "LAZ-RET-3000112",
    "created_at": "2026-08-27 18:11:39",
    "updated_at": "2026-08-27 20:58:39",
    "statuses": [
      "returned"
    ],
    "price": "730000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
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
        "order_item_id": 30001121,
        "order_id": 3000112,
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
        "status": "returned",
        "tracking_code": "LEXVN3000112B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000113,
    "order_number": "LAZ-RET-3000113",
    "created_at": "2026-08-11 01:52:49",
    "updated_at": "2026-08-11 04:09:49",
    "statuses": [
      "returned"
    ],
    "price": "1795000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
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
        "order_item_id": 30001131,
        "order_id": 3000113,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-WHT",
        "item_price": 1790000,
        "paid_price": 1760000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000113B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000114,
    "order_number": "LAZ-RET-3000114",
    "created_at": "2026-08-23 16:17:58",
    "updated_at": "2026-08-23 17:04:58",
    "statuses": [
      "canceled"
    ],
    "price": "1435000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001141,
        "order_id": 3000114,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1420000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000114B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000115,
    "order_number": "LAZ-RET-3000115",
    "created_at": "2026-08-14 13:28:40",
    "updated_at": "2026-08-14 15:06:40",
    "statuses": [
      "failed"
    ],
    "price": "300000",
    "items_count": 1,
    "payment_method": "ShopeePay",
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
        "order_item_id": 30001151,
        "order_id": 3000115,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 300000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000115B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 3000116,
    "order_number": "LAZ-RET-3000116",
    "created_at": "2026-08-27 01:54:20",
    "updated_at": "2026-08-27 03:42:20",
    "statuses": [
      "canceled"
    ],
    "price": "615000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30001161,
        "order_id": 3000116,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000116B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000117,
    "order_number": "LAZ-RET-3000117",
    "created_at": "2026-08-18 07:49:32",
    "updated_at": "2026-08-18 10:06:32",
    "statuses": [
      "canceled"
    ],
    "price": "535000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001171,
        "order_id": 3000117,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 500000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000117B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000118,
    "order_number": "LAZ-RET-3000118",
    "created_at": "2026-08-22 19:39:16",
    "updated_at": "2026-08-22 21:09:16",
    "statuses": [
      "canceled"
    ],
    "price": "645000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001181,
        "order_id": 3000118,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000118B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000119,
    "order_number": "LAZ-RET-3000119",
    "created_at": "2026-08-05 23:07:40",
    "updated_at": "2026-08-06 00:48:40",
    "statuses": [
      "returned"
    ],
    "price": "1185000",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001191,
        "order_id": 3000119,
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
        "status": "returned",
        "tracking_code": "LEXVN3000119B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 30001192,
        "order_id": 3000119,
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
        "status": "returned",
        "tracking_code": "LEXVN3000119C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000120,
    "order_number": "LAZ-RET-3000120",
    "created_at": "2026-08-31 14:40:59",
    "updated_at": "2026-08-31 17:34:59",
    "statuses": [
      "canceled"
    ],
    "price": "305000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001201,
        "order_id": 3000120,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-SLV",
        "item_price": 320000,
        "paid_price": 290000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000120B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000121,
    "order_number": "LAZ-RET-3000121",
    "created_at": "2026-08-18 01:35:14",
    "updated_at": "2026-08-18 03:23:14",
    "statuses": [
      "returned"
    ],
    "price": "985000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001211,
        "order_id": 3000121,
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
        "status": "returned",
        "tracking_code": "LEXVN3000121B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000122,
    "order_number": "LAZ-RET-3000122",
    "created_at": "2026-08-05 20:53:07",
    "updated_at": "2026-08-05 21:47:07",
    "statuses": [
      "canceled"
    ],
    "price": "535000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001221,
        "order_id": 3000122,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 520000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000122B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000123,
    "order_number": "LAZ-RET-3000123",
    "created_at": "2026-08-25 02:26:28",
    "updated_at": "2026-08-25 03:26:28",
    "statuses": [
      "failed"
    ],
    "price": "28525000",
    "items_count": 1,
    "payment_method": "ZaloPay",
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
        "order_item_id": 30001231,
        "order_id": 3000123,
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
        "status": "failed",
        "tracking_code": "LEXVN3000123B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 3000124,
    "order_number": "LAZ-RET-3000124",
    "created_at": "2026-08-17 13:33:58",
    "updated_at": "2026-08-17 15:47:58",
    "statuses": [
      "canceled"
    ],
    "price": "905000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001241,
        "order_id": 3000124,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 890000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000124B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000125,
    "order_number": "LAZ-RET-3000125",
    "created_at": "2026-08-21 10:57:56",
    "updated_at": "2026-08-21 12:20:56",
    "statuses": [
      "failed"
    ],
    "price": "2540000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 60000,
    "voucher_platform": 60000,
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
        "order_item_id": 30001251,
        "order_id": 3000125,
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
        "status": "failed",
        "tracking_code": "LEXVN3000125B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 30001252,
        "order_id": 3000125,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 920000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "failed",
        "tracking_code": "LEXVN3000125C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 3000126,
    "order_number": "LAZ-RET-3000126",
    "created_at": "2026-08-20 14:19:45",
    "updated_at": "2026-08-20 15:02:45",
    "statuses": [
      "returned"
    ],
    "price": "1770000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30001261,
        "order_id": 3000126,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1770000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000126B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000127,
    "order_number": "LAZ-RET-3000127",
    "created_at": "2026-08-26 11:36:52",
    "updated_at": "2026-08-26 14:27:52",
    "statuses": [
      "failed"
    ],
    "price": "5650000",
    "items_count": 2,
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
        "order_item_id": 30001271,
        "order_id": 3000127,
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
        "status": "failed",
        "tracking_code": "LEXVN3000127B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      },
      {
        "order_item_id": 30001272,
        "order_id": 3000127,
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
        "status": "failed",
        "tracking_code": "LEXVN3000127C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 3000128,
    "order_number": "LAZ-RET-3000128",
    "created_at": "2026-08-31 09:03:07",
    "updated_at": "2026-08-31 11:19:07",
    "statuses": [
      "failed"
    ],
    "price": "1900000",
    "items_count": 2,
    "payment_method": "Momo",
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
        "order_item_id": 30001281,
        "order_id": 3000128,
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
        "status": "failed",
        "tracking_code": "LEXVN3000128B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 30001282,
        "order_id": 3000128,
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
        "status": "failed",
        "tracking_code": "LEXVN3000128C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 3000129,
    "order_number": "LAZ-RET-3000129",
    "created_at": "2026-09-02 23:41:50",
    "updated_at": "2026-09-03 01:40:50",
    "statuses": [
      "canceled"
    ],
    "price": "815000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 25000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001291,
        "order_id": 3000129,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000129B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500",
        "reason": "Buyer changed mind"
      }
    ]
  },
  {
    "order_id": 3000130,
    "order_number": "LAZ-RET-3000130",
    "created_at": "2026-08-10 21:29:08",
    "updated_at": "2026-08-10 21:46:08",
    "statuses": [
      "canceled"
    ],
    "price": "1450000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30001301,
        "order_id": 3000130,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000130B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        "reason": "Need to change delivery address or phone"
      },
      {
        "order_item_id": 30001302,
        "order_id": 3000130,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 1270000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "canceled",
        "tracking_code": "LEXVN3000130C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000131,
    "order_number": "LAZ-RET-3000131",
    "created_at": "2026-09-01 15:51:50",
    "updated_at": "2026-09-01 18:10:50",
    "statuses": [
      "returned"
    ],
    "price": "1665000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 35000,
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
        "order_item_id": 30001311,
        "order_id": 3000131,
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
        "status": "returned",
        "tracking_code": "LEXVN3000131B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000132,
    "order_number": "LAZ-RET-3000132",
    "created_at": "2026-08-08 23:28:33",
    "updated_at": "2026-08-09 01:27:33",
    "statuses": [
      "returned"
    ],
    "price": "5090000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
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
        "order_item_id": 30001321,
        "order_id": 3000132,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLK",
        "item_price": 4200000,
        "paid_price": 4200000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 0,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000132B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500",
        "reason": "Defective hardware / won’t power on"
      },
      {
        "order_item_id": 30001322,
        "order_id": 3000132,
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
        "status": "returned",
        "tracking_code": "LEXVN3000132C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
        "reason": "Product features not as described"
      }
    ]
  },
  {
    "order_id": 3000133,
    "order_number": "LAZ-RET-3000133",
    "created_at": "2026-08-07 09:31:04",
    "updated_at": "2026-08-07 09:56:04",
    "statuses": [
      "failed"
    ],
    "price": "865000",
    "items_count": 2,
    "payment_method": "Momo",
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
        "order_item_id": 30001331,
        "order_id": 3000133,
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
        "status": "failed",
        "tracking_code": "LEXVN3000133B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 30001332,
        "order_id": 3000133,
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
        "status": "failed",
        "tracking_code": "LEXVN3000133C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 3000134,
    "order_number": "LAZ-RET-3000134",
    "created_at": "2026-08-09 17:05:26",
    "updated_at": "2026-08-09 19:33:26",
    "statuses": [
      "returned"
    ],
    "price": "3400000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 50000,
    "voucher_platform": 30000,
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
        "order_item_id": 30001341,
        "order_id": 3000134,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 3400000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 20000,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000134B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        "reason": "Damaged packaging during shipping"
      }
    ]
  },
  {
    "order_id": 3000135,
    "order_number": "LAZ-RET-3000135",
    "created_at": "2026-08-21 15:37:53",
    "updated_at": "2026-08-21 17:33:53",
    "statuses": [
      "returned"
    ],
    "price": "1885000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001351,
        "order_id": 3000135,
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
        "status": "returned",
        "tracking_code": "LEXVN3000135B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000136,
    "order_number": "LAZ-RET-3000136",
    "created_at": "2026-08-09 00:19:09",
    "updated_at": "2026-08-09 02:33:09",
    "statuses": [
      "canceled"
    ],
    "price": "765000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 15000,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001361,
        "order_id": 3000136,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000136B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000137,
    "order_number": "LAZ-RET-3000137",
    "created_at": "2026-08-12 10:14:17",
    "updated_at": "2026-08-12 13:01:17",
    "statuses": [
      "returned"
    ],
    "price": "1635000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 15000,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001371,
        "order_id": 3000137,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1620000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 0,
        "voucher_platform": 30000,
        "shipping_fee": 15000,
        "status": "returned",
        "tracking_code": "LEXVN3000137B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "reason": "Received wrong color / variation"
      }
    ]
  },
  {
    "order_id": 3000138,
    "order_number": "LAZ-RET-3000138",
    "created_at": "2026-08-18 23:32:28",
    "updated_at": "2026-08-19 01:12:28",
    "statuses": [
      "canceled"
    ],
    "price": "620000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 30000,
    "voucher_platform": 30000,
    "voucher_seller": 0,
    "remarks": "Khách yêu cầu hủy đơn",
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
        "order_item_id": 30001381,
        "order_id": 3000138,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000138B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        "reason": "Need to change delivery address or phone"
      }
    ]
  },
  {
    "order_id": 3000139,
    "order_number": "LAZ-RET-3000139",
    "created_at": "2026-08-12 22:59:24",
    "updated_at": "2026-08-12 23:44:24",
    "statuses": [
      "returned"
    ],
    "price": "580000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 0,
    "voucher_platform": 0,
    "voucher_seller": 0,
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
        "order_item_id": 30001391,
        "order_id": 3000139,
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
        "status": "returned",
        "tracking_code": "LEXVN3000139B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000140,
    "order_number": "LAZ-RET-3000140",
    "created_at": "2026-09-03 01:24:03",
    "updated_at": "2026-09-03 02:09:03",
    "statuses": [
      "canceled"
    ],
    "price": "865000",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 35000,
    "voucher": 0,
    "voucher_platform": 0,
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
        "order_item_id": 30001401,
        "order_id": 3000140,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000140B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
        "reason": "Buyer changed mind"
      },
      {
        "order_item_id": 30001402,
        "order_id": 3000140,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000140C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        "reason": "Delivery time estimate too long"
      }
    ]
  },
  {
    "order_id": 3000141,
    "order_number": "LAZ-RET-3000141",
    "created_at": "2026-08-14 07:47:25",
    "updated_at": "2026-08-14 09:56:25",
    "statuses": [
      "failed"
    ],
    "price": "645000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 15000,
    "voucher": 20000,
    "voucher_platform": 0,
    "voucher_seller": 20000,
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
        "order_item_id": 30001411,
        "order_id": 3000141,
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
        "status": "failed",
        "tracking_code": "LEXVN3000141B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 3000142,
    "order_number": "LAZ-RET-3000142",
    "created_at": "2026-08-25 09:39:56",
    "updated_at": "2026-08-25 12:16:56",
    "statuses": [
      "failed"
    ],
    "price": "1305000",
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
        "order_item_id": 30001421,
        "order_id": 3000142,
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
        "status": "failed",
        "tracking_code": "LEXVN3000142B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 30001422,
        "order_id": 3000142,
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
        "status": "failed",
        "tracking_code": "LEXVN3000142C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 3000143,
    "order_number": "LAZ-RET-3000143",
    "created_at": "2026-08-16 07:53:14",
    "updated_at": "2026-08-16 09:31:14",
    "statuses": [
      "failed"
    ],
    "price": "29335000",
    "items_count": 2,
    "payment_method": "ShopeePay",
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
        "order_item_id": 30001431,
        "order_id": 3000143,
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
        "status": "failed",
        "tracking_code": "LEXVN3000143B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      },
      {
        "order_item_id": 30001432,
        "order_id": 3000143,
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
        "status": "failed",
        "tracking_code": "LEXVN3000143C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 3000144,
    "order_number": "LAZ-RET-3000144",
    "created_at": "2026-08-21 16:13:05",
    "updated_at": "2026-08-21 17:30:05",
    "statuses": [
      "failed"
    ],
    "price": "790000",
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
        "order_item_id": 30001441,
        "order_id": 3000144,
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
        "status": "failed",
        "tracking_code": "LEXVN3000144B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 3000145,
    "order_number": "LAZ-RET-3000145",
    "created_at": "2026-08-23 20:23:57",
    "updated_at": "2026-08-23 23:11:57",
    "statuses": [
      "returned"
    ],
    "price": "28480000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 20000,
    "voucher_platform": 0,
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
        "order_item_id": 30001451,
        "order_id": 3000145,
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
        "status": "returned",
        "tracking_code": "LEXVN3000145B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "reason": "Defective hardware / won’t power on"
      }
    ]
  },
  {
    "order_id": 3000146,
    "order_number": "LAZ-RET-3000146",
    "created_at": "2026-08-07 00:18:17",
    "updated_at": "2026-08-07 01:25:17",
    "statuses": [
      "failed"
    ],
    "price": "675000",
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
        "order_item_id": 30001461,
        "order_id": 3000146,
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
        "status": "failed",
        "tracking_code": "LEXVN3000146B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 3000147,
    "order_number": "LAZ-RET-3000147",
    "created_at": "2026-08-21 17:54:07",
    "updated_at": "2026-08-21 18:56:07",
    "statuses": [
      "failed"
    ],
    "price": "2670000",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 70000,
    "voucher_platform": 30000,
    "voucher_seller": 40000,
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
        "order_item_id": 30001471,
        "order_id": 3000147,
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
        "status": "failed",
        "tracking_code": "LEXVN3000147B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 30001472,
        "order_id": 3000147,
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
        "status": "failed",
        "tracking_code": "LEXVN3000147C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 3000148,
    "order_number": "LAZ-RET-3000148",
    "created_at": "2026-08-29 04:45:45",
    "updated_at": "2026-08-29 07:27:45",
    "statuses": [
      "failed"
    ],
    "price": "1325000",
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
        "order_item_id": 30001481,
        "order_id": 3000148,
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
        "status": "failed",
        "tracking_code": "LEXVN3000148B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 3000149,
    "order_number": "LAZ-RET-3000149",
    "created_at": "2026-08-29 17:21:53",
    "updated_at": "2026-08-29 19:46:53",
    "statuses": [
      "canceled"
    ],
    "price": "320000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
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
        "order_item_id": 30001491,
        "order_id": 3000149,
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
        "status": "canceled",
        "tracking_code": "LEXVN3000149B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "reason": "Found cheaper alternative elsewhere"
      }
    ]
  },
  {
    "order_id": 3000150,
    "order_number": "LAZ-RET-3000150",
    "created_at": "2026-08-10 03:50:43",
    "updated_at": "2026-08-10 04:38:43",
    "statuses": [
      "returned"
    ],
    "price": "8610000",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 40000,
    "voucher_platform": 0,
    "voucher_seller": 40000,
    "remarks": "Yêu cầu trả hàng & hoàn tiền",
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
        "order_item_id": 30001501,
        "order_id": 3000150,
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
        "status": "returned",
        "tracking_code": "LEXVN3000150B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "reason": "Product features not as described"
      },
      {
        "order_item_id": 30001502,
        "order_id": 3000150,
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
        "status": "returned",
        "tracking_code": "LEXVN3000150C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
        "reason": "Product features not as described"
      }
    ]
  }
];

export const highReturnsSeedProfile: SeedProfile = {
  key: 'high_returns',
  name: 'Disputes & Return Cases (150 Orders)',
  description: 'Tập dữ liệu 150 đơn hàng lỗi, bị hủy, trả hàng để kiểm thử kịch bản CSKH & AI Copilot.',
  orders: highReturnsOrders,
};
