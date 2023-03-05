import './collection-sort.css'
import { useContext } from "react";
import MyContext from "../MyContext"

const FilterColeection = () => {
  const{productsData ,setProductsData,getAllProducts,productsCopy}=useContext(MyContext)
  const handlechange=(event)=>{
    if(event.target.value==="all products")
      {
        setProductsData(getAllProducts())
        
      }
    let filterlist=productsCopy && productsCopy.filter((element)=>{
      
      if(element.category===event.target.value){
        return element
      }
    
     })
     setProductsData(filterlist)

  }

    return(
    <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={handlechange}>
              <option value="all products">all product</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
          )
  }

  export default FilterColeection