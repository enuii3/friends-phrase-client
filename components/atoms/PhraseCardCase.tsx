const PhraseCardCase = ({ children, hover = null }) => {
  const defaultStyle = `flex justify-center flex-col w-full bg-gray-100 mb-3 px-4 pt-4 pb-2 rounded-lg`
  const activeStyle = `${defaultStyle} hover:bg-gray-200`
  const style = hover ? activeStyle : defaultStyle

  return <div className={style}>{children}</div>
}

export default PhraseCardCase
