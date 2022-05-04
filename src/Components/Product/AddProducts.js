import React, {useState} from 'react'
import '../Subscription/style.css'

const AddProducts = () => {
  
    const [prodName, setprodName]=useState()
    const [cost, setCost]=useState()

  return (
    <div>
        <div className='formStyle'>
        <h2 style={{color:"lightgray", fontWeight:"bold"}}>Create new Product</h2><br/>
               <form>
                   <input style={{marginLeft:"145px"}} class="form-control" value={prodName} onChange={(e)=>{setprodName(e.target.value)}} placeholder='Product Name'/><br/> 
                   <input style={{marginLeft:"145px"}} class="form-control"  value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder='Manufacturing cost'/><br/><br/>
                   <button className='btn btn-secondary btn-lg'>Submit</button>
               </form>
        </div>
    </div>
  )
}

export default AddProducts;