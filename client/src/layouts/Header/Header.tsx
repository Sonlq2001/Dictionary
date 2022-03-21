import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "public/images/logo.png";

const Header = () => {
	return (
		<Navbar bg="light" expand="lg" className="border-bottom">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={Logo} alt="" width="45px" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#link">
							Xin chào Sơn, đừng quên học tiếng anh mỗi ngày nhé !
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
