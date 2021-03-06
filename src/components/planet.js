
const Planet = ({planetName}) =>{
    return(
        <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
            <div className="relative">
                <img className="absolute top-0 left-0 w-full h-32 object-cover" 
                    src={require(`../assets/img/${planetName}.jpeg`).default} alt={planetName} />
            </div>
            <p className="text-3xl font-bold text-left capitalize p-10"> {planetName} </p>
        </div>
    )
}

export default Planet

