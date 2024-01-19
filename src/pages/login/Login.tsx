import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Input } from "../../path";
import { loginError, loginStart, loginSuccess } from "../../slice/auth";
import authServiceData from "../../service/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState<string>();
  const [userPassword, setUserPasword] = useState<string>();
  const notifyInfo = () => toast.info("Please wait...");
  const notifySuccess = () => toast.success("Regestered successfully ✅");
  const notifyError = () => toast.error("Error: " );

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  
  const user = {
    email: userEmail,
    password: userPassword,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    notifyInfo()
    dispatch(loginStart());

    try {
      const response = await authServiceData.loginUser(user);
      dispatch(loginSuccess(response.user));
      notifySuccess()
    } catch (error) {
      dispatch(loginError());
      notifyError()
    }
  };

  return (
    <form className="text-center w-25 mx-auto">
      <ToastContainer />
      <img
        className="m-4 h-25 "
        src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please Login</h1>

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
        {isLoading ? "Loading..." : "Login"}
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  );
};

export default Login;
