import logo from "../../assets/img/logo.png";

const AuthLayout = ({ authImage, children }) => {
  return (
    <div className="w-full flex gap-x-2 justify-center  h-full inset-0 fixed items-start">
      <div className="lg:w-[60%] h-full">
        <div className="w-full h-full flex flex-col items-start justify-between">
          <img src={logo} alt="logo" />

         <div className="w-full h-[80vh]">
         <img src={authImage} alt="auth-" className="object-contain w-full h-full" />

         </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%]  min-h-screen ">
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-full px-4 sm:w-[500px] ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
