import "./DisableRemove.scss"
interface IRemove{
    disable:boolean,
    setDisable:(disable:boolean)=>void
}
export  function DisableRemove({disable,setDisable}:IRemove) {
  return (
    <div className="disable">
       <div className="cancelDiv">
       <button className="cancelButton" onClick={(event)=>{
            event.preventDefault();
            setDisable(!disable)
        }}>x</button>
       </div>
        <p className="message">Հնարավոր չէ ջնջել</p>
    </div>
  )
}
