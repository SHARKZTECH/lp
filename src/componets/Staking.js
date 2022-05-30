import { useEffect, useState } from "react"
import HEADER from "../assets/header.jpg"
import NFT from "../assets/nft.jpg"
import IMG from "../assets/royal-knight.jpg"

const _items=[
    {
    "id":1,
    "name":"Royal Knight",
    "image":IMG
   },
   {
    "id":2,
    "name":"Royal Knight",
    "image":IMG
   },
   {
    "id":3,
    "name":"Royal Knight",
    "image":IMG
   }
]


const Staking=({shows})=>{
    const [items,setItems]=useState([]);
    const [deposit,setDeposit]=useState(false)
    const [filter,setFilter]=useState("Your Wallet")


    useEffect(()=>{
       setItems(_items)
    },[])

    const stakeHandler=()=>{ }
    const unstakeHandler=()=>{ }
    const claimHandler=()=>{ }
    const refreshHandler=()=>{ }
    const walletHandler=()=>{ }
    const vaultHandler=()=>{ }

    const selectedNftHandler=(id)=>{
        setDeposit(true)
    }

    return(
        <div className={shows ? `staking overlay active` : `staking overlay`}>
            <div className="staking-container">
            <div className="staking-logo">
                <div className="staking-logo-img-wrapper">
                <div className="staking-logo-img" style={{backgroundImage: `url(${HEADER})`}}></div>

                </div>
                <span>.devnet</span>
            </div>

            <div className="staking-header">
                <h2>Your Royal Society NFT staking account</h2>
                <p style={{marginBottom: '15px',marginLeft:"20px"}}> Below you can stake,unstake and collect SWRD tokens.</p>
                
                <div className="staking-it">

                <div className="staking-nft-img-wrapper">
                <div className="staking-nft-img" style={{backgroundImage: `url(${NFT})`}}></div>
                    <p>NTFs staked:0</p>
                    </div>
                    <p>Vault state: unlocked</p>
                    <p>Account status:unstaked</p>
                <div>
                <button className="disabled" onClick={stakeHandler}>Stake</button>
                <button className="disabled" onClick={unstakeHandler}>Unstake</button>
                <button onClick={claimHandler}>Claim 0.00</button>
                <button onClick={refreshHandler}>Refresh</button>
                </div>

                </div>

            </div>

            <div className="staking-item">
            <div className="staking-filter">
              <button className="selected" onClick={walletHandler}>Your Wallet</button>
              <button onClick={vaultHandler}>Your vault</button>
            </div>

              <div className="staking-item-container">
                  {items?.map((item)=>(
                  <div key={item.id} className="staking-item-img-wrapper" onClick={()=>selectedNftHandler(item.id)}>
                     <div className="staking-item-img" style={{backgroundImage: `url(${item.image})`}}></div>
                      <p>{item.name} #{item.id}</p>
                  </div>
                  ))}                           
             
              </div>
                   <div className="staking-ft">
                  <p>Select NFTs to move them to your vault</p>
                  <button className={deposit ? `btn-ft active`: `btn-ft` }> Deposit selected</button>
                   </div>
            </div>
        </div>
        </div>
    )
}
export default Staking;