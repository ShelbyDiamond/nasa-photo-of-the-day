import React from "react";

function Title(props) {
  console.log("Props for Title", props.NasaTitle);
  return <div>{props.NasaTitle}</div>;
}
export default Title;
