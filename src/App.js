import React, {useState} from 'react';
import All from './Components/All/all';
import Subscription from './Components/Subscription/subscription';
import SubsForm from './Components/Subscription/SubscriptionForm';
import AddProduct from './Components/Product/AddProducts';
import Lumsump from './Components/Lumsump/lumsump';
import Emi from './Components/EMI/emi';
import {GiSofa} from 'react-icons/gi';
import { AiOutlineBell } from "react-icons/ai";
import {BiBath, BiDesktop, BiShoppingBag} from 'react-icons/bi';
import './App.css';

const App = () => {

    const [changePath, setChangePath]=useState("all")
    const [showPopup, setShowPopup]=useState(false)
    const [productPopup, setProductPopup]=useState(false)
  return (
    <div>
        <div className='mainDiv'>
            <div className='headingLeft'>
            <img style={{paddingLeft:"10px", paddingBottom:"10px"}} 
            src='https://i.ibb.co/GHNgWWw/credenc-capital-india-funding.jpg' width="100px" alt='Logo'/>
            <div className='heading'>CREDENC PRICER</div>
            </div>
            <div className='headingRight'>
            <div><AiOutlineBell /></div>
            &emsp;&emsp;
            <div className='bigLogo'>SK</div> 
            </div>
        </div>

        <div className='topDiv' >
            <div className='leftDiv'>
                <div style={{paddingLeft:"10px"}} className='topStyle'>
                <div>
                    <GiSofa/>&emsp; <b>Sofa</b>
                </div><br/>
                <div>
                    <BiBath />&emsp; <b>BathTub</b>
                </div><br/>
                <div>
                    <BiDesktop />&emsp; <b>Desktop</b>
                </div><br/>
                <div>
                    <BiShoppingBag />&emsp; <b>School Bag</b>
                </div>
                </div>
                <div className='bottom'>
                    <button type="button" class="btn btn-secondary" onClick={()=>{setProductPopup(!productPopup)}}>
                        Add new product
                    </button>
                </div>
            </div>
            <div className='rightDiv'>
                <div className='header'>&emsp;
                  <div className='buttonTop'><button class="btn btn-light" onClick={()=>setChangePath("all")}>All</button>&emsp;
                  <button class="btn btn-light" onClick={()=>setChangePath("subscription")}>Subscription</button>&emsp;
                  <button class="btn btn-light" onClick={()=>setChangePath("lumsump")}>Lumpsum
                  </button>&emsp;
                  <button class="btn btn-light" onClick={()=>setChangePath("EMI")}>EMI</button> </div>
                
                <div className='add'>
                      <button type="button" class="btn btn-secondary" onClick={()=>{setShowPopup(!showPopup)}}>Add new pricing</button></div>
                </div>
                <div className='table'>
                    <div onClick={()=>{setShowPopup(false)}} onClickCapture={()=>{setProductPopup(false)}}>
                    { changePath==="all" && <All/> }
                    { changePath==="subscription" && <Subscription/> }
                    { changePath==="lumsump" && <Lumsump/> }
                    { changePath==="EMI" && <Emi/> }
                    </div>
                </div>
               {showPopup ? <SubsForm/> :null} 
               {productPopup ? <AddProduct/> : null}
            </div>
        </div>
    </div>
  )
}

export default App