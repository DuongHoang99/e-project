import { MainChildren } from "@presentation/components/templates";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<MainChildren>
			<Suspense>
				<Outlet />
			</Suspense>
		</MainChildren>
	);
}

export default App;
