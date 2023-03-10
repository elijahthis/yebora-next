import SocialButton from "@/components/SocialButton";
import AuthLayout from "@/layouts/AuthLayout";
import styles from "../auth.module.scss";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
	const router = useRouter();

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

	console.log("router", router);

	return (
		<AuthLayout>
			<div className={styles.RegCard}>
				<h3>Welcome Back</h3>
				<p>Sign in to your account to continue</p>
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
					<Button
						variant="fullWidth"
						onClick={() => router.push("/auth/login/email")}
					>
						Sign In with Email
					</Button>
				</div>
				<div className={styles.RegCard__already}>
					Don't have an account? <Link href="/auth/register">Sign Up</Link>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Login;
