import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);

	return getLayout(
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Component {...pageProps} />
		</LocalizationProvider>
	);
};

export default App;
