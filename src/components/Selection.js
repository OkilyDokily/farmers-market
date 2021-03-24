import React from "react";

const foodStyle = {
  border: "solid 1px gray"
}

function Selection(prop) {

  return (
    <ul>
      {prop.selection.map(x => <li>{x}</li>)}
    </ul>

  )
};

export default Selection;