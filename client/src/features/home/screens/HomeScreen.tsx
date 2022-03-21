import { Row, Col } from "react-bootstrap";

import CarouselQuote from "./../components/CarouselQuote/CarouselQuote";
import CardWord from "../components/CardWord/CardWord";

import MemoWord from "./../components/MemoWord/MemoWord";

const HomeScreen = () => {
	return (
		<Row>
			<Col lg={9}>
				<CarouselQuote />
				<Row>
					<Col lg={3} className="mb-2">
						<CardWord />
					</Col>
				</Row>
			</Col>
			<Col lg={3}>
				<MemoWord />
			</Col>
		</Row>
	);
};

export default HomeScreen;
