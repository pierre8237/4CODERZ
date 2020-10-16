import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
// import Card from "../components/Card";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import Container from "../components/Container";


function France() {
    return (
       <div>
          <Header />
        <div />
          <Wrapper>
          <Container>
            <Row>
              <Col size="lg-2 sm-12">
                <Navbar />
              </Col>
              <Col size="lg-10 sm-12">
                <h2 className="page-title">France</h2>
                <hr />
                <p>
                  Featured
                  <a
                    href="https://about-france.com/wines.htm"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    wines
                  </a>{" "}
                  from France
                </p>

                {/* <Row>
                  {this.state.wine.map(projects => (
                    <Col size="md-6 sm-12">
                      <Card
                        key={wine.id}
                        image={wine.image}
                        card_title={wine.card_title}
                        card_text={wine.card_text}
                        price={wine.technologies}
                        ratings={wine.project_repo}
                      />
                    </Col>
                  ))}
                </Row> */}
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
}
 
export default France;