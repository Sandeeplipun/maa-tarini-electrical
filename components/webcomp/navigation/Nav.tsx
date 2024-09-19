"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DarkModeToggle } from "@/components/toggle/DarkModeToggle";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Shop", href: "/shop" },
	{ name: "Contact", href: "/contact" },
];

const Nav: React.FC = () => {
	const pathname = usePathname();

	return (
		<nav className="border-b">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold">
							Logo
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`px-3 py-2 rounded-md text-sm font-medium ${
										pathname === item.href
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white"
									}`}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className="hidden md:block">
						<DarkModeToggle />
					</div>
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon">
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<div className="flex flex-col space-y-4 mt-4">
									{navItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={`px-3 py-2 rounded-md text-sm font-medium ${
												pathname === item.href
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white"
											}`}
										>
											{item.name}
										</Link>
									))}
									<div className="pt-4">
										<DarkModeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
