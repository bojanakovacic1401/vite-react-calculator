export type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

export interface OperationButton {
  id: Operation
  label: string
  symbol: string
}

export interface CalculationResult {
  value: number | null
  message: string
  isError: boolean
}
