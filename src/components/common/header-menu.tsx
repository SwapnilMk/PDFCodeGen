"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const navItems = [
        { name: "All Tools", href: "#" },
        { name: "Resources", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <section>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <a
                            href="https://www.shadcnblocks.com"
                            className="flex items-center gap-2"
                        >
                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                PDFCodeGen
                            </span>
                        </a>
                        <NavigationMenu className="hidden lg:block">
                            <NavigationMenuList className="flex gap-2">
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <NavigationMenuLink
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "relative px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors",
                                                activeTab === item.name && "text-gray-900"
                                            )}
                                            onClick={() => setActiveTab(item.name)}
                                        >
                                            {item.name}
                                            {activeTab === item.name && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                                                    layoutId="underline"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="hidden lg:flex items-center gap-4">
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                Start for free
                            </Button>
                        </div>
                        <Sheet onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="outline" size="icon" className="border-gray-200">
                                    <div className="relative w-5 h-5">
                                        <motion.span
                                            className="absolute h-0.5 w-full bg-gray-700 rounded"
                                            variants={{
                                                closed: { y: 0, rotate: 0 },
                                                open: { y: 8, rotate: 45 },
                                            }}
                                            animate={isOpen ? "open" : "closed"}
                                        ></motion.span>
                                        <motion.span
                                            className="absolute h-0.5 w-full bg-gray-700 rounded"
                                            variants={{
                                                closed: { opacity: 1 },
                                                open: { opacity: 0 },
                                            }}
                                            animate={isOpen ? "open" : "closed"}
                                            style={{ top: '8px' }}
                                        ></motion.span>
                                        <motion.span
                                            className="absolute h-0.5 w-full bg-gray-700 rounded"
                                            variants={{
                                                closed: { y: 0, rotate: 0 },
                                                open: { y: -8, rotate: -45 },
                                            }}
                                            animate={isOpen ? "open" : "closed"}
                                            style={{ top: '16px' }}
                                        ></motion.span>
                                    </div>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="max-h-screen overflow-auto bg-white/95 backdrop-blur-sm">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a
                                            href="https://www.shadcnblocks.com"
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                                PDFCodeGen
                                            </span>
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="flex flex-col p-4"
                                >
                                    <div className="flex flex-col gap-6">
                                        {["Templates", "Blog", "Pricing"].map((item, index) => (
                                            <motion.a
                                                key={item}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                                href="#"
                                                className={cn(
                                                    "font-medium text-gray-700 hover:text-gray-900 relative",
                                                    activeTab === item && "text-gray-900"
                                                )}
                                                onClick={() => setActiveTab(item)}
                                            >
                                                {item}
                                                {activeTab === item && (
                                                    <motion.div
                                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900"
                                                        layoutId="mobile-underline"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.2 }}
                                                    />
                                                )}
                                            </motion.a>
                                        ))}
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.7 }}
                                        className="mt-8"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                            Start for free
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>
            {/* Spacer to prevent content from being hidden under fixed navbar */}
            <div className="h-16"></div>
        </section>
    );
};