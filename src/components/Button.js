import "./button.scss"
function Button(props) {
    const getClassName = ()=>{
        return `btn btn-${props.type ?? 'primary'} btn-${props.size ?? 'default'}`
    }
    return <button className={getClassName()} onClick={props.onClick}>{props.children}</button>
}
export default Button