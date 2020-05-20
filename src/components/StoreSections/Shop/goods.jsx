import React from "react";
import "./goods.css";
import IphoneContainer from "./Iphone/iphone-container";
import { storeImg,iPhoneImg,macBookImg,iPadImg,appleWatchImg,airPodsImg,searchImg } from "../../../assets/icons";

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
