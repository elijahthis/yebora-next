import { DocIcon } from "../svgs";
import { BiArrowToBottom } from "react-icons/bi";

const Document = () => {
	return (
		<section>
			<h4>Supporting Campaign Documents</h4>
			<div>
				{Array(5)
					.fill(0)
					.map((item, ind) => (
						<div key={ind}>
							<DocIcon />
							<p>Transcripts.doc</p>
							<div>
								<BiArrowToBottom />
								Download
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Document;
