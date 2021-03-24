
const monthStyle = {
  border: "solid 1px red"
}

function Month(prop)
{
  return(
    <div onClick={prop.click} style={monthStyle}>{prop.month}</div>
  )
}

export default Month;