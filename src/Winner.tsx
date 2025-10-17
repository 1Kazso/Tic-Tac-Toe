const Winner = (props) => {
    const handleReset = () => {
        props.rstGame()
    }
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold animate-bounce delay-100 duration-75">Winner</h1>
            <button className="border-2 rounded-full p-2 text-black hover:bg-blue-500 cursor-pointer " onClick={handleReset}>Reset Game</button>

        </div>
    )
}

export default Winner