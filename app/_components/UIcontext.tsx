"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from "react";

// Define the shape of the context state
type Theme = "light" | "dark";

type AppContextType = {
  theme: Theme;
  isModalOpen: boolean;
  toggleTheme: () => void;
  openModal: () => void;
  closeModal: () => void;
};

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the provider component
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      theme,
      isModalOpen,
      toggleTheme,
      openModal,
      closeModal,
    }),
    [theme, isModalOpen]
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
