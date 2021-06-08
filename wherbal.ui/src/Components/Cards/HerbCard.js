import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const HerbCard = ({ herb }) => (
    <div>
      <Card>
        <CardImg top width="100%" src={herb.image_Url} alt="Card image" />
        <CardBody>
          <CardTitle tag="h5">{herb.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{herb.latin_Name}</CardSubtitle>
          <CardText>{herb.description}</CardText>
        </CardBody>
      </Card>
    </div>
);

export default HerbCard;
