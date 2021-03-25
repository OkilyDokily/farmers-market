const paragraphStyle = {
  paddingLeft: "100px",
  fontSize:"22px",
  color:"gray"
}


function Header()
{
  return(
    <div>
      <p style={paragraphStyle}>Farmer's Market</p>
    </div>
  )
}

export default Header;