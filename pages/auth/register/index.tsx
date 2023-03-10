import SocialButton from "@/components/SocialButton";
import AuthLayout from "@/layouts/AuthLayout";
import styles from "../auth.module.scss";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Link from "next/link";

const Register = () => {
	const socialList = [
		{
			icon: <FaFacebookF />,
			label: "Continue with Facebook",
			bg: "#395185",
			col: "#ffffff",
			border: "#395185",
		},
		{
			icon: <FcGoogle />,
			label: "Continue with Google",
			bg: "#ffffff",
			col: "#023E4F",
			border: "#023E4F",
		},
		{
			icon: <FaApple />,
			label: "Continue with Apple ID",
			bg: "#121212",
			col: "#F2F2F2",
			border: "#121212",
		},
	];

	return (
		<AuthLayout>
			<div className={styles.RegCard}>
				<h3>Create Account</h3>
				<p>
					Create your account today with us, this would only take few minutes
				</p>
				<div className={styles.RegCard__actions}>
					{socialList.map((socialItem, ind) => (
						<SocialButton
							bg={socialItem.bg}
							col={socialItem.col}
							border={socialItem.border}
							key={ind}
						>
							{socialItem.icon}
							<p>{socialItem.label}</p>
						</SocialButton>
					))}
					<div className={styles.or}>or</div>
					<Button variant="fullWidth">Sign Up with Email</Button>
				</div>
				<div className={styles.RegCard__already}>
					Already have an account? <Link href="/auth/login">Sign In</Link>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Register;
