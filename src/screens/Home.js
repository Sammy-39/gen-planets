import { useState, lazy, Suspense } from 'react'

import GenInput from '../components/genInput'
import NoData from '../components/noData'

const ListPlanets = lazy(()=>import('../components/listPlanets'))

const Home = () =>{

    const [planetsList,setPlanetsList] = useState([]) 

    const handleInput = (genValue) =>{
        let genValueList = genValue.split(',').map((val,index)=>{return {name:val.toLowerCase(),id:index}})
        let planets = ['earth','jupiter','mars','mercury','saturn','venus']
        let planetsList = genValueList.filter((val)=>planets.indexOf(val.name)!==-1) 
        setPlanetsList(planetsList)  
    }

    const handleDragDrop = (newPlanetsList) =>{
        setPlanetsList(newPlanetsList)
    }

    return(
        <div className='home'>
           <GenInput handleInput={handleInput}/>
           <Suspense fallback={<div> Loading... </div>}>
                <ListPlanets planetsList={planetsList} handleDragDrop={handleDragDrop} />
           </Suspense>
           {!planetsList.length && <NoData />}
        </div>
    )
}

export default Home