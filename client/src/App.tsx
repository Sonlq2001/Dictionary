import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

const WrapRoutes = lazy(() => import("./routes/WrapRoutes"));

const App = () => {
	return (
		<div className="wrap">
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<WrapRoutes />
				</BrowserRouter>
			</Suspense>
		</div>
	);
};

export default App;
