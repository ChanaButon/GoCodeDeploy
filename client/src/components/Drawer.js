import * as React from 'react';

import { useContext } from 'react';
import MyContext from '../MyContext';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AiFillCloseCircle } from 'react-icons/ai';
import Cartshopping from './CartShopping';
import {GrCart} from 'react-icons/gr';



export default function TemporaryDrawer() {
  
  const { productsBuy } = useContext(MyContext);
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  const totalProducts = productsBuy.reduce((total, product) => {
    return total + product.countProduct;
  }, 0);

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <GrCart  size={50}/>
          {totalProducts > 0 && <span className="count">{totalProducts}</span>}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          {
              <div>
                <AiFillCloseCircle  color='red' size={30} onClick={toggleDrawer(anchor, false)}/>
                <Cartshopping/>
               
                
                </div>}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}



