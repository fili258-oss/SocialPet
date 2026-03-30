'use client'

const Button3 = ({ text, url }: { text: string, url: string }) => {
  
  return (
    <a href={url} className='inline-flex px-4 py-2 rounded-full bg-secondary-900 text-primary-50' target="_blank">
        {text}
    </a>
  )
}

export default Button3