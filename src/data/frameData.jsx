import { useState, useCallback, createContext, useContext } from 'react'

const FrameContext = createContext(undefined);

export const FrameProvider = ({children}) => {
  const [totalPages, setTotalPages] = useState([]);

  const addPage = useCallback(
    (id) => {
      setTotalPages((prev) => [...prev, id]);
    },
    [setTotalPages],
  );

  const removePage = useCallback(
    (id) => {
      setTotalPages((prev) => [...prev.filter(i => i !== id)]);
    },
    [setTotalPages],
  );

  return (
    <FrameContext.Provider value={{ totalPages, addPage, removePage }}>
      {children}
    </FrameContext.Provider>
  );
};

export const useFrame = () => {
  const context = useContext(FrameContext);

  if (!context) {
    throw new Error('useFrame must be used within a FrameProvider');
  }
  return context;
};