
type InfoBoxPropsType = {
    title: string
}

const InfoBox = ({ title }: InfoBoxPropsType) => {
    return (
        <div className="h-28 w-full flex items-center justify-center flex-col gap-2">
            <h3 className="text-gray-400 font-semibold text-lg">{title}</h3>
            <h3 className="text-lg text-zinc-800"><span className="text-5xl text-zinc-800 font-medium">3</span>/4</h3>
        </div>
    )
}

export default InfoBox