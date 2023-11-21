const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth }) => {

    return (
      <button className={`flex justify-center items-center gap-2 px-8 py-3 border text-sm leading-none rounded-lg
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-yellow text-black border-yellow"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
    </button>
    )
  }
  
  
  export default Button
  