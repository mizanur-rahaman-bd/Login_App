import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  // variable part
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoding] = useState(false);

  // FireBase Variable
  const auth = getAuth();

  // Function Part

  const handleSubmit = (e) => {
    setLoding(true);
    e.preventDefault();
    if (!name) {
      setNameError("Enter Your Name");
    }
    if (!email) {
      setEmailError("Enter Your Email");
    }
    if (!password) {
      setPassWordError("Enter Your Password");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(() => {
            setLoding(false);
            toast.info("Verify Your Email", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            // set user name and profile pic
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: "",
            })
              .then(() => {
                navigate("/");
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
          });
        })
        .catch((error) => {
          setLoding(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/email-already-in-use") {
            toast.error("Email Already Taken", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
        });
    }
  };

  return (
    <>
      <section className="login_section mt-10 mb-10">
        <div className="container">
          <div className="login lg:flex lg:justify-between">
            <div className="form_part">
              <form action="">
                <h1>WELCOME TO BRISHEAM</h1>
                <div className="input_part">
                  <p className="mb-[18px] md:mb-[25px] lg:mb-[64px] font-nunito font-normal text-[18px] lg:text-[24px] md:text-[22px] text-[#444B59]">
                    Already have a account,{" "}
                    <Link className="text-[#486de6] font-bold" to={"/"}>
                      Sign in
                    </Link>{" "}
                  </p>
                  <h2>Name</h2>
                  <input
                    onChange={(e) => {
                      setName(e.target.value), setNameError("");
                    }}
                    className=""
                    placeholder="lorem ipsum"
                    type="text"
                  />
                  <p className="font-poppin font-medium text-[15px] text-red-700">
                    {nameError}
                  </p>
                  <h2 className="mt-[20px] md:mt-[25px] lg:mt-[36px]">Email</h2>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value), setEmailError("");
                    }}
                    className=""
                    placeholder="deniel123@gmail.com"
                    type="email"
                  />
                  <p className="font-poppin font-medium text-[15px] text-red-700">
                    {emailError}
                  </p>
                  <h2 className="mt-[20px] md:mt-[25px] lg:mt-[36px]">
                    Password
                  </h2>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value), setPassWordError("");
                    }}
                    className="relative"
                    placeholder=" • • • • • • • • "
                    type="password"
                  />
                  <p className="font-poppin font-medium text-[15px] text-red-700">
                    {passWordError}
                  </p>
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
                  onClick={handleSubmit}
                  type="submit"
                  className="mt-[30px] mb-[30px] px-[90px] md:px-[100px] lg:px-[160px] py-[7px] md:py-[10px] lg:py-[20px] font-nunito font-extrabold text-[20px] text-white bg-[#8699DA] rounded-[80px] active:scale-110"
                >
                  Sign Up
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
                <button>
                  <img src="images/goole_img.png" alt="google" />
                </button>
                <button>
                  <img src="images/fb_img.png" alt="fb" />
                </button>
                <button>
                  <img src="images/apple_img.png" alt="apple" />
                </button>
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

export default Register;
