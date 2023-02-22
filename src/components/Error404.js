import React from "react";
import background from "../assets/img/404.png";

function Error404 () {
  return (
    <>
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", width:"auto", height:"1000px"}}>
    </div>
    </>
  );
}

export default Error404;