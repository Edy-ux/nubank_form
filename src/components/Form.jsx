import { IMaskInput } from "react-imask";
import { Button } from "./Button";



const Form = ({ handleOnchange, cpf }) => {
    return (

        <form action="/" className="flex flex-col justify-between gap-7">
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
                    className=" relative peer h-10 w-full border-b border-gray-300 p-2 pb-0 pl-0 font-medium text-green-600 placeholder-transparent outline-none focusinvalid:border-rose-500 focus:outline-none"
                />
                <label
                    htmlFor="cpf"
                    className="absolute -top-2 flex text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-[12px]"
                >
                    Digite seu CPF
                </label>
            </div>
            <Button />
        </form>
    );
}

export default Form;