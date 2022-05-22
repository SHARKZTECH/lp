
const MarketItem=({id,name,price,image,setShowd,setId,setShowi})=>{

    return(
        <>
         <div className="col c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${image})`}}>
                                        <div className={price && "green-button land-sale-tag"}>{price !== 0 && 'For Sale'}</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword {id}</p>
                                        <p>#{id}</p>
                                    </div>
                                    <div className="land-item__info">
                                        <div className="land-info__row">
                                            <p>Class</p>
                                            <p>King</p>
                                        </div>
                                        <div className="land-info__row">
                                            <p>Level</p>
                                            <p>1</p>
                                        </div>
                                        <div className="land-info__row">
                                            {price ? (
                                                <>
                                                 <p style={{fontWeight: 'bold'}}>For sale</p>
                                                 <p  style={{fontWeight: 'bold'}}>{price}</p>
                                                 </>
                                            ) : (
                                                <p>Not for sale</p>
                                            )}
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor" onClick={()=>{setId(id);setShowd(true);setShowi(false)}}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>  
               
        </>
    )
}
export default MarketItem;