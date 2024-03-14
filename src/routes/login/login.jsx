import AuthLayout from "../../components/AuthLayout/AuthLayout";
import login from "../../assets/img/login.png";
import crown from "../../assets/img/croen-like.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({ email: "", password: "" });

  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <AuthLayout authImage={login}>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start justify-start gap-y-3"
      >
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start gap-x-1">
            <img src={crown} alt="" />
            <h2 className="font-semibold text-xl sm:text-2xl">Welcome Back</h2>
          </div>
          <p>Track your Learning.</p>
        </div>

        <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="email">
            Email
          </label>
          <input
            className="block form__input border-gray-300 border focus:border-gray-400 hover:border-gray-400 rounded-lg focus:outline-none w-full h-11 px-4"
            type="email"
            placeholder="name@company.com"
            name="email"
            value={loginDetail.email}
            onChange={(e) => {
              setLoginDetail({ ...loginDetail, email: e.target.value });
            }}
          />
        </div>
        <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="password">
            Password
          </label>
          <input
            className="block form__input border-gray-300 border focus:border-gray-400 hover:border-gray-400 rounded-lg focus:outline-none w-full h-11 px-4"
            type="password"
            placeholder="********"
            name="password"
            value={loginDetail.password}
            onChange={(e) => {
              setLoginDetail({ ...loginDetail, password: e.target.value });
            }}
          />
        </div>

        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center gap-x-2">
            <input type="checkbox" />
            <p>Rememeber me</p>
          </div>
          <Link to="/forgot-password" className="font-medium">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg h-11 mt-2 bg-red-500 text-gray-50 font-medium flex items-center justify-center"
        >
          Sign in
        </button>
        <p className="flex items-center justify-center w-full gap-x-2">
          Don't have an account yet?{" "}
          <Link to="/register" className="font-medium text-red-500">
            Create an Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}


export default Login;