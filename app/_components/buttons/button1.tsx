'use client'

const Button1 = ({ text, url, icon }: { text: string, url: string, icon?: React.ReactNode }) => {
  
  return (
    <a href={url} className='inline-flex items-center px-4 py-2 rounded-full bg-primary-700 text-white' target="_blank">
        {text}&nbsp;
        {icon && <span className="size-4 shrink-0">{icon}</span>}
    </a>
  )
}

export default Button1