import { Input } from "../../path";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  registerError,
  registerStart,
  registerSuccess,
} from "../../slice/auth";
import { useState } from "react";
import authServiceData from "../../service/auth";

const Register = () => {
  const [userName, setUserName] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();
  const [userPassword, setUserPasword] = useState<string>();

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const user = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(registerStart());

    try {
      const response = await authServiceData.registerUser(user);
      dispatch(registerSuccess(response.user));
    } catch (error) {
      dispatch(registerError());
    }
  };
  
  return (
    <form className="text-center w-25 mx-auto">
      <img
        className="m-4 h-25 "
        src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <Input
        label={"UserName"}
        placeholder={"UserName"}
        state={userName}
        setState={setUserName}
      />
      <Input
        label={"E-mail address"}
        placeholder={"name@email.com"}
        type={"email"}
        id={"floatingInput"}
        state={userEmail}
        setState={setUserEmail}
      />
      <Input
        label={"Password"}
        placeholder={"Password"}
        type={"password"}
        id={"floatingPassword"}
        state={userPassword}
        setState={setUserPasword}
      />

      <button
        onClick={handleSubmit}
        className="btn btn-primary w-100 py-2"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Loading..." : "Sign in"}
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  );
};

export default Register;
