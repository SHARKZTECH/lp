import { useEffect, useState } from "react"
import HEADER from "../assets/header.jpg"
import NFT from "../assets/nft.jpg"
import IMG from "../assets/royal-knight.jpg"
import {TbDotsCircleHorizontal} from "react-icons/tb"

const _items=[
    {
    "id":1,
    "name":"Royal Knight",
    "image":IMG,
    "status":""
    },
   {
    "id":2,
    "name":"Royal Knight",
    "image":IMG,
    "status":""
   },
   {
    "id":3,
    "name":"Royal Knight",
    "image":IMG,
    "status":""
   }
]


const Staking=({shows})=>{
    const [items,setItems]=useState([]);
    const [vault_items,setVault_items]=useState([]);
    const [na_items,setNa_items]=useState({});
    const [nb_items,setNb_items]=useState([]);
    const [deposit,setDeposit]=useState(false)
    const [Withdraw,setWithdraw]=useState(false)
    const [filter,setFilter]=useState("Your Wallet")
    const [stake,setStake]=useState(false)
    const [unstake,setUnstake]=useState(false)
    const [clicked_id,setClicked_id]=useState(0);
    


    useEffect(()=>{
       setItems(_items)
       setVault_items([])
    },[])

    const stakeHandler=()=>{ 
        if(filter === "Your vault" && na_items !== null ){
            na_items['status']="staked";
            setClicked_id(0)
        }
            setWithdraw(false);
            setStake(false)
      }
    const unstakeHandler=()=>{
        if(filter === "Your vault" && na_items !== null ){
            na_items['status']="unstaked";
            setClicked_id(0)
        }
            setUnstake(false);
      }

    const claimHandler=()=>{ }    
    const refreshHandler=()=>{ }

    const walletHandler=()=>{
          setFilter("Your Wallet")
          setWithdraw(false)
          setStake(false)
          setUnstake(false)
          setClicked_id(0)

     }

    const vaultHandler=()=>{ 
        setFilter("Your vault");
        setDeposit(false)
        setClicked_id(0)
    }

    const selectedDepositHandler=(id)=>{
        setClicked_id(id);
        setDeposit(true)
        const new_item=(items.filter((item)=> item.id === id )[0]);

        new_item['status']="unstaked";
        setNa_items(new_item);
        setNb_items(items.filter((item)=> item.id !== id));
    }

    const selectedWithdrawHandler=(id)=>{
        setClicked_id(id);

        const new_item=(vault_items.filter((item)=> item.id === id )[0]);

        if(new_item["status"] === "staked"){
            setUnstake(true); 
            setStake(false);
            setWithdraw(false)           
        }else{
            setStake(true)
            setWithdraw(true)
            setUnstake(false)
        }
        
        setNa_items(new_item)
        setNb_items(vault_items.filter((item)=> item.id !== id))
    }

    const depositHandler=()=>{ 
        setVault_items([...vault_items,na_items]);
        setItems(nb_items);       
      }
    const withdrawHandler=()=>{  
        na_items["status"]="";
        setStake(false);
        setUnstake(false);     
        setItems([...items,na_items]); 
        setVault_items(nb_items);
        setWithdraw(false);
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
                     <div className="staking-item-img" style={{backgroundImage: `url(${item.image})`}}>
                         <i className={item.id === clicked_id ? "selected-icon clicked" : "selected-icon"}>
                             <TbDotsCircleHorizontal/>
                         </i>
                     </div>
                      <p>{item.name} #{item.id}</p>
                  </div>
                  )):vault_items?.map((item)=>(
                    <div key={item.id} className="staking-item-img-wrapper" onClick={()=>selectedWithdrawHandler(item.id)}>
                       <div className="staking-item-img" style={{backgroundImage: `url(${item.image})`}}>
                       <i className={item.id === clicked_id ? "selected-icon clicked" : "selected-icon"}>
                             <TbDotsCircleHorizontal/>
                         </i>
                       </div>
                        <p>{item.name} #{item.id}</p>
                    </div>))
                    }                           
             
              </div>
                   <div className="staking-ft">
                  <p>Select NFTs to move them to your {filter==="Your Wallet" ? "vault" : "wallet, stake or unstake" }</p>
                  <button className={deposit ? `btn-ft active`: `btn-ft` } onClick={depositHandler}> Deposit selected</button>
                  <button style={{marginTop :"-50px"}} className={Withdraw ? `btn-ft active`: `btn-ft` } onClick={withdrawHandler}>Withdraw selected</button>
                   </div>
            </div>
        </div>
        </div>
    )
}
export default Staking;