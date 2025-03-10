"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from "react";

type Theme = "light" | "dark";

type AppContextType = {
  isSelectChatOpen: boolean;
  theme: Theme;
  isModalOpen: boolean;
  toggleTheme: () => void;
  openModal: () => void;
  closeModal: () => void;
  selectChat: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSelectChatOpen, setIsSelectChatOpen] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectChat = () => {
    setIsSelectChatOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      isSelectChatOpen,
      selectChat,
      theme,
      isModalOpen,
      toggleTheme,
      openModal,
      closeModal,
    }),
    [theme, isModalOpen, isSelectChatOpen]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
