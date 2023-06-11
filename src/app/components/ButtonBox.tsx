
const ButtonBox = () => {
    return (
        <div className="flex justify-center items-center absolute md:left-8 md:top-8 top-40 left-8 w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 cursor-pointer">
            <svg
                className="absolute w-6 md:w-8 h-6 md:h-8 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    className="center"
                    d="M11,3.05A9,9,0,1,0,21,13a1,1,0,0,0-1.54-.95,5.4,5.4,0,0,1-7.47-7.44A1,1,0,0,0,11,3.05Z"
                />
            </svg>
        </div>
    )
}

export default ButtonBox