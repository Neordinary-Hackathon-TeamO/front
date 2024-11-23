export type SignupRequestData = {
  memId: string;
  password: string;
  nickname: string;
  profileImage: File;
};

export type SignInRequestData = {
  username: string;
  password: string;
};
