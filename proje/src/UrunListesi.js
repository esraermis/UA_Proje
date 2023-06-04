import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Alert,
} from "reactstrap";

class UrunListesi extends Component {
  render() {
    return (
      <div>
		  <h3>{this.props.bilgiUrunListesi.baslik} -- {this.props.seciliKategori}</h3>
        <div>
          <Alert>
            <h4 className="alert-heading">Büyüüük İndirim!</h4>
            <p>
              Büyük yılsonu indirimi... Tüüüm ürünler tek fiyat 100 TL. Elini çabuk tut, fırsatları kaçırma!!!
            </p>
            <hr />
            <p className="mb-0">
              Favori listelerini oluştur, sepetini hazırla, alışveriş çılgınlığına sen de katıl!!
            </p>
          </Alert>
        </div>
        <div>
          <p>
            Alt Katagoriler
          </p>
          <ListGroup numbered>
            <ListGroupItem>Kadın</ListGroupItem>
            <ListGroupItem>Erkek</ListGroupItem>
            <ListGroupItem>Çocuk</ListGroupItem>
            <ListGroupItem>İndirimdekiler</ListGroupItem>
            <ListGroupItem>Seri Sonu</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default UrunListesi;
