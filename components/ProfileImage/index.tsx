import Image from "next/image";
import styles from "./ProfileImage.module.scss";

interface ProfileImageProps {
	url: string;
	alt: string;
	width: number;
	height: number;
	style: any;
}

const ProfileImage = ({
	url,
	alt,
	width,
	height,
	style,
}: ProfileImageProps) => {
	return (
		<Image
			src={url}
			alt={alt}
			width={width}
			height={height}
			className={styles.ProfileImage}
			style={style}
		/>
	);
};

export default ProfileImage;
