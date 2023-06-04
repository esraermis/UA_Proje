import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Alert,
    CardTitle,
    Button,
    Card,
    CardText,
  } from "reactstrap";

class UrunDetay extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.baslik}</h3>
                <hr />
                <span role="img" aria-label="shopping" >🛒</span>
                <div>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle tag="h5">Fiyat : 100 TL</CardTitle>
            <CardText>
                Kuponun varsa kullanmayı unutma!!
            </CardText>
            <Button>Sepete at</Button>
          </Card>
        </div>
            </div>
            
            
        );
    }
}

export default UrunDetay;