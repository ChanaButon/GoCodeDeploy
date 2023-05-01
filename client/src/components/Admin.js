import React, { useEffect ,useState} from "react";
import { useParams, Link } from "react-router-dom";
import {useTable} from "react-table"
import { useNavigate  } from "react-router-dom";
import { AiFillCloseCircle } from 'react-icons/ai';

 import "./Admin.css"
const Admin= () => {

  const[products,setProducts]=useState([]);
  const[updateProduct,setupdateProduct]=useState(-1);
  const[formData,setFormData]=useState([]);
 
  const navigate = useNavigate()
  
  
  
  useEffect(()=>{
    fetch("https://novgocodeprojectdeployed-v0n9.onrender.com/api/products")
    .then(response=>response.json())
    .then(data =>{
      setProducts(data);

    })
  })
  const deleteProduct = (id)=>{
    fetch(`https://novgocodeprojectdeployed-v0n9.onrender.com/api/deleteProduct/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })

  }
  // const handleEdit=(id)=>{
  //   setupdateProduct(id)
  // }
  const handleEdit =(id)=>{
    fetch(`https://novgocodeprojectdeployed-v0n9.onrender.com/api/productId/${id}`)
    .then(response => response.json())
    .then(product => {
      // Set the addFormData state to the existing product values
      setFormData({
        title: product.title,
        image: product.image,
        dateCreated: product.dateCreated,
        category: product.category,
        description: product.description,
        price: product.price
      });
      // Set the updateProduct state to the current product ID
      setupdateProduct(id);
    })
    .catch(error => console.error(error));
  }
  const handleInput=(e)=> {
    const { name, value } = e.target;
    console.log(name)
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
  
  const handleUpdate = (event) => {
    fetch(`https://novgocodeprojectdeployed-v0n9.onrender.com/api/updateProduct/${updateProduct}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setupdateProduct(-1);
      setFormData([]);
      // You can also refresh the products list here if you want to show the updated product immediately
    })
    .catch(error => console.error(error));
  };

  const handleAdd =()=>{
    console.log(formData)
    fetch(`https://novgocodeprojectdeployed-v0n9.onrender.com/api/addProduct`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setupdateProduct(-1);
      setFormData([]);
      // You can also refresh the products list here if you want to show the updated product immediately
    })
    .catch(error => console.error(error));
  };

  const closeButtonStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
  };
  
  
  
 
  return(
   <div className="Admin">
       <h1>ADMIN PAGE</h1>
       <div style={closeButtonStyle}>
      <AiFillCloseCircle fontSize={30} color='red'  onClick={()=>{navigate(`/`)}} />
      </div>
      <div className="AdminTable">
       <table>
         <thead>

           <tr>
             
            <th>title </th>
            
            <th> image</th>
            
            <th>date Created</th>
            
            <th>category</th>
  
            <th>description</th>

            <th>price</th>
            <th></th>
            <th></th>
           </tr>
         </thead>
         <tbody>

          {products.map((product)=>(
            
              updateProduct===product._id? 
              <tr  key={product._id}  >
              <td><input type="text" name="title"  onChange={handleInput} defaultValue={formData.title}  /></td>
              <td><input type="text" name="image" onChange={handleInput} defaultValue={formData.image} required="required" placeholder="enter  a image"/></td>
              <td><input type="text" name="dateCreated" onChange={handleInput} defaultValue={formData.dateCreated}  required="required" placeholder="enter  a date Created"/></td>
              <td><input type="text" name="category"  onChange={handleInput} defaultValue={formData.category}  required="required" placeholder="enter  a category"/></td>
              <td><input type="text" name="description" onChange={handleInput} defaultValue={formData.description} required="required" placeholder="enter  a description"/></td>
              <td><input type="number" name="price" onChange={handleInput}  defaultValue={formData.price} required="required" placeholder="enter  a price"/></td>
              <button type="submit"  onClick={handleUpdate}>update</button>
            </tr>
      :
         
      <tr key={product._id} >
            
              <td onClick={()=>{navigate(`products/${product._id}`)}}>  {product.title}</td>
              <td onClick={()=>{navigate(`products/${product._id}`)}}><img src={product.image} alt={product.title} sizes="10" /></td>
              <td onClick={()=>{navigate(`products/${product._id}`)}}>{new Date(product.dateCreated).toLocaleString('en-US', {timeZone: 'UTC', dateStyle: 'short', timeStyle: 'medium'})}</td>
              <td onClick={()=>{navigate(`products/${product._id}`)}}> {product.category}</td>
              <td onClick={()=>{navigate(`products/${product._id}`)}}> {product.description}</td>
              <td onClick={()=>{navigate(`products/${product._id}`)}}> {product.price}</td>
              <td><button onClick={()=>deleteProduct(product._id)}>delete</button></td>
              <td><button onClick={()=>handleEdit(product._id)}>edit</button></td>

            </tr>
          ))}

         
         </tbody>

       </table>

       </div>
       <h1>add a product</h1>
       <form>
        <input type="text" name="title" required="required" placeholder="enter  a title" onChange={handleInput} />
        <input type="text" name="image" required="required" placeholder="enter  a image" onChange={handleInput}/>
        {/* <input type="text" name="dateCreated" required="required" placeholder="enter  a dateCreated"onChange={handleInput}/> */}
        <input type="text" name="category" required="required" placeholder="enter  a category" onChange={handleInput}/>
        <input type="text" name="description" required="required" placeholder="enter  a description"onChange={handleInput}/>
        <input type="text" name="price" required="required" placeholder="enter  a price"onChange={handleInput}/>
        <button type="submit" onClick={()=>handleAdd()}>add</button>
   
       </form>
   </div>
  );
}
export default Admin;