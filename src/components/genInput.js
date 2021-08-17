import { useState } from "react"

const GenInput = ({handleInput}) => {

    const [genValue, setGenValue] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleInput(genValue)
        setGenValue('')
    }

    return(
        <form className="gen-input-form" onSubmit={handleSubmit}>
            <div className="gen-input-con">
                    <input className="gen-input focus:shadow-outline" type="text" placeholder="Planet Names" 
                    value={genValue} onChange={e=>setGenValue(e.target.value)} />
            </div>
            <button className="gen-btn"> Generate </button>
        </form>
    )
}

export default GenInput