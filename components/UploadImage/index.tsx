import Image from "next/image";
import styles from "./UploadImage.module.scss";
import { HiOutlineCamera } from "react-icons/hi";

interface UploadImageProps {
	url: string;
	alt: string;
	width: number;
	height: number;
	style?: any;
}

const UploadImage = ({ url, alt, width, height, style }: UploadImageProps) => {
	return (
		<div className={styles.UploadImage}>
			<Image
				src={url}
				alt={alt}
				width={width}
				height={height}
				className={styles.UploadImage__img}
				style={style}
			/>
			<div className={styles.svgWrap}>
				<HiOutlineCamera />
			</div>
			<input type="file" name="" id="" accept="image/*" />
		</div>
	);
};

export default UploadImage;
