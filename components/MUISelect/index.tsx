import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ReactNode } from "react";
import styles from "./MUISelect.module.scss";
import { FiChevronDown } from "react-icons/fi";

interface MUISelectProps {
	optionsList: { label: ReactNode; value: string | number }[];
	label?: string;
}

const MUISelect = ({ optionsList, label }: MUISelectProps) => {
	return (
		<div>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				// value={optionsList[0].value}
				label={label}
				defaultValue={optionsList[0].value}
				// onChange={handleChange}

				sx={{
					border: "1px solid #F8F8F9",
					borderRadius: "28px",
					paddingRight: "1rem",
					// outline: 0,
					".MuiSelect-select": {
						padding: "9px 8px",
					},
				}}
				IconComponent={(props) => <FiChevronDown {...props} />}
			>
				{optionsList.map((optionItem) => (
					<MenuItem value={optionItem.value}>{optionItem.label}</MenuItem>
				))}
			</Select>
		</div>
	);
};

export default MUISelect;
