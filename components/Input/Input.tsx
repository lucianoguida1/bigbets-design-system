export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
  }
  return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
}

const Input = ({ label, className, ...rest}: InputProps) => {
  return <div className="relative">
    {label && <label className="absolute pt-1 pl-3 text-xs text-gray-disabled">{label}</label>}
    <InputOrTextArea
      className={`
        bg-boxinputs text-gray-950 rounded-md px-2 py-1 border
        disabled:bg-disabled disabled:border-2 disabled:border-disabled disabled:text-gray-disabled
        ${label && 'pt-5'}
        ${className}
      `}
      {...rest}
    />
  </div>
}

export default Input