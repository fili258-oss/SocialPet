'use client'

const Button2 = ({ text, url }: { text: string, url: string }) => {
  
  return (
    <a href={url} className='inline-block px-4 py-2 rounded-full bg-white text-primary-600' target="_blank">
        {text}
    </a>
  )
}

export default Button2