import React from "react"

type Props = {
  value: string
  label: string
  id: string
  placeholder: string
  onChange: (value: string) => void
}

const InputText: React.VFC<Props> = (props) => {
  const { value, label, id, placeholder, onChange } = props
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  )
}

export default InputText
