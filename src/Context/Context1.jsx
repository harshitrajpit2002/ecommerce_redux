import React, { useState } from "react";
import { createContext } from "react";
const global = createContext();
const Context = (props) => {
  const [data, setdata] = useState(0);
  return (
    <div>
      <global.Provider value={{ data, setdata }}>
        {props.children}
      </global.Provider>
    </div>
  );
};

export { Context, global };
