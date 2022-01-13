import React from "react";
import { Card, Button } from "react-bootstrap";

const MyCard = (props) => {
	return (
		<Card style={{ width: "19rem" }}>
			<Card.Img variant="top" className="photo" src={props.img} />
			<Card.Body>
				<Card.Title>{props.cardTitle}</Card.Title>
				<Card.Text>{props.cardText}</Card.Text>
				<a href="https://www.google.com">
					<Button variant="primary">Find Out More</Button>
				</a>
			</Card.Body>
		</Card>
	);
};

export default MyCard;
