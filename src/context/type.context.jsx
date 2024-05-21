import { createContext, useState } from 'react';

export const TypeContext = createContext({
  typeId: 1
});

export const TypeContextProvider = ({ children }) => {
  const [typeId, setTypeId] = useState(1);

  return <TypeContext.Provider value={{ typeId, setTypeId }}>
    {children}
  </TypeContext.Provider>;
};