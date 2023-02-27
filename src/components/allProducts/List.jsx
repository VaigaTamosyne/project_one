import { useState, useEffect } from 'react'
import { getAllProducts } from '../../services/shopService';
import Product from '../singleProduct/Product';

const List = () => {
  const [items, setItems] = useState([]);

  const getProducts = () => {
    getAllProducts().then((result) => {
      setItems([...result.products]);
    })
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div>
      <Product items={items} />
    </div>
  )
}

export default List



