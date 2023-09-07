export class Payement {
  constructor(
    public reason: string,
    public amount:number,
    public paymentMethod: string,
    public currency: string,
    public status: string,
    public id?: string,
  ) {}
}
