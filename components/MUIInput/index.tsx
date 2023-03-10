import TextField from "@mui/material/TextField";
import styles from "./MUIInput.module.scss";

interface MUIInputProps {
	variant: "text" | "password";
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	showLabel?: boolean;
	label?: string;
	placeholder?: string;
	InputProps?: any;
}

const MUIInput = ({
	variant,
	value,
	onChange,
	showLabel = true,
	label = "",
	placeholder = "",
	InputProps,
}: MUIInputProps) => {
	return (
		<label htmlFor="" className={styles.MUIInput}>
			{showLabel && <div className={styles.MUIInput__label}>{label}</div>}
			<TextField
				error
				id="outlined-error-helper-text"
				// label="Error"
				value={value}
				helperText="Incorrect entry."
				placeholder={showLabel ? placeholder : label}
				onChange={onChange}
				style={{ width: "100%" }}
				sx={{
					"& .MuiInputBase-root": {
						// display: "none",
						borderRadius: "15px",
					},
				}}
				InputProps={InputProps}
			/>
		</label>
	);
};

export default MUIInput;
