import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent } from "react";

interface MUIRadioProps {
	list: { label: string; value: string }[];
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MUIRadio = ({ list, value, onChange }: MUIRadioProps) => {
	return (
		<RadioGroup
			aria-labelledby="demo-radio-buttons-group-label"
			defaultValue={value}
			onChange={onChange}
			name="radio-buttons-group"
			sx={{ flexDirection: "row", alignItems: "center", gap: "1rem" }}
		>
			{list.map((listItem, ind) => (
				<FormControlLabel
					value={listItem.value}
					control={<Radio />}
					label={listItem.label}
					key={ind}
					sx={{
						color: "rgba(18, 21, 40, 0.5)",
						fontWeight: 400,
						fontSize: "16px",
						lineHeight: "22px",
					}}
				/>
			))}
		</RadioGroup>
	);
};

export default MUIRadio;
