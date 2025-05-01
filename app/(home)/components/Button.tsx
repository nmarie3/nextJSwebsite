import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = ({...rest}) => {
  return (
    <button className="bg-neutral-950 text-white rounded py-2 px-4 text-md" {...rest}>
        <a href="" 
        download="My Resume"
        className="text-white no-underline">
            Download CV
        </a>
    </button>
  )
}

export default Button
