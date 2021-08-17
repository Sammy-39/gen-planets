import { useRef } from "react"
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

import Planet from "./planet"

const ListPlanets = ({planetsList,handleDragDrop}) =>{

    const planetsListRef = useRef()
    const downloadBtnRef = useRef()

    const handleDownload = () =>{
        const file = new Blob([planetsListRef.current.innerHTML], {type: 'text/plain'});
        downloadBtnRef.current.href = URL.createObjectURL(file);
        downloadBtnRef.current.download = `export-${Date.now()}.html`
        downloadBtnRef.current.target = '_blank'
    }

    const handleRLDDChange = (newPlanetsList) =>{
        handleDragDrop(newPlanetsList)
    }

    return(
        <>
            <div className='planets-list' ref={planetsListRef}>  
                <RLDD
                    items={planetsList}
                    itemRenderer={(planet) => (
                        <Planet planetName={planet.name} key={planet.name+planet.id} />
                    )}
                    onChange={handleRLDDChange}
                />
            </div>
            {
                !!planetsList.length && 
                <a href='!' className='download-btn' onClick={handleDownload} 
                ref={downloadBtnRef}> Download </a>
            }
        </>
    )
}

export default ListPlanets