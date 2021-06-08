import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import herbData from '../../Helpers/Data/herbData';

export default class SingleHerb extends React.Component {
  state = {
    herb: [],
  };

  componentDidMount() {
    const HerbId = this.props.match.params.id;
    console.warn(HerbId);
    herbData.getSingleHerb(HerbId).then((response) => {
      this.setState({
        herb: response,
      });
    });
  }

  render() {
    const { herb } = this.state;
    return (
        <div className="single-view">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{herb.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{herb.latin_Name}</CardSubtitle>
          </CardBody>
          <img width="100%" src={herb.image_Url} alt="an plant"/>
          <CardBody>
            <CardText>{herb.description}</CardText>
            <div className="single_quickFacts">
            <hr></hr>
            <h1>Quick Facts</h1>
            <CardText>Seed Start: {herb.seed_Start}</CardText>
            <hr></hr>
            <CardText>Moisture: {herb.moisture}</CardText>
            <hr></hr>
            <CardText>Sun: {herb.sun}</CardText>
            <hr></hr>
            <CardText>Soil Ph: {herb.soil_Ph}</CardText>
            <hr></hr>
            <CardText>Spacing: {herb.herb_Spacing}</CardText>
            <hr></hr>
            <CardText>Zones: {herb.zone}</CardText>
            <hr></hr>
            <CardText>Visit <a href={herb.see_More}>Here</a> for further information</CardText>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
