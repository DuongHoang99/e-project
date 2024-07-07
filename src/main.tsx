import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUs, Product } from "./pages";
import { Option } from "effect";

import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/products",
				element: <Product />,
			},
			{
				path: "/about-us",
				element: <AboutUs />,
			},
		],
	},
]);

Option.match(Option.fromNullable(document.getElementById("root")), {
	onSome: (root) => ReactDOM.createRoot(root).render(<RouterProvider router={router} />),
	onNone: () => null,
});
