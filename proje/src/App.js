import React, { Component } from "react";
import Navigate from "./Navigate";
import Kategori from "./Kategori";
import UrunListesi from "./UrunListesi";
import UrunDetay from "./UrunDetay";
import UrunTeslimat from "./UrunTeslimat";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
	kategoriDegistir=(kategori)=>{
		this.setState({seciliKategori:kategori.kategoriIsim})
  
	}
	state={seciliKategori:""}
  render() {
    let titleUrunTeslimat = "Popüler Marka ve Mağazalar";
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "Aradığın Her Şey Burada!" };
	
    return (
      <div>
        <Container>
          <Row>
            <Navigate /> 
          </Row>
          <Row>
            <Col xs="2">
              <Kategori seciliKategori={this.state.seciliKategori} kategoriDegistir={this.kategoriDegistir}  bilgiKategori={bilgiKategori} />
            </Col>
            <Col xs="7">
              <UrunListesi
			 seciliKategori={this.state.seciliKategori}  
			  bilgiUrunListesi={bilgiUrunListesi} />
            </Col>
            <Col xs="3">
              <UrunDetay baslik="Ürün Detay" />
            </Col>
          </Row>
          <Row>
            <UrunTeslimat title={titleUrunTeslimat} />
          </Row>
        </Container>
      </div>
    );
  }
}
