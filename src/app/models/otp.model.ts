export class Otp{
    constructor(
      public number1:string,
      public number2:string,
      public number3:string,
      public number4:string,
      public number5:string,
    ){}
  }

  export class OtpResponse{
    constructor(
      public code:string,
      public userEmail:string,
      public name:string,
      public createdAt:number
    ){}
  }
  