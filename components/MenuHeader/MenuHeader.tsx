'use client'

import Link from 'next/link';
import { useState } from 'react';
import Typography from '../Typography/Typography';

export type LinkItem = {
    href: string;
    text: string;
};

export type MenuHeaderProps = {
    logo?: string;
    titulo: string; // título obrigatório
    links?: LinkItem[]; // array opcional de links
};

const MenuHeader = ({ logo, titulo, links = [], ...rest }: MenuHeaderProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-black h-14 w-full">
            <div className="w-full max-w-screen-desktop mx-auto flex justify-between items-center h-full px-4 desktop:px-8">
                {/* Logo ou Nome do projeto à esquerda */}
                <div className="flex items-center">
                    <Link href="/">
                        {logo ? (
                            <img src={logo} alt={titulo} className="h-8 cursor-pointer" />
                        ) : ( 
                            <Typography
                                element="h3"
                                size="xl"
                                className="font-bold text-white cursor-pointer"
                            >
                                {titulo}
                            </Typography>
                        )}
                    </Link>
                </div>

                {/* Links à direita */}
                <div className="flex items-center space-x-6">
                    {/* Links completos para telas tablet e maiores */}
                    {links.length > 0 && (
                        <div className="hidden tablet:flex items-center space-x-6">
                            {links.map((link, index) => (
                                <Link key={index} href={link.href} className="text-white hover:text-gray-400">
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Ícone de dropdown para telas menores que tablet */}
                    {links.length > 0 && (
                        <div className="flex tablet:hidden">
                            <button
                                className="text-white focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                {/* Ícone de dropdown (hambúrguer) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                            {/* Menu dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute right-4 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                                    {links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="block px-4 py-2 text-black hover:bg-gray-200"
                                        >
                                            {link.text}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default MenuHeader;
