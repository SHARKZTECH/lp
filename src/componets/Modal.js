function Modal({show,setShow,text}) {
    return (
      <div className={show ? `modal-overlay overlay active` : `modal-overlay overlay`}>      
         <div className="modal game-border fancy" style={{width: '700px',height: '264px',marginBottom: '30px'}}>
             <div className="close-btn click-cursor" onClick={()=>setShow(false)}></div>
             <h3 className="modal-title fancy">
                 <span>{text}</span>
             </h3>
             <div className="modal-body"></div>
             <div className="coming-soon__wrap">
                 <div className="coming-soon">
                     <span>Coming Soon</span>
                 </div>
             </div>
         </div>
      </div>
    );
  } 
  
  export default Modal;