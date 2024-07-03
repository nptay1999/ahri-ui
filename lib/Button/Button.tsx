import { Button as AntButton, ButtonProps } from 'antd'
import { CSSProperties } from 'react'
import { EColor } from '../constants/enum'

const getButtonColor = (color: EColor) => {
  const colorString = Object.values(EColor) as EColor[]
  const BUTTON_COLOR: Record<string, CSSProperties> = {}

  colorString.forEach(c => {
    const color = c.toLowerCase()
    BUTTON_COLOR[c] = {
      backgroundColor: `var(--color-${color}-600)`,
      color: `var(--color-${color}-50)`,
    }
  })
  return BUTTON_COLOR[color]
}

export type TButtonProps = ButtonProps & {
  color: EColor
}

export const Button = ({ color, style, ...props }: TButtonProps) => {
  return <AntButton style={{ ...getButtonColor(color), ...style }} {...props} />
}
