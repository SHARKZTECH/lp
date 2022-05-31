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
    const [vault_items,setVault_items]=useState([]);
    const [deposit,setDeposit]=useState(false)
    const [Withdraw,setWithdraw]=useState(false)
    const [filter,setFilter]=useState("Your Wallet")
    const [stake,setStake]=useState(false)
    const [unstake,setUnstake]=useState(false)
    


    useEffect(()=>{
       setItems(_items)
    },[])

    const stakeHandler=()=>{
        setStake(false)
        setUnstake(true)
     }
    const unstakeHandler=()=>{ 
        setStake(true)
        setUnstake(false)
    }
    const claimHandler=()=>{ }
    const refreshHandler=()=>{ }

    const walletHandler=()=>{
          setFilter("Your Wallet")
          setWithdraw(false)
     }

    const vaultHandler=()=>{ 
        setFilter("Your vault");
        setDeposit(false)
    }

    const selectedDepositHandler=(id)=>{
        setDeposit(true)
        setVault_items(items.filter((item)=> item.id === id ));
        setItems(items.filter((item)=> item.id !== id ));
    }
    const selectedWithdrawHandler=(id)=>{
        setWithdraw(true)
        setVault_items(vault_items.filter((item)=> item.id !== id ));
        setItems(vault_items.filter((item)=> item.id === id ));
    }
    const depositHandler=()=>{ 
        setStake(true)
      }
    const withdrawHandler=()=>{
        setStake(false)
        setUnstake(false)
      }

    console.log(vault_items[0])

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
                <button className={stake ? "" : "disabled"} onClick={stakeHandler}>Stake</button>
                <button className={unstake ? "" : "disabled"} onClick={unstakeHandler}>Unstake</button>
                <button onClick={claimHandler}>Claim 0.00</button>
                <button onClick={refreshHandler}>Refresh</button>
                </div>

                </div>

            </div>

            <div className="staking-item">
            <div className="staking-filter">
              <button className={filter === "Your Wallet" ? `selected`: ''} onClick={walletHandler}>Your Wallet</button>
              <button className={filter === "Your vault" ? `selected`: ''} onClick={vaultHandler}>Your vault</button>
            </div>

              <div className="staking-item-container">
                  {filter==="Your Wallet" ? items?.map((item)=>(
                  <div key={item.id} className="staking-item-img-wrapper" onClick={()=>selectedDepositHandler(item.id)}>
                     <div className="staking-item-img" style={{backgroundImage: `url(${item.image})`}}></div>
                      <p>{item.name} #{item.id}</p>
                  </div>
                  )):vault_items?.map((item)=>(
                    <div key={item.id} className="staking-item-img-wrapper" onClick={()=>selectedWithdrawHandler(item.id)}>
                       <div className="staking-item-img" style={{backgroundImage: `url(${item.image})`}}></div>
                        <p>{item.name} #{item.id}</p>
                    </div>))
                    }                           
             
              </div>
                   <div className="staking-ft">
                  <p>Select NFTs to move them to your {filter==="Your Wallet" ? "vault" : "wallet" }</p>
                  <button className={deposit ? `btn-ft active`: `btn-ft` } onClick={depositHandler}> Deposit selected</button>
                  <button className={Withdraw ? `btn-ft active`: `btn-ft` } onClick={withdrawHandler}>Withdraw selected</button>
                   </div>
            </div>
        </div>
        </div>
    )
}
export default Staking;