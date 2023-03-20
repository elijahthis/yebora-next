import { DocIcon } from "../svgs";

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
							<div>Download</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Document;
