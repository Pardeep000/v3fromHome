import { ReactNode, useState } from "react";
import CreateContext from "./CreateContext";

const { Provider } = CreateContext;

interface IProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: IProvider) => {
  const [showRightPanel, setShowRightPanel] = useState(false);
  return (
    <Provider value={{ showRightPanel, setShowRightPanel }}>
      {children}
    </Provider>
  );
};
export default ContextProvider;
