import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class quizSimple extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1>Next question...</h1>
            <h3>Is the leaf Serrated or Smooth?</h3>
        </div>
        <div id='allherbs-cards-container' className="d-flex justify-content-space-between flex-wrap m2">
          <div>
            <Card className="rounded-0">
            <Link to={'/details/4'}>
                <CardImg
                  top
                  width="100%"
                  src="https://healthyliving-herbs.co.za/wp-content/uploads/2016/02/sweet-basil-plant-720x380.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Smooth edge leaves are a basic leaf edge that is just smooth around the entire outside.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/2'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/06/Serrated-leaf.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                A serrate leaf is a leaf having a margin notched like a saw with teeth pointing toward the apex.
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
