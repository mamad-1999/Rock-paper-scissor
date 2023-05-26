import InfoBox from "./InfoBox"


const Footer = () => {
    return (
        <div className="w-full bg-white fixed bottom-0 right-0 left-0 p-4 flex items-center justify-between gap-4 md:hidden shadow-black shadow-2xl">
            <InfoBox />
            <span className="w-1 bg-gray-400 h-24"></span>
            <InfoBox />
        </div>
    )
}

export default Footer