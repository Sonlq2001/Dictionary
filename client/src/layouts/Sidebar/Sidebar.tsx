import { Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-dark bg-light"
			style={{ width: "100%", height: "calc(100vh - 71px)" }}
		>
			<Form.Control placeholder="Tìm kiếm" />
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<Link to="/" className="text-dark">
						Hôm nay
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/vocabulary" className="text-dark">
						Từ mới
					</Link>
				</li>
				<li className="nav-item">
					<Nav.Link href="#" className="text-dark">
						Ghi nhớ
					</Nav.Link>
				</li>
				<li className="nav-item">
					<Nav.Link href="#" className="text-dark">
						Ôn tập
					</Nav.Link>
				</li>
			</ul>
			<hr />
			<div className="dropdown">
				<Nav.Link href="#" className="text-dark">
					<img
						src="https://github.com/mdo.png"
						alt=""
						width={32}
						height={32}
						className="rounded-circle me-2"
					/>
					<strong>sonel</strong>
				</Nav.Link>
			</div>
		</div>
	);
};

export default Sidebar;
