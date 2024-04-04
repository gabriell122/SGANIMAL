import "./style.css";
const BasicButton = ({name , action }) =>{
    return(
        <input type="button" value={name} className="BBButton" onClick={action}/>
    )
}
export default BasicButton