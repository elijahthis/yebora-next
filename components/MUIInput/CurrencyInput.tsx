import { MenuItem, Select, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import styles from "./MUIInput.module.scss";

interface CurrencyInputProps {
	placeholder: string;
}

const CurrencyInput = ({ placeholder }: CurrencyInputProps) => {
	const currencyList = ["NGN", "USD"];

	const [value, setValue] = useState("");
	const [currency, setCurrency] = useState(currencyList[0]);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const input = event.target.value;

		// Remove all non-digit characters from the input
		const digitsOnly = input.replace(/\D/g, "");

		// Format the input as a currency value

		const formattedValue = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
		})
			.format(Number(digitsOnly) / 100)
			.slice(1);

		setValue(formattedValue);
	}

	return (
		<div className={styles.CurrencyInput}>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={currency}
				onChange={(e) => setCurrency(e.target.value)}
				sx={{
					borderRadius: "15px",
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
					fontFamily: "Nunito",
					background: "#F3F3F5",
					outline: 0,
					color: "#B0B7C3",

					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "transparent !important",
					},
				}}
			>
				{currencyList.map((item, ind) => (
					<MenuItem value={item} key={ind}>
						{item}
					</MenuItem>
				))}
			</Select>
			<TextField
				// error
				id="outlined-error-helper-text"
				// label="Error"
				value={value}
				// helperText="Incorrect entry."
				placeholder={placeholder}
				onChange={handleChange}
				style={{ width: "100%" }}
				sx={{
					"& .MuiInputBase-root": {
						// display: "none",
						borderRadius: "15px",
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					},

					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "#EBF1F5",
					},
				}}
			/>
		</div>
	);
};

export default CurrencyInput;
