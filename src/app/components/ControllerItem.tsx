import Image from "next/image"

type ControllerItemProps = {
    path: string
}

const ControllerItem = ({ path }: ControllerItemProps) => {
    return (
        <>
            <Image
                src={path}
                width={100}
                height={100}
                alt="control"
                className="cursor-pointer sm:w-[120px] sm:h-[120px]"
            />
        </>
    )
}

export default ControllerItem