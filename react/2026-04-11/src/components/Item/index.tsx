export default function ({text, color, isShow, onTg}) {
  console.log('props = ', text, color)
  return (
    <div>
      {isShow && <span style={{color: color}}>{text}</span>}
      <button onClick={onTg}>{isShow ? 'An' : 'Hidend'}</button>
    </div>
  )
}