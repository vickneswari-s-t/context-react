import {useState,useContext,React,} from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../App'

function Cards() {
  let {data,setData}=useContext(UserContext)
  return <>
  <div className="container ">
        {data.map((e,i)=>{
          //rounding decount values
          const discount=Math.round(e.price * (e.discountPercentage/100))
           //Setting the total of the product
         let [total,setTotal]=useState(1)

          //function for increasing the Total
          let increase=()=>{
            setTotal(total+1)
          }
          //function for increasing the Total
          let decrease=()=>{
            setTotal(total==0?0:total-1)
          }

          return <div className='Card mb-5' style={{ minWidth: '100%',maxWidth:'540px'}} key={i}>
          <div className="row g-0">
           {/* Image of the product */}
             <div className="col-md-3 image">
               <img src={e.images} className="img-fluid rounded-start cardImage p-5" alt="product image..." />
             </div>

             {/* product info */}
             <div className="col-md-9">
               <div className="cardBody px-3" >
                 <div className="top">
                     <div className="head d-flex justify-content-between align-item-center">
                       <h1>{e.title}</h1>
                       <h2>${e.price}</h2>
                     </div>
                     <div className="d-flex justify-content-between align-item-center">
                        <b>Brand:{e.brand}</b>
                        <p style={{color:"blue"}}>Discount:{e.discountPercentage}%</p>
                     </div>
                  </div>
                       <p className='card-value'>{e.description}</p>
                  <div className="button d-flex justify-content-between align-item-center">
                       <p className='card-value'>Rating:{e.rating}/5</p>
                       {/* buttons for increasing the  */}
                       <div className="button">
                         <Button variant="outline-danger" onClick={()=>decrease()} >-</Button>
                         <span style={{margin:'5px'}}>{total}</span>
                         <Button variant="outline-success" onClick={()=>increase()} >+</Button>
                       </div>
                       
                  </div>
                 
                  <div className="bottom">
                             <div className='d-flex justify-content-between align-items-center'>
                                 Original Price for 1 item: 
                                   <p className="card-text">${e.price} </p>
                              </div>
                              <div className='d-flex justify-content-between align-items-center'>
                                   Discount Amount : 
                                   <p className="card-text text-success"> - ${discount}</p>
                               </div>
                                         <div className='d-flex justify-content-between align-items-center'>
                                             Final Price: 
                                             <p className="card-text">${e.price-discount}</p>
                                         </div>
                                         <div className='d-flex justify-content-between align-items-center'>
                                             Total Amount : 
                                             <h5 className="card-text">${total*e.price}</h5>
                                         </div>
                                         </div>
               </div>
 
             </div>
          </div>
         </div>
        })}
        
        </div> 
  
  </>
}

export default Cards