import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavContext.Provider value={{ open, setOpen }}>
      {children}
    </NavContext.Provider>
  );
};

function useNavContext() {
  const context = useContext(NavContext);
  if (context === undefined)
    throw new Error("context was outside AuthProvider");
  return context;
}
export { NavProvider, useNavContext };
