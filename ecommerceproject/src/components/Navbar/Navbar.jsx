import classes from "./Navbar.module.css"
import CarWidget from "../CartWidget/carwidget"
import ItemListContainer from "../ItemListContainer/itemlistcontainer"
import Button from "../button/button"

const Navbar = (props) => {
    console.log(classes)
    return (
        <header className= {classes.header} >
        <ItemListContainer greeting='Minimarket Express'/>
        <div className={classes.buttons}>
        <Button  label="Home" callBack={() => console.log("click home")}/>
        <Button  label="Compras" callBack={() => console.log("click Compras")}/>
        <Button  label="Contacto" callBack={() => console.log("click Contacto")}/>
        <CarWidget/>
        </div>
        </header>
    )
}

export default Navbar