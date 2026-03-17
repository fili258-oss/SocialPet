'use client'

const Button1 = ({ text, url }: { text: string, url: string }) => {
  
  return (
    <a href={url} className='inline-block px-4 py-2 rounded-full bg-primary-700 text-white' target="_blank">
        {text}
    </a>
  )
}

export default Button1