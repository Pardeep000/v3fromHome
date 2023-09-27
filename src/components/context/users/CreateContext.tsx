import { createContext } from "react";

interface IContextData {
  showRightPanel: boolean;
  setShowRightPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const context = createContext<IContextData | null>(null);

export default context;
