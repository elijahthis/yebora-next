import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MUICheckBox = () => {
	return (
		<Checkbox
			{...label}
			sx={{
				color: "#328BE0",
				"&.Mui-checked": {
					color: "#328BE0",
				},
			}}
		/>
	);
};

export default MUICheckBox;
