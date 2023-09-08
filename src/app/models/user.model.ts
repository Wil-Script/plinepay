export class User {
  constructor(
    public id:string,
    public code:number,
    public name:string,
    public surname:string,
    public username:string,
    public phone:number,
    public email:string,
    public password:string,
    public pays:string,
    public ville:string,
    public profilImage:string,
    public enable:boolean,
    public roleId:number,
    public userType:string,
    public status:number,
    public traderAccountIsComplet:string
  ){}
}
