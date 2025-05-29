export interface Transaction {
  id: number;
  type: "DEBIT" | "CREDIT";
  amount: number;
  currency: "DOP" | "USD" | "EUR";
  date: Date;
  originProductId: number;
  beneficiaryProductId: number;
  status: "PROCESING" | "COMPLETED" | "CANCELED";
  description: string;
}
