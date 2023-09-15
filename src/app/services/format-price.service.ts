export class FormatPrice {
  constructor() {}

  formatPrice(amount: any) {
    return new Intl.NumberFormat('bas-CM', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);
  }
}
