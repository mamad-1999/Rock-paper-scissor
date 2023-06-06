import GameContextProvider from "../context/gameContext"

export default function GameLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GameContextProvider>
            {children}
        </GameContextProvider>
    )
}
