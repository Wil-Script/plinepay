export class Payment {
  constructor(
    public reason: string,
    public amount:number,
    public paymentMethod: string,
    public currency: string,
    public status: string,
    public applicationName: string,
    public id?: string,
    public email?: string,
    public urlRedirection?: string,
    public name?: string,
    public fees?: string,
    public language?: string,
    public processingNumber?: string,
    public transactionId?: string,
    public payDate?: string,
  ) {}
}
