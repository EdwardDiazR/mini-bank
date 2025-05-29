import { Transaction } from "./Transaction";

export interface Account {
  id: number;
  regionalNumber: string;
  currency: "DOP" | "USD" | "EUR";
  status: "OPEN" | "CLOSED";
  customerName: string;
  totalBalance: number;
  inTransitBalance: number;
  blockedBalance: number;
  availableBalance: number;
  transactions: Transaction[];
  createdDate: Date;
  lastDepositDate: Date;
  lastMovementDate: Date;
  isFirstDeposit: boolean;
}
