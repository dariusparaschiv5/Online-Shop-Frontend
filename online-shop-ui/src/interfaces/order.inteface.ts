export interface OrderDetail {
  productId: string;
  locationId: string;
  quantity: number;
}

export interface CreateOrderDTO {
  customerId: string;
  createdAt: Date;
  country: string;
  city: string;
  county: string;
  streetAdress: string;
  orderDetails: OrderDetail[];
}
