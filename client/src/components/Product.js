import "./product-card.css"
import "./product-image.css"
import './product-info.css'
import { useContext } from "react"

import MyContext from "../MyContext"
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsCartDash } from 'react-icons/bs';
import { useNavigate  } from "react-router-dom";


 const Product=({imgUrl,title,price,id}) => {
  const navigate = useNavigate()
    // const {example} = useContext(MyContext)
    const {productsData,setproductsBuy,productsBuy} = useContext(MyContext)
     

   
    const addByProduct=()=>{
      if(id!==''){
        productsData.filter((element)=>{
          console.log(id)
          console.log(element._id)
          if(element._id === id)
          {
            console.log("hi")
            if(!productsBuy.some(element=>element._id===id)){
              setproductsBuy([{"_id":element._id,"title":element.title,"price":element.price,"description":element.description,
              "category":element.category,"image":element.image,"rating":element.rating,countProduct:1},...productsBuy])
            }
            else{
              setproductsBuy(productsBuy.filter((element)=>{
                if(element._id===id){
                  element.countProduct=element.countProduct+1
                  return element
                  
                }
                else{
                  return element
                }
              }))



            }
          }
        })
      }
      console.log(productsBuy)
      alert('add successful!');
  
    } 
    const removeByProduc=()=>{
      // const listBuy=[]
      if(id!==''){
        setproductsBuy(productsBuy&&productsBuy.filter((element)=>{
          if(element._id !== id){
            return element
          }
          else{
            element.countProduct=element.countProduct-1
                  return element
          }
      },
        // console.log(listBuy),
        
        ))}
      }
    
     
    return(
      <div className="product-card">
      <div className="product-image">
        
      <img
       //navigate(`products/${id}`)
       onClick={() => {navigate(`products/${id}`)}}
            alt="something amazing"
            src={imgUrl}
     
      />
    </div>
    <div className="product-info">
      <h5>{title}</h5>
      <h6>{price}</h6>
      <BsCartDash color="red" frontsize={100} onClick={removeByProduc} size={30} />
      
      <MdOutlineAddShoppingCart color="green" frontsize={100} onClick={addByProduct} size={30}/>

     
    </div>
  </div>)
 }
   export default Product