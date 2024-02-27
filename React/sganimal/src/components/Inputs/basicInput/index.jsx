import "./style.css";
const BasicInput = ({ type, name, set })=>{
    return(
        <input type={type} placeholder = { name } onChange={(e)=>{set(e.target.value)} } className = "BInput"/>
    )
}
export default BasicInput;