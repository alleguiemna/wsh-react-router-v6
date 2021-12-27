import React from "react";
import {Card,Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <div className="d-flex justify-content-around">
      {products.map((elt) => (
        <Card style={{ width: "19rem" }} key={elt.id}>
          <Card.Img variant="top" src={elt.imgSrc} />
          <Card.Body>
            <Card.Title>{elt.name}</Card.Title>
            <Card.Text>
              {elt.price}
            </Card.Text>
            <Link to={`/product/${elt.id}`} ><Button variant="primary">Show</Button></Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Product;
