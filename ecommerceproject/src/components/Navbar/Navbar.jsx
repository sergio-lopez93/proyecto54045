import classes from "./Navbar.module.css"
import CarWidget from "../CartWidget/carwidget"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    console.log(classes)
    return (
        <header className={classes.header} >
            <h1>Minimarket</h1>
            <nav className={classes.buttons}>
                <Link style={{margin:3}} to={'category/viveres'}>viveres</Link>
                <Link style={{margin:3}} to={'category/bebidas instantaneas'}>bebidas instantaneas</Link>
                <Link style={{margin:3}} to={'category/detergentes'}>detergentes</Link>
                <CarWidget />
            </nav> 
        </header>
    )
}

export default Navbar