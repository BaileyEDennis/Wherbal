import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class Quiz extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1>Lets ID Your Plants!</h1>
            <h3>First look at the leaf, is it Linear, Simple, or Compound?</h3>
        </div>
        <div id='allherbs-cards-container' className="d-flex justify-content-space-between flex-wrap m2">
          <div>
            <Card className="rounded-0">
            <Link to={'/quiz_linear'}>
                <CardImg
                  top
                  width="100%"
                  src="https://images.unsplash.com/photo-1561493801-0852a28a6808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Linear leaves have a long, narrow leaf shape, with sides that are almost parallel with each other and usually are more than four times longer than broad.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/quiz_simple'}>
                <CardImg
                  top
                  width="100%"
                  src="https://pediaa.com/wp-content/uploads/2018/09/What-is-the-Difference-Between-Simple-Leaf-and-Compound-LeafF_FIgure1.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                A simple leaf is a single leaf that is never divided into smaller leaflet units. It is always attached to a twig by its stem or the petiole.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/quiz_compound'}>
                <CardImg
                  top
                  width="100%"
                  src="https://live.staticflickr.com/3238/3086036490_08409abb42_b.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Compound laves have a blade that is divided to the midrib, forming two or more distinct blades or leaflets on a common axis, the leaflets themselves occasionally being compound
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
