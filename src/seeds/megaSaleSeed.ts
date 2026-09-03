import type { LazadaOrderDTO, SeedProfile } from './types.js';

export const megaSaleOrders: LazadaOrderDTO[] = [
  {
    "order_id": 2000001,
    "order_number": "LAZ-MEGA-2000001",
    "created_at": "2026-09-02 14:52:59",
    "updated_at": "2026-09-02 15:27:59",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "852248",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 617752,
    "voucher_platform": 438405,
    "voucher_seller": 179347,
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
        "order_item_id": 20000011,
        "order_id": 2000001,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 350848,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 80584,
        "voucher_platform": 148568,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000001B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 20000012,
        "order_id": 2000001,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 501400,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 98763,
        "voucher_platform": 289837,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000001C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000002,
    "order_number": "LAZ-MEGA-2000002",
    "created_at": "2026-09-01 15:16:14",
    "updated_at": "2026-09-01 18:02:14",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 533018,
    "voucher_platform": 449588,
    "voucher_seller": 83430,
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
        "order_item_id": 20000021,
        "order_id": 2000002,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 83430,
        "voucher_platform": 449588,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000002B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000003,
    "order_number": "LAZ-MEGA-2000003",
    "created_at": "2026-09-02 02:54:48",
    "updated_at": "2026-09-02 03:16:48",
    "statuses": [
      "shipped"
    ],
    "price": "5171548",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 318452,
    "voucher_platform": 180706,
    "voucher_seller": 137746,
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
        "order_item_id": 20000031,
        "order_id": 2000003,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5171548,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 137746,
        "voucher_platform": 180706,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000003B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000004,
    "order_number": "LAZ-MEGA-2000004",
    "created_at": "2026-09-02 19:39:18",
    "updated_at": "2026-09-02 20:56:18",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6777959",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 602041,
    "voucher_platform": 366898,
    "voucher_seller": 235143,
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
        "order_item_id": 20000041,
        "order_id": 2000004,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-WHT",
        "item_price": 6800000,
        "paid_price": 6577677,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 110981,
        "voucher_platform": 111342,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000004B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 20000042,
        "order_id": 2000004,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 200282,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124162,
        "voucher_platform": 255556,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000004C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000005,
    "order_number": "LAZ-MEGA-2000005",
    "created_at": "2026-09-02 12:26:32",
    "updated_at": "2026-09-02 12:46:32",
    "statuses": [
      "delivered"
    ],
    "price": "75534",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 504466,
    "voucher_platform": 343765,
    "voucher_seller": 160701,
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
        "order_item_id": 20000051,
        "order_id": 2000005,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 75534,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 160701,
        "voucher_platform": 343765,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000005B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000006,
    "order_number": "LAZ-MEGA-2000006",
    "created_at": "2026-09-01 10:37:56",
    "updated_at": "2026-09-01 12:53:56",
    "statuses": [
      "delivered"
    ],
    "price": "3257724",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 982276,
    "voucher_platform": 690394,
    "voucher_seller": 291882,
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
        "order_item_id": 20000061,
        "order_id": 2000006,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 138808,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 179736,
        "voucher_platform": 471456,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000006B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 20000062,
        "order_id": 2000006,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3118916,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 112146,
        "voucher_platform": 218938,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000006C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000007,
    "order_number": "LAZ-MEGA-2000007",
    "created_at": "2026-09-04 00:08:21",
    "updated_at": "2026-09-04 01:29:21",
    "statuses": [
      "shipped"
    ],
    "price": "2105820",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 794180,
    "voucher_platform": 601958,
    "voucher_seller": 192222,
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
        "order_item_id": 20000071,
        "order_id": 2000007,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1250144,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 57355,
        "voucher_platform": 142501,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000007B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 20000072,
        "order_id": 2000007,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 855676,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 134867,
        "voucher_platform": 459457,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000007C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000008,
    "order_number": "LAZ-MEGA-2000008",
    "created_at": "2026-09-03 17:53:07",
    "updated_at": "2026-09-03 18:19:07",
    "statuses": [
      "delivered"
    ],
    "price": "4845270",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 644730,
    "voucher_platform": 463824,
    "voucher_seller": 180906,
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
        "order_item_id": 20000081,
        "order_id": 2000008,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLK",
        "item_price": 5490000,
        "paid_price": 4845270,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 180906,
        "voucher_platform": 463824,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000008B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000009,
    "order_number": "LAZ-MEGA-2000009",
    "created_at": "2026-09-03 11:02:51",
    "updated_at": "2026-09-03 12:19:51",
    "statuses": [
      "delivered"
    ],
    "price": "122196",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 527804,
    "voucher_platform": 463350,
    "voucher_seller": 64454,
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
        "order_item_id": 20000091,
        "order_id": 2000009,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 122196,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 64454,
        "voucher_platform": 463350,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000009B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000010,
    "order_number": "LAZ-MEGA-2000010",
    "created_at": "2026-09-01 14:51:37",
    "updated_at": "2026-09-01 17:14:37",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "27970920",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 529080,
    "voucher_platform": 411360,
    "voucher_seller": 117720,
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
        "order_item_id": 20000101,
        "order_id": 2000010,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-GRY",
        "item_price": 28500000,
        "paid_price": 27970920,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 117720,
        "voucher_platform": 411360,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000010B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000011,
    "order_number": "LAZ-MEGA-2000011",
    "created_at": "2026-09-03 21:29:57",
    "updated_at": "2026-09-03 23:11:57",
    "statuses": [
      "shipped"
    ],
    "price": "425722",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 904278,
    "voucher_platform": 743907,
    "voucher_seller": 160371,
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
        "order_item_id": 20000111,
        "order_id": 2000011,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 232533,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 64863,
        "voucher_platform": 452604,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000011B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 20000112,
        "order_id": 2000011,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 193189,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 95508,
        "voucher_platform": 291303,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000011C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000012,
    "order_number": "LAZ-MEGA-2000012",
    "created_at": "2026-09-02 00:50:21",
    "updated_at": "2026-09-02 02:28:21",
    "statuses": [
      "delivered"
    ],
    "price": "265564",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 314436,
    "voucher_platform": 190014,
    "voucher_seller": 124422,
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
        "order_item_id": 20000121,
        "order_id": 2000012,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 265564,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124422,
        "voucher_platform": 190014,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000012B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000013,
    "order_number": "LAZ-MEGA-2000013",
    "created_at": "2026-09-01 09:50:36",
    "updated_at": "2026-09-01 11:16:36",
    "statuses": [
      "shipped"
    ],
    "price": "2514164",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 1065836,
    "voucher_platform": 906641,
    "voucher_seller": 159195,
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
        "order_item_id": 20000131,
        "order_id": 2000013,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1258670,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67981,
        "voucher_platform": 463349,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000013B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 20000132,
        "order_id": 2000013,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1255494,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 91214,
        "voucher_platform": 443292,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000013C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000014,
    "order_number": "LAZ-MEGA-2000014",
    "created_at": "2026-09-02 12:47:12",
    "updated_at": "2026-09-02 15:02:12",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 393075,
    "voucher_platform": 264420,
    "voucher_seller": 128655,
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
        "order_item_id": 20000141,
        "order_id": 2000014,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 128655,
        "voucher_platform": 264420,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000014B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000015,
    "order_number": "LAZ-MEGA-2000015",
    "created_at": "2026-09-03 10:54:09",
    "updated_at": "2026-09-03 13:23:09",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1668246",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 971754,
    "voucher_platform": 731752,
    "voucher_seller": 240002,
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
        "order_item_id": 20000151,
        "order_id": 2000015,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1393422,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 170304,
        "voucher_platform": 286274,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000015B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 20000152,
        "order_id": 2000015,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 274824,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 69698,
        "voucher_platform": 445478,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000015C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 2000016,
    "order_number": "LAZ-MEGA-2000016",
    "created_at": "2026-09-02 07:03:50",
    "updated_at": "2026-09-02 09:27:50",
    "statuses": [
      "shipped"
    ],
    "price": "1167265",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 932735,
    "voucher_platform": 617426,
    "voucher_seller": 315309,
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
        "order_item_id": 20000161,
        "order_id": 2000016,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 370523,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 145591,
        "voucher_platform": 133886,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000016B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000162,
        "order_id": 2000016,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 796742,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 169718,
        "voucher_platform": 483540,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000016C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000017,
    "order_number": "LAZ-MEGA-2000017",
    "created_at": "2026-09-02 22:25:04",
    "updated_at": "2026-09-03 00:13:04",
    "statuses": [
      "delivered"
    ],
    "price": "3043071",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 827078,
    "voucher_platform": 530926,
    "voucher_seller": 296152,
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
        "order_item_id": 20000171,
        "order_id": 2000017,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 176776,
        "voucher_platform": 193373,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000017B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20000172,
        "order_id": 2000017,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 2993071,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 119376,
        "voucher_platform": 337553,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000017C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000018,
    "order_number": "LAZ-MEGA-2000018",
    "created_at": "2026-09-02 21:02:20",
    "updated_at": "2026-09-02 21:55:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "825292",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 704708,
    "voucher_platform": 504343,
    "voucher_seller": 200365,
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
        "order_item_id": 20000181,
        "order_id": 2000018,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 534715,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 90544,
        "voucher_platform": 324741,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000018B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 20000182,
        "order_id": 2000018,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 290577,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 109821,
        "voucher_platform": 179602,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000018C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000019,
    "order_number": "LAZ-MEGA-2000019",
    "created_at": "2026-09-03 05:38:14",
    "updated_at": "2026-09-03 06:27:14",
    "statuses": [
      "shipped"
    ],
    "price": "1561780",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 868220,
    "voucher_platform": 552690,
    "voucher_seller": 315530,
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
        "order_item_id": 20000191,
        "order_id": 2000019,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 210522,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 131063,
        "voucher_platform": 238415,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000019B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 20000192,
        "order_id": 2000019,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-SLV",
        "item_price": 1850000,
        "paid_price": 1351258,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 184467,
        "voucher_platform": 314275,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000019C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000020,
    "order_number": "LAZ-MEGA-2000020",
    "created_at": "2026-09-01 04:48:54",
    "updated_at": "2026-09-01 06:18:54",
    "statuses": [
      "delivered"
    ],
    "price": "3018035",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 621965,
    "voucher_platform": 488427,
    "voucher_seller": 133538,
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
        "order_item_id": 20000201,
        "order_id": 2000020,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1673578,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 70228,
        "voucher_platform": 106194,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000020B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 20000202,
        "order_id": 2000020,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-GRY",
        "item_price": 1790000,
        "paid_price": 1344457,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 63310,
        "voucher_platform": 382233,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000020C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000021,
    "order_number": "LAZ-MEGA-2000021",
    "created_at": "2026-09-01 14:51:48",
    "updated_at": "2026-09-01 17:30:48",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3667608",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 532392,
    "voucher_platform": 427334,
    "voucher_seller": 105058,
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
        "order_item_id": 20000211,
        "order_id": 2000021,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3667608,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 105058,
        "voucher_platform": 427334,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000021B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000022,
    "order_number": "LAZ-MEGA-2000022",
    "created_at": "2026-09-03 15:13:24",
    "updated_at": "2026-09-03 16:33:24",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 437326,
    "voucher_platform": 278867,
    "voucher_seller": 158459,
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
        "order_item_id": 20000221,
        "order_id": 2000022,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 158459,
        "voucher_platform": 278867,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000022B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000023,
    "order_number": "LAZ-MEGA-2000023",
    "created_at": "2026-09-03 06:30:06",
    "updated_at": "2026-09-03 08:17:06",
    "statuses": [
      "delivered"
    ],
    "price": "3856678",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 883322,
    "voucher_platform": 669185,
    "voucher_seller": 214137,
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
        "order_item_id": 20000231,
        "order_id": 2000023,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-BLK",
        "item_price": 1290000,
        "paid_price": 912530,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 80158,
        "voucher_platform": 297312,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000023B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 20000232,
        "order_id": 2000023,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 2944148,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 133979,
        "voucher_platform": 371873,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000023C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000024,
    "order_number": "LAZ-MEGA-2000024",
    "created_at": "2026-09-03 14:17:08",
    "updated_at": "2026-09-03 15:20:08",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "947006",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 792994,
    "voucher_platform": 527988,
    "voucher_seller": 265006,
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
        "order_item_id": 20000241,
        "order_id": 2000024,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 725624,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 73399,
        "voucher_platform": 150977,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000024B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 20000242,
        "order_id": 2000024,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-GRY",
        "item_price": 790000,
        "paid_price": 221382,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 191607,
        "voucher_platform": 377011,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000024C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 2000025,
    "order_number": "LAZ-MEGA-2000025",
    "created_at": "2026-09-01 09:36:08",
    "updated_at": "2026-09-01 09:47:08",
    "statuses": [
      "delivered"
    ],
    "price": "1556288",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 293712,
    "voucher_platform": 231403,
    "voucher_seller": 62309,
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
        "order_item_id": 20000251,
        "order_id": 2000025,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1556288,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 62309,
        "voucher_platform": 231403,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000025B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000026,
    "order_number": "LAZ-MEGA-2000026",
    "created_at": "2026-09-03 19:04:47",
    "updated_at": "2026-09-03 21:47:47",
    "statuses": [
      "shipped"
    ],
    "price": "323835",
    "items_count": 3,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 1477990,
    "voucher_platform": 1105782,
    "voucher_seller": 372208,
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
        "order_item_id": 20000261,
        "order_id": 2000026,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-SLV",
        "item_price": 650000,
        "paid_price": 223835,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67581,
        "voucher_platform": 358584,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000026B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000262,
        "order_id": 2000026,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 145293,
        "voucher_platform": 281535,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000026C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20000263,
        "order_id": 2000026,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 159334,
        "voucher_platform": 465663,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000026D",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000027,
    "order_number": "LAZ-MEGA-2000027",
    "created_at": "2026-09-02 06:03:50",
    "updated_at": "2026-09-02 08:26:50",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 540494,
    "voucher_platform": 481512,
    "voucher_seller": 58982,
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
        "order_item_id": 20000271,
        "order_id": 2000027,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-GRY",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 58982,
        "voucher_platform": 481512,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000027B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000028,
    "order_number": "LAZ-MEGA-2000028",
    "created_at": "2026-09-03 14:17:30",
    "updated_at": "2026-09-03 15:36:30",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "2825676",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 614324,
    "voucher_platform": 357146,
    "voucher_seller": 257178,
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
        "order_item_id": 20000281,
        "order_id": 2000028,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1484380,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 63740,
        "voucher_platform": 241880,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000028B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 20000282,
        "order_id": 2000028,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1341296,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 193438,
        "voucher_platform": 115266,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000028C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000029,
    "order_number": "LAZ-MEGA-2000029",
    "created_at": "2026-09-01 10:42:36",
    "updated_at": "2026-09-01 13:23:36",
    "statuses": [
      "delivered"
    ],
    "price": "314770",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 335230,
    "voucher_platform": 238408,
    "voucher_seller": 96822,
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
        "order_item_id": 20000291,
        "order_id": 2000029,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-GRY",
        "item_price": 650000,
        "paid_price": 314770,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 96822,
        "voucher_platform": 238408,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000029B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000030,
    "order_number": "LAZ-MEGA-2000030",
    "created_at": "2026-09-03 11:05:18",
    "updated_at": "2026-09-03 11:41:18",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1324189",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 863865,
    "voucher_platform": 567280,
    "voucher_seller": 296585,
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
        "order_item_id": 20000301,
        "order_id": 2000030,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 126926,
        "voucher_platform": 161128,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000030B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 20000302,
        "order_id": 2000030,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1274189,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 169659,
        "voucher_platform": 406152,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000030C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000031,
    "order_number": "LAZ-MEGA-2000031",
    "created_at": "2026-09-01 20:16:09",
    "updated_at": "2026-09-01 22:59:09",
    "statuses": [
      "delivered"
    ],
    "price": "1384535",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 265465,
    "voucher_platform": 197976,
    "voucher_seller": 67489,
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
        "order_item_id": 20000311,
        "order_id": 2000031,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1384535,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67489,
        "voucher_platform": 197976,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000031B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000032,
    "order_number": "LAZ-MEGA-2000032",
    "created_at": "2026-09-03 11:05:18",
    "updated_at": "2026-09-03 13:50:18",
    "statuses": [
      "delivered"
    ],
    "price": "28934122",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 515878,
    "voucher_platform": 330129,
    "voucher_seller": 185749,
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
        "order_item_id": 20000321,
        "order_id": 2000032,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 686769,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124207,
        "voucher_platform": 139024,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000032B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 20000322,
        "order_id": 2000032,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28247353,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 61542,
        "voucher_platform": 191105,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000032C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000033,
    "order_number": "LAZ-MEGA-2000033",
    "created_at": "2026-09-01 23:38:08",
    "updated_at": "2026-09-02 01:35:08",
    "statuses": [
      "shipped"
    ],
    "price": "1409105",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 440895,
    "voucher_platform": 303692,
    "voucher_seller": 137203,
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
        "order_item_id": 20000331,
        "order_id": 2000033,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1409105,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 137203,
        "voucher_platform": 303692,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000033B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000034,
    "order_number": "LAZ-MEGA-2000034",
    "created_at": "2026-09-03 06:10:50",
    "updated_at": "2026-09-03 09:06:50",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "374871",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 855129,
    "voucher_platform": 516586,
    "voucher_seller": 338543,
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
        "order_item_id": 20000341,
        "order_id": 2000034,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 301281,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 150101,
        "voucher_platform": 198618,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000034B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000342,
        "order_id": 2000034,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 73590,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 188442,
        "voucher_platform": 317968,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000034C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000035,
    "order_number": "LAZ-MEGA-2000035",
    "created_at": "2026-09-02 04:30:56",
    "updated_at": "2026-09-02 06:08:56",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "27945972",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 974233,
    "voucher_platform": 769724,
    "voucher_seller": 204509,
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
        "order_item_id": 20000351,
        "order_id": 2000035,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 27895972,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 111850,
        "voucher_platform": 492178,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000035B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 20000352,
        "order_id": 2000035,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLK",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92659,
        "voucher_platform": 277546,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000035C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000036,
    "order_number": "LAZ-MEGA-2000036",
    "created_at": "2026-09-03 00:51:16",
    "updated_at": "2026-09-03 02:28:16",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 398802,
    "voucher_platform": 263414,
    "voucher_seller": 135388,
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
        "order_item_id": 20000361,
        "order_id": 2000036,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 135388,
        "voucher_platform": 263414,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000036B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000037,
    "order_number": "LAZ-MEGA-2000037",
    "created_at": "2026-09-01 07:40:50",
    "updated_at": "2026-09-01 10:04:50",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 502922,
    "voucher_platform": 371495,
    "voucher_seller": 131427,
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
        "order_item_id": 20000371,
        "order_id": 2000037,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLK",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 131427,
        "voucher_platform": 371495,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000037B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000038,
    "order_number": "LAZ-MEGA-2000038",
    "created_at": "2026-09-01 06:17:55",
    "updated_at": "2026-09-01 07:31:55",
    "statuses": [
      "shipped"
    ],
    "price": "28171634",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 328366,
    "voucher_platform": 235379,
    "voucher_seller": 92987,
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
        "order_item_id": 20000381,
        "order_id": 2000038,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28171634,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92987,
        "voucher_platform": 235379,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000038B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000039,
    "order_number": "LAZ-MEGA-2000039",
    "created_at": "2026-09-01 05:43:55",
    "updated_at": "2026-09-01 06:07:55",
    "statuses": [
      "delivered"
    ],
    "price": "869465",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 420535,
    "voucher_platform": 353777,
    "voucher_seller": 66758,
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
        "order_item_id": 20000391,
        "order_id": 2000039,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 869465,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 66758,
        "voucher_platform": 353777,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000039B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000040,
    "order_number": "LAZ-MEGA-2000040",
    "created_at": "2026-09-03 11:54:33",
    "updated_at": "2026-09-03 12:57:33",
    "statuses": [
      "delivered"
    ],
    "price": "1046384",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 633616,
    "voucher_platform": 436289,
    "voucher_seller": 197327,
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
        "order_item_id": 20000401,
        "order_id": 2000040,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 481383,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 112996,
        "voucher_platform": 195621,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000040B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 20000402,
        "order_id": 2000040,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-GRY",
        "item_price": 890000,
        "paid_price": 565001,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 84331,
        "voucher_platform": 240668,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000040C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000041,
    "order_number": "LAZ-MEGA-2000041",
    "created_at": "2026-09-03 22:56:29",
    "updated_at": "2026-09-04 00:25:29",
    "statuses": [
      "delivered"
    ],
    "price": "3501882",
    "items_count": 3,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 1028118,
    "voucher_platform": 729405,
    "voucher_seller": 298713,
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
        "order_item_id": 20000411,
        "order_id": 2000041,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1545853,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 102119,
        "voucher_platform": 142028,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000041B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 20000412,
        "order_id": 2000041,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 414185,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92335,
        "voucher_platform": 383480,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000041C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      },
      {
        "order_item_id": 20000413,
        "order_id": 2000041,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1541844,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 104259,
        "voucher_platform": 203897,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000041D",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000042,
    "order_number": "LAZ-MEGA-2000042",
    "created_at": "2026-09-03 19:40:35",
    "updated_at": "2026-09-03 19:57:35",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 543055,
    "voucher_platform": 482765,
    "voucher_seller": 60290,
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
        "order_item_id": 20000421,
        "order_id": 2000042,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 60290,
        "voucher_platform": 482765,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000042B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 2000043,
    "order_number": "LAZ-MEGA-2000043",
    "created_at": "2026-09-03 16:34:54",
    "updated_at": "2026-09-03 19:00:54",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 564302,
    "voucher_platform": 497756,
    "voucher_seller": 66546,
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
        "order_item_id": 20000431,
        "order_id": 2000043,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLU",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 66546,
        "voucher_platform": 497756,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000043B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000044,
    "order_number": "LAZ-MEGA-2000044",
    "created_at": "2026-09-03 21:59:53",
    "updated_at": "2026-09-04 00:48:53",
    "statuses": [
      "shipped"
    ],
    "price": "240278",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 409722,
    "voucher_platform": 246769,
    "voucher_seller": 162953,
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
        "order_item_id": 20000441,
        "order_id": 2000044,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 240278,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 162953,
        "voucher_platform": 246769,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000044B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000045,
    "order_number": "LAZ-MEGA-2000045",
    "created_at": "2026-09-01 21:24:07",
    "updated_at": "2026-09-01 23:50:07",
    "statuses": [
      "delivered"
    ],
    "price": "383312",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 266688,
    "voucher_platform": 159218,
    "voucher_seller": 107470,
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
        "order_item_id": 20000451,
        "order_id": 2000045,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 383312,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 107470,
        "voucher_platform": 159218,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000045B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000046,
    "order_number": "LAZ-MEGA-2000046",
    "created_at": "2026-09-02 00:55:31",
    "updated_at": "2026-09-02 02:55:31",
    "statuses": [
      "delivered"
    ],
    "price": "472931",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 1127069,
    "voucher_platform": 908986,
    "voucher_seller": 218083,
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
        "order_item_id": 20000461,
        "order_id": 2000046,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 70862,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 136527,
        "voucher_platform": 442611,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000046B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000462,
        "order_id": 2000046,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLU",
        "item_price": 950000,
        "paid_price": 402069,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 81556,
        "voucher_platform": 466375,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000046C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000047,
    "order_number": "LAZ-MEGA-2000047",
    "created_at": "2026-09-01 00:59:13",
    "updated_at": "2026-09-01 01:32:13",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 495764,
    "voucher_platform": 409755,
    "voucher_seller": 86009,
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
        "order_item_id": 20000471,
        "order_id": 2000047,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 86009,
        "voucher_platform": 409755,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000047B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000048,
    "order_number": "LAZ-MEGA-2000048",
    "created_at": "2026-09-02 03:22:56",
    "updated_at": "2026-09-02 05:13:56",
    "statuses": [
      "shipped"
    ],
    "price": "1666412",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 733588,
    "voucher_platform": 524085,
    "voucher_seller": 209503,
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
        "order_item_id": 20000481,
        "order_id": 2000048,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 457196,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 63285,
        "voucher_platform": 229519,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000048B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 20000482,
        "order_id": 2000048,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1209216,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 146218,
        "voucher_platform": 294566,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000048C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000049,
    "order_number": "LAZ-MEGA-2000049",
    "created_at": "2026-09-01 00:56:04",
    "updated_at": "2026-09-01 02:34:04",
    "statuses": [
      "delivered"
    ],
    "price": "1391014",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 763130,
    "voucher_platform": 502847,
    "voucher_seller": 260283,
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
        "order_item_id": 20000491,
        "order_id": 2000049,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 187177,
        "voucher_platform": 126967,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000049B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 20000492,
        "order_id": 2000049,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1341014,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 73106,
        "voucher_platform": 375880,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000049C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000050,
    "order_number": "LAZ-MEGA-2000050",
    "created_at": "2026-09-01 09:44:09",
    "updated_at": "2026-09-01 10:25:09",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1274119",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 375881,
    "voucher_platform": 208131,
    "voucher_seller": 167750,
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
        "order_item_id": 20000501,
        "order_id": 2000050,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1274119,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 167750,
        "voucher_platform": 208131,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000050B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000051,
    "order_number": "LAZ-MEGA-2000051",
    "created_at": "2026-09-03 22:14:09",
    "updated_at": "2026-09-04 00:25:09",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4408904",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 541096,
    "voucher_platform": 352233,
    "voucher_seller": 188863,
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
        "order_item_id": 20000511,
        "order_id": 2000051,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 525250,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 64481,
        "voucher_platform": 160269,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000051B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 20000512,
        "order_id": 2000051,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3883654,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124382,
        "voucher_platform": 191964,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000051C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000052,
    "order_number": "LAZ-MEGA-2000052",
    "created_at": "2026-09-03 03:28:51",
    "updated_at": "2026-09-03 05:59:51",
    "statuses": [
      "delivered"
    ],
    "price": "6220352",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 579648,
    "voucher_platform": 420681,
    "voucher_seller": 158967,
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
        "order_item_id": 20000521,
        "order_id": 2000052,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6220352,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 158967,
        "voucher_platform": 420681,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000052B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 2000053,
    "order_number": "LAZ-MEGA-2000053",
    "created_at": "2026-09-03 08:25:38",
    "updated_at": "2026-09-03 09:05:38",
    "statuses": [
      "shipped"
    ],
    "price": "887157",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 402843,
    "voucher_platform": 245093,
    "voucher_seller": 157750,
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
        "order_item_id": 20000531,
        "order_id": 2000053,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 887157,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 157750,
        "voucher_platform": 245093,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000053B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000054,
    "order_number": "LAZ-MEGA-2000054",
    "created_at": "2026-09-01 09:58:33",
    "updated_at": "2026-09-01 12:01:33",
    "statuses": [
      "shipped"
    ],
    "price": "3309773",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 790227,
    "voucher_platform": 589446,
    "voucher_seller": 200781,
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
        "order_item_id": 20000541,
        "order_id": 2000054,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 208601,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 78177,
        "voucher_platform": 363222,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000054B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000542,
        "order_id": 2000054,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3101172,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 122604,
        "voucher_platform": 226224,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000054C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000055,
    "order_number": "LAZ-MEGA-2000055",
    "created_at": "2026-09-01 02:32:33",
    "updated_at": "2026-09-01 05:01:33",
    "statuses": [
      "delivered"
    ],
    "price": "553282",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 196718,
    "voucher_platform": 113127,
    "voucher_seller": 83591,
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
        "order_item_id": 20000551,
        "order_id": 2000055,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 553282,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 83591,
        "voucher_platform": 113127,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000055B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000056,
    "order_number": "LAZ-MEGA-2000056",
    "created_at": "2026-09-01 22:07:41",
    "updated_at": "2026-09-01 22:59:41",
    "statuses": [
      "delivered"
    ],
    "price": "429774",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 740693,
    "voucher_platform": 529371,
    "voucher_seller": 211322,
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
        "order_item_id": 20000561,
        "order_id": 2000056,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 52189,
        "voucher_platform": 418278,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000056B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20000562,
        "order_id": 2000056,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 379774,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 159133,
        "voucher_platform": 111093,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000056C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000057,
    "order_number": "LAZ-MEGA-2000057",
    "created_at": "2026-09-03 20:13:08",
    "updated_at": "2026-09-03 22:14:08",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "377768",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 272232,
    "voucher_platform": 107846,
    "voucher_seller": 164386,
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
        "order_item_id": 20000571,
        "order_id": 2000057,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 377768,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 164386,
        "voucher_platform": 107846,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000057B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000058,
    "order_number": "LAZ-MEGA-2000058",
    "created_at": "2026-09-02 08:11:33",
    "updated_at": "2026-09-02 11:05:33",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1165966",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 484034,
    "voucher_platform": 307267,
    "voucher_seller": 176767,
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
        "order_item_id": 20000581,
        "order_id": 2000058,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1165966,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 176767,
        "voucher_platform": 307267,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000058B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000059,
    "order_number": "LAZ-MEGA-2000059",
    "created_at": "2026-09-02 05:20:37",
    "updated_at": "2026-09-02 06:45:37",
    "statuses": [
      "delivered"
    ],
    "price": "3698176",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 501824,
    "voucher_platform": 397997,
    "voucher_seller": 103827,
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
        "order_item_id": 20000591,
        "order_id": 2000059,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 3698176,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 103827,
        "voucher_platform": 397997,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000059B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000060,
    "order_number": "LAZ-MEGA-2000060",
    "created_at": "2026-09-03 23:43:29",
    "updated_at": "2026-09-04 00:58:29",
    "statuses": [
      "delivered"
    ],
    "price": "440541",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 449459,
    "voucher_platform": 250187,
    "voucher_seller": 199272,
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
        "order_item_id": 20000601,
        "order_id": 2000060,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 440541,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 199272,
        "voucher_platform": 250187,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000060B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000061,
    "order_number": "LAZ-MEGA-2000061",
    "created_at": "2026-09-02 09:20:51",
    "updated_at": "2026-09-02 10:02:51",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "812829",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 477171,
    "voucher_platform": 351999,
    "voucher_seller": 125172,
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
        "order_item_id": 20000611,
        "order_id": 2000061,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 812829,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 125172,
        "voucher_platform": 351999,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000061B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000062,
    "order_number": "LAZ-MEGA-2000062",
    "created_at": "2026-09-02 06:34:45",
    "updated_at": "2026-09-02 09:20:45",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 500131,
    "voucher_platform": 310138,
    "voucher_seller": 189993,
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
        "order_item_id": 20000621,
        "order_id": 2000062,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 189993,
        "voucher_platform": 310138,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000062B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000063,
    "order_number": "LAZ-MEGA-2000063",
    "created_at": "2026-09-02 14:44:12",
    "updated_at": "2026-09-02 16:00:12",
    "statuses": [
      "shipped"
    ],
    "price": "220747",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 529253,
    "voucher_platform": 377577,
    "voucher_seller": 151676,
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
        "order_item_id": 20000631,
        "order_id": 2000063,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 220747,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 151676,
        "voucher_platform": 377577,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000063B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000064,
    "order_number": "LAZ-MEGA-2000064",
    "created_at": "2026-09-02 11:36:45",
    "updated_at": "2026-09-02 11:51:45",
    "statuses": [
      "shipped"
    ],
    "price": "1669320",
    "items_count": 3,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 1380680,
    "voucher_platform": 1024111,
    "voucher_seller": 356569,
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
        "order_item_id": 20000641,
        "order_id": 2000064,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 182398,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 128980,
        "voucher_platform": 338622,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000064B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20000642,
        "order_id": 2000064,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 1144106,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 95617,
        "voucher_platform": 210277,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000064C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 20000643,
        "order_id": 2000064,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 342816,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 131972,
        "voucher_platform": 475212,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000064D",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000065,
    "order_number": "LAZ-MEGA-2000065",
    "created_at": "2026-09-01 09:59:39",
    "updated_at": "2026-09-01 12:40:39",
    "statuses": [
      "shipped"
    ],
    "price": "983321",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 466679,
    "voucher_platform": 362359,
    "voucher_seller": 104320,
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
        "order_item_id": 20000651,
        "order_id": 2000065,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 983321,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 104320,
        "voucher_platform": 362359,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000065B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000066,
    "order_number": "LAZ-MEGA-2000066",
    "created_at": "2026-09-02 20:44:23",
    "updated_at": "2026-09-02 23:42:23",
    "statuses": [
      "shipped"
    ],
    "price": "1212145",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 637855,
    "voucher_platform": 478072,
    "voucher_seller": 159783,
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
        "order_item_id": 20000661,
        "order_id": 2000066,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1212145,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 159783,
        "voucher_platform": 478072,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000066B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000067,
    "order_number": "LAZ-MEGA-2000067",
    "created_at": "2026-09-03 18:53:14",
    "updated_at": "2026-09-03 20:00:14",
    "statuses": [
      "shipped"
    ],
    "price": "3578190",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 621810,
    "voucher_platform": 452676,
    "voucher_seller": 169134,
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
        "order_item_id": 20000671,
        "order_id": 2000067,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3578190,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 169134,
        "voucher_platform": 452676,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000067B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000068,
    "order_number": "LAZ-MEGA-2000068",
    "created_at": "2026-09-03 18:49:42",
    "updated_at": "2026-09-03 20:54:42",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3645737",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 554263,
    "voucher_platform": 461752,
    "voucher_seller": 92511,
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
        "order_item_id": 20000681,
        "order_id": 2000068,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3645737,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92511,
        "voucher_platform": 461752,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000068B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000069,
    "order_number": "LAZ-MEGA-2000069",
    "created_at": "2026-09-03 14:08:05",
    "updated_at": "2026-09-03 16:51:05",
    "statuses": [
      "shipped"
    ],
    "price": "96257",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 653743,
    "voucher_platform": 474799,
    "voucher_seller": 178944,
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
        "order_item_id": 20000691,
        "order_id": 2000069,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-SLV",
        "item_price": 750000,
        "paid_price": 96257,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 178944,
        "voucher_platform": 474799,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000069B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000070,
    "order_number": "LAZ-MEGA-2000070",
    "created_at": "2026-09-03 15:30:27",
    "updated_at": "2026-09-03 17:40:27",
    "statuses": [
      "delivered"
    ],
    "price": "1575968",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 274032,
    "voucher_platform": 141123,
    "voucher_seller": 132909,
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
        "order_item_id": 20000701,
        "order_id": 2000070,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1575968,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 132909,
        "voucher_platform": 141123,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000070B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000071,
    "order_number": "LAZ-MEGA-2000071",
    "created_at": "2026-09-02 14:45:57",
    "updated_at": "2026-09-02 15:51:57",
    "statuses": [
      "delivered"
    ],
    "price": "338247",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 181753,
    "voucher_platform": 113166,
    "voucher_seller": 68587,
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
        "order_item_id": 20000711,
        "order_id": 2000071,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 338247,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 68587,
        "voucher_platform": 113166,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000071B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 2000072,
    "order_number": "LAZ-MEGA-2000072",
    "created_at": "2026-09-02 14:27:15",
    "updated_at": "2026-09-02 16:55:15",
    "statuses": [
      "delivered"
    ],
    "price": "2986642",
    "items_count": 3,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 833358,
    "voucher_platform": 543149,
    "voucher_seller": 290209,
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
        "order_item_id": 20000721,
        "order_id": 2000072,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-SLV",
        "item_price": 520000,
        "paid_price": 308580,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 87589,
        "voucher_platform": 123831,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000072B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 20000722,
        "order_id": 2000072,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1264812,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 141575,
        "voucher_platform": 243613,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000072C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20000723,
        "order_id": 2000072,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1413250,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 61045,
        "voucher_platform": 175705,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000072D",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000073,
    "order_number": "LAZ-MEGA-2000073",
    "created_at": "2026-09-02 16:11:23",
    "updated_at": "2026-09-02 16:56:23",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5072484",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 417516,
    "voucher_platform": 266430,
    "voucher_seller": 151086,
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
        "order_item_id": 20000731,
        "order_id": 2000073,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 5072484,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 151086,
        "voucher_platform": 266430,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000073B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000074,
    "order_number": "LAZ-MEGA-2000074",
    "created_at": "2026-09-01 22:09:08",
    "updated_at": "2026-09-01 23:13:08",
    "statuses": [
      "shipped"
    ],
    "price": "345125",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 444875,
    "voucher_platform": 380891,
    "voucher_seller": 63984,
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
        "order_item_id": 20000741,
        "order_id": 2000074,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 345125,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 63984,
        "voucher_platform": 380891,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000074B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 2000075,
    "order_number": "LAZ-MEGA-2000075",
    "created_at": "2026-09-02 06:35:10",
    "updated_at": "2026-09-02 08:46:10",
    "statuses": [
      "shipped"
    ],
    "price": "8151968",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 788032,
    "voucher_platform": 590627,
    "voucher_seller": 197405,
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
        "order_item_id": 20000751,
        "order_id": 2000075,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5154264,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 84164,
        "voucher_platform": 251572,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000075B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 20000752,
        "order_id": 2000075,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 2997704,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 113241,
        "voucher_platform": 339055,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000075C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000076,
    "order_number": "LAZ-MEGA-2000076",
    "created_at": "2026-09-03 17:04:46",
    "updated_at": "2026-09-03 17:39:46",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1277624",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 752376,
    "voucher_platform": 551414,
    "voucher_seller": 200962,
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
        "order_item_id": 20000761,
        "order_id": 2000076,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 322408,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 80063,
        "voucher_platform": 177529,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000076B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 20000762,
        "order_id": 2000076,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-WHT",
        "item_price": 1450000,
        "paid_price": 955216,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 120899,
        "voucher_platform": 373885,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000076C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000077,
    "order_number": "LAZ-MEGA-2000077",
    "created_at": "2026-09-03 03:38:44",
    "updated_at": "2026-09-03 06:21:44",
    "statuses": [
      "delivered"
    ],
    "price": "5234391",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 255609,
    "voucher_platform": 197754,
    "voucher_seller": 57855,
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
        "order_item_id": 20000771,
        "order_id": 2000077,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 5234391,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 57855,
        "voucher_platform": 197754,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000077B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000078,
    "order_number": "LAZ-MEGA-2000078",
    "created_at": "2026-09-01 23:04:31",
    "updated_at": "2026-09-02 01:37:31",
    "statuses": [
      "delivered"
    ],
    "price": "31809470",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 890530,
    "voucher_platform": 618473,
    "voucher_seller": 272057,
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
        "order_item_id": 20000781,
        "order_id": 2000078,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLK",
        "item_price": 28500000,
        "paid_price": 28176098,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 196617,
        "voucher_platform": 127285,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000078B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 20000782,
        "order_id": 2000078,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 3633372,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 75440,
        "voucher_platform": 491188,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000078C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000079,
    "order_number": "LAZ-MEGA-2000079",
    "created_at": "2026-09-02 00:48:17",
    "updated_at": "2026-09-02 02:16:17",
    "statuses": [
      "shipped"
    ],
    "price": "6292279",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 507721,
    "voucher_platform": 393702,
    "voucher_seller": 114019,
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
        "order_item_id": 20000791,
        "order_id": 2000079,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-SLV",
        "item_price": 6800000,
        "paid_price": 6292279,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 114019,
        "voucher_platform": 393702,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000079B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 2000080,
    "order_number": "LAZ-MEGA-2000080",
    "created_at": "2026-09-03 11:56:52",
    "updated_at": "2026-09-03 13:08:52",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "471323",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 418677,
    "voucher_platform": 263745,
    "voucher_seller": 154932,
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
        "order_item_id": 20000801,
        "order_id": 2000080,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 471323,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 154932,
        "voucher_platform": 263745,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000080B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000081,
    "order_number": "LAZ-MEGA-2000081",
    "created_at": "2026-09-03 18:31:01",
    "updated_at": "2026-09-03 19:01:01",
    "statuses": [
      "shipped"
    ],
    "price": "157839",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 492161,
    "voucher_platform": 382465,
    "voucher_seller": 109696,
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
        "order_item_id": 20000811,
        "order_id": 2000081,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 157839,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 109696,
        "voucher_platform": 382465,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000081B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000082,
    "order_number": "LAZ-MEGA-2000082",
    "created_at": "2026-09-01 11:49:45",
    "updated_at": "2026-09-01 14:24:45",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 243494,
    "voucher_platform": 175647,
    "voucher_seller": 67847,
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
        "order_item_id": 20000821,
        "order_id": 2000082,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-WHT",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67847,
        "voucher_platform": 175647,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000082B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000083,
    "order_number": "LAZ-MEGA-2000083",
    "created_at": "2026-09-01 09:55:42",
    "updated_at": "2026-09-01 11:01:42",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1669831",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 1010169,
    "voucher_platform": 703495,
    "voucher_seller": 306674,
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
        "order_item_id": 20000831,
        "order_id": 2000083,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-WHT",
        "item_price": 1790000,
        "paid_price": 1340426,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 170629,
        "voucher_platform": 278945,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000083B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 20000832,
        "order_id": 2000083,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 329405,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 136045,
        "voucher_platform": 424550,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000083C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000084,
    "order_number": "LAZ-MEGA-2000084",
    "created_at": "2026-09-02 08:15:20",
    "updated_at": "2026-09-02 08:58:20",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "313871",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 436129,
    "voucher_platform": 309836,
    "voucher_seller": 126293,
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
        "order_item_id": 20000841,
        "order_id": 2000084,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 313871,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 126293,
        "voucher_platform": 309836,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000084B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000085,
    "order_number": "LAZ-MEGA-2000085",
    "created_at": "2026-09-02 15:53:10",
    "updated_at": "2026-09-02 17:21:10",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 311055,
    "voucher_platform": 183560,
    "voucher_seller": 127495,
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
        "order_item_id": 20000851,
        "order_id": 2000085,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 127495,
        "voucher_platform": 183560,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000085B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000086,
    "order_number": "LAZ-MEGA-2000086",
    "created_at": "2026-09-01 21:51:24",
    "updated_at": "2026-09-02 00:15:24",
    "statuses": [
      "shipped"
    ],
    "price": "1315723",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 334277,
    "voucher_platform": 229245,
    "voucher_seller": 105032,
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
        "order_item_id": 20000861,
        "order_id": 2000086,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1315723,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 105032,
        "voucher_platform": 229245,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000086B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000087,
    "order_number": "LAZ-MEGA-2000087",
    "created_at": "2026-09-02 10:56:24",
    "updated_at": "2026-09-02 12:11:24",
    "statuses": [
      "delivered"
    ],
    "price": "272889",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 307111,
    "voucher_platform": 188353,
    "voucher_seller": 118758,
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
        "order_item_id": 20000871,
        "order_id": 2000087,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-GRY",
        "item_price": 580000,
        "paid_price": 272889,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 118758,
        "voucher_platform": 188353,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000087B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000088,
    "order_number": "LAZ-MEGA-2000088",
    "created_at": "2026-09-01 23:31:19",
    "updated_at": "2026-09-02 00:02:19",
    "statuses": [
      "delivered"
    ],
    "price": "5642080",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 797920,
    "voucher_platform": 556457,
    "voucher_seller": 241463,
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
        "order_item_id": 20000881,
        "order_id": 2000088,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5210128,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 50758,
        "voucher_platform": 229114,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000088B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 20000882,
        "order_id": 2000088,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-WHT",
        "item_price": 950000,
        "paid_price": 431952,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 190705,
        "voucher_platform": 327343,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000088C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000089,
    "order_number": "LAZ-MEGA-2000089",
    "created_at": "2026-09-02 12:40:04",
    "updated_at": "2026-09-02 14:11:04",
    "statuses": [
      "delivered"
    ],
    "price": "28316144",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 183856,
    "voucher_platform": 122527,
    "voucher_seller": 61329,
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
        "order_item_id": 20000891,
        "order_id": 2000089,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 28316144,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 61329,
        "voucher_platform": 122527,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000089B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000090,
    "order_number": "LAZ-MEGA-2000090",
    "created_at": "2026-09-03 16:55:17",
    "updated_at": "2026-09-03 19:52:17",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1567062",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 282938,
    "voucher_platform": 101523,
    "voucher_seller": 181415,
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
        "order_item_id": 20000901,
        "order_id": 2000090,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1567062,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 181415,
        "voucher_platform": 101523,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000090B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000091,
    "order_number": "LAZ-MEGA-2000091",
    "created_at": "2026-09-02 17:31:42",
    "updated_at": "2026-09-02 19:41:42",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1541112",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 248888,
    "voucher_platform": 101483,
    "voucher_seller": 147405,
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
        "order_item_id": 20000911,
        "order_id": 2000091,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1541112,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 147405,
        "voucher_platform": 101483,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000091B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000092,
    "order_number": "LAZ-MEGA-2000092",
    "created_at": "2026-09-01 04:03:45",
    "updated_at": "2026-09-01 06:06:45",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 376972,
    "voucher_platform": 191459,
    "voucher_seller": 185513,
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
        "order_item_id": 20000921,
        "order_id": 2000092,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 185513,
        "voucher_platform": 191459,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000092B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000093,
    "order_number": "LAZ-MEGA-2000093",
    "created_at": "2026-09-02 21:25:15",
    "updated_at": "2026-09-02 23:20:15",
    "statuses": [
      "delivered"
    ],
    "price": "3079832",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 370168,
    "voucher_platform": 279507,
    "voucher_seller": 90661,
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
        "order_item_id": 20000931,
        "order_id": 2000093,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 3079832,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 90661,
        "voucher_platform": 279507,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000093B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000094,
    "order_number": "LAZ-MEGA-2000094",
    "created_at": "2026-09-01 05:56:51",
    "updated_at": "2026-09-01 06:26:51",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 226199,
    "voucher_platform": 109988,
    "voucher_seller": 116211,
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
        "order_item_id": 20000941,
        "order_id": 2000094,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 116211,
        "voucher_platform": 109988,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000094B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000095,
    "order_number": "LAZ-MEGA-2000095",
    "created_at": "2026-09-03 16:32:30",
    "updated_at": "2026-09-03 19:04:30",
    "statuses": [
      "shipped"
    ],
    "price": "324784",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 565216,
    "voucher_platform": 392689,
    "voucher_seller": 172527,
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
        "order_item_id": 20000951,
        "order_id": 2000095,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 324784,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 172527,
        "voucher_platform": 392689,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000095B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000096,
    "order_number": "LAZ-MEGA-2000096",
    "created_at": "2026-09-03 21:34:35",
    "updated_at": "2026-09-04 00:07:35",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 261815,
    "voucher_platform": 112590,
    "voucher_seller": 149225,
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
        "order_item_id": 20000961,
        "order_id": 2000096,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 149225,
        "voucher_platform": 112590,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000096B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000097,
    "order_number": "LAZ-MEGA-2000097",
    "created_at": "2026-09-02 16:36:35",
    "updated_at": "2026-09-02 19:28:35",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1010516",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 639484,
    "voucher_platform": 476600,
    "voucher_seller": 162884,
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
        "order_item_id": 20000971,
        "order_id": 2000097,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLU",
        "item_price": 1650000,
        "paid_price": 1010516,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 162884,
        "voucher_platform": 476600,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000097B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000098,
    "order_number": "LAZ-MEGA-2000098",
    "created_at": "2026-09-01 06:06:33",
    "updated_at": "2026-09-01 08:37:33",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "5289716",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 200284,
    "voucher_platform": 128783,
    "voucher_seller": 71501,
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
        "order_item_id": 20000981,
        "order_id": 2000098,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 5289716,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 71501,
        "voucher_platform": 128783,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000098B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000099,
    "order_number": "LAZ-MEGA-2000099",
    "created_at": "2026-09-01 19:04:23",
    "updated_at": "2026-09-01 19:30:23",
    "statuses": [
      "shipped"
    ],
    "price": "3780147",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 959853,
    "voucher_platform": 641544,
    "voucher_seller": 318309,
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
        "order_item_id": 20000991,
        "order_id": 2000099,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 2934203,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 142640,
        "voucher_platform": 373157,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000099B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 20000992,
        "order_id": 2000099,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 845944,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 175669,
        "voucher_platform": 268387,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000099C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000100,
    "order_number": "LAZ-MEGA-2000100",
    "created_at": "2026-09-01 08:55:58",
    "updated_at": "2026-09-01 09:15:58",
    "statuses": [
      "shipped"
    ],
    "price": "28216216",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 283784,
    "voucher_platform": 117783,
    "voucher_seller": 166001,
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
        "order_item_id": 20001001,
        "order_id": 2000100,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28216216,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 166001,
        "voucher_platform": 117783,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000100B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000101,
    "order_number": "LAZ-MEGA-2000101",
    "created_at": "2026-09-02 11:57:46",
    "updated_at": "2026-09-02 12:46:46",
    "statuses": [
      "delivered"
    ],
    "price": "678075",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 961925,
    "voucher_platform": 668225,
    "voucher_seller": 293700,
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
        "order_item_id": 20001011,
        "order_id": 2000101,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 221698,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 159375,
        "voucher_platform": 368927,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000101B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      },
      {
        "order_item_id": 20001012,
        "order_id": 2000101,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 456377,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 134325,
        "voucher_platform": 299298,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000101C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000102,
    "order_number": "LAZ-MEGA-2000102",
    "created_at": "2026-09-03 03:36:19",
    "updated_at": "2026-09-03 06:06:19",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6457771",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 342229,
    "voucher_platform": 278277,
    "voucher_seller": 63952,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
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
        "order_item_id": 20001021,
        "order_id": 2000102,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLU",
        "item_price": 6800000,
        "paid_price": 6457771,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 63952,
        "voucher_platform": 278277,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000102B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 2000103,
    "order_number": "LAZ-MEGA-2000103",
    "created_at": "2026-09-02 03:22:59",
    "updated_at": "2026-09-02 05:33:59",
    "statuses": [
      "delivered"
    ],
    "price": "3733103",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 466897,
    "voucher_platform": 281444,
    "voucher_seller": 185453,
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
        "order_item_id": 20001031,
        "order_id": 2000103,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 3733103,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 185453,
        "voucher_platform": 281444,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000103B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000104,
    "order_number": "LAZ-MEGA-2000104",
    "created_at": "2026-09-03 03:50:29",
    "updated_at": "2026-09-03 04:42:29",
    "statuses": [
      "shipped"
    ],
    "price": "2221467",
    "items_count": 3,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 1468533,
    "voucher_platform": 1121997,
    "voucher_seller": 346536,
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
        "order_item_id": 20001041,
        "order_id": 2000104,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-WHT",
        "item_price": 1650000,
        "paid_price": 1227487,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 85841,
        "voucher_platform": 336672,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000104B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20001042,
        "order_id": 2000104,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 797957,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92361,
        "voucher_platform": 399682,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000104C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 20001043,
        "order_id": 2000104,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLU",
        "item_price": 750000,
        "paid_price": 196023,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 168334,
        "voucher_platform": 385643,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000104D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000105,
    "order_number": "LAZ-MEGA-2000105",
    "created_at": "2026-09-03 17:17:05",
    "updated_at": "2026-09-03 17:55:05",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "579091",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 310909,
    "voucher_platform": 191907,
    "voucher_seller": 119002,
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
        "order_item_id": 20001051,
        "order_id": 2000105,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLK",
        "item_price": 890000,
        "paid_price": 579091,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 119002,
        "voucher_platform": 191907,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000105B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000106,
    "order_number": "LAZ-MEGA-2000106",
    "created_at": "2026-09-03 09:42:02",
    "updated_at": "2026-09-03 10:19:02",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3781891",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 418109,
    "voucher_platform": 220283,
    "voucher_seller": 197826,
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
        "order_item_id": 20001061,
        "order_id": 2000106,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-SLV",
        "item_price": 4200000,
        "paid_price": 3781891,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 197826,
        "voucher_platform": 220283,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000106B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000107,
    "order_number": "LAZ-MEGA-2000107",
    "created_at": "2026-09-03 13:55:51",
    "updated_at": "2026-09-03 15:15:51",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 396481,
    "voucher_platform": 298588,
    "voucher_seller": 97893,
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
        "order_item_id": 20001071,
        "order_id": 2000107,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 97893,
        "voucher_platform": 298588,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000107B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000108,
    "order_number": "LAZ-MEGA-2000108",
    "created_at": "2026-09-02 14:14:21",
    "updated_at": "2026-09-02 14:43:21",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "599800",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 290200,
    "voucher_platform": 182153,
    "voucher_seller": 108047,
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
        "order_item_id": 20001081,
        "order_id": 2000108,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 599800,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 108047,
        "voucher_platform": 182153,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000108B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000109,
    "order_number": "LAZ-MEGA-2000109",
    "created_at": "2026-09-02 05:01:17",
    "updated_at": "2026-09-02 05:41:17",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4230298",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 859702,
    "voucher_platform": 654555,
    "voucher_seller": 205147,
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
        "order_item_id": 20001091,
        "order_id": 2000109,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 494791,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 75497,
        "voucher_platform": 319712,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000109B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      },
      {
        "order_item_id": 20001092,
        "order_id": 2000109,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-BLU",
        "item_price": 4200000,
        "paid_price": 3735507,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 129650,
        "voucher_platform": 334843,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000109C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000110,
    "order_number": "LAZ-MEGA-2000110",
    "created_at": "2026-09-01 12:05:08",
    "updated_at": "2026-09-01 14:18:08",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1334484",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 748146,
    "voucher_platform": 569775,
    "voucher_seller": 178371,
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
        "order_item_id": 20001101,
        "order_id": 2000110,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLK",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 123578,
        "voucher_platform": 119052,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000110B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20001102,
        "order_id": 2000110,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1284484,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 54793,
        "voucher_platform": 450723,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000110C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000111,
    "order_number": "LAZ-MEGA-2000111",
    "created_at": "2026-09-01 07:36:31",
    "updated_at": "2026-09-01 08:08:31",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "378716",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 511284,
    "voucher_platform": 372146,
    "voucher_seller": 139138,
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
        "order_item_id": 20001111,
        "order_id": 2000111,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 378716,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 139138,
        "voucher_platform": 372146,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000111B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000112,
    "order_number": "LAZ-MEGA-2000112",
    "created_at": "2026-09-02 17:35:06",
    "updated_at": "2026-09-02 17:50:06",
    "statuses": [
      "delivered"
    ],
    "price": "2966824",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 835580,
    "voucher_platform": 583529,
    "voucher_seller": 252051,
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
        "order_item_id": 20001121,
        "order_id": 2000112,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 2916824,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 137209,
        "voucher_platform": 395967,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000112B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 20001122,
        "order_id": 2000112,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 114842,
        "voucher_platform": 187562,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000112C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000113,
    "order_number": "LAZ-MEGA-2000113",
    "created_at": "2026-09-02 11:16:18",
    "updated_at": "2026-09-02 13:33:18",
    "statuses": [
      "delivered"
    ],
    "price": "3103669",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 346331,
    "voucher_platform": 182790,
    "voucher_seller": 163541,
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
        "order_item_id": 20001131,
        "order_id": 2000113,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3103669,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 163541,
        "voucher_platform": 182790,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000113B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000114,
    "order_number": "LAZ-MEGA-2000114",
    "created_at": "2026-09-02 22:07:03",
    "updated_at": "2026-09-03 00:32:03",
    "statuses": [
      "shipped"
    ],
    "price": "28851195",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 1098805,
    "voucher_platform": 863997,
    "voucher_seller": 234808,
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
        "order_item_id": 20001141,
        "order_id": 2000114,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 855745,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 116586,
        "voucher_platform": 477669,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000114B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 20001142,
        "order_id": 2000114,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLU",
        "item_price": 28500000,
        "paid_price": 27995450,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 118222,
        "voucher_platform": 386328,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000114C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000115,
    "order_number": "LAZ-MEGA-2000115",
    "created_at": "2026-09-01 20:55:13",
    "updated_at": "2026-09-01 22:45:13",
    "statuses": [
      "shipped"
    ],
    "price": "261401",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 488599,
    "voucher_platform": 325364,
    "voucher_seller": 163235,
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
        "order_item_id": 20001151,
        "order_id": 2000115,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 261401,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 163235,
        "voucher_platform": 325364,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000115B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000116,
    "order_number": "LAZ-MEGA-2000116",
    "created_at": "2026-09-02 12:19:16",
    "updated_at": "2026-09-02 14:29:16",
    "statuses": [
      "delivered"
    ],
    "price": "6753782",
    "items_count": 3,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 1476218,
    "voucher_platform": 1152769,
    "voucher_seller": 323449,
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
        "order_item_id": 20001161,
        "order_id": 2000116,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-SLV",
        "item_price": 1290000,
        "paid_price": 755119,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 137711,
        "voucher_platform": 397170,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000116B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      },
      {
        "order_item_id": 20001162,
        "order_id": 2000116,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-SLV",
        "item_price": 1450000,
        "paid_price": 998876,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 113294,
        "voucher_platform": 337830,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000116C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 20001163,
        "order_id": 2000116,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 4999787,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 72444,
        "voucher_platform": 417769,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000116D",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000117,
    "order_number": "LAZ-MEGA-2000117",
    "created_at": "2026-09-02 00:37:48",
    "updated_at": "2026-09-02 02:45:48",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "947323",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 502677,
    "voucher_platform": 426372,
    "voucher_seller": 76305,
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
        "order_item_id": 20001171,
        "order_id": 2000117,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-WHT",
        "item_price": 1450000,
        "paid_price": 947323,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 76305,
        "voucher_platform": 426372,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000117B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000118,
    "order_number": "LAZ-MEGA-2000118",
    "created_at": "2026-09-02 23:37:27",
    "updated_at": "2026-09-03 01:06:27",
    "statuses": [
      "shipped"
    ],
    "price": "3913034",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 286966,
    "voucher_platform": 178224,
    "voucher_seller": 108742,
    "remarks": "Giao hàng giờ hành chính / gọi trước khi giao",
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
        "order_item_id": 20001181,
        "order_id": 2000118,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3913034,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 108742,
        "voucher_platform": 178224,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000118B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000119,
    "order_number": "LAZ-MEGA-2000119",
    "created_at": "2026-09-01 07:10:27",
    "updated_at": "2026-09-01 09:07:27",
    "statuses": [
      "shipped"
    ],
    "price": "1293607",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 679591,
    "voucher_platform": 426980,
    "voucher_seller": 252611,
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
        "order_item_id": 20001191,
        "order_id": 2000119,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLK",
        "item_price": 1650000,
        "paid_price": 1243607,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 193198,
        "voucher_platform": 213195,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000119B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20001192,
        "order_id": 2000119,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 59413,
        "voucher_platform": 213785,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000119C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000120,
    "order_number": "LAZ-MEGA-2000120",
    "created_at": "2026-09-02 23:48:09",
    "updated_at": "2026-09-03 02:05:09",
    "statuses": [
      "shipped"
    ],
    "price": "1553164",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 296836,
    "voucher_platform": 180615,
    "voucher_seller": 116221,
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
        "order_item_id": 20001201,
        "order_id": 2000120,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1553164,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 116221,
        "voucher_platform": 180615,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000120B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000121,
    "order_number": "LAZ-MEGA-2000121",
    "created_at": "2026-09-03 05:18:16",
    "updated_at": "2026-09-03 07:53:16",
    "statuses": [
      "delivered"
    ],
    "price": "3810235",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 389765,
    "voucher_platform": 322026,
    "voucher_seller": 67739,
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
        "order_item_id": 20001211,
        "order_id": 2000121,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-GRY",
        "item_price": 4200000,
        "paid_price": 3810235,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67739,
        "voucher_platform": 322026,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000121B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000122,
    "order_number": "LAZ-MEGA-2000122",
    "created_at": "2026-09-01 13:54:08",
    "updated_at": "2026-09-01 14:57:08",
    "statuses": [
      "delivered"
    ],
    "price": "151751",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 428249,
    "voucher_platform": 254867,
    "voucher_seller": 173382,
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
        "order_item_id": 20001221,
        "order_id": 2000122,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 151751,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 173382,
        "voucher_platform": 254867,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000122B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000123,
    "order_number": "LAZ-MEGA-2000123",
    "created_at": "2026-09-02 17:11:15",
    "updated_at": "2026-09-02 17:56:15",
    "statuses": [
      "delivered"
    ],
    "price": "443207",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 506793,
    "voucher_platform": 351245,
    "voucher_seller": 155548,
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
        "order_item_id": 20001231,
        "order_id": 2000123,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLU",
        "item_price": 950000,
        "paid_price": 443207,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 155548,
        "voucher_platform": 351245,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000123B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000124,
    "order_number": "LAZ-MEGA-2000124",
    "created_at": "2026-09-01 15:37:50",
    "updated_at": "2026-09-01 17:03:50",
    "statuses": [
      "shipped"
    ],
    "price": "1577234",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 1062766,
    "voucher_platform": 747280,
    "voucher_seller": 315486,
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
        "order_item_id": 20001241,
        "order_id": 2000124,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-BLK",
        "item_price": 790000,
        "paid_price": 250543,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 167522,
        "voucher_platform": 371935,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000124B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 20001242,
        "order_id": 2000124,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1326691,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 147964,
        "voucher_platform": 375345,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000124C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000125,
    "order_number": "LAZ-MEGA-2000125",
    "created_at": "2026-09-02 19:40:28",
    "updated_at": "2026-09-02 22:31:28",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "29389162",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 760838,
    "voucher_platform": 507757,
    "voucher_seller": 253081,
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
        "order_item_id": 20001251,
        "order_id": 2000125,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-BLU",
        "item_price": 28500000,
        "paid_price": 28080702,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 65326,
        "voucher_platform": 353972,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000125B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      },
      {
        "order_item_id": 20001252,
        "order_id": 2000125,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1308460,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 187755,
        "voucher_platform": 153785,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000125C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000126,
    "order_number": "LAZ-MEGA-2000126",
    "created_at": "2026-09-01 01:21:31",
    "updated_at": "2026-09-01 02:58:31",
    "statuses": [
      "delivered"
    ],
    "price": "3140598",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 309402,
    "voucher_platform": 141623,
    "voucher_seller": 167779,
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
        "order_item_id": 20001261,
        "order_id": 2000126,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 3140598,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 167779,
        "voucher_platform": 141623,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000126B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000127,
    "order_number": "LAZ-MEGA-2000127",
    "created_at": "2026-09-03 21:07:12",
    "updated_at": "2026-09-03 22:19:12",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3807999",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 392001,
    "voucher_platform": 195338,
    "voucher_seller": 196663,
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
        "order_item_id": 20001271,
        "order_id": 2000127,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3807999,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 196663,
        "voucher_platform": 195338,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000127B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000128,
    "order_number": "LAZ-MEGA-2000128",
    "created_at": "2026-09-02 01:41:34",
    "updated_at": "2026-09-02 02:42:34",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "4915687",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 574313,
    "voucher_platform": 424220,
    "voucher_seller": 150093,
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
        "order_item_id": 20001281,
        "order_id": 2000128,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-GRY",
        "item_price": 5490000,
        "paid_price": 4915687,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 150093,
        "voucher_platform": 424220,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000128B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000129,
    "order_number": "LAZ-MEGA-2000129",
    "created_at": "2026-09-03 03:39:42",
    "updated_at": "2026-09-03 06:31:42",
    "statuses": [
      "shipped"
    ],
    "price": "3062701",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 387299,
    "voucher_platform": 314632,
    "voucher_seller": 72667,
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
        "order_item_id": 20001291,
        "order_id": 2000129,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLU",
        "item_price": 3450000,
        "paid_price": 3062701,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 72667,
        "voucher_platform": 314632,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000129B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000130,
    "order_number": "LAZ-MEGA-2000130",
    "created_at": "2026-09-02 00:55:29",
    "updated_at": "2026-09-02 01:47:29",
    "statuses": [
      "delivered"
    ],
    "price": "1252659",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 397341,
    "voucher_platform": 303232,
    "voucher_seller": 94109,
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
        "order_item_id": 20001301,
        "order_id": 2000130,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-SLV",
        "item_price": 1650000,
        "paid_price": 1252659,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 94109,
        "voucher_platform": 303232,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000130B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000131,
    "order_number": "LAZ-MEGA-2000131",
    "created_at": "2026-09-01 06:24:28",
    "updated_at": "2026-09-01 06:37:28",
    "statuses": [
      "shipped"
    ],
    "price": "1094556",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 355444,
    "voucher_platform": 242146,
    "voucher_seller": 113298,
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
        "order_item_id": 20001311,
        "order_id": 2000131,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 1094556,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 113298,
        "voucher_platform": 242146,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000131B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000132,
    "order_number": "LAZ-MEGA-2000132",
    "created_at": "2026-09-03 18:43:07",
    "updated_at": "2026-09-03 20:30:07",
    "statuses": [
      "shipped"
    ],
    "price": "372031",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 517969,
    "voucher_platform": 335279,
    "voucher_seller": 182690,
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
        "order_item_id": 20001321,
        "order_id": 2000132,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 372031,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 182690,
        "voucher_platform": 335279,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000132B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000133,
    "order_number": "LAZ-MEGA-2000133",
    "created_at": "2026-09-02 12:51:07",
    "updated_at": "2026-09-02 13:33:07",
    "statuses": [
      "delivered"
    ],
    "price": "185126",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 1009870,
    "voucher_platform": 764617,
    "voucher_seller": 245253,
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
        "order_item_id": 20001331,
        "order_id": 2000133,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLK",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 104732,
        "voucher_platform": 460264,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000133B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20001332,
        "order_id": 2000133,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLK",
        "item_price": 580000,
        "paid_price": 135126,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 140521,
        "voucher_platform": 304353,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000133C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000134,
    "order_number": "LAZ-MEGA-2000134",
    "created_at": "2026-09-02 04:20:57",
    "updated_at": "2026-09-02 04:47:57",
    "statuses": [
      "delivered"
    ],
    "price": "3313694",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 716306,
    "voucher_platform": 435467,
    "voucher_seller": 280839,
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
        "order_item_id": 20001341,
        "order_id": 2000134,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3234069,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 95055,
        "voucher_platform": 120876,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000134B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 20001342,
        "order_id": 2000134,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 79625,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 185784,
        "voucher_platform": 314591,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000134C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000135,
    "order_number": "LAZ-MEGA-2000135",
    "created_at": "2026-09-01 05:52:38",
    "updated_at": "2026-09-01 08:06:38",
    "statuses": [
      "delivered"
    ],
    "price": "1039332",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 250668,
    "voucher_platform": 155983,
    "voucher_seller": 94685,
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
        "order_item_id": 20001351,
        "order_id": 2000135,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-GRY",
        "item_price": 1290000,
        "paid_price": 1039332,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 94685,
        "voucher_platform": 155983,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000135B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000136,
    "order_number": "LAZ-MEGA-2000136",
    "created_at": "2026-09-01 19:41:33",
    "updated_at": "2026-09-01 20:59:33",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 226279,
    "voucher_platform": 166389,
    "voucher_seller": 59890,
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
        "order_item_id": 20001361,
        "order_id": 2000136,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 59890,
        "voucher_platform": 166389,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000136B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000137,
    "order_number": "LAZ-MEGA-2000137",
    "created_at": "2026-09-01 05:57:26",
    "updated_at": "2026-09-01 08:29:26",
    "statuses": [
      "delivered"
    ],
    "price": "1469753",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 770247,
    "voucher_platform": 575136,
    "voucher_seller": 195111,
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
        "order_item_id": 20001371,
        "order_id": 2000137,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 408016,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 50994,
        "voucher_platform": 330990,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000137B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      },
      {
        "order_item_id": 20001372,
        "order_id": 2000137,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1061737,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 144117,
        "voucher_platform": 244146,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000137C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000138,
    "order_number": "LAZ-MEGA-2000138",
    "created_at": "2026-09-02 09:52:14",
    "updated_at": "2026-09-02 10:48:14",
    "statuses": [
      "delivered"
    ],
    "price": "114545",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 405455,
    "voucher_platform": 217683,
    "voucher_seller": 187772,
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
        "order_item_id": 20001381,
        "order_id": 2000138,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-WHT",
        "item_price": 520000,
        "paid_price": 114545,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 187772,
        "voucher_platform": 217683,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000138B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 2000139,
    "order_number": "LAZ-MEGA-2000139",
    "created_at": "2026-09-03 13:21:52",
    "updated_at": "2026-09-03 15:40:52",
    "statuses": [
      "delivered"
    ],
    "price": "1312006",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 337994,
    "voucher_platform": 218033,
    "voucher_seller": 119961,
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
        "order_item_id": 20001391,
        "order_id": 2000139,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-BLU",
        "item_price": 1650000,
        "paid_price": 1312006,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 119961,
        "voucher_platform": 218033,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000139B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000140,
    "order_number": "LAZ-MEGA-2000140",
    "created_at": "2026-09-02 19:28:01",
    "updated_at": "2026-09-02 19:41:01",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "312409",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 337591,
    "voucher_platform": 168056,
    "voucher_seller": 169535,
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
        "order_item_id": 20001401,
        "order_id": 2000140,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-WHT",
        "item_price": 650000,
        "paid_price": 312409,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 169535,
        "voucher_platform": 168056,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000140B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000141,
    "order_number": "LAZ-MEGA-2000141",
    "created_at": "2026-09-01 06:28:26",
    "updated_at": "2026-09-01 07:28:26",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 481635,
    "voucher_platform": 320474,
    "voucher_seller": 161161,
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
        "order_item_id": 20001411,
        "order_id": 2000141,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 161161,
        "voucher_platform": 320474,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000141B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000142,
    "order_number": "LAZ-MEGA-2000142",
    "created_at": "2026-09-01 20:03:15",
    "updated_at": "2026-09-01 21:08:15",
    "statuses": [
      "delivered"
    ],
    "price": "6487701",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 669045,
    "voucher_platform": 491423,
    "voucher_seller": 177622,
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
        "order_item_id": 20001421,
        "order_id": 2000142,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-GRY",
        "item_price": 6800000,
        "paid_price": 6437701,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 52756,
        "voucher_platform": 309543,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000142B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      },
      {
        "order_item_id": 20001422,
        "order_id": 2000142,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124866,
        "voucher_platform": 181880,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000142C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000143,
    "order_number": "LAZ-MEGA-2000143",
    "created_at": "2026-09-01 02:53:09",
    "updated_at": "2026-09-01 03:05:09",
    "statuses": [
      "shipped"
    ],
    "price": "1571414",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 278586,
    "voucher_platform": 170931,
    "voucher_seller": 107655,
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
        "order_item_id": 20001431,
        "order_id": 2000143,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-GRY",
        "item_price": 1850000,
        "paid_price": 1571414,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 107655,
        "voucher_platform": 170931,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000143B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000144,
    "order_number": "LAZ-MEGA-2000144",
    "created_at": "2026-09-02 11:45:19",
    "updated_at": "2026-09-02 13:57:19",
    "statuses": [
      "delivered"
    ],
    "price": "1264990",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 1105010,
    "voucher_platform": 849445,
    "voucher_seller": 255565,
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
        "order_item_id": 20001441,
        "order_id": 2000144,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 71257,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 81424,
        "voucher_platform": 427319,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000144B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      },
      {
        "order_item_id": 20001442,
        "order_id": 2000144,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1193733,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 174141,
        "voucher_platform": 422126,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000144C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000145,
    "order_number": "LAZ-MEGA-2000145",
    "created_at": "2026-09-03 13:45:44",
    "updated_at": "2026-09-03 15:18:44",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "441288",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 448712,
    "voucher_platform": 374121,
    "voucher_seller": 74591,
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
        "order_item_id": 20001451,
        "order_id": 2000145,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-GRY",
        "item_price": 890000,
        "paid_price": 441288,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 74591,
        "voucher_platform": 374121,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000145B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000146,
    "order_number": "LAZ-MEGA-2000146",
    "created_at": "2026-09-03 09:36:58",
    "updated_at": "2026-09-03 12:17:58",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1396461",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 775353,
    "voucher_platform": 582485,
    "voucher_seller": 192868,
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
        "order_item_id": 20001461,
        "order_id": 2000146,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-GRY",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 54144,
        "voucher_platform": 277670,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000146B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 20001462,
        "order_id": 2000146,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1346461,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 138724,
        "voucher_platform": 304815,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000146C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000147,
    "order_number": "LAZ-MEGA-2000147",
    "created_at": "2026-09-01 08:26:48",
    "updated_at": "2026-09-01 09:45:48",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "335205",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 614795,
    "voucher_platform": 482874,
    "voucher_seller": 131921,
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
        "order_item_id": 20001471,
        "order_id": 2000147,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLU",
        "item_price": 950000,
        "paid_price": 335205,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 131921,
        "voucher_platform": 482874,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000147B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000148,
    "order_number": "LAZ-MEGA-2000148",
    "created_at": "2026-09-03 15:49:45",
    "updated_at": "2026-09-03 17:26:45",
    "statuses": [
      "shipped"
    ],
    "price": "5899760",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 1040240,
    "voucher_platform": 703339,
    "voucher_seller": 336901,
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
        "order_item_id": 20001481,
        "order_id": 2000148,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-SLV",
        "item_price": 5490000,
        "paid_price": 4988629,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 185576,
        "voucher_platform": 315795,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000148B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 20001482,
        "order_id": 2000148,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLU",
        "item_price": 1450000,
        "paid_price": 911131,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 151325,
        "voucher_platform": 387544,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000148C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000149,
    "order_number": "LAZ-MEGA-2000149",
    "created_at": "2026-09-01 12:05:22",
    "updated_at": "2026-09-01 13:28:22",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1192197",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 657803,
    "voucher_platform": 478152,
    "voucher_seller": 179651,
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
        "order_item_id": 20001491,
        "order_id": 2000149,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-WHT",
        "item_price": 1850000,
        "paid_price": 1192197,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 179651,
        "voucher_platform": 478152,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000149B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000150,
    "order_number": "LAZ-MEGA-2000150",
    "created_at": "2026-09-03 14:02:27",
    "updated_at": "2026-09-03 14:58:27",
    "statuses": [
      "shipped"
    ],
    "price": "518910",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 431090,
    "voucher_platform": 355561,
    "voucher_seller": 75529,
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
        "order_item_id": 20001501,
        "order_id": 2000150,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-SLV",
        "item_price": 950000,
        "paid_price": 518910,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 75529,
        "voucher_platform": 355561,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000150B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000151,
    "order_number": "LAZ-MEGA-2000151",
    "created_at": "2026-09-02 23:55:15",
    "updated_at": "2026-09-03 01:06:15",
    "statuses": [
      "shipped"
    ],
    "price": "1583285",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 206715,
    "voucher_platform": 112891,
    "voucher_seller": 93824,
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
        "order_item_id": 20001511,
        "order_id": 2000151,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1583285,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 93824,
        "voucher_platform": 112891,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000151B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000152,
    "order_number": "LAZ-MEGA-2000152",
    "created_at": "2026-09-02 02:52:49",
    "updated_at": "2026-09-02 05:52:49",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "521547",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 228453,
    "voucher_platform": 129374,
    "voucher_seller": 99079,
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
        "order_item_id": 20001521,
        "order_id": 2000152,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-BLK",
        "item_price": 750000,
        "paid_price": 521547,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 99079,
        "voucher_platform": 129374,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000152B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000153,
    "order_number": "LAZ-MEGA-2000153",
    "created_at": "2026-09-02 16:43:20",
    "updated_at": "2026-09-02 19:02:20",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 555122,
    "voucher_platform": 450677,
    "voucher_seller": 104445,
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
        "order_item_id": 20001531,
        "order_id": 2000153,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLK",
        "item_price": 520000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 104445,
        "voucher_platform": 450677,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000153B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      }
    ]
  },
  {
    "order_id": 2000154,
    "order_number": "LAZ-MEGA-2000154",
    "created_at": "2026-09-03 03:20:55",
    "updated_at": "2026-09-03 03:41:55",
    "statuses": [
      "delivered"
    ],
    "price": "28237405",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 262595,
    "voucher_platform": 193858,
    "voucher_seller": 68737,
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
        "order_item_id": 20001541,
        "order_id": 2000154,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-WHT",
        "item_price": 28500000,
        "paid_price": 28237405,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 68737,
        "voucher_platform": 193858,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000154B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000155,
    "order_number": "LAZ-MEGA-2000155",
    "created_at": "2026-09-02 06:48:59",
    "updated_at": "2026-09-02 07:50:59",
    "statuses": [
      "delivered"
    ],
    "price": "1458857",
    "items_count": 2,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 981143,
    "voucher_platform": 791566,
    "voucher_seller": 189577,
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
        "order_item_id": 20001551,
        "order_id": 2000155,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 54307,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 118201,
        "voucher_platform": 477492,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000155B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      },
      {
        "order_item_id": 20001552,
        "order_id": 2000155,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-WHT",
        "item_price": 1790000,
        "paid_price": 1404550,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 71376,
        "voucher_platform": 314074,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000155C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000156,
    "order_number": "LAZ-MEGA-2000156",
    "created_at": "2026-09-01 23:54:04",
    "updated_at": "2026-09-02 02:25:04",
    "statuses": [
      "shipped"
    ],
    "price": "994775",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 845225,
    "voucher_platform": 534833,
    "voucher_seller": 310392,
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
        "order_item_id": 20001561,
        "order_id": 2000156,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLK",
        "item_price": 950000,
        "paid_price": 635682,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 122063,
        "voucher_platform": 192255,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000156B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      },
      {
        "order_item_id": 20001562,
        "order_id": 2000156,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-BLU",
        "item_price": 890000,
        "paid_price": 359093,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 188329,
        "voucher_platform": 342578,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000156C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000157,
    "order_number": "LAZ-MEGA-2000157",
    "created_at": "2026-09-03 18:04:42",
    "updated_at": "2026-09-03 18:19:42",
    "statuses": [
      "shipped"
    ],
    "price": "275113",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 889676,
    "voucher_platform": 736505,
    "voucher_seller": 153171,
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
        "order_item_id": 20001571,
        "order_id": 2000157,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-BLU",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 85401,
        "voucher_platform": 449388,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000157B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 20001572,
        "order_id": 2000157,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 225113,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 67770,
        "voucher_platform": 287117,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000157C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000158,
    "order_number": "LAZ-MEGA-2000158",
    "created_at": "2026-09-01 06:06:00",
    "updated_at": "2026-09-01 09:03:00",
    "statuses": [
      "delivered"
    ],
    "price": "27960998",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 539002,
    "voucher_platform": 439940,
    "voucher_seller": 99062,
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
        "order_item_id": 20001581,
        "order_id": 2000158,
        "shop_id": "SHOP_VN_01",
        "name": "Laptop Gaming Core i9 RTX 4080 32GB RAM 1TB SSD",
        "sku": "LAP-I9-4080-32G",
        "shop_sku": "LAP-I9-4080-32G-SLV",
        "item_price": 28500000,
        "paid_price": 27960998,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 99062,
        "voucher_platform": 439940,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000158B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
      }
    ]
  },
  {
    "order_id": 2000159,
    "order_number": "LAZ-MEGA-2000159",
    "created_at": "2026-09-03 17:26:15",
    "updated_at": "2026-09-03 19:29:15",
    "statuses": [
      "delivered"
    ],
    "price": "3937174",
    "items_count": 2,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 1162826,
    "voucher_platform": 838957,
    "voucher_seller": 323869,
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
        "order_item_id": 20001591,
        "order_id": 2000159,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1063316,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 178409,
        "voucher_platform": 408275,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000159B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20001592,
        "order_id": 2000159,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 2873858,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 145460,
        "voucher_platform": 430682,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000159C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000160,
    "order_number": "LAZ-MEGA-2000160",
    "created_at": "2026-09-01 23:42:56",
    "updated_at": "2026-09-02 02:08:56",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6203095",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 736905,
    "voucher_platform": 579093,
    "voucher_seller": 157812,
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
        "order_item_id": 20001601,
        "order_id": 2000160,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-GRY",
        "item_price": 1450000,
        "paid_price": 1064696,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 65525,
        "voucher_platform": 319779,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000160B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      },
      {
        "order_item_id": 20001602,
        "order_id": 2000160,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5138399,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92287,
        "voucher_platform": 259314,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000160C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000161,
    "order_number": "LAZ-MEGA-2000161",
    "created_at": "2026-09-02 10:37:14",
    "updated_at": "2026-09-02 12:34:14",
    "statuses": [
      "delivered"
    ],
    "price": "5125688",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 1254312,
    "voucher_platform": 868623,
    "voucher_seller": 385689,
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
        "order_item_id": 20001611,
        "order_id": 2000161,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-WHT",
        "item_price": 5490000,
        "paid_price": 4823823,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 192952,
        "voucher_platform": 473225,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000161B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 20001612,
        "order_id": 2000161,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-GRY",
        "item_price": 890000,
        "paid_price": 301865,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 192737,
        "voucher_platform": 395398,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000161C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000162,
    "order_number": "LAZ-MEGA-2000162",
    "created_at": "2026-09-02 08:46:19",
    "updated_at": "2026-09-02 11:28:19",
    "statuses": [
      "shipped"
    ],
    "price": "591281",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 198719,
    "voucher_platform": 143412,
    "voucher_seller": 55307,
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
        "order_item_id": 20001621,
        "order_id": 2000162,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-WHT",
        "item_price": 790000,
        "paid_price": 591281,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 55307,
        "voucher_platform": 143412,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000162B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 2000163,
    "order_number": "LAZ-MEGA-2000163",
    "created_at": "2026-09-03 15:23:36",
    "updated_at": "2026-09-03 16:07:36",
    "statuses": [
      "shipped"
    ],
    "price": "1417835",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 372165,
    "voucher_platform": 224752,
    "voucher_seller": 147413,
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
        "order_item_id": 20001631,
        "order_id": 2000163,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1417835,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 147413,
        "voucher_platform": 224752,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000163B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000164,
    "order_number": "LAZ-MEGA-2000164",
    "created_at": "2026-09-03 11:47:00",
    "updated_at": "2026-09-03 14:00:00",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "6366583",
    "items_count": 3,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 1226659,
    "voucher_platform": 956991,
    "voucher_seller": 269668,
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
        "order_item_id": 20001641,
        "order_id": 2000164,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5026837,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 98939,
        "voucher_platform": 364224,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000164B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      },
      {
        "order_item_id": 20001642,
        "order_id": 2000164,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-SLV",
        "item_price": 1650000,
        "paid_price": 1289746,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 85180,
        "voucher_platform": 275074,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000164C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20001643,
        "order_id": 2000164,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-WHT",
        "item_price": 320000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 85549,
        "voucher_platform": 317693,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000164D",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      }
    ]
  },
  {
    "order_id": 2000165,
    "order_number": "LAZ-MEGA-2000165",
    "created_at": "2026-09-01 15:42:04",
    "updated_at": "2026-09-01 18:12:04",
    "statuses": [
      "shipped"
    ],
    "price": "2421687",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 658313,
    "voucher_platform": 493649,
    "voucher_seller": 164664,
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
        "order_item_id": 20001651,
        "order_id": 2000165,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-SLV",
        "item_price": 1790000,
        "paid_price": 1504899,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 72316,
        "voucher_platform": 212785,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000165B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      },
      {
        "order_item_id": 20001652,
        "order_id": 2000165,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 916788,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92348,
        "voucher_platform": 280864,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000165C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000166,
    "order_number": "LAZ-MEGA-2000166",
    "created_at": "2026-09-01 12:18:40",
    "updated_at": "2026-09-01 12:46:40",
    "statuses": [
      "shipped"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 500306,
    "voucher_platform": 446657,
    "voucher_seller": 53649,
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
        "order_item_id": 20001661,
        "order_id": 2000166,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-WHT",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 53649,
        "voucher_platform": 446657,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000166B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000167,
    "order_number": "LAZ-MEGA-2000167",
    "created_at": "2026-09-01 08:46:25",
    "updated_at": "2026-09-01 09:01:25",
    "statuses": [
      "shipped"
    ],
    "price": "3225815",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 224185,
    "voucher_platform": 126675,
    "voucher_seller": 97510,
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
        "order_item_id": 20001671,
        "order_id": 2000167,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3225815,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 97510,
        "voucher_platform": 126675,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000167B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000168,
    "order_number": "LAZ-MEGA-2000168",
    "created_at": "2026-09-03 16:09:38",
    "updated_at": "2026-09-03 17:45:38",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 562220,
    "voucher_platform": 497770,
    "voucher_seller": 64450,
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
        "order_item_id": 20001681,
        "order_id": 2000168,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-SLV",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 64450,
        "voucher_platform": 497770,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000168B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000169,
    "order_number": "LAZ-MEGA-2000169",
    "created_at": "2026-09-03 19:17:09",
    "updated_at": "2026-09-03 20:12:09",
    "statuses": [
      "shipped"
    ],
    "price": "5013683",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 476317,
    "voucher_platform": 397401,
    "voucher_seller": 78916,
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
        "order_item_id": 20001691,
        "order_id": 2000169,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLK",
        "item_price": 5490000,
        "paid_price": 5013683,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 78916,
        "voucher_platform": 397401,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000169B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000170,
    "order_number": "LAZ-MEGA-2000170",
    "created_at": "2026-09-01 13:22:45",
    "updated_at": "2026-09-01 13:44:45",
    "statuses": [
      "delivered"
    ],
    "price": "6218326",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 581674,
    "voucher_platform": 485383,
    "voucher_seller": 96291,
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
        "order_item_id": 20001701,
        "order_id": 2000170,
        "shop_id": "SHOP_VN_01",
        "name": "Máy lọc không khí thông minh Smart HEPA Filter",
        "sku": "AIR-PURIFIER-HEPA-01",
        "shop_sku": "AIR-PURIFIER-HEPA-01-BLK",
        "item_price": 6800000,
        "paid_price": 6218326,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 96291,
        "voucher_platform": 485383,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000170B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
      }
    ]
  },
  {
    "order_id": 2000171,
    "order_number": "LAZ-MEGA-2000171",
    "created_at": "2026-09-03 13:35:24",
    "updated_at": "2026-09-03 16:09:24",
    "statuses": [
      "shipped"
    ],
    "price": "5013269",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 476731,
    "voucher_platform": 295734,
    "voucher_seller": 180997,
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
        "order_item_id": 20001711,
        "order_id": 2000171,
        "shop_id": "SHOP_VN_01",
        "name": "Màn hình đồ họa 27 inch 4K IPS 144Hz HDR",
        "sku": "MON-4K-27-IPS",
        "shop_sku": "MON-4K-27-IPS-BLU",
        "item_price": 5490000,
        "paid_price": 5013269,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 180997,
        "voucher_platform": 295734,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000171B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      }
    ]
  },
  {
    "order_id": 2000172,
    "order_number": "LAZ-MEGA-2000172",
    "created_at": "2026-09-02 16:27:56",
    "updated_at": "2026-09-02 19:02:56",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 628736,
    "voucher_platform": 480562,
    "voucher_seller": 148174,
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
        "order_item_id": 20001721,
        "order_id": 2000172,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-BLU",
        "item_price": 580000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 148174,
        "voucher_platform": 480562,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000172B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000173,
    "order_number": "LAZ-MEGA-2000173",
    "created_at": "2026-09-02 06:37:53",
    "updated_at": "2026-09-02 08:55:53",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3703392",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 496608,
    "voucher_platform": 339717,
    "voucher_seller": 156891,
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
        "order_item_id": 20001731,
        "order_id": 2000173,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-WHT",
        "item_price": 4200000,
        "paid_price": 3703392,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 156891,
        "voucher_platform": 339717,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000173B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000174,
    "order_number": "LAZ-MEGA-2000174",
    "created_at": "2026-09-01 09:59:32",
    "updated_at": "2026-09-01 11:05:32",
    "statuses": [
      "shipped"
    ],
    "price": "442677",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 667323,
    "voucher_platform": 429202,
    "voucher_seller": 238121,
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
        "order_item_id": 20001741,
        "order_id": 2000174,
        "shop_id": "SHOP_VN_01",
        "name": "Giá đỡ laptop nhôm tản nhiệt có thể gập gọn",
        "sku": "STAND-ALU-LAP-01",
        "shop_sku": "STAND-ALU-LAP-01-SLV",
        "item_price": 320000,
        "paid_price": 87889,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 92555,
        "voucher_platform": 139556,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000174B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
      },
      {
        "order_item_id": 20001742,
        "order_id": 2000174,
        "shop_id": "SHOP_VN_01",
        "name": "Hub chuyển đổi USB-C 8 trong 1 4K HDMI PD 100W",
        "sku": "HUB-USBC-8IN1-4K",
        "shop_sku": "HUB-USBC-8IN1-4K-SLV",
        "item_price": 790000,
        "paid_price": 354788,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 145566,
        "voucher_platform": 289646,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000174C",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1622445262464-84b24e406239?w=500"
      }
    ]
  },
  {
    "order_id": 2000175,
    "order_number": "LAZ-MEGA-2000175",
    "created_at": "2026-09-03 23:57:56",
    "updated_at": "2026-09-04 02:10:56",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "279767",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 670233,
    "voucher_platform": 471477,
    "voucher_seller": 198756,
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
        "order_item_id": 20001751,
        "order_id": 2000175,
        "shop_id": "SHOP_VN_01",
        "name": "Balo laptop cao cấp chống sốc chống thấm nước",
        "sku": "BAG-LAP-WATERPROOF",
        "shop_sku": "BAG-LAP-WATERPROOF-BLU",
        "item_price": 950000,
        "paid_price": 279767,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 198756,
        "voucher_platform": 471477,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000175B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
      }
    ]
  },
  {
    "order_id": 2000176,
    "order_number": "LAZ-MEGA-2000176",
    "created_at": "2026-09-01 14:31:15",
    "updated_at": "2026-09-01 15:12:15",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1308331",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 341669,
    "voucher_platform": 266631,
    "voucher_seller": 75038,
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
        "order_item_id": 20001761,
        "order_id": 2000176,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-SLV",
        "item_price": 1650000,
        "paid_price": 1308331,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 75038,
        "voucher_platform": 266631,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000176B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      }
    ]
  },
  {
    "order_id": 2000177,
    "order_number": "LAZ-MEGA-2000177",
    "created_at": "2026-09-01 17:31:02",
    "updated_at": "2026-09-01 20:07:02",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 323951,
    "voucher_platform": 224506,
    "voucher_seller": 99445,
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
        "order_item_id": 20001771,
        "order_id": 2000177,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 99445,
        "voucher_platform": 224506,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000177B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000178,
    "order_number": "LAZ-MEGA-2000178",
    "created_at": "2026-09-03 20:26:18",
    "updated_at": "2026-09-03 22:22:18",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 258949,
    "voucher_platform": 170440,
    "voucher_seller": 88509,
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
        "order_item_id": 20001781,
        "order_id": 2000178,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLK",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 88509,
        "voucher_platform": 170440,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000178B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      }
    ]
  },
  {
    "order_id": 2000179,
    "order_number": "LAZ-MEGA-2000179",
    "created_at": "2026-09-03 10:05:58",
    "updated_at": "2026-09-03 12:23:58",
    "statuses": [
      "shipped"
    ],
    "price": "1650269",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 199731,
    "voucher_platform": 134024,
    "voucher_seller": 65707,
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
        "order_item_id": 20001791,
        "order_id": 2000179,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1650269,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 65707,
        "voucher_platform": 134024,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000179B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000180,
    "order_number": "LAZ-MEGA-2000180",
    "created_at": "2026-09-01 08:40:32",
    "updated_at": "2026-09-01 11:33:32",
    "statuses": [
      "shipped"
    ],
    "price": "58535",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 521465,
    "voucher_platform": 455970,
    "voucher_seller": 65495,
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
        "order_item_id": 20001801,
        "order_id": 2000180,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-WHT",
        "item_price": 580000,
        "paid_price": 58535,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 65495,
        "voucher_platform": 455970,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000180B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000181,
    "order_number": "LAZ-MEGA-2000181",
    "created_at": "2026-09-03 09:57:37",
    "updated_at": "2026-09-03 11:26:37",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3759917",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 440083,
    "voucher_platform": 256712,
    "voucher_seller": 183371,
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
        "order_item_id": 20001811,
        "order_id": 2000181,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-GRY",
        "item_price": 4200000,
        "paid_price": 3759917,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 183371,
        "voucher_platform": 256712,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000181B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000182,
    "order_number": "LAZ-MEGA-2000182",
    "created_at": "2026-09-03 06:26:05",
    "updated_at": "2026-09-03 06:46:05",
    "statuses": [
      "shipped"
    ],
    "price": "362790",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 217210,
    "voucher_platform": 141147,
    "voucher_seller": 76063,
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
        "order_item_id": 20001821,
        "order_id": 2000182,
        "shop_id": "SHOP_VN_01",
        "name": "Đèn bàn LED bảo vệ mắt chống cận cảm ứng 5 chế độ",
        "sku": "LAMP-LED-EYE-01",
        "shop_sku": "LAMP-LED-EYE-01-SLV",
        "item_price": 580000,
        "paid_price": 362790,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 76063,
        "voucher_platform": 141147,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000182B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
      }
    ]
  },
  {
    "order_id": 2000183,
    "order_number": "LAZ-MEGA-2000183",
    "created_at": "2026-09-01 09:52:29",
    "updated_at": "2026-09-01 12:40:29",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 560094,
    "voucher_platform": 464773,
    "voucher_seller": 95321,
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
        "order_item_id": 20001831,
        "order_id": 2000183,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-GRY",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 95321,
        "voucher_platform": 464773,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000183B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000184,
    "order_number": "LAZ-MEGA-2000184",
    "created_at": "2026-09-03 22:20:02",
    "updated_at": "2026-09-03 23:47:02",
    "statuses": [
      "delivered"
    ],
    "price": "1167290",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 1132710,
    "voucher_platform": 862055,
    "voucher_seller": 270655,
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
        "order_item_id": 20001841,
        "order_id": 2000184,
        "shop_id": "SHOP_VN_01",
        "name": "Loa Bluetooth di động chống nước IPX7 Bass Boost 30W",
        "sku": "SPK-BT-IPX7-01",
        "shop_sku": "SPK-BT-IPX7-01-GRY",
        "item_price": 1650000,
        "paid_price": 1097550,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 141798,
        "voucher_platform": 410652,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000184B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
      },
      {
        "order_item_id": 20001842,
        "order_id": 2000184,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLU",
        "item_price": 650000,
        "paid_price": 69740,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 128857,
        "voucher_platform": 451403,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000184C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000185,
    "order_number": "LAZ-MEGA-2000185",
    "created_at": "2026-09-02 10:42:28",
    "updated_at": "2026-09-02 10:55:28",
    "statuses": [
      "shipped"
    ],
    "price": "3059971",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 390029,
    "voucher_platform": 214779,
    "voucher_seller": 175250,
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
        "order_item_id": 20001851,
        "order_id": 2000185,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-SLV",
        "item_price": 3450000,
        "paid_price": 3059971,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 175250,
        "voucher_platform": 214779,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000185B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  },
  {
    "order_id": 2000186,
    "order_number": "LAZ-MEGA-2000186",
    "created_at": "2026-09-02 10:55:19",
    "updated_at": "2026-09-02 11:53:19",
    "statuses": [
      "delivered"
    ],
    "price": "3583874",
    "items_count": 2,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 616126,
    "voucher_platform": 263555,
    "voucher_seller": 352571,
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
        "order_item_id": 20001861,
        "order_id": 2000186,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-BLK",
        "item_price": 3450000,
        "paid_price": 3126414,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 178650,
        "voucher_platform": 144936,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000186B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      },
      {
        "order_item_id": 20001862,
        "order_id": 2000186,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 457460,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 173921,
        "voucher_platform": 118619,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000186C",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000187,
    "order_number": "LAZ-MEGA-2000187",
    "created_at": "2026-09-03 03:41:02",
    "updated_at": "2026-09-03 06:38:02",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1188215",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 601785,
    "voucher_platform": 417367,
    "voucher_seller": 184418,
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
        "order_item_id": 20001871,
        "order_id": 2000187,
        "shop_id": "SHOP_VN_01",
        "name": "Đồng hồ thông minh Smartwatch Amoled Heart Rate SpO2",
        "sku": "WATCH-AMOLED-HR-01",
        "shop_sku": "WATCH-AMOLED-HR-01-BLU",
        "item_price": 1790000,
        "paid_price": 1188215,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 184418,
        "voucher_platform": 417367,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000187B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
      }
    ]
  },
  {
    "order_id": 2000188,
    "order_number": "LAZ-MEGA-2000188",
    "created_at": "2026-09-03 23:48:18",
    "updated_at": "2026-09-04 00:03:18",
    "statuses": [
      "shipped"
    ],
    "price": "954812",
    "items_count": 1,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 335188,
    "voucher_platform": 211272,
    "voucher_seller": 123916,
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
        "order_item_id": 20001881,
        "order_id": 2000188,
        "shop_id": "SHOP_VN_01",
        "name": "Micro thu âm Podcast USB Condenser Cardioid",
        "sku": "MIC-USB-PODCAST-01",
        "shop_sku": "MIC-USB-PODCAST-01-WHT",
        "item_price": 1290000,
        "paid_price": 954812,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 123916,
        "voucher_platform": 211272,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000188B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
      }
    ]
  },
  {
    "order_id": 2000189,
    "order_number": "LAZ-MEGA-2000189",
    "created_at": "2026-09-01 11:54:27",
    "updated_at": "2026-09-01 14:13:27",
    "statuses": [
      "shipped"
    ],
    "price": "2306769",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 993231,
    "voucher_platform": 678144,
    "voucher_seller": 315087,
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
        "order_item_id": 20001891,
        "order_id": 2000189,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1318504,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 148206,
        "voucher_platform": 383290,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000189B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      },
      {
        "order_item_id": 20001892,
        "order_id": 2000189,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLU",
        "item_price": 1450000,
        "paid_price": 988265,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 166881,
        "voucher_platform": 294854,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000189C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000190,
    "order_number": "LAZ-MEGA-2000190",
    "created_at": "2026-09-01 03:11:06",
    "updated_at": "2026-09-01 05:43:06",
    "statuses": [
      "shipped"
    ],
    "price": "3720135",
    "items_count": 2,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 874352,
    "voucher_platform": 662876,
    "voucher_seller": 211476,
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
        "order_item_id": 20001901,
        "order_id": 2000190,
        "shop_id": "SHOP_VN_01",
        "name": "Thảm lót chuột và bàn phím da PU cao cấp 90x40cm",
        "sku": "PAD-DESK-PU-9040",
        "shop_sku": "PAD-DESK-PU-9040-BLK",
        "item_price": 250000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124133,
        "voucher_platform": 220354,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000190B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"
      },
      {
        "order_item_id": 20001902,
        "order_id": 2000190,
        "shop_id": "SHOP_VN_01",
        "name": "Robot hút bụi lau nhà tự động Laser Navigation Lidar",
        "sku": "ROBOT-VAC-LASER-01",
        "shop_sku": "ROBOT-VAC-LASER-01-GRY",
        "item_price": 4200000,
        "paid_price": 3670135,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 87343,
        "voucher_platform": 442522,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000190C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500"
      }
    ]
  },
  {
    "order_id": 2000191,
    "order_number": "LAZ-MEGA-2000191",
    "created_at": "2026-09-01 14:45:38",
    "updated_at": "2026-09-01 16:31:38",
    "statuses": [
      "delivered"
    ],
    "price": "1303001",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 546999,
    "voucher_platform": 388987,
    "voucher_seller": 158012,
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
        "order_item_id": 20001911,
        "order_id": 2000191,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLK",
        "item_price": 1850000,
        "paid_price": 1303001,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 158012,
        "voucher_platform": 388987,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000191B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000192,
    "order_number": "LAZ-MEGA-2000192",
    "created_at": "2026-09-03 02:38:39",
    "updated_at": "2026-09-03 04:28:39",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "943707",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 506293,
    "voucher_platform": 410220,
    "voucher_seller": 96073,
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
        "order_item_id": 20001921,
        "order_id": 2000192,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLU",
        "item_price": 1450000,
        "paid_price": 943707,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 96073,
        "voucher_platform": 410220,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000192B",
        "shipping_provider": "Giao Hàng Tiết Kiệm",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000193,
    "order_number": "LAZ-MEGA-2000193",
    "created_at": "2026-09-02 01:28:30",
    "updated_at": "2026-09-02 03:14:30",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "709830",
    "items_count": 2,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 560170,
    "voucher_platform": 305540,
    "voucher_seller": 254630,
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
        "order_item_id": 20001931,
        "order_id": 2000193,
        "shop_id": "SHOP_VN_01",
        "name": "Pin sạc dự phòng 20000mAh sạc nhanh 22.5W QC 3.0",
        "sku": "PB-20000-QC3-01",
        "shop_sku": "PB-20000-QC3-01-BLU",
        "item_price": 520000,
        "paid_price": 209593,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 143133,
        "voucher_platform": 167274,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000193B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1609592424364-4e1b4aa982ef?w=500"
      },
      {
        "order_item_id": 20001932,
        "order_id": 2000193,
        "shop_id": "SHOP_VN_01",
        "name": "Chuột công thái học Ergonomic Wireless 2.4G",
        "sku": "MS-ERGO-WL-02",
        "shop_sku": "MS-ERGO-WL-02-GRY",
        "item_price": 750000,
        "paid_price": 500237,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 111497,
        "voucher_platform": 138266,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000193C",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500"
      }
    ]
  },
  {
    "order_id": 2000194,
    "order_number": "LAZ-MEGA-2000194",
    "created_at": "2026-09-03 09:53:28",
    "updated_at": "2026-09-03 12:16:28",
    "statuses": [
      "delivered"
    ],
    "price": "50000",
    "items_count": 1,
    "payment_method": "COD",
    "shipping_fee": 0,
    "voucher": 368387,
    "voucher_platform": 291652,
    "voucher_seller": 76735,
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
        "order_item_id": 20001941,
        "order_id": 2000194,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-SLV",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 76735,
        "voucher_platform": 291652,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000194B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      }
    ]
  },
  {
    "order_id": 2000195,
    "order_number": "LAZ-MEGA-2000195",
    "created_at": "2026-09-03 23:05:14",
    "updated_at": "2026-09-03 23:21:14",
    "statuses": [
      "delivered"
    ],
    "price": "1498962",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 351038,
    "voucher_platform": 286076,
    "voucher_seller": 64962,
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
        "order_item_id": 20001951,
        "order_id": 2000195,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLU",
        "item_price": 1850000,
        "paid_price": 1498962,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 64962,
        "voucher_platform": 286076,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000195B",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000196,
    "order_number": "LAZ-MEGA-2000196",
    "created_at": "2026-09-01 13:11:12",
    "updated_at": "2026-09-01 14:34:12",
    "statuses": [
      "delivered"
    ],
    "price": "834846",
    "items_count": 1,
    "payment_method": "ZaloPay",
    "shipping_fee": 0,
    "voucher": 615154,
    "voucher_platform": 457300,
    "voucher_seller": 157854,
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
        "order_item_id": 20001961,
        "order_id": 2000196,
        "shop_id": "SHOP_VN_01",
        "name": "Tai nghe chống ồn chủ động ANC Over-Ear Hi-Res",
        "sku": "HP-ANC-OVER-01",
        "shop_sku": "HP-ANC-OVER-01-BLK",
        "item_price": 1450000,
        "paid_price": 834846,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 157854,
        "voucher_platform": 457300,
        "shipping_fee": 15000,
        "status": "delivered",
        "tracking_code": "LEXVN2000196B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ]
  },
  {
    "order_id": 2000197,
    "order_number": "LAZ-MEGA-2000197",
    "created_at": "2026-09-01 01:27:27",
    "updated_at": "2026-09-01 04:07:27",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "419893",
    "items_count": 1,
    "payment_method": "Bank Transfer",
    "shipping_fee": 0,
    "voucher": 470107,
    "voucher_platform": 353808,
    "voucher_seller": 116299,
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
        "order_item_id": 20001971,
        "order_id": 2000197,
        "shop_id": "SHOP_VN_01",
        "name": "Webcam Ultra HD 4K tích hợp Dual Mic chống ồn",
        "sku": "WC-4K-PRO-01",
        "shop_sku": "WC-4K-PRO-01-WHT",
        "item_price": 890000,
        "paid_price": 419893,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 116299,
        "voucher_platform": 353808,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000197B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
      }
    ]
  },
  {
    "order_id": 2000198,
    "order_number": "LAZ-MEGA-2000198",
    "created_at": "2026-09-03 16:30:32",
    "updated_at": "2026-09-03 16:50:32",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "1351787",
    "items_count": 1,
    "payment_method": "Momo",
    "shipping_fee": 0,
    "voucher": 498213,
    "voucher_platform": 373553,
    "voucher_seller": 124660,
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
        "order_item_id": 20001981,
        "order_id": 2000198,
        "shop_id": "SHOP_VN_01",
        "name": "Bàn phím cơ không dây Bluetooth RGB 3-Mode",
        "sku": "KB-RGB-BT-01",
        "shop_sku": "KB-RGB-BT-01-BLK",
        "item_price": 1850000,
        "paid_price": 1351787,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 124660,
        "voucher_platform": 373553,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000198B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
      }
    ]
  },
  {
    "order_id": 2000199,
    "order_number": "LAZ-MEGA-2000199",
    "created_at": "2026-09-02 10:45:37",
    "updated_at": "2026-09-02 13:29:37",
    "statuses": [
      "shipped"
    ],
    "price": "76455",
    "items_count": 1,
    "payment_method": "ShopeePay",
    "shipping_fee": 0,
    "voucher": 573545,
    "voucher_platform": 378045,
    "voucher_seller": 195500,
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
        "order_item_id": 20001991,
        "order_id": 2000199,
        "shop_id": "SHOP_VN_01",
        "name": "Bộ sạc nhanh GaN 65W 3 cổng Type-C + USB-A",
        "sku": "CHG-GAN-65W-01",
        "shop_sku": "CHG-GAN-65W-01-BLK",
        "item_price": 650000,
        "paid_price": 76455,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 195500,
        "voucher_platform": 378045,
        "shipping_fee": 15000,
        "status": "shipped",
        "tracking_code": "LEXVN2000199B",
        "shipping_provider": "Ninja Van",
        "product_main_image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
      }
    ]
  },
  {
    "order_id": 2000200,
    "order_number": "LAZ-MEGA-2000200",
    "created_at": "2026-09-01 09:54:51",
    "updated_at": "2026-09-01 10:24:51",
    "statuses": [
      "ready_to_ship"
    ],
    "price": "3115678",
    "items_count": 2,
    "payment_method": "Credit Card",
    "shipping_fee": 0,
    "voucher": 907334,
    "voucher_platform": 620300,
    "voucher_seller": 287034,
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
        "order_item_id": 20002001,
        "order_id": 2000200,
        "shop_id": "SHOP_VN_01",
        "name": "Cáp sạc nhanh Type-C to Type-C 100W bọc dù 2m",
        "sku": "CABLE-C2C-100W-2M",
        "shop_sku": "CABLE-C2C-100W-2M-BLU",
        "item_price": 180000,
        "paid_price": 50000,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 87249,
        "voucher_platform": 435763,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000200B",
        "shipping_provider": "Lazada Express",
        "product_main_image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"
      },
      {
        "order_item_id": 20002002,
        "order_id": 2000200,
        "shop_id": "SHOP_VN_01",
        "name": "Ghế công thái học Ergonomic Breathable Mesh Pro",
        "sku": "CHAIR-MESH-ERG-01",
        "shop_sku": "CHAIR-MESH-ERG-01-GRY",
        "item_price": 3450000,
        "paid_price": 3065678,
        "currency": "VND",
        "wallet_discount": 0,
        "voucher_seller": 199785,
        "voucher_platform": 184537,
        "shipping_fee": 15000,
        "status": "ready_to_ship",
        "tracking_code": "LEXVN2000200C",
        "shipping_provider": "Best Express",
        "product_main_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"
      }
    ]
  }
];

export const megaSaleSeedProfile: SeedProfile = {
  key: 'mega_sale',
  name: 'Mega Sale 9.9 Campaign (200 Orders)',
  description: 'Tập dữ liệu Mega Sale gồm 200 đơn hàng giá trị cao, áp dụng voucher lớn, freeship và trạng thái đang xử lý.',
  orders: megaSaleOrders,
};
