import { useEffect } from 'react'

type ToastProps = {
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  onClose: () => void
  duration?: number
}

const typeStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500'
}

export const Toast = ({ message, type, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, duration)
    return () => clearTimeout(timeout)
  }, [onClose, duration])

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 text-white rounded shadow ${typeStyles[type]}`}>
      {message}
    </div>
  )
}
