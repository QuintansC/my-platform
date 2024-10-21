interface SliderProps {
    children: React.ReactNode
}

const Slider = ({children}: SliderProps) => {
    return (
        <div  className="flex justify-center flex-row overflow-y-auto w-[100%] h-100 p-5 relative">
            {children}
        </div>
    )
}

export default Slider