import React, { useState } from 'react'
import data from './Subscription-Info.json'
import './style.css'

const SubscriptionForm = () => {
    const [btnValue, setBtnValue]=useState("")
    const [amount, setAmount]=useState()
    const [times, setTimes]=useState("")
    const [discount, setDiscount]=useState()
    const [catchData, setCatchData]=useState({
        pricingModel:"",
        status:"",
        amount:"",
        pricing:"",
        profit:""
    })
    const [changePopup, setChangePopup]=useState("subscription")
    
    const SubFormHandle=(e)=>{
        e.preventDefault();
        console.log(btnValue,amount,times,discount)
        setCatchData({...catchData, pricingModel:btnValue,amount:amount,profit:discount,pricing:times })
        data.push(catchData)
        console.log(data)
    }
  return (
    <div>
        <div className='formStyle'>
        <h2 style={{color:"lightgray", fontWeight:"bold"}}>Add new pricing model</h2><br/>
            <form onSubmit={SubFormHandle}>
            <div><button className='btn btn-outline-secondary' onClickCapture={()=>{setChangePopup("subscription")}} onClick={()=>{setBtnValue("Subscription")}}>Subscription</button>&emsp;
            
             <button className='btn btn-outline-secondary' onClickCapture={()=>{setChangePopup("lumpsump")}} onClick={()=>{setBtnValue("Lumpsump")}}>Lumpsump</button>&emsp;
             
             <button className='btn btn-outline-secondary' onClickCapture={()=>{setChangePopup("emi")}} onClick={()=>{setBtnValue("EMI")}}>EMI</button></div><br/>
            {
                changePopup==="subscription" && 
                <div>
                    <input style={{marginLeft:"145px"}} class="form-control" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount'/> <br/>
                    <div>
                        <button className='btn btn-outline-secondary' onClick={()=>setTimes("Monthly")}>Monthly</button>&emsp;
                        <button className='btn btn-outline-secondary' onClick={()=>setTimes("yearly")}>Yearly</button>
                    </div> <br/>
                    <input style={{marginLeft:"145px"}}  class="form-control" value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder='Discount'/> <br/> 
                </div>
            }
            {
                changePopup==="lumpsump" && 
                <div>
                    <input style={{marginLeft:"145px"}} class="form-control"value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount'/><br/> 
                    <input style={{marginLeft:"145px"}} class="form-control" value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder='Discount' /><br/>
                </div>
            }

            {
                 changePopup==="emi" && 
                 <div>
                     <input style={{marginLeft:"145px"}} class="form-control" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Base Amount'/><br/>
                     <input style={{marginLeft:"145px"}} class="form-control" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='No. Installment'/><br/>
                     <input style={{marginLeft:"145px"}} class="form-control" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Interest per installment'/><br/> 
                     <input style={{marginLeft:"145px"}} class="form-control" value={discount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Discount'/><br/>
                 </div>
            }
            <button className='btn btn-secondary btn-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default SubscriptionForm;