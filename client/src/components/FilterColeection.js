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
              <option value="Shoes">Shoes</option>
              <option value="Clothes">Clothes</option>
              <option value="Fitness equipment">Fitness equipment</option>
              <option value="Dumbbells">Dumbbells</option>
            </select>
          </div>
          )
  }

  export default FilterColeection