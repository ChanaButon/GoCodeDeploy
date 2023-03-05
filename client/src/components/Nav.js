import "./product-filter.css"
import Sort from "./Sort"
import Clock from "./Clock"

const Nav = () => {
    return(
      <nav className="product-filter">
        <h1>Products</h1> 
        <Sort/>
        <Clock/>
        </nav>
    )
  }
  
  export default Nav