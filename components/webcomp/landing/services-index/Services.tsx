import React from "react";
import { FcElectricity } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { IconType } from "react-icons";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceInfo {
	id: number;
	title: string;
	icon: string | React.ReactNode | IconType;
}

const serviceInfo = [
	{
		id: 1,
		title: "Quality Products & Services",
		icon: (
			<img
				src="/assets/badges/VerifiedRibbonBadge.png"
				alt="Badge"
				className="h-24 w-24"
			/>
		),
	},
	{
		id: 2,
		title: "Best Electricians Available",
		icon: <FcElectricity className="h-16 w-16" />,
	},
	{
		id: 3,
		title: "Operates All day of the week",
		icon: <FcShop className="h-16 w-16" />,
	},
];

const Services: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
				{serviceInfo.map((service) => (
					<Card
						key={service.id}
						className="w-full max-w-sm bg-slate-300 bg-opacity-55 dark:bg-slate-700 shadow-xl scale-100 hover:scale-105 transition-all ease-in-out duration-300">
						<CardContent className="flex flex-col items-center justify-center p-6 h-64">
							<div className="mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold text-center">
								{service.title}
							</h3>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Services;
