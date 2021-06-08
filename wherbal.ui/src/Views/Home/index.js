import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="d-flex justify-content-center m2 home_prompts">
          <div>
            <Card className="rounded-0">
              <Link to={'/all_herbs'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/herbs-fresh-mix.jpg?itok=frWBVlxt"
                  alt="Card image cap"
                  className="cardimage"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5">Browse Plants</CardTitle>
                <CardText>
                  Take some time and casually browse all the herbs in our
                  library.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
              <Link to={'/quiz'}>
                <CardImg
                  top
                  width="100%"
                  src="https://previews.123rf.com/images/magneticmcc/magneticmcc1706/magneticmcc170600334/80650250-human-hand-is-using-magnifying-glass-to-the-growing-plant.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5">Take the quiz</CardTitle>
                <CardText>
                  Having trouble discovering which herb plant is yours? Our
                  quick and easy quiz will point you in the right direction.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
