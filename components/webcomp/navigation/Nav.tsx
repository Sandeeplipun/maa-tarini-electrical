"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DarkModeToggle } from "@/components/toggle/DarkModeToggle";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Shop", href: "/shop" },
	{ name: "Contact", href: "/contact" },
];

const Nav: React.FC = () => {
	const pathname = usePathname();
	const { data: session } = useSession();

	const handleSignIn = () => {
		signIn("google");
	};

	const handleSignOut = () => {
		signOut();
	};

	return (
		<nav className="border-b shadow-md">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className={`text-xl font-bold flex gap-2 items-center`}>
            <img src="/logo/logo.png" alt="logo" className="h-12 w-auto" />
							Maa Tarini Electricals
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
											: "dark:text-white text-black hover:bg-gray-700 hover:text-white"
									}`}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<DarkModeToggle />
						{session ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="relative h-8 w-8 rounded-full">
										<Avatar className="h-8 w-8">
											<AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
											<AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
										</Avatar>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem onClick={handleSignOut}>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button onClick={handleSignIn} variant="outline">
								<LogIn className="mr-2 h-4 w-4" />
								Sign In
							</Button>
						)}
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
											className={`px-3 py-2 rounded-md text-sm font-medium text-center ${
												pathname === item.href
													? "bg-gray-900 text-white"
													: "dark:text-white text-black hover:bg-gray-700 hover:text-white"
											}`}
										>
											{item.name}
										</Link>
									))}
									<div className="pt-4 flex justify-center">
										<DarkModeToggle />
									</div>
									{session ? (
										<Button onClick={handleSignOut} variant="outline">
											<LogOut className="mr-2 h-4 w-4" />
											Log out
										</Button>
									) : (
										<Button onClick={handleSignIn} variant="outline">
											<LogIn className="mr-2 h-4 w-4" />
											Sign In
										</Button>
									)}
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
