import "./style.css"
const BasicInput = ({type, name, set})=>{
    return(
        <input 
            className="BasicInput"
            type={type} 
            placeholder = {name}
            onChange = {set}
        />
    )
}
export default BasicInput