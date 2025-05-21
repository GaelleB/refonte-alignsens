import React from 'react';
import { Link } from 'react-scroll';

const navItems = [
    { label: 'Accueil', to: 'hero' },
    { label: 'Présentation', to: 'about' },
    { label: 'Offres', to: 'offers' },
    { label: 'Témoignages', to: 'testimonials' },
    { label: 'Blog', to: 'blog' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
                <a href="/" className="text-2xl font-bold text-black">AlignSens</a>
                <ul className="hidden md:flex space-x-8">
                {navItems.map(item => (
                    <li key={item.to}>
                    <Link
                        to={item.to}
                        smooth
                        duration={500}
                        offset={-80}
                        className="cursor-pointer text-black hover:text-orange-500"
                    >
                        {item.label}
                    </Link>
                    </li>
                ))}
                </ul>
                <div className="md:hidden">
                
                </div>
            </div>
        </nav>
    );
}