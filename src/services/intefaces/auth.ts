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
    error: any;
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
    email: any;
    code: string;
  };
  verificationReducer: {
    status: "idle" | "loading" | "succeeded" | "failed";
    user: any;
    error: string | null;
  };
  ctxReducer:{
    status: "idle" | "loading" | "succeeded" | "failed";
    ctx: any;
    error: string | null;
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface VerificationEmailProps {
  user: {
    email: string;
  };
  // verificationEmailReducer: {
  //   status: "idle" | "loading" | "succeeded" | "failed";
  //   user: any;
  //   error: string | null;
  // };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ChangePasswordProps {
  user: {
    email: string;
    password1: string;
    password2: string;
  };
  // changePasswordReducer: {
  //   status: "idle" | "loading" | "succeeded" | "failed";
  //   user: any;
  //   error: string | null;
  // };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
