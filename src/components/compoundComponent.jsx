import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

const Tabs = ({ children }) => {
  const [on, setOn] = useState(true);

  const handleChange = () => {
    setOn(!on);
  };

  return (
    <TabsContext.Provider value={{ on, handleChange }}>
      {children}
    </TabsContext.Provider>
  );
};

const Button = ({ children }) => {
  const { handleChange, on } = useContext(TabsContext);
  return (
    <button
      onClick={handleChange}
      className={`${on ? "bg-amber-300" : "bg-indigo-700"}`}
    >
      {children}
    </button>
  );
};

const On = ({ children }) => {
  const { on } = useContext(TabsContext);
  return <div>{on === true ? children : null}</div>;
};

const Off = ({ children }) => {
  const { on } = useContext(TabsContext);

  return <div>{on === false ? children : null}</div>;
};

Tabs.Button = Button;
Tabs.On = On;
Tabs.Off = Off;

export default Tabs;
