export interface UserDto {
  name: string;
  surname: string;
  username: string;
  phone: string;
  email: string;
  password?: string;
  pays?: string;
  ville?: string;
  profilImage?: string;
  enable: boolean;
  roleId: string;
  userType: string;
  userDtos?:[]
}
