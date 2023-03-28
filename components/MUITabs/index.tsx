import { Box, Tab, Tabs } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import TabPanel from "./TabPanel";
import styles from "./MUITabs.module.scss";

interface MUITabsProps {
	tabList: { label: string; value: string; unread?: number }[];
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
}

const MUITabs = ({ tabList, value, setValue }: MUITabsProps) => {
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					sx={{
						".MuiTabs-flexContainer": { gap: "2rem" },
						".MuiTab-root.Mui-selected": {
							fontWeight: 700,
							fontSize: "14px",
							color: "#2A2A2A",
						},
						".MuiTabs-indicator": {
							backgroundColor: "#328be0",
						},
						".MuiTabs-scroller": {
							overflowX: "auto !important",
						},
					}}
				>
					{tabList.map((tabItem, ind) => (
						<Tab
							label={
								<div className={styles.tabDiv}>
									{tabItem.label}
									{tabItem.unread !== undefined ? (
										<span>{tabItem.unread}</span>
									) : (
										<></>
									)}
								</div>
							}
							{...a11yProps(ind)}
							sx={{
								fontFamily: "Nunito",
								fontWeight: 500,
								fontSize: "13px",
								lineHeight: "21px",
								padding: "1rem 3px",
							}}
							key={ind}
						/>
					))}
				</Tabs>
			</Box>
		</>
	);
};

export default MUITabs;

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
