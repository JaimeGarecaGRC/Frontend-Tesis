import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			{children}
		</div>
	);
}

export default Layout;