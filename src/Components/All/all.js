import React from 'react'
import Info from './All-Info.json'

const all = () => {
  return (
    <div>
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

export default all;