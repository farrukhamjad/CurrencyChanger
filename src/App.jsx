import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
      setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='my-10 p-5 border-solid border border-slate-500 backdrop-blur bg-opacity-5 bg-white rounded-lg'>
      <form onSubmit={(e) => {e.preventDefault();}}>
        <div className='w-full mb-2'>
          <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => {setAmount(currency)}} onAmountChange={(amount) => {setAmount(amount)}} selectCurrency={from}/>
        </div>
        <div className='relative w-full h-0'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap} >
            Swap
          </button>
        </div>
        <div className='w-full mb-3'>
          <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => {setTo(currency)}} selectCurrency={to} amountDisable/>
        </div>
        <button className='w-full rounded-lg bg-blue-600 text-white px-4 py-3' onClick={convert}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
      </form>
    </div>
  )
}

export default App;
