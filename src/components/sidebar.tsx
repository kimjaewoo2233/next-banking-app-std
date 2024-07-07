"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from 'next/image'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sticky inlin left-0 top-0 flex h-screen w-full flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 col-span-1 max-xl:col-span-0  max-xl:hidden">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src={"/icons/logo.svg"}
                        width={34}
                        height={34}
                        alt="Horizon Logo"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn("sidebar-link", { 'bg-bank-gradient': isActive })}
                        >
                            <div className="relative size-6">
                                <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({
                                    'brightness-[3] invert-0': isActive
                                })}
                                />
                            </div>
                            <p className={cn("sidebar-label", { "!text-white": isActive })}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default Sidebar;
