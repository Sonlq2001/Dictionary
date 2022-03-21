import React from "react";
import { Route, Routes } from "react-router-dom";

import { LIST_ROUTES } from "./routes.config";
import DefaultLayout from "./../layouts/DefaultLayout/DefaultLayout";

const RouteItem: React.FC<any> = ({
	id,
	path,
	component: Component,
	layout,
}) => {
	const WrapLayout = layout || DefaultLayout;
	return (
		<Route
			key={id}
			path={path}
			element={
				<WrapLayout>
					<Component />
				</WrapLayout>
			}
		/>
	);
};

const WrapRoutes = () => {
	return <Routes>{LIST_ROUTES.map((route) => RouteItem(route))}</Routes>;
};

export default WrapRoutes;
