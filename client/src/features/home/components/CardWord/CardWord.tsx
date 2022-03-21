import { Card, Image } from "react-bootstrap";
const CardWord = () => {
	return (
		<Card>
			<Card.Header>Danh từ</Card.Header>
			<Card.Body>
				<Image
					src="https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg"
					width="100%"
				/>
				<Card.Title>Nature</Card.Title>
				<Card.Text>Ý nghĩa: Thiên nhiên</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
		</Card>
	);
};

export default CardWord;
