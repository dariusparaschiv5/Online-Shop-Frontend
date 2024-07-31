export interface OrderProduct {
  product: string;
  shippedFrom: string;
  quantity: number;
}

export interface CreateOrderDTO {
  customer: string;
  country: string;
  city: string;
  county: string;
  addressStreet: string;
  orderProducts: OrderProduct[];
}