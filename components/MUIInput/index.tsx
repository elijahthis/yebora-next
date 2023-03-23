import { TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import UploadFile, { AcceptedFileTypes } from "../UploadFile";
import CurrencyInput from "./CurrencyInput";
import styles from "./MUIInput.module.scss";

interface MUIInputProps {
	variant:
		| "text"
		| "password"
		| "date"
		| "time"
		| "textarea"
		| "currency"
		| "file";
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	showLabel?: boolean;
	label?: string;
	placeholder?: string;
	InputProps?: any;
	accept?: AcceptedFileTypes;
}

const MUIInput = ({
	variant,
	value,
	onChange,
	showLabel = true,
	label = "",
	placeholder = "",
	InputProps,
	accept = "*",
}: MUIInputProps) => {
	const renderContent = () => {
		switch (variant) {
			case "text":
				return (
					<TextField
						// error
						id="outlined-error-helper-text"
						// label="Error"
						value={value}
						// helperText="Incorrect entry."
						placeholder={showLabel ? placeholder : label}
						onChange={onChange}
						style={{ width: "100%" }}
						sx={{
							"& .MuiInputBase-root": {
								// display: "none",
								borderRadius: "15px",
							},

							"& .MuiOutlinedInput-notchedOutline": {
								borderColor: "#EBF1F5",
							},
							input: {
								fontFamily: "Nunito",
							},
						}}
						InputProps={InputProps}
					/>
				);
				break;
			case "date":
				return (
					<DatePicker
						value={value}
						onChange={(e: any) => {
							onChange && onChange(e);
						}}
						renderInput={(props) => (
							<TextField
								{...props}
								sx={{
									width: "100%",
									"& .MuiInputBase-root": {
										// display: "none",
										borderRadius: "15px",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#EBF1F5",
									},
								}}
							/>
						)}
					/>
				);

			case "time":
				return (
					// <></>
					<TimePicker
						// sx={{ width: "100%" }}
						value={value}
						onChange={(e: any) => {
							onChange && onChange(e);
						}}
						renderInput={(props) => (
							<TextField
								{...props}
								sx={{
									width: "100%",
									"& .MuiInputBase-root": {
										// display: "none",
										borderRadius: "15px",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#EBF1F5",
									},
								}}
							/>
						)}

						// textField
					/>
				);

			case "textarea":
				return (
					<TextareaAutosize
						minRows={4}
						placeholder={placeholder}
						style={{
							fontFamily: "Nunito",
							width: "100%",
							fontWeight: "400",
							fontSize: "16px",
							borderRadius: "8px",
							border: "1px solid #EBF1F5",
							resize: "none",
							padding: "16.5px 14px",
						}}
						value={value}
					/>
				);

			case "currency":
				return <CurrencyInput placeholder={placeholder} />;

			case "file":
				return <UploadFile accept={accept} />;

			default:
				return (
					<TextField
						// error
						id="outlined-error-helper-text"
						// label="Error"
						value={value}
						// helperText="Incorrect entry."
						placeholder={showLabel ? placeholder : label}
						onChange={onChange}
						style={{ width: "100%" }}
						sx={{
							"& .MuiInputBase-root": {
								// display: "none",
								borderRadius: "15px",
							},

							"& .MuiOutlinedInput-notchedOutline": {
								borderColor: "#EBF1F5",
							},
						}}
						InputProps={InputProps}
					/>
				);
				break;
		}
	};
	return (
		<label htmlFor="" className={styles.MUIInput}>
			{showLabel && <div className={styles.MUIInput__label}>{label}</div>}
			{renderContent()}
		</label>
	);
};

export default MUIInput;
