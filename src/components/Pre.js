import React from "react";
import Typewriter from "typewriter-effect";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div id="pre-name">
        <Typewriter
          options={{
            strings: ["ANVI JAIN"],
            autoStart: true,
            cursor:"...",
            delay:50,
            deleteSpeed: 100,
            skipAddStyles:true
          }}
        />
      </div>
  </div>
  );
}

export default Pre;
