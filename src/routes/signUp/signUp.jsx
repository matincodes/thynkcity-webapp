import AuthLayout from "../../components/AuthLayout/AuthLayout";
import reg from "../../assets/img/reg.png";
import crown from "../../assets/img/croen-like.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loginDetail, setLoginDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <AuthLayout authImage={reg}>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start justify-start gap-y-3"
      >
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start gap-x-1">
            <img src={crown} alt="" />
            <h2 className="font-semibold text-xl sm:text-2xl">
              Create an Account
            </h2>
          </div>
          <p>Provide your Details.</p>
        </div>

        <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="name">
            Name
          </label>
          <input
            className="block form__input border-gray-300 border focus:border-gray-400 hover:border-gray-400 rounded-lg focus:outline-none w-full h-11 px-4"
            type="text"
            placeholder="ola skuch"
            name="name"
            value={loginDetail.name}
            onChange={(e) => {
              setLoginDetail({ ...loginDetail, name: e.target.value });
            }}
          />
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

        <div className="flex w-full items-center ">
          By signing up I agree to the{" "}
          <span className="text-red-500 mx-1">terms & conditions</span> and
          <span className="text-red-500 ml-1">privacy policy</span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg text-gray-50 mt-2 h-11 bg-red-500 flex items-center justify-center"
        >
          Create Account
        </button>
        <p className="flex w-full items-center justify-center gap-x-2">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-red-500">
            Log In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}


export default SignUp;