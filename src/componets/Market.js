import Land1 from "../assets/land-1.png"
import Land2 from "../assets/land-2.png"
import Land3 from "../assets/land-3.png"
import Land4 from "../assets/land-4.png"
import Land5 from "../assets/land-5.png"

const Market= ({showi,setShowi,setShowm,texti})=>{

    return(
        <div className={showi ? `land-auction overlay row active ` : `land-auction overlay row`} style={{display:'flex'}}>
            <div className="filter col c-12 m-6 l-4  active">
               <div className="filter-expanded game-border basic">
                   <div className="filter-header">
                   <div className="filter-header-group">
                       <span>Filter</span>
                       <div className="filter-toggle-btn click-cursor">
                           <i className="fas fa-angle-left"></i>
                       </div>
                   </div>
                   <div className="filter-header-group">
                   <button className="green-button click-cursor filter-btn">Apply</button>
                   <button className="green-button click-cursor filter-btn">Reset</button>
                   </div>
                   </div>
                   <div className="filter-body game-scroll-bar">
                   <div className="filter-search">
                       <input type='text' className="filter-search-input" placeholder="Search by Asset ID"/>
                   </div>
                   <div className="filter-status">
                       <span className="filter-heading">Status</span>
                       <div className="containet">
                           <ul className="filter-status__list row ">
                           <li className="filter-status__item col c-6">
                               <label className="status-label click-cursor">
                               <input className="click-cursor" type={'radio'} name='status' id='status--1' value={'-1'}/>
                               <span>All</span>
                               </label>
                           </li> 
                            <li className="filter-status__item col c-6">
                               <label className="status-label click-cursor">
                               <input className="click-cursor" type={'radio'} name='status' id='status-0' value={'0'}/>
                               <span>For Sale</span>
                               </label>
                           </li>
                             <li className="filter-status__item col c-6">
                               <label className="status-label click-cursor">
                               <input className="click-cursor" type={'radio'} name='status' id='status-1' value={'1'}/>
                               <span>Not For sale</span>
                               </label>
                           </li>
                           <li className="filter-status__item col c-6">
                               <label className="status-label click-cursor">
                               <input className="click-cursor" type={'radio'} name='status' id='status-21' value={'2'}/>
                               <span>For Lease</span>
                               </label>
                           </li>
                           </ul>
                       </div>
                   </div>
                   <div className="filter-region">
                       <span className="filter-heading">Class</span>
                       <div className="container">
                           <ul className="filter-region__list row">
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region--1' value={'-1'} />
                                       <span>All</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-0' value={'0'} />
                                       <span>King</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-1' value={'1'} />
                                       <span>Queen</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-2' value={'2'} />
                                       <span>Witches</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-4' value={'3'} />
                                       <span>Royal Knights</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-4' value={'4'} />
                                       <span>Guards</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-5' value={'5'} />
                                       <span>Stewards</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-6' value={'6'} />
                                       <span>Servants</span>
                                   </label>
                               </li>
                               <li className="filter-region__item col c-6">
                                   <label className="region-label click-cursor">
                                       <input className="click-cursor region-checkbox" type={'checkbox'}
                                       name='regions' id='region-7' value={'7'} />
                                       <span>Pearsants</span>
                                   </label>
                               </li>

                           </ul>
                       </div>
                   </div>
                   </div>
               </div>
            </div>

            <div className="land-view-container col c-12 m-6 l-8 game-border fancy">
                <div className="close-btn click-cursor" onClick={()=>{setShowi(false);setShowm(true)}}></div>
                <h2 className="land-view__heading">{texti}</h2>
                <div className="summry-sort-land">
                    <div className="land-summary">
                        <span>Showing 5 Assets</span>
                    </div>
                    <div className="land-sort">
                     <span className="land-sort__label">Sort By:</span>
                     <div className="land-select__list" id="landPropertyLabel">
                         <select className="click-cursor" name="sortType" id="sortType">
                         <option value={'0'}>ID</option>    
                         <option value={'1'}>Name</option>    
                         <option value={'2'}>Category</option>    
                         <option value={'3'}>Level</option>    
                         <option value={'4'}>Sale Price</option>    
                         </select>
                     </div>
                     <div className="land-select__list" id="landPropertyLabel">
                         <select className="click-cursor" name="sortType" id="sortType">
                         <option value='0'>Ascending</option>
                         <option value='1'>Descending</option>
                         </select>
                     </div>
                    </div>
                </div>
                <div className="land-list game-scroll-bar row">
                    <div className="col c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${Land4})`}}>
                                        <div className="green-button land-sale-tag">For Sale</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword 4</p>
                                        <p>#4</p>
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
                                            <p>For sale</p>
                                            <p>400000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="col  c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${Land1})`}}>
                                        <div className="green-button land-sale-tag">For Sale</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword 1</p>
                                        <p>#1</p>
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
                                            <p>For sale</p>
                                            <p>600000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col  c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${Land5})`}}>
                                        <div className="green-button land-sale-tag">For Sale</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword 5</p>
                                        <p>#5</p>
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
                                            <p>For sale</p>
                                            <p>50000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col  c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${Land2})`}}>
                                        <div className="green-button land-sale-tag">For Sale</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword 2</p>
                                        <p>#2</p>
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
                                            <p>For sale</p>
                                            <p>2000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col  c-12 l-3 l-4">
                        <div>
                            <div className="land-item">
                                <div className="land-image-wrap">
                                    <div className="land-image" style={{backgroundImage: `url(${Land3})`}}>
                                        <div className="green-button land-sale-tag">For Sale</div>
                                    </div>
                                </div>
                                <div className="land-item__details">
                                    <div className="land-item__header">
                                        <p>Sword 3</p>
                                        <p>#3</p>
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
                                            <p>For sale</p>
                                            <p>300000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="land-item__button-wrap">
                                    <button className="green-button click-cursor">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
};

export default Market;