import { ReactNode } from "react";

interface ProfileComponentCardProps {
	title: string;
	children: ReactNode;
}

const ProfileComponentCard = ({
	title,
	children,
}: ProfileComponentCardProps) => {
	return (
		<div>
			<div>{title}</div>
			<div>{children}</div>
		</div>
	);
};

export default ProfileComponentCard;
