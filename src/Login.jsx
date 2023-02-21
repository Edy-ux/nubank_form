import React, { useState } from 'react';
import useFormatCpf from './utils/reducerInputValue';
import { IMaskInput } from 'react-imask';
import Form from './components/Form';
import { Button } from './components/Button';

function Login() {
  const [cpf, setCpf] = useState('');

  const handleOnchange = (e) => setCpf(e.target.value)
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
          <Form handleOnchange={handleOnchange} cpf={cpf} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
