export type LazadaOrderStatus =
  | 'unpaid'
  | 'pending'
  | 'ready_to_ship'
  | 'shipped'
  | 'delivered'
  | 'canceled'
  | 'returned'
  | 'failed';

export interface LazadaAddressDTO {
  first_name: string;
  last_name: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  post_code: string;
  country: string;
}

export interface LazadaOrderItemDTO {
  order_item_id: number;
  order_id: number;
  shop_id: string;
  name: string;
  sku: string;
  shop_sku: string;
  item_price: number;
  paid_price: number;
  currency: string;
  wallet_discount: number;
  voucher_seller: number;
  voucher_platform: number;
  shipping_fee: number;
  status: LazadaOrderStatus;
  tracking_code?: string;
  shipping_provider?: string;
  package_id?: string;
  product_main_image?: string;
  reason?: string;
}

export interface LazadaOrderDTO {
  order_id: number;
  order_number: string;
  created_at: string;
  updated_at: string;
  statuses: LazadaOrderStatus[];
  price: string;
  items_count: number;
  payment_method: string;
  shipping_fee: number;
  voucher: number;
  voucher_platform: number;
  voucher_seller: number;
  branch_number?: string;
  tax_code?: string;
  extra_attributes?: string;
  remarks?: string;
  delivery_info?: string;
  promised_shipping_times?: string;
  address_billing: LazadaAddressDTO;
  address_shipping: LazadaAddressDTO;
  buyer: {
    buyer_id: string;
    first_name: string;
    last_name: string;
    phone?: string;
    email?: string;
  };
  items?: LazadaOrderItemDTO[];
}

export interface LazadaApiResponse<T> {
  code: string;
  type?: string;
  message?: string;
  request_id: string;
  data?: T;
}

export interface LazadaOrdersGetResponse {
  count: number;
  countTotal: number;
  orders: LazadaOrderDTO[];
}

export type SeedKey = 'default' | 'mega_sale' | 'high_returns' | 'fresh_orders';

export interface SeedProfile {
  key: SeedKey;
  name: string;
  description: string;
  orders: LazadaOrderDTO[];
}
