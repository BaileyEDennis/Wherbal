import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class quizLinear extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1>Diggin' in!</h1>
            <h3>Do the leaves look like little blades of grass joining individually into a main stem?</h3>
        </div>
        <div id='allherbs-cards-container' className="d-flex justify-content-center flex-wrap m2">
          <div>
            <Card className="rounded-0">
            <Link to={'/quiz_trl'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.liveabout.com/thmb/NrttizSVJCXIHK5qLEgi9spMWiE=/3744x3744/smart/filters:no_upscale()/close-up-of-rosemary-leaves-158926626-5811041b5f9b58564c6ad577.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Each leaf joins at the main stem.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/3'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/dill-planting-growing.jpg?itok=atr_hosW"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                No my leaves look soft and feathery, and they fractal outward.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/11'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.gardeningknowhow.com/wp-content/uploads/2020/12/chives-in-a-pot.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                No, mine is more of a grass or a stalk than a leaf
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
