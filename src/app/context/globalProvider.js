"use client";

import { createContext, useContext, useState } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedThemes, setSelectedThemes] = useState(0);
  const theme = themes[selectedThemes];
  return (
    <GlobalContext.Provider
      value={{
        theme,
        // tasks,
        // deleteTask,
        // isLoading,
        // completedTasks,
        // importantTasks,
        // incompleteTasks,
        // updateTask,
        // modal,
        // openModal,
        // closeModal,
        // allTasks,
        // collapsed,
        // collapseMenu,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
