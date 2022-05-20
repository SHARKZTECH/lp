

function Modal({showm,setShowm,text,setShowi,setTexti}) {

    return (
      <div className={showm ? `modal-overlay overlay active` : `modal-overlay overlay`}>      
         <div className="modal game-border fancy" style={{width: '600px',height: '316px',marginBottom: '0px'}}>
             <div className="close-btn click-cursor" onClick={()=>setShowm(false)}></div>
             <h3 className="modal-title fancy">
                 <span>{text}</span>
             </h3>
             <div className="modal-body">
                 <button className="green-button click-cursor" onClick={()=>{setShowi(true); setShowm(false); setTexti("View All Assets");}} style={{padding:' .3rem 4rem'}}>
                     View Items
                 </button>
                 <button className="green-button click-cursor" onClick={()=>{setShowi(true); setShowm(false); setTexti("Buy Assets")}} style={{padding:' .3rem 4.19rem'}}>
                     Buy  Items
                 </button>
             </div>
           
         </div>
      </div>
    );
  } 
  
  export default Modal;