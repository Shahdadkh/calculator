import { useState } from 'react'
import { evaluate } from 'mathjs'

const Calculator = () => {
  const [calc, setCalc] = useState('')

  const handleValue = (data) => {
    if (calc.length < 19 && calc !== 'Error') {
      setCalc(calc.concat(data.target.value))
    }
  }

  const handleClear = () => {
    setCalc('')
  }

  const handleBack = () => {
    setCalc(calc.slice(0, -1))
  }

  const handleCalc = () => {
    try {
      setCalc(evaluate(calc).toString())
    } catch (error) {
      setCalc('Error')
    }
  }

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden">
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div
            className={`w-full py-5 px-6 ${
              calc.length > 9 ? 'text-3xl' : 'text-6xl'
            } text-white font-thin`}
          >
            {calc.length === 0 ? 0 : calc}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleClear}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                C
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleBack}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={`%`}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                %
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={`/`}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
              >
                ÷
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={7}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={8}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={9}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={`*`}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                ⨉
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={4}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={5}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={6}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                6
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={`-`}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                -
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={1}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={2}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={3}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleValue}
                value={`+`}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-indigo-400">
              <button
                onClick={handleValue}
                value={0}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-indigo-400">
              <button
                onClick={handleValue}
                value={`.`}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-indigo-400">
              <button
                onClick={handleCalc}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
