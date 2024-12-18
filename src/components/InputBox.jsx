import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()
    return (
        <>
            <div className={`flex justify-between items-start bg-white px-4 py-3 rounded gap-5 ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={amountInputId} className='text-black/40 text-xs block mb-2'>
                        {label}
                    </label>
                    <input type="number" className='w-full outline-none bg-transparent px-0.5 py-1 rounded block'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    id={amountInputId}
                    />
                </div>
                <div className="w-1/2 text-end">
                    <p className='text-black/40 text-xs mb-2'>
                        Currency Type
                    </p>
                    <select className='bg-gray-200 cursor-pointer outline-none px-2 py-1 rounded'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox;
