import { useSelector } from "react-redux";
function Count(){
    const count=useSelector((state)=>state);
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default Count;