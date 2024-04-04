import "./style.css"
const BasicButton = ({ name , action })=>{
    return(
        <input 
            type="button" 
            className="BasicButton"
            value={name} 
            onClick={action} 
        />
    )
}
export default BasicButton