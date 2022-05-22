const MarketItemDetails=({id,showd,setShowd,setShowi})=>{
    return(
        <div className={showd ? `modal-overlay overlay active` : `modal-overlay overlay`} >
            <div className="modal game-border fancy" style={{width: '420px' , marginBottom: '0px'}}>
                <div className="close-btn click-cursor" onClick={()=>{setShowd(false);setShowi(true)}}></div>
                <h3 className="modal-title basic">
                    <span>Sword {id}</span>
                </h3>
                <div className="modal-body" style={{overflow: 'hidden'}}>
                    <h3 className="land-id">#{id}</h3>
                    <h4 className="land-region">King</h4>
                    <div className="land-level">
                        <p>Level</p>
                        <p>1</p>
                    </div>
                    <div className="land-owner">
                        <p>Owned by: User {id}</p>
                        <p>ErPqbG1qbh2FERNbvURebSwWBpPKXpSwJiGFBjb9dg6D</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MarketItemDetails;