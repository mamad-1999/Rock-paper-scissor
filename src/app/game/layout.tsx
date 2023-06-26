import React from "react";
import ThemeProvider from "../context/ThemeContext";
import GameContextProvider from "../context/gameContext";
// import "../flip.css";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </GameContextProvider>
  );
}
