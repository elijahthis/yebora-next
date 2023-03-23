import Button from "@/components/Button";
import MUICheckBox from "@/components/MUICheckBox";
import MUIInput from "@/components/MUIInput";
import MUISelect from "@/components/MUISelect";
import { DocIcon } from "@/components/svgs";
import WhiteCardSection from "@/components/WhiteCardSection";
import MidCardLayout from "@/layouts/MidCardLayout";
import { ReactNode } from "react";
import styles from "../styles/CampaignSettings.module.scss";
import { RiErrorWarningLine } from "react-icons/ri";

const CampaignSettings = () => {
	const paymentOptions = ["Paystack", "Flutterwave", "FIncra", "Bank Transfer"];

	return (
		<main className={styles.CampaignSettings}>
			<WhiteCardSection>
				<form action="">
					<div className={styles.spaceBtwn}>
						<h3>Campaign details</h3>
						<Button variant="blueFill">Update</Button>
					</div>
					<div className={styles.Inputs}>
						<MUIInput
							variant="text"
							showLabel={true}
							label="Campaign Title"
							value="Laptops for young school children"
						/>
						<MUIInput
							variant="textarea"
							showLabel={true}
							label="Event Description"
							placeholder="Enter a description..."
							value="The Project for Awesome is a once-a-year charity event that combines community-created videos promoting nonprofits, a 48 hour livestream with celebrity guests & charities. John & Hank, along with a number of special guests, host a 48-hour continuous livestream to feature videos, announce new perks, put peanut butter on their faces, throw confetti, and do their happy dances. You truly never know what will happen, so tune in, join the party, and help us decrease world suck!"
						/>
					</div>
				</form>
			</WhiteCardSection>
			<WhiteCardSection>
				<h3>Rules</h3>
				<div className={styles.spaceBtwn}>
					<p>How many people can manage payment?</p>
					<MUISelect
						optionsList={[
							{ label: "1", value: 1 },
							{ label: "2", value: 2 },
							{ label: "3", value: 3 },
						]}
					/>
				</div>
			</WhiteCardSection>
			<WhiteCardSection>
				<h3>Payment Method</h3>
				<p className={styles.desc}>
					These are the available payment options you can received funds from
				</p>
				<div className={styles.paymentOptions}>
					{paymentOptions.map((item, ind) => (
						<div key={ind} className={styles.paymentOptions__item}>
							<MUICheckBox />
							<span>{item}</span>
						</div>
					))}
				</div>
				<div className={styles.transferInfo}>
					<RiErrorWarningLine />
					<p>
						<span>BANK TRANSFER:</span> You can still receive money from the
						generated account but the number will no longer be visible to the
						public
					</p>
				</div>
			</WhiteCardSection>
			<WhiteCardSection>
				<h3>Currency</h3>
				<div className={styles.spaceBtwn}>
					<p>Select the currency type for this campaign</p>
					<MUISelect
						optionsList={[
							{
								label: <div className="optionLabel">USD ($)</div>,
								value: "USD",
							},
							{
								label: <div className="optionLabel">NGN (₦)</div>,
								value: "NGN",
							},
							{
								label: <div className="optionLabel">GHC (GH₵)</div>,
								value: "GHC",
							},
						]}
					/>
				</div>
			</WhiteCardSection>
			<WhiteCardSection>
				<div className={styles.spaceBtwn}>
					<h3>Supporting Document</h3>
					<span className={styles.blueLink}>Upload Document</span>
				</div>
				<p className={styles.desc}>
					You can add supporting documents to helper other understand this
					campaign better. you can upload up to 5 documents
				</p>
				<div className={styles.documents}>
					{Array(5)
						.fill(0)
						.map((item, ind) => (
							<div className={styles.documents__item} key={ind}>
								<DocIcon />
								<p>Transcripts.doc</p>
							</div>
						))}
				</div>
			</WhiteCardSection>
		</main>
	);
};

export default CampaignSettings;

CampaignSettings.getLayout = function getLayout(page: ReactNode) {
	return (
		<MidCardLayout
			titleNavProps={{
				title: "Campaign Settings",
				variant: "back",
				backLink: "/campaigns",
			}}
		>
			{page}
		</MidCardLayout>
	);
};
