import { useState } from "react";

import { Carousel } from "react-bootstrap";

const CarouselQuote = () => {
	const [indexItem, setIndexItem] = useState<number>(0);
	return (
		<Carousel
			activeIndex={indexItem}
			onSelect={(selectedIndex) => setIndexItem(selectedIndex)}
			className="mb-3"
		>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn.pixabay.com/photo/2017/03/08/19/53/stone-2127669__340.png"
					alt="First slide"
					height="400px"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Học tiếng anh mỗi ngày</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn.pixabay.com/photo/2017/09/16/19/02/flowerpot-2756428__340.jpg"
					alt="Second slide"
					height="400px"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselQuote;
