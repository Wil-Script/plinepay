export class Application {
  constructor(
    public name: string,
    public statusApplication:string,
    public addFees: boolean,
    public percent: number,
    public logoURL: string,
    public id?: string,
    public applicationMode?: string,
    public balance: number = 0
  ) {}
}
