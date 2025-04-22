type TextInputProps = {
    id: string
    label: string
    placeholder?: string
    value: string
    onChange: (value: string) => void
    error?: string
    disabled?: boolean
  }
  
  export const TextInput = ({ id, label, placeholder, value, onChange, error, disabled }: TextInputProps) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="text-sm font-medium">{label}</label>
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={e => onChange(e.target.value)}
          className={`w-full border rounded-md px-3 py-2 focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100 text-gray-500' : 'bg-white'}`}
        />
        {error && <p id={`${id}-error`} className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
  