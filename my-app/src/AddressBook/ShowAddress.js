import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function ShowAddress (props)  {
    const address = [...props.address];
    if(props.ifFind){
        return (
          <ListGroup.Item >
        <Card className="bg-light border rounded">
          <span className="text-right" onClick={props.close}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <p>FirstName:{address[props.index].FirstName}</p>
            <p>LastName:{address[props.index].LastName}</p>
            <p>Birthday:{address[props.index].Birthday}</p>
            <p>Telephone:{address[props.index].Telephone}</p>
          </Card.Body>
        </Card>
      </ListGroup.Item> 
        )
    }else{return address.map(
      item => (
        <ListGroup.Item key={item.Telephone}>
        <Card className="bg-light border rounded">
          <span className="text-right" onClick={props.close}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <p>FirstName:{item.FirstName}</p>
            <p>LastName:{item.LastName}</p>
            <p>Birthday:{item.Birthday}</p>
            <p>Telephone:{item.Telephone}</p>
          </Card.Body>
        </Card>
      </ListGroup.Item>
      )
    )
  }
  }
  export default ShowAddress; 