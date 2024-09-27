"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const partnerImages = [
	{
		id: 1,
		name: "Anchor Panasonic",
		image: "/assets/companyLogos/AnchorPanasonicLogo.png",
	},
	{
		id: 2,
		name: "Bajaj Electricals",
		image: "/assets/companyLogos/BajajElectricalsLogo.png",
	},
	{
		id: 3,
		name: "BPL",
		image: "/assets/companyLogos/BPLLogo.png",
	},
	{
		id: 4,
		name: "Cona",
		image: "/assets/companyLogos/ConaLogo.png",
	},
	{
		id: 5,
		name: "Crompton Greaves",
		image: "/assets/companyLogos/CromptonGreavesLogo.png",
	},
	{
		id: 6,
		name: "C & S",
		image: "/assets/companyLogos/CSElectricLogo.png",
	},
	{
		id: 7,
		name: "Finolex Cables",
		image: "/assets/companyLogos/FinolexCablesLogo.png",
	},
	{
		id: 8,
		name: "Goldmedal",
		image: "/assets/companyLogos/GoldmedalElectricalsLogo.png",
	},
	{
		id: 9,
		name: "Havells",
		image: "/assets/companyLogos/HavellsLogo.png",
	},
	{
		id: 10,
		name: "Orient Electric",
		image: "/assets/companyLogos/OrientElectricLogo.png",
	},
	{
		id: 11,
		name: "Panasonic",
		image: "/assets/companyLogos/PanasonicLogo.png",
	},
	{
		id: 12,
		name: "Philips",
		image: "/assets/companyLogos/PhilipsLogo.png",
	},
	{
		id: 13,
		name: "PM Cona",
		image: "/assets/companyLogos/PMConaLogo.png",
	},
	{
		id: 14,
		name: "Polycab Wires",
		image: "/assets/companyLogos/PolycabWiresLogo.png",
	},
	{
		id: 15,
		name: "RR Kabel",
		image: "/assets/companyLogos/RRKabelLogo.png",
	},
	{
		id: 16,
		name: "V-Guard",
		image: "/assets/companyLogos/VguardLogo.png",
	},
	{
		id: 17,
		name: "Wyzr",
		image: "/assets/companyLogos/WyzrLogo.png",
	},
];

const Partners: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		const scrollContent = scrollContainer.firstElementChild as HTMLElement;
		if (!scrollContent) return;

		const scrollWidth = scrollContent.scrollWidth;
		const animateScroll = () => {
			if (scrollContainer.scrollLeft >= scrollWidth / 2) {
				scrollContainer.scrollLeft = 0;
			} else {
				scrollContainer.scrollLeft += 1;
			}
			requestAnimationFrame(animateScroll);
		};

		const animationId = requestAnimationFrame(animateScroll);

		return () => cancelAnimationFrame(animationId);
	}, []);

	return (
		<section className="py-12 bg-gray-300 dark:bg-slate-900 bg-opacity-50 rounded-xl shadow-xl">
			<div className="container mx-auto px-4">
				<h1 className="text-xl md:text-3xl font-bold text-center mb-8 underline">
					Our trusted electrical partners
				</h1>
				<div ref={scrollRef} className="overflow-hidden">
					<div className="flex">
						{[...partnerImages, ...partnerImages].map((partner, index) => (
							<div
								key={`${partner.id}-${index}`}
								className={cn(
									"flex-shrink-0 w-[200px] px-4",
									"transition-all duration-300 ease-in-out hover:scale-110"
								)}>
								<div className="bg-white dark:bg-slate-200 rounded-lg shadow-md p-4 h-32 flex items-center justify-center">
									<Image
										src={partner.image}
										alt={partner.name}
										width={200}
										height={200}
										className="object-contain max-w-full max-h-full"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
