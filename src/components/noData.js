import noData from '../assets/img/nodata.jpeg'

const NoData = () =>{
    return(
        <div className='no-data'>
            <img className="no-data-img" src={noData} alt={'No Data Available!'} />
            <p className="font-medium"> Type in planet names to generate planet components </p>
        </div>
    )
}

export default NoData