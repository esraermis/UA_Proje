import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from "reactstrap";

class UrunTeslimat extends Component {
    render() {
        return (
            <div>
              <h3>{this.props.title}</h3>
              <p> Aradığın bütün markalar burada. Arayıp da bulamaadığın olursa bizlere bildirmeyi unutma :) </p>
              <ListGroup>
                <ListGroupItem>Penti</ListGroupItem>       
                <ListGroupItem>Watsons</ListGroupItem>
                <ListGroupItem>Stradivarius </ListGroupItem>
                <ListGroupItem>Puma </ListGroupItem>
                <ListGroupItem>Apple</ListGroupItem>
                <ListGroupItem>Xiaomi </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default UrunTeslimat;