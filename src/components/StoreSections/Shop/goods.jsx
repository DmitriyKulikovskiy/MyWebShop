import React from "react";
import "./goods.css";
import Iphone from "./Iphone/Iphone";


const storeImg = <img src="https://img.icons8.com/carbon-copy/50/000000/mac-os.png"/>
const iPhoneImg = <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x--v1.png"/>
const macBookImg = <img className='macBook' src="https://img.icons8.com/ios-glyphs/30/000000/macbook.png"/>
const iPadImg =  <img src="https://img.icons8.com/wired/64/000000/ipad.png"/>
const appleWatchImg = <img src="https://img.icons8.com/dotty/80/000000/apple-watch.png"/>
const airPodsImg = <img src="https://img.icons8.com/dotty/80/000000/earbud-headphones.png"/>

const Goods = () => {
  return (
    <div className="container">
      <div className="store-container ">
        <span className="titleStore">
          Store{storeImg}
        </span>
        <hr />

        <div className="goods-class">
          <div className="title-class">
            iPhone{iPhoneImg}
          </div>
          <Iphone />
        </div>

        <div className="goods-class">
          <div className="title-class">
            MacBook{macBookImg}      
          </div>
          <Iphone />
        </div>
        <div className="goods-class">
          <div className="title-class">
            iPad{iPadImg}         
          </div>
          <Iphone />
        </div>
        <div className="goods-class">
          <div  className="title-class">
            Apple Watch{appleWatchImg}
          </div>
          <Iphone />
        </div>
        <div className="goods-class">
          <div  className="title-class">
            AirPods{airPodsImg}  
          </div>
          <Iphone />
        </div>
      </div>
    </div>
  );
};

export default Goods;
