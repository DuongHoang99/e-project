import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
	return (
		<div className="headermenu">
			<nav>
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about-us">About Us</Link>
					</li>
				</ul>
			</nav>

			{/* Routes */}
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
}

export default App;
