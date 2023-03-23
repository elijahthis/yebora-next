import * as React from "react";
import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TbPlus } from "react-icons/tb";
import styles from "./MUIAccordion.module.scss";

interface MUIAccordionProps {
	dataList: { title: ReactNode; desc: ReactNode }[];
}

const MUIAccordion = ({ dataList }: MUIAccordionProps) => {
	return (
		<div className={styles.MUIAccordion}>
			{dataList.map((item, ind) => (
				<Accordion key={ind}>
					<AccordionSummary
						expandIcon={<TbPlus size={24} color="#121528" />}
						aria-controls={`panel${ind + 1}a-content`}
						id={`panel${ind + 1}a-header`}
					>
						<h4 className={styles.MUIAccordion__title}>{item.title}</h4>
					</AccordionSummary>
					<AccordionDetails>
						<div className={styles.MUIAccordion__desc}>{item.desc}</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default MUIAccordion;
