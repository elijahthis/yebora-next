import { Box, Tab, Tabs } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import TabPanel from "./TabPanel";

interface MUITabsProps {
	tabList: { label: string; value: string }[];
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
}

const MUITabs = ({ tabList, value, setValue }: MUITabsProps) => {
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
					}}
				>
					{tabList.map((tabItem, ind) => (
						<Tab
							label={tabItem.label}
							{...a11yProps(ind)}
							sx={{
								fontFamily: "Nunito",
								fontWeight: 500,
								fontSize: "13px",
								lineHeight: "21px",
								padding: "1rem 3px",
							}}
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
