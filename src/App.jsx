import { useEffect, useState } from "react";
import Card from "./components/Card";
import { ThemeButton } from "./components/ThemeButton";
import { ThemeProvider } from "./context/theme";

function App() {
	const [defaultTheme, setDefaultTheme] = useState("light");

	const lightTheme = () => {
		setDefaultTheme("light");
	};

	const darkTheme = () => {
		setDefaultTheme("dark");
	};

	// actual data
	useEffect(() => {
		let html = document.querySelector("html");
		html.classList.remove("light", "dark");
		html.classList.add(defaultTheme);
	}, [defaultTheme]);

	return (
		<ThemeProvider value={{ defaultTheme, lightTheme, darkTheme }}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<ThemeButton />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
