import SocialButton from "@/components/SocialButton";
import AuthLayout from "@/layouts/AuthLayout";
import styles from "../auth.module.scss";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Link from "next/link";
import MUIInput from "@/components/MUIInput";
import { MailIcon } from "@/components/svgs";
import InputAdornment from "@mui/material/InputAdornment";

const EmailLogin = () => {
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
			<form className={styles.RegCard}>
				<h3>Welcome Back</h3>
				<p>Sign in to your account to continue</p>
				<div className={styles.RegCard__actions}>
					<MUIInput
						variant="text"
						showLabel={false}
						label="Email address"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									{" "}
									<MailIcon />
								</InputAdornment>
							),
						}}
					/>
					<MUIInput
						variant="text"
						showLabel={false}
						label="Password"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									{" "}
									<MailIcon />
								</InputAdornment>
							),
						}}
					/>
				</div>
				<Button variant="fullWidth" type="submit">
					Sign In
				</Button>
				<div className={styles.RegCard__already}>
					Don&apos;t have an account? <Link href="/auth/register">Sign Up</Link>
				</div>
			</form>
		</AuthLayout>
	);
};

export default EmailLogin;
