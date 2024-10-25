import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Appliance {
	id: number;
	name: string;
	brand: string;
	category: string;
	image: string;
	description: string;
}

const appliances: Appliance[] = [
	{
		id: 1,
		name: "Immersion Water Heater",
		brand: "Bajaj",
		category: "Water Heater",
		image:
			"https://www.bajajelectricals.com/media/7047/150830_p_default_thumb.jpg",
		description: "Efficient and quick water heating solution for your home.",
	},
	{
		id: 2,
		name: "Ceiling Fan",
		brand: "Crompton Greaves",
		category: "Ceiling Fan",
		image:
			"https://www.crompton.co.in/cdn/shop/files/Untitled-1_3edfb654-465e-44a4-89a4-002f90713471.png?v=1695044157&width=990",
		description:
			"High-speed, energy-efficient ceiling fan for optimal air circulation.",
	},
	{
		id: 3,
		name: "LED Bulb",
		brand: "Philips",
		category: "Lights",
		image:
			"https://in.shop.lighting.philips.com/cdn/shop/files/AceBright-12Wb-PhotoRoom.png?v=1696834583",
		description: "Bright, long-lasting LED bulb for energy-efficient lighting.",
	},
	{
		id: 4,
		name: "Exhaust Fan",
		brand: "Havells",
		category: "Exhaust Fan",
		image:
			"https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/d/s/ds_main_1.jpg",
		description:
			"Powerful exhaust fan for effective ventilation in kitchens and bathrooms.",
	},
	{
		id: 5,
		name: "Electric Switches & Sockets",
		brand: "Anchor",
		category: "Switches & Sockets",
		image:
			"https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2024-01/roma_urban.png",
		description:
			"Accurate and reliable electric meter for monitoring power consumption.",
	},
	{
		id: 6,
		name: "Mixer Grinder",
		brand: "Panasonic",
		category: "Grinder Motors",
		image:
			"https://www.panasonic.com/content/dam/pim/in/en/MX/MX-AV6/MX-AV625/Product1-MX-AV625-K_spec.png",
		description: "Versatile mixer grinder for all your kitchen grinding needs.",
	},
];

const Appliances: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-8">
				Featured Appliances
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
				{appliances.map((appliance) => (
					<Card
						key={appliance.id}
						className="w-full max-w-sm bg-slate-300 bg-opacity-55 dark:bg-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
						<CardContent className="p-4">
							<div className="relative h-48 mb-4">
								<Image
									src={appliance.image}
									alt={appliance.name}
									layout="fill"
									objectFit="contain"
								/>
							</div>
							<h3 className="text-lg font-semibold mb-2">{appliance.name}</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								{appliance.brand}
							</p>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
								{appliance.category}
							</p>
							<p className="text-sm text-gray-700 dark:text-gray-200">
								{appliance.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Appliances;
