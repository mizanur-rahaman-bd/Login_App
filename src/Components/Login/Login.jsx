import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <section className="login_section mt-10 mb-10">
        <div className="container">
          <div className="login lg:flex lg:justify-between">
            <div className="form_part">
              <form action="">
                <h1>WELCOME BACK!</h1>
                <div className="input_part">
                  <p className="mb-[18px] md:mb-[25px] lg:mb-[64px] font-nunito font-normal text-[18px] lg:text-[24px] md:text-[22px] text-[#444B59]">
                    Don’t have a account,{" "}
                    <Link className="text-[#486de6] font-bold" to={"/register"}>
                      Sign up
                    </Link>{" "}
                  </p>
                  <h2>Email/Username</h2>
                  <input
                    className=""
                    placeholder="deniel123@gmail.com"
                    type="email"
                  />
                  <h2 className="mt-[20px] md:mt-[25px] lg:mt-[36px]">
                    Password
                  </h2>
                  <input
                    className="relative"
                    placeholder=" • • • • • • • • "
                    type="password"
                  />
                  {/* <FaEyeSlash className="absolute left-[250px] md:left-[287px] lg:left-[455px] top-[322px] md:top-[373px] lg:top-[433px] text-[#9EB0EA]" /> */}
                </div>
                <div className="w-[288px] lg:w-[400px] mt-[16px] flex justify-between">
                  <div className="check_box flex gap-1">
                    <input
                      className="text-[#9EB0EA] w-[15px] lg:w-[28px] md:w-[18px] lg:h-[28px] h-[18px] md:h-[22px]"
                      type="radio"
                    />
                    <p className="bg-gray-100 px-2 lg:px-0 rounded-[10px] lg:rounded-none lg:bg-opacity-0 lg:bg-none font-nunito font-bold lg:font-normal text-[15px] lg:text-[20px] text-[#2e3b57]">
                      Remember me
                    </p>
                  </div>
                  <div>
                    <p className="bg-gray-100 px-2 lg:px-0 rounded-[10px] lg:rounded-none lg:bg-opacity-0 lg:bg-none font-nunito font-semibold text-[15px] lg:text-[20px] text-[#8699DA]">
                      Forget password?
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-[30px] mb-[30px] px-[90px] md:px-[100px] lg:px-[160px] py-[7px] md:py-[10px] lg:py-[20px] font-nunito font-extrabold text-[20px] text-white bg-[#8699DA] rounded-[80px]"
                >
                  Sign In
                </button>
                <div className="w-[300px] lg:w-[400px] flex gap-2 items-center">
                  <span className="w-[65px] lg:w-[100px] h-[2px] bg-[#C8D3F9] block"></span>
                  <p className="font-nunito font-normal text-[18px] text-[#444B59] text-center">
                    or continue with
                  </p>
                  <span className="w-[65px] lg:w-[100px] h-[2px] bg-[#C8D3F9] block"></span>
                </div>
              </form>
              <div className="img_row flex gap-11 lg:gap-12 mt-5">
                <img src="images/goole_img.png" alt="google" />
                <img src="images/fb_img.png" alt="google" />
                <img src="images/apple_img.png" alt="google" />
              </div>
            </div>
            <div className="img_part">
              <img src="images/img_banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
