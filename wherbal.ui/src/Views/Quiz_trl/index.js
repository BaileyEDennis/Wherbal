import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

export default class quizTRL extends Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="text area">
            <h1>Final question, phew!</h1>
            <h3>What is the main feature of the leaf?</h3>
        </div>
        <div id='allherbs-cards-container' className="d-flex justify-content-center flex-wrap m2">
          <div>
            <Card className="rounded-0">
            <Link to={'/details/6'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.thespruceeats.com/thmb/76ZQWEC6gOEMs-uGOohYva97JGE=/1024x768/filters:fill(auto,1)/6054291142_82700e7c2b_b-584701843df78c02309f0fd0.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Oval shaped, underside may have a silver color to it, with a pronounced rib in the middle of the leaf.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/9'}>
                <CardImg
                  top
                  width="100%"
                  src="https://www.organicgardener.com.au/sites/default/files/styles/620x/public/images/blogs/IMG_9092-790x526.jpg?itok=fQgv5SX0"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Shaped almost like a long uncut blade of grass.
                </CardText>
              </CardBody>
              <div className="d-flex justify-content-center m2">
              </div>
            </Card>
          </div>
          <div>
            <Card className="rounded-0">
            <Link to={'/details/10'}>
                <CardImg
                  top
                  width="100%"
                  src="https://newfs.s3.amazonaws.com/taxon-images-1000s1000/Lamiaceae/lavandula-angustifolia-le-krawlins.jpg"
                  alt="Card image cap"
                  className="cardimage"
                />
            </Link>
              <CardBody>
                <CardText>
                Leaves are round and plump, almost succulent like. Appearance has a pronounced powdery silver color.
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
