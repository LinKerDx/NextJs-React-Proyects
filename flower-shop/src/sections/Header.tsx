/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    ClerkProvider,
} from '@clerk/nextjs'



const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Testimonios', path: '/testimonials' },
]


export default function Header() {
    const pathname = usePathname()
    return (
        <ClerkProvider>
            <header className="bg-primary px-4">
                <nav className="flex justify-between items-center">
                    <div className="overflow-hidden h-[60px] "><img src="/logo.svg" alt="" className="size-35 object-contain object-top " /></div>
                    <div className="flex gap-4">
                        <SignedOut>
                            <SignInButton mode="modal" className="hover:hover:text-gray-400 cursor-pointer" >Ingresar </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <ul className=" space-x-4 hidden md:flex">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className={`hover:text-gray-400 ${pathname === link.name ? 'bg-[#59f999]' : ''} `}><p >{link.name}</p></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </ClerkProvider>
    )
}