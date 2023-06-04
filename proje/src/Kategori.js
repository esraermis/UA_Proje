import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [
        { kategoriId: 1, kategoriIsim: "Giyim" },
        { kategoriId: 2, kategoriIsim: "Elektronik" },
        { kategoriId: 3, kategoriIsim: "Kozmetik" },
        { kategoriId: 4, kategoriIsim: "Saat & Aksesuar" },
		    {kategoriId: 5, kategoriIsim: "Kitap & Kırtasiye" },
        {kategoriId: 6, kategoriIsim: "Anne & Çocuk" },
        {kategoriId: 7, kategoriIsim: "Ev & Mobilya" },
        {kategoriId: 8, kategoriIsim: "Ayakkabı & Çanta" },
        {kategoriId: 9, kategoriIsim: "Hobi & Müzik" },
        {kategoriId: 10, kategoriIsim: "Oto & Yapı Market" },
        {kategoriId: 11, kategoriIsim: "Spor & Outdoor" },
        {kategoriId: 12, kategoriIsim: "Ofis" }
      ],
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.bilgiKategori.baslik}</h3>
        <h6>{this.props.bilgiKategori.ilaveBilgi}</h6>
        <ListGroup>
        {this.state.kategoriler.map(kategori=>(
			<ListGroupItem 
			onClick={()=>this.props.kategoriDegistir(kategori)} 
			key={kategori.kategoriId}>{kategori.kategoriIsim}</ListGroupItem>
		))}
          
        </ListGroup>
      </div>
    );
  }
}
export default Kategori;
