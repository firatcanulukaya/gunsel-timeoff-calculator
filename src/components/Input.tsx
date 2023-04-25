import {forwardRef} from "react";
import Hint from "./Hint";

type InputProps = {
    placeholder: string
    disabled?: boolean
    id: string
    title: string
    hint?: string
    span?: boolean
}

const Input = forwardRef(({placeholder, disabled = false, id, title, hint, span = false}: InputProps, ref: any) => {
    return (
        <div className={span ? "sm:col-span-2" : ""}>
            <label htmlFor="shift" className="block text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2">{title} {hint ? <Hint>{hint}</Hint> : null}</label>
            <div className="mt-2.5">
                <input type="text" ref={ref} name={id} id={id} disabled={disabled} placeholder={placeholder} autoComplete={id} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    )
})

export default Input
