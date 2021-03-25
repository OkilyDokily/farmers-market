import React from "react";
import PropTypes from 'prop-types';


const liStyle = {
  listStyleType: "none"
}
const ulStyle = {
  borderRight: "red solid 1px",
  height:"max-content",
  paddingRight: "5px"
}

function Selection(prop) {

  return (
    <ul style={ulStyle}>
      {prop.selection.map((x,i) => <li key={i} style={liStyle}>{x}</li>)}
    </ul>
  )
};

export default Selection;


Selection.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string)
}

