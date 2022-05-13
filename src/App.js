import './App.css';
import { useState,useLayoutEffect } from 'react';
import Draggable from "react-draggable";
import { MapInteractionCSS } from 'react-map-interaction';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


import Modal from './componets/Modal';
import ModalM from './componets/ModalM';
import Market from "./componets//Market";



function App() {
  const [show, setShow] = useState(false);
  const [showm, setShowm] = useState(false);
  const [text, setText] = useState('')
  const [showi, setShowi] = useState(false);
  const [texti, setTexti] = useState('');

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize(); 
  console.log(width)
  const x=window.innerWidth >= 1200 ? 320 : window.innerWidth >= 800 ? 100 : window.innerWidth >= 540 ? 50 : 1;

  return (  
  
     <div className=' overlay'>    

    {/* <MapInteractionCSS >*/}
{/*     
        <Draggable
      defaultPosition={{x: '1500px', y: '100vh'}}
      > */}
    <TransformWrapper
         minScale={1}
         initialScale={1}
         initialPositionX={0}
         initialPositionY={1}
         defaultPositionX={1}
         defaultPositionY={1}  
        // limitToBounds={false}
        // onWheel={()=>{console.log("whell")}}
        // onZoom={()=>{console.log("zoom")}}
        
    >
   <TransformComponent wrapperClass='castle-overlay' contentClass='castle-bg'>

    {/* <div className="castle-bg">  */}

     <div className='fire-wrap-1 fire-wrap'>
       <div className='fire'></div>
     </div>
     
     <div className='quest-btn click-cursor'>
       <button className='game-button click-cursor' onClick={()=>{setShow(true); setText('Quests')}}>
         <div className='title'>Quests</div>
         <img src='../scr/assets/bubble-arrow.c34d2c3a.png' alt='buble'/>
       </button>
     </div>

     <div className='jester-container'>
       <div className='jester-wrap'> 
     <div className='jester-grandle-btn click-cursor'>
       <button className='game-button click-cursor' onClick={()=>{setShow(true); setText('Staking')}}>
         <div className='title'>Staking</div>
         <img src='../scr/assets/bubble-arrow.c34d2c3a.png' alt='buble'/>
       </button>
     </div>
     </div>
     </div>

     <div className='jester-container'>
       <div className='jester-wrap'> 
     <div className='clp-grandle-btn click-cursor'>
       <button className='game-button click-cursor' onClick={()=>{setShow(true); setText('LP')}}>
         <div className='title'>LP</div>
         <img src='../scr/assets/bubble-arrow.c34d2c3a.png' alt='buble'/>
       </button>
     </div>
     </div>
     </div>

     <div className='land-auction-btn click-cursor'>
       <button className='game-button click-cursor' onClick={()=>{setShow(true); setText('Marketplace')}}>
         <div className='title'>Marketplace</div>
         <img src='../scr/assets/bubble-arrow.c34d2c3a.png' alt='buble'/>
       </button>
     </div>

     <div className='sum-btn click-cursor' onClick={()=>{setShow(true); setText('Summons')}}>
       <button className='game-button click-cursor'>
         <div className='title'> Summons</div>
         <img src='../scr/assets/bubble-arrow.c34d2c3a.png' alt='buble'/>
       </button>
     </div>




    {/* </div> */}

    </TransformComponent>
    </TransformWrapper>
    {/* </Draggable> */}
    {/* </MapInteractionCSS> */}
    <Modal show={show} setShow={setShow} text={text}/>
    <ModalM showm={showm} setShowm={setShowm} text={text} setShowi={setShowi} setTexti={setTexti}/>
    <Market showi={showi} setShowm={setShowm} setShowi={setShowi} texti={texti} />

    </div>

  );
}

export default App;
