import MUIInput from "@/components/MUIInput";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import MidCardLayout from "@/layouts/MidCardLayout";
import { InputAdornment } from "@mui/material";
import { ReactNode } from "react";
import styles from "../../styles/CreateCampaignForm.module.scss";

const CreateCampaignForm = () => {
	return (
		<form className={styles.CreateCampaignForm}>
			<h3>Campaign Details</h3>
			<MUIInput variant="text" showLabel={true} label="Campaign Title" />
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
