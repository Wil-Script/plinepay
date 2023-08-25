import { Application } from './application';
export class Response{
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
  }
  