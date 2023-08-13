export type SignInResponse = {
  accessToken: string;
  provider: string;
  email: string;
  avatarUrl: string;
};

export type User = {
  id: number;
  email: string;
  avatarUrl: string;
};
