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
