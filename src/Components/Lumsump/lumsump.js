import React from 'react'
import Info from './Lumsum-Info.json'

const lumsump = () => {
  return (
    <div style={{marginTop:"15px"}}>
      {
          Info.map((val, inc)=>{
            return(
              <div className='list'>
                   <div style={{fontWeight:"bold"}}>Pricing option {inc+1}</div>
                  <div>{val.profit}</div>
                  <div style={{fontWeight:"bold"}}>{val.amount}</div>
                  <div style={{fontWeight:"bold"}}>{val.pricingModel}</div>
                  <div style={{fontWeight:"bold"}}>{val.status}</div>
              </div>
            )
          })
        }
    </div>
  )
}

export default lumsump;