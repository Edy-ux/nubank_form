import React, { useEffect, useState } from 'react';
import useFormatCpf from './utils/reducerInputValue';

import { IMaskInput } from 'react-imask';

function Login() {
  const [cpf, setCpf] = useState('');

  const handleOnchange = (e) => setCpf(e.target.value);
  console.log(cpf);
  // setCpf(e.target.value.replace.replace(/\D/g, '').(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'))

  return (
    <React.Fragment>
   {/*    <div className=" mt-5 relative w-full bg-white px-6 pt-8 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-xl">
          <nav className="relative z-0 flex justify-around">
            <button className="peer/home flex-1">Home</button>
            <button className="peer/about flex-1">About</button>
            <button className="peer/services flex-1">Services</button>
            <button className="peer/blog flex-1">Blog</button>
            <button className="peer/contact flex-1">Contact</button>

            <span className="absolute left-0 -z-10 h-full w-1/5 origin-center scale-x-110 scale-y-125 rounded-full bg-gray-100 transition-all duration-300 peer-focus/about:left-[20%] peer-focus/services:left-[40%] peer-focus/blog:left-[60%] peer-focus/contact:left-[80%]"></span>
          </nav>
        </div>
      </div> */}
      <div className="flex h-screen mt-8 justify-center">
        <div className="flex h-80 max-w-[340px] flex-col justify-between rounded-3xl border  p-7 shadow-2xl">
          <h1 className="text-2xl font-medium text-[#111111]">
            Peça sua conta e cartão de crédito Nubank
          </h1>
          <form action="/" className="flex flex-col justify-between gap-9">
            <div className="relative">
              <IMaskInput
                name="cpf"
                type="text"
                mask="000.000.000-00"
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                autoComplete="off"
                required
                onChange={handleOnchange}
                value={cpf}
                maxLength="14"
                placeholder="yoorcpf"
                className=" relative  peer h-10 w-full border-b border-gray-300 p-2 pb-0 pl-0 font-medium text-green-600 placeholder-transparent outline-none focusinvalid:border-rose-500 focus:outline-none"
              />
              <label
                htmlFor="cpf"
                className="absolute -top-2 flex text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-[12px]"
              >
                {' '}
                Digite seu CPF
              </label>
            </div>
            <div className="flex mb-5">
              <button
                type="submit"
                className="flex w-full text-purple-600  font-arial focus:outline-none  p-5 h-12 text-center items-center justify-between rounded-3xl border  bg-slate-200 "
              >
                Continuar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
