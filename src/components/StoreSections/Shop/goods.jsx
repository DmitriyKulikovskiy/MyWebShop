import React from "react";
import "./goods.css";
import IphoneContainer from "./Iphone/iphone-container";

const storeImg = <img src="https://img.icons8.com/carbon-copy/50/000000/mac-os.png"/>
const iPhoneImg = <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x--v1.png"/>
const macBookImg = <img className='macBook' src="https://img.icons8.com/ios-glyphs/30/000000/macbook.png"/>
const iPadImg =  <img src="https://img.icons8.com/wired/64/000000/ipad.png"/>
const appleWatchImg = <img src="https://img.icons8.com/dotty/80/000000/apple-watch.png"/>
const airPodsImg = <img src="https://img.icons8.com/dotty/80/000000/earbud-headphones.png"/>
const searchImg = <img src="https://img.icons8.com/material-two-tone/24/000000/search.png"/>

const Goods = ({searchQuery,searchItem}) => {

  return (
    <div className="container">
      <div className="store-container ">
        <span className="titleStore">
          Store{storeImg}
        </span>
        <hr />

        <div className='search-bar'>
          {searchImg}<input type='text'
                            placeholder='Search...' 
                            value={searchQuery} 
                            name='searchBar' 
                            onChange={e => searchItem(e.target.value)} />
        </div>

        <div className="goods-class">
          <div className="title-class">
            iPhone{iPhoneImg}
          </div>

          <IphoneContainer/>
        </div>

        <div className="goods-class">
          <div className="title-class">
            MacBook{macBookImg}      
          </div>
          <IphoneContainer />
        </div>
        <div className="goods-class">
          <div className="title-class">
            iPad{iPadImg}         
          </div>
          <IphoneContainer />
        </div>
        <div className="goods-class">
          <div  className="title-class">
            Apple Watch{appleWatchImg}
          </div>
          <IphoneContainer />
        </div>
        <div className="goods-class">
          <div  className="title-class">
            AirPods{airPodsImg}  
          </div>
          <IphoneContainer />
        </div>
      </div>
    </div>
  );
};

export default Goods;
