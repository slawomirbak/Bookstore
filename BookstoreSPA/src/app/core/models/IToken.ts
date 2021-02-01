export interface IToken {
  jwt: string;
  refreshToken: string;
  user: {
    role: string
  };
}
