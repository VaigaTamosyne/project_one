import './Product.css'
import { useState } from 'react'
import React from 'react'


const Product = (props) => {
  console.log(props);
  const [likes, setLikes] = useState(0);
  const increaseLikes = () => {
    setLikes(likes + 1);
  }
  const decreaseLikes = () => {
    setLikes(likes - 1);
  }
  return (
    
<div className='list'>
        { props.searchFeedback.length !== 0 ? 
            props.searchFeedback.map((single_product, index)=>(
                <div key={index} className="one_item">
                    <h4>{single_product.title}</h4>
                    <img src={single_product.thumbnail} alt="pic" />
                    <div className="description">{single_product.description}</div>
                    <div className="price">Price: {single_product.price}Eur</div>
                    <div className="interaction">
                    <button onClick={increaseLikes}>Like</button>
                    <p>Likes: {likes}</p>
                   <button onClick = {decreaseLikes}>Dislike</button>
                   </div>
                </div>
            )) : <p>Not found</p>
        }
      
    </div>
  )

}


export default Product

/*  props.items.map((single_product, index) => (
 <Row xs={1} md={2} className="g-4 justify-content-md-center" >
<Col>
<Card>
  <Card.Img variant="top" src={single_product.thumbnail} />
  <Card.Body>
    <Card.Title>{single_product.title}</Card.Title>
    <Card.Text>
      {single_product.description}
      <div>Price: {single_product.price} Eur</div>
    </Card.Text>
    <button onClick={increaseLikes} >Like</button>
    <p>Like Count: {likes}</p>
    <button onClick={decreaseLikes} >Dislike</button>
  </Card.Body>
</Card>
</Col>
</Row>
))); */