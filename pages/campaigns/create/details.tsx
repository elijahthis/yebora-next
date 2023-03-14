import Button from "@/components/Button";
import MUIInput from "@/components/MUIInput";
import MUIToggle from "@/components/MUIToggle";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import MidCardLayout from "@/layouts/MidCardLayout";
import { InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import { ChangeEvent, ReactNode, useState } from "react";
import styles from "../../styles/CreateCampaignForm.module.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import MUIRadio from "@/components/MUIRadio";

const CreateCampaignForm = () => {
	const router = useRouter();

	const contribTypes = [
		{
			label: "Flexible Contribution",
			value: "flexible",
		},
		{
			label: "Fixed Contribution",
			value: "fixed",
		},
	];

	const [contributionType, setContributionType] = useState(
		contribTypes[0].value
	);

	return (
		<form className={styles.CreateCampaignForm}>
			<h3>Campaign Details</h3>
			<div className={styles.FormWrap}>
				<MUIInput variant="text" showLabel={true} label="Campaign Title" />
				<div className={styles.doubleCol}>
					<MUIInput
						variant="date"
						showLabel={true}
						label="Campaign Start Date"
					/>
					<MUIInput variant="date" showLabel={true} label="Campaign Due Date" />
				</div>
				<MUIInput variant="time" showLabel={true} label="Campaign Due Time" />
				<MUIInput
					variant="textarea"
					showLabel={true}
					label="Event Description"
					placeholder="Enter a description..."
				/>
				<MUIInput
					variant="file"
					showLabel={true}
					label="Upload cover image/Video"
					accept="image/*"
				/>
			</div>
			<div className={styles.CreateCampaignForm__bottomBit}>
				{router.query?.type === "crowdfunding" ? (
					<MUIInput
						variant="currency"
						showLabel={true}
						label="Campaign Target Amount"
					/>
				) : (
					<div className={styles.campaignTarget}>
						<h5>Campaign Target</h5>
						<div>
							<p className={styles.campaignTarget__info}>
								Select Contribution Type
								<RiErrorWarningLine color="#888A93" />
							</p>
							<div className={styles.radioWrap}>
								<MUIRadio
									list={contribTypes}
									value={contributionType}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setContributionType(e.target.value)
									}
								/>
							</div>
							<div
								className={styles.doubleCol}
								style={{
									gridTemplateColumns:
										contributionType === "flexible"
											? "repeat(2, 1fr)"
											: "unset",
								}}
							>
								{contributionType === "flexible" && (
									<MUIInput
										variant="currency"
										showLabel={true}
										label="Fixed Amount"
									/>
								)}
								<MUIInput
									variant="currency"
									showLabel={true}
									label="Campaign Target Amount"
								/>
							</div>
						</div>
						<div className={styles.allowOthers}>
							<p>Allow others to pledge in this campagin</p>
							<MUIToggle />
						</div>
					</div>
				)}
				{router.query?.type === "crowdfunding" && (
					<div className={styles.allowOthers}>
						<p>Allow others to pledge in this campagin</p>
						<MUIToggle />
					</div>
				)}
			</div>
			<div className={styles.btnWrap}>
				<Button
					variant="outline"
					onClick={() => router.push("/campaigns/create")}
				>
					Cancel
				</Button>
				<Button>Create</Button>
			</div>
		</form>
	);
};

export default CreateCampaignForm;

CreateCampaignForm.getLayout = function getLayout(page: ReactNode) {
	return (
		<MidCardLayout
			titleNavProps={{
				title: "Create Campaign",
				variant: "back",
				backLink: "/campaigns/create",
			}}
		>
			{page}
		</MidCardLayout>
	);
};
