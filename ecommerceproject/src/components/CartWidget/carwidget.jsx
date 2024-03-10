import imgCar from '../assets/carSite.png'

const CarWidget = () => {
    return (
        <button style={{border:"none", borderRadius:10, height:38, margin:3}}>
            <img src={imgCar} style={{width:'2.5rem'}} />
            0
        </button>
    )
}

export default CarWidget