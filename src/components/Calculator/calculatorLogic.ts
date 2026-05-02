import type { CalculationResult, Operation } from '../../types/Calculator'

const formatNumber = (number: number): number => {
  return Number.isInteger(number) ? number : Number(number.toFixed(6))
}

export const calculate = (
  firstValue: string,
  secondValue: string,
  operation: Operation,
): CalculationResult => {
  if (firstValue.trim() === '' || secondValue.trim() === '') {
    return {
      value: null,
      message: 'Unesite oba broja pre računanja.',
      isError: true,
    }
  }

  const firstNumber = Number(firstValue)
  const secondNumber = Number(secondValue)

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    return {
      value: null,
      message: 'Unos mora biti broj.',
      isError: true,
    }
  }

  if (operation === 'divide' && secondNumber === 0) {
    return {
      value: null,
      message: 'Deljenje nulom nije dozvoljeno.',
      isError: true,
    }
  }

  const operations: Record<Operation, number> = {
    add: firstNumber + secondNumber,
    subtract: firstNumber - secondNumber,
    multiply: firstNumber * secondNumber,
    divide: firstNumber / secondNumber,
  }

  const result = formatNumber(operations[operation])

  return {
    value: result,
    message: `Rezultat je ${result}`,
    isError: false,
  }
}
