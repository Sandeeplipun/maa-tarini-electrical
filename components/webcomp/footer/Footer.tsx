import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import GoogleMap from "./DIR/GoogleMap";

const curryear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<main>
			<div className={`footer`}>
				<div className={`footer-main`}>
					<div
						className={`footer-content`}>
						<div className={`footer-logo`}>
							<Link href={"/"}>
								<Image
									src="/logo/logo.png"
									width={100}
									height={100}
									alt="logo"
								/>
							</Link>
						</div>
						<div className={`footer-address`}>
							<h1>Address</h1>
							<p>
								Shop No. -4,
								<br />
								P.C. Sarkar Lane, Arunodaya Nagar,
								<br />
								Cuttack, Odisha 753012
								<br />
								Landmark: Near Nanda Gopal Sweet Stall
							</p>
						</div>
					</div>
					{/* Our Pages */}
					<div className={`footer-content`}>
						<div className={`footer-data`}>
							<h1>Our Pages</h1>
							<p>About</p>
							<p>Services</p>
							<p>Shop</p>
							<p>Staff</p>
						</div>
					</div>
					{/* Quick Links */}
					<div className={`footer-content`}>
						<div className={`footer-data`}>
							<h1>Quick Links</h1>
							<a
								href="/downloads/Maa-Tarini-Electrical-Logo.png"
								download="Maa-Tarini-Electrical-Logo.png">
								<p>Download Logo</p>
							</a>
							<Link href={"/sitemap.xml"}>
								<p>Sitemap</p>
							</Link>
							<p>Privacy Policy</p>
							<p>Terms & Conditions</p>
						</div>
					</div>
					{/* Contact Us */}
					<div className={`footer-content`}>
						<div className={`footer-data`}>
							<h1>Contact Us</h1>
							<p>+91 9937884307</p>
							<p>+91 7008836851</p>
							<Link
								href={"https://api.whatsapp.com/send/?phone=%2B919937884307"}
								target="_blank">
								<p>Whatsapp</p>
							</Link>
						</div>
					</div>
				</div>
				{/* Google Map */}
				<div className={`footer-map-container`}>
					<div className={`footer-map`}>
						<h1>Location</h1>
						<div className={``}>
							<GoogleMap />
						</div>
					</div>
				</div>
				{/* Copyright */}
				<div className={`footer-copyright`}>
					<p>© {curryear} Maa Tarini Electrical, All rights reserved.</p>
				</div>
			</div>
		</main>
	);
};

export default Footer;
