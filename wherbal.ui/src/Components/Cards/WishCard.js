import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const WishCard = ({ herb, removeHerb, moveHerb }) => (
    <div>
      <Card>
      <Link to={`/details/${herb.id}`}>
        <CardImg top width="100%" src={herb.image_Url} alt="Card image" />
        </Link>
        <CardBody>
          <CardTitle tag="h5">{herb.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{herb.latin_Name}</CardSubtitle>
          <Button onClick={ () => { removeHerb(herb.id); } }>Remove</Button>
          <Button onClick={ () => { moveHerb(herb.id); } }>Move to My Plants</Button>
        </CardBody>
      </Card>
    </div>
);

export default WishCard;
