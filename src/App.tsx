import React, {useRef, useState} from 'react'
import Input from "./components/Input";

function App() {
    const shiftRef = useRef<HTMLInputElement>(null)
    const minutesRef = useRef<HTMLInputElement>(null)
    const pendingTimeOffsRef = useRef<HTMLInputElement>(null)
    const [result, setResult] = useState<number>(225)

    const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!shiftRef.current || !minutesRef.current || !pendingTimeOffsRef.current) return;

        const shift = Number(shiftRef.current.value)
        const minutes = Number(minutesRef.current.value)
        const pendingTimeOffs = Number(pendingTimeOffsRef.current.value)

        setResult(Math.abs(Math.floor((pendingTimeOffs * (shift * 60)) - minutes)))
    }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4287f5] to-[#042d6e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
             style={{
                 clipPath:
                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
             }}></div>
</div>
    <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">GÜNSEL Pending Time Off Calculator</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Calculate how much minutes do you have.</p>
    </div>
    <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleCalculate}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Input placeholder="8" id="shift" title="Shift (hours)" hint="Write your shift in hours. Usually employees does 8 hours shift (Exclude your break and lunch break)"/>
            <Input placeholder="863" id="minutes" title="Minus Minutes" hint="Write your final minutes (Should be positive number)"/>
            <Input placeholder="1.33" id="pending-time-offs" title="Pending Time offs (in days)" span/>

            <div className="sm:col-span-2">
                <label htmlFor="result" className="block text-sm font-semibold leading-6 text-gray-900">Result (minute)</label>
                <div className="mt-2.5">
                    <input type="number" disabled value={result} name="result" id="result" autoComplete="result" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
        </div>
        <div className="mt-10">
            <button type="submit" className="block w-full rounded-lg bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Calculate</button>
        </div>
    </form>
</div>
  )
}

export default App
