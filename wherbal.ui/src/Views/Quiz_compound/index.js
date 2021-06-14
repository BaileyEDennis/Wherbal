import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class quizCompound extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1>Next question...</h1>
            <h3>Do the leaves clump in 3's?</h3>
        </div>
        <div id='allherbs-cards-container' className="d-flex justify-content-center flex-wrap m2">
          <div>
            <Card className="rounded-0">
            <Link to={'/quiz_pvsc'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.thespruceeats.com/thmb/EGuy73MG4ExU0s2PaluBDiyLruA=/1660x1660/smart/filters:no_upscale()/parsley-2500-56a20fb25f9b58b7d0c62686.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Shown here you can see how each leaf joins the main stem in sets of 3.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/5'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.almanac.com/sites/default/files/users/The%20Editors/sage-leaves-plant_full_width.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                No, my leaf looks more fluffy and has a more silver color appearance. It also does not branch off from the main
                stem.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/7'}>
                <CardImg
                  top
                  width="100%"
                  src="https://cdn.harvesttotable.com/htt/2009/04/23182514/Thyme-plant-2.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                No, my leaf looks small and bunches in 4's at the main stem and doesnt branch off.
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
