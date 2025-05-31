export interface User {}

export interface LoginDto {
  username: string;
  password: string;
}

export interface Token {
  serial: string;
  customerId: string;
  dueDate: string;
  isExpired: boolean;
  currentCode: string;
}
