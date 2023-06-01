export interface LoginProps {
  user: { username: string; password: string };
  loginReducer: {
    status: "idle" | "loading" | "succeeded" | "failed";
    user: any;
    error: string | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface SignupProps {
  user: {
    first_name: string;
    last_name: string;
    country: string;
    email: string;
    username: string;
    password: string;
  };
  signupReducer: {
    status: "idle" | "loading" | "succeeded" | "failed";
    user: any;
    error: string | null;
  };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface VerificationProps {
  user: {
    email: string;
    code: string;
  };
  verificationReducer: {
    status: "idle" | "loading" | "succeeded" | "failed";
    user: any;
    error: string | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ForgetPasswordProps {
  user: {
    email: string;
    code: number;
    password1: string;
    password2: string;
  };
  // forgetPaswordReducer: {
  //   status: "idle" | "loading" | "succeeded" | "failed";
  //   user: any;
  //   error: string | null;
  // };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
