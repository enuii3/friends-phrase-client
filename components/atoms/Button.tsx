const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400"
    >
      {text}
    </button>
  )
}

export default Button
