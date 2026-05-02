import { useState } from 'react'
import type { CalculationResult, Operation, OperationButton } from '../../types/Calculator'
import { calculate } from './calculatorLogic'
import './Calculator.css'

const buttons: OperationButton[] = [
  { id: 'add', label: 'Saberi', symbol: '+' },
  { id: 'subtract', label: 'Oduzmi', symbol: '−' },
  { id: 'multiply', label: 'Pomnoži', symbol: '×' },
  { id: 'divide', label: 'Podeli', symbol: '÷' },
]

const initialResult: CalculationResult = {
  value: null,
  message: 'Unesite brojeve i izaberite operaciju.',
  isError: false,
}

export function Calculator() {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [selectedOperation, setSelectedOperation] = useState<Operation>('add')
  const [result, setResult] = useState<CalculationResult>(initialResult)

  const handleCalculate = (operation: Operation) => {
    setSelectedOperation(operation)
    setResult(calculate(firstValue, secondValue, operation))
  }

  const handleReset = () => {
    setFirstValue('')
    setSecondValue('')
    setSelectedOperation('add')
    setResult(initialResult)
  }

  return (
    <section className="calculator" aria-label="Kalkulator">
      <div className="calculator__header">
        <p className="calculator__eyebrow">React + Vite + TypeScript</p>
        <h1>Mini kalkulator</h1>
        <p>Unesite dva broja i izaberite matematičku operaciju.</p>
      </div>

      <div className="calculator__panel">
        <label className="calculator__field">
          <span>Prvi broj</span>
          <input
            type="number"
            value={firstValue}
            onChange={(event) => setFirstValue(event.target.value)}
            placeholder="npr. 12"
          />
        </label>

        <div className="calculator__operation" aria-live="polite">
          {buttons.find((button) => button.id === selectedOperation)?.symbol}
        </div>

        <label className="calculator__field">
          <span>Drugi broj</span>
          <input
            type="number"
            value={secondValue}
            onChange={(event) => setSecondValue(event.target.value)}
            placeholder="npr. 4"
          />
        </label>
      </div>

      <div className="calculator__buttons">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={button.id === selectedOperation ? 'active' : ''}
            type="button"
            onClick={() => handleCalculate(button.id)}
          >
            <span>{button.symbol}</span>
            {button.label}
          </button>
        ))}
      </div>

      <div className={result.isError ? 'calculator__result error' : 'calculator__result'}>
        <span>Rezultat</span>
        <strong>{result.value ?? '—'}</strong>
        <p>{result.message}</p>
      </div>

      <button className="calculator__reset" type="button" onClick={handleReset}>
        Resetuj unos
      </button>
    </section>
  )
}
