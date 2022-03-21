import { Accordion } from "react-bootstrap";

const MemoWord = () => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Từ: Hello</Accordion.Header>
				<Accordion.Body>Ý nghĩa: Xin chào</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Từ: Confident</Accordion.Header>
				<Accordion.Body>Ý nghĩa: Tự tin</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default MemoWord;
