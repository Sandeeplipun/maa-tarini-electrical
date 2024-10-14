"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const slides = [
	{
		id: 1,
		title: "Slide 1",
		image: "/images/img-1.png",
	},
	{
		id: 2,
		title: "Slide 2",
		image: "/images/img-2.png",
	},
	{
		id: 3,
		title: "Slide 3",
		image: "/images/C & S electric Certificate.jpeg",
	},
	{
		id: 4,
		title: "Slide 4",
		image: "/images/Maa_Durga_Khannagar.jpeg",
	},
	{
		id: 5,
		title: "Slide 5",
		image: "/images/Durga_Puja_Poster.png",
	}
];

const CarouselSlider: React.FC = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<main className="w-full max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
			<div className="flex flex-col items-center justify-center">
				<div className="w-full max-w-4xl mx-auto bg-slate-500 dark:bg-slate-300 bg-opacity-25 dark:bg-opacity-50 rounded-xl shadow-lg p-4">
					<Carousel plugins={[plugin.current]} className="w-full">
						<CarouselContent>
							{slides.map((slide) => (
								<CarouselItem key={slide.id} className="relative">
									<div className="w-full h-[calc(100vw*(466/1350))] max-h-[466px] overflow-hidden rounded-lg">
										<Image
											src={slide.image}
											alt={slide.title}
											layout="fill"
											objectFit="contain"
											className="w-full h-full"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</main>
	);
};

export default CarouselSlider;
