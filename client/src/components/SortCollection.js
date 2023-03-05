import './collection-sort.css'
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import MyContext from '../MyContext';


const SortCollection= () => { 
  
  const{setProductsData,productsCopy}=useContext(MyContext)

  const [value, setValue] = React.useState([0, 1000]);
  
  function valuetext(value) {
    return `${value}$`;
    
  }
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setProductsData(productsCopy.filter((element)=>{
      if(element.price>=newValue[0] && element.price < newValue[1]){
        return element;
      }
    }))
      };  
    return (
      <div className="collection-sort">
        <label>Price range:</label>
        <Slider  min={0} max={1000}
          getAriaLabel={() => 'price range'}
          value={value}
          // mark
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        </div>
    ); 
  }
    
  export default SortCollection