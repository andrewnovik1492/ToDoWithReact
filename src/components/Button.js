import "./button.scss"
function Button(props) {
    const getClassName = ()=>{
        return `${props.active ? 'btn-active': ''} btn btn-${props.type ?? 'primary'} btn-${props.size ?? 'default'}`
    }
    
    return <button disabled={props.disabled} className={getClassName()} onClick={props.onClick}>{props.children}</button>
}
export default Button