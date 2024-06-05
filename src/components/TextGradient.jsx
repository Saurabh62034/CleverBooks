
  export default function TextGradient(props) {
    const from = props.from || 'from-red-400'
    const via = props.via || 'via-yellow-500'
    const to = props.to || 'to-green-500'
  
    return (
      <span
        className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
      >
        {props.text}
      </span>
    )
  }