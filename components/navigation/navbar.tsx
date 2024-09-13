"use client"
import React from "react"

import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {ExcompoIcon} from "@/components/ui/Icons";
import Linkcomp from "@/components/ui/link";

interface Item {
    label: string
    href: string
}
const links: Item[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/Reviews" },
    { label: "Contact", href: "/Workshop" },
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => setIsOpen(!isOpen)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (

        <>
            <Button
                variant="ghost"
                size="icon"

                className={`block slighty-large-phone:hidden fixed top-4 left-4 z-50
            
                    ${isOpen ? "hidden" : "block"}`

            }
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Menu className="h-6 w-6"/>
            </Button>
            <div
                className={` block slighty-large-phone:hidden  fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            <nav
                ref={navRef}
                className={`block z-21 slighty-large-phone:hidden z-650  fixed top-0 left-0 bottom-0 w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <ExcompoIcon className='p-4 size-20'/>
                    <ul className="flex-grow py-2">
                        {links.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <nav className="z-50 relative">
                <div className='flex-row   items-center p-1 justify-center hidden slighty-large-phone:flex '>
                    <ExcompoIcon className='size-14'/>

                    {links.map((link, index) => (
                        <Linkcomp href={'/'} key={index}>{link.label}</Linkcomp>
                    ))}
                </div>
            </nav>


        </>
    )
}