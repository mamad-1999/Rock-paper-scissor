import Image from "next/image"

type ControllerItemProps = {
    path: string
}

const ControllerItem = ({ path }: ControllerItemProps) => {
    return (
        <>
            <Image src={path} width={120} height={120} alt="control" className="cursor-pointer" />
        </>
    )
}

export default ControllerItem