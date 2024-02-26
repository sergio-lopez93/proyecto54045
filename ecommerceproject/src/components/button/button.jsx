

const Button = (props) => {
    return (
        <button onClick={props.callBack} className="btn btn-primary" style={{margin:3}}> {props.label}
        </button>
    )
}

export default Button 