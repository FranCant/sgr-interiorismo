import Image from "next/image";
import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { HiChevronRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

interface IFormInput {
  username?: string;
  email?: string;
  message?: string;
}


const Contact = () => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const [userInfo, setUserInfo] = useState();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return new Promise((resolve) => {
      handleSubmit(onSubmit); // Submit
      const notification = toast.loading("Sending email...");
      //email js
      emailjs
        .sendForm(
          "service_l8s6c54",
          "template_bk3viwm",
          formRef.current,
          "UedMk5hsN7oelieoT"
        )
        .then(
          (result) => {
            setTimeout(() => {
              resolve(data);
              toast.success("E-mail Sent succesfully", {
                id: notification,
              });
              reset();
      
              //console.log(data);
            }, 2000);
            //console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
      //resolve
      
    });
  };

  return (
    <div className="layout min-h-full py-20 flex items-center">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="h-full xl:h-[50rem] rounded-lg shadow-xl w-full overflow-hidden grid md:grid-cols-2"
      >
        <div className="relative h-full md:flex items-center overflow-hidden">
          <img src="/images/ciudad.webp" className="w-full h-full" />
          <div className="absolute top-0 left-0 bg-gray-900/30 w-full min-h-full flex items-center py-16 px-6">
            <div className="w-full flex flex-col items-start justify-center text-white space-y-4">
              <h2>SGR | INTERIORISMO</h2>
              <hr className="border border-white/70 w-full" />

              <div className="text-xs flex items-start justify-start space-x-2">
                <FaMapMarkerAlt className="h-4 w-4" />
                <p className="text-white text-sm sm:text-lg">
                  C/ Gabriel Miró, 62, BD
                  <br />
                  San Vicente del Raspeig
                  <br />
                  CP 03690
                  <br />
                  Alicante - España
                </p>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <AiFillPhone className="h-5 w-5" />
                <p className="text-white text-sm sm:text-lg">+34 609 702 975</p>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <AiOutlineMail className="h-5 w-5" />
                <p className="text-white text-sm sm:text-lg">
                  info@sgrinteriorismo.com
                </p>
              </div>

              <hr className="border border-white/70 w-full" />
              <div className="flex items-center space-x-4 text-white">
                <a href="https://www.instagram.com/sgr.dsign/" className="hover:text-gray-200">
                  <AiOutlineInstagram className="h-6 w-6" />
                </a>
                <a href="https://ar.pinterest.com/sgrdsign/_saved/" className="hover:text-gray-200">
                  <BsPinterest className="h-6 w-6" />
                </a>
                <a href="https://es.linkedin.com/in/susana-g%C3%B3mez-ramos-b306796" className="hover:text-gray-200">
                  <AiFillLinkedin className="h-6 w-6" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=34609702975" className="hover:text-gray-200">
                  <AiOutlineWhatsApp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:block w-full bg-emerald-300 min-h-full flex items-center justify-center relative">
          {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full"
          >
            <div className="flex flex-wrap justify-between items-center py-24 px-10 h-full bg-gradient-to-r from-backgroundSec via-backgroundSec/90 to-backgroundSec/80 ">
              <div className="mb-8">
                <p className="text-xl relative group text-gray-600 font-bold">
                  Contacta con nosotros
                </p>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  //  name="username"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 appearance-none border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                  placeholder=" "
                  {...register("username", {
                    required: "Completa con tu Nombre y apellido",
                    minLength: {
                      value: 4,
                      message:
                        "Tu nombre y apellido deben tener al menos 4 letras",
                    },
                    maxLength: {
                      value: 30,
                      message:
                        "Tu nombre y apellido deben tener hasta 30 caracteres",
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "Formato no valido",
                    },
                  })}
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre
                </label>

                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                  {errors.username?.message}
                </span>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  //   name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                  placeholder=" "
                  {...register("email", {
                    required: "Completa con tu Email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "Email no valido",
                    },
                  })}
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </span>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <textarea
                  //   name="message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                  placeholder=" "
                  {...register("message", {
                    required: "Completa el mensaje",
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "El mensaje no contiene un formato valido",
                    },
                  })}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Escribe tu mensaje
                </label>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                  {errors.message?.message}
                </span>
              </div>
              <div className="w-full md:flex md:items-center mt-10">
                <div className="w-full">
                  <button
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-primary-300 scale-100 hover:scale-[1.05] active:scale-[0.97] transition duration-300 rounded-lg border border-black/5 shadow-sm  bg-gradient-to-tr from-fill to-fill/70 font-bold py-2 px-4"
                  >
                    {isSubmitting ? (
                      <svg
                        role="status"
                        className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    ) : (
                      <span className="flex items-center justify-center text-white">
                        Send
                        <HiChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
