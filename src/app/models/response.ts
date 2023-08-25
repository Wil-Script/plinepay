import { Application } from './application';

export class Response {
  constructor(
    public operationDate: number,
    public numberElement: number,
    public message: {},
    public errorService: {},
    public paymentDtos: [],
    public privilegeDtos: [],
    public resourceDtos: [],
    public roleDtos: [],
    public traderAccountDtos: [],
    public userDtos: [],
    public settingDtos: [],
    public applicationDtos: Application[],
    public mobileAccountDtos: [],
    public paymentMethodDtos: []
  ) {}

  // applicationDtos: Application[];
  // operationDate: number;
  // numberElement: number;
  // message: {};
  // errorService: {};
  // paymentDtos: [];
  // privilegeDtos: [];
  // resourceDtos: [];
  // roleDtos: [];
  // traderAccountDtos: [];
  // userDtos: [];
  // settingDtos: [];
  // mobileAccountDtos: [];
  // paymentMethodDtos: [];

  // constructor(
  //   applicationDtos: [],
  //   operationDate: number,
  //   numberElement: number,
  //   message: {},
  //   errorService: {},
  //   paymentDtos: [],
  //   privilegeDtos: [],
  //   resourceDtos: [],
  //   roleDtos: [],
  //   traderAccountDtos: [],
  //   userDtos: [],
  //   settingDtos: [],
  //   mobileAccountDtos: [],
  //   paymentMethodDtos: []
  // ) {
  //   this.applicationDtos = applicationDtos;
  //   this.operationDate = operationDate;
  //   this.numberElement = numberElement;
  //   this.message = message;
  //   this.errorService = errorService;
  //   this.paymentDtos = paymentDtos;
  //   this.privilegeDtos = privilegeDtos;
  //   this.resourceDtos = resourceDtos;
  //   this.roleDtos = roleDtos;
  //   this.traderAccountDtos = traderAccountDtos;
  //   this.userDtos = userDtos;
  //   this.settingDtos = settingDtos;
  //   this.mobileAccountDtos = mobileAccountDtos;
  //   this.paymentMethodDtos = paymentMethodDtos;
  // }
}
