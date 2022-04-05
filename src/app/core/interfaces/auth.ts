export interface UserDetails {
    _id: string;
    username: string;
    accessToken: string;
  }
  
  interface TokenResponse {
    accessToken: string;
  }
  
  export interface TokenPayload {
    username: string;
    password: string;
  }