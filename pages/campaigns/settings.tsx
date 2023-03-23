import MUISelect from "@/components/MUISelect";
import { DocIcon } from "@/components/svgs";
import WhiteCardSection from "@/components/WhiteCardSection";
import MidCardLayout from "@/layouts/MidCardLayout";
import { ReactNode } from "react";
import styles from "../styles/CampaignSettings.module.scss";

const CampaignSettings = () => {
	return (
		<main className={styles.CampaignSettings}>
			<WhiteCardSection>
				<h3>Campaign details</h3>
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
