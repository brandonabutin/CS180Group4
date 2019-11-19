import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>


        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <a href="https://nomics.com/"> Crypto Market Cap & Pricing Data Provided By Nomics </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
