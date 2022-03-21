import { Container, Row, Col } from "react-bootstrap";

import Header from "layouts/Header/Header";
import Sidebar from "layouts/Sidebar/Sidebar";

const DefaultLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<Container fluid className="gx-0">
				<Row>
					<Col lg={2}>
						<Sidebar />
					</Col>
					<Col lg={9}>{children}</Col>
					<Col lg={1}>left</Col>
				</Row>
			</Container>
		</>
	);
};

export default DefaultLayout;
