import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import styles from "./UploadFile.module.scss";

export type AcceptedFileTypes = "image/*" | "video/*" | ".pdf" | "*";

interface UploadFileProps {
	accept: AcceptedFileTypes;
}

const UploadFile = ({ accept }: UploadFileProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [dragging, setDragging] = useState(false);

	const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(e.target.files?.[0] ?? null);
	};

	const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setSelectedFile(e.dataTransfer.files?.[0] ?? null);
		setDragging(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragging(false);
	};

	const isFileTypeAccepted = (file: File) => {
		if (accept === "*") {
			return true;
		}
		const fileType = file.type;
		if (accept === "image/*") {
			return fileType.startsWith("image/");
		}
		if (accept === "video/*") {
			return fileType.startsWith("video/");
		}
		if (accept === ".pdf") {
			return fileType === "application/pdf";
		}
		return false;
	};

	const isInputValid = () => {
		if (!selectedFile) {
			return false;
		}
		if (!isFileTypeAccepted(selectedFile)) {
			return false;
		}
		return true;
	};

	return (
		<div
			className={`${styles.UploadFile} ${
				dragging && styles["UploadFile--dragging"]
			}`}
			onDrop={handleDragDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
		>
			<div className={styles.UploadFile__icon}>
				<FiUploadCloud />
			</div>
			<p>
				<span>Click to upload</span> or drag and drop
			</p>

			<p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
			{selectedFile &&
				(isInputValid() ? (
					<div>
						<p>Selected file: {selectedFile.name}</p>
						<p>File size: {selectedFile.size} bytes</p>
					</div>
				) : (
					<p style={{ color: "#D34646" }}>Selected file is not valid.</p>
				))}

			<input
				type="file"
				name=""
				id=""
				accept={accept}
				onChange={handleFileInput}
			/>
		</div>
	);
};

export default UploadFile;
