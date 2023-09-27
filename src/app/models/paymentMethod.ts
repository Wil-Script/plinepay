export class PaymentMethod {
  constructor(
    public name: string,
    public code: string,
    public logo: string,
    public flag?: boolean,
    public id?: string,
    public percentFees?: string
  ) {}
}
