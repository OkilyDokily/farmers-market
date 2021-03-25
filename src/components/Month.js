import PropTypes from 'prop-types';

const monthStyle = {
  border: "solid 1px red",
  cursor:"pointer"
}

function Month(prop)
{
  return(
    <div onClick={prop.click} style={{...monthStyle,...prop.style}}>{prop.month}</div>
  )
}

export default Month;


Month.propTypes = {
  click:PropTypes.func,
  style:PropTypes.object
} 