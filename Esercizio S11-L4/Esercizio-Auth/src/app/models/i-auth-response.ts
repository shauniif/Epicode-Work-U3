import { iUser } from "./i-user";

export interface IAuthResponse {
  accessToken: string;
  user: iUser;
}
