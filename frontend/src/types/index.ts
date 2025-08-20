// Product types
export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews?: Review[];
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
  createdAt: string;
}

// User types
export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
}

export interface UserInfo extends User {
  token: string;
}

// Cart types
export interface CartItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  paymentMethod: string;
}

// Order types
export interface OrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
}

export interface Order {
  _id: string;
  user: User;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult?: {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
  };
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
}

// API Response types
export interface ProductListResponse {
  products: Product[];
  page: number;
  pages: number;
}

export interface ApiError {
  message: string;
  stack?: string;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileFormData {
  name: string;
  email: string;
  password?: string;
}

export interface ShippingFormData {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
