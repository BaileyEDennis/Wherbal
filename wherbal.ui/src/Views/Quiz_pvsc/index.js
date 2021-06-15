import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class quizPvsC extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1 className='d-flex justify-content-center'>Getting Close!</h1>
            <h3 className='d-flex justify-content-center'>Are the leaves more rounded, or are they pointed?</h3>
        </div>
        <div id='allherbs-cards-container' className='d-flex justify-content-around flex-wrap'>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/8'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/cilantro.jpg?itok=9R0nopHv"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Notice how the edges shown here are rounded and soft.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/1'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.almanac.com/sites/default/files/image_nodes/parsley-planting-growing-harvesting.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Its a subtle difference, but you can see how each tip of the very edges of the leaf comes to a more of a point.
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
