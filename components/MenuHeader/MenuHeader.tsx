import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react'; // Importação dos ícones
import Typography from '../Typography/Typography';
import Link from '../Link/Link';
import AvatarImage from '../Avatar/AvatarImage'; // Importe o componente AvatarImage

export type LinkItem = {
    href: string;
    text: string;
    icon?: keyof typeof LucideIcons;
};

export type MenuHeaderProps = {
    logo?: string;
    classNamesLogo?: string;
    titulo: string;
    links?: LinkItem[];
};

const MenuHeader = ({ logo, classNamesLogo, titulo, links = [], ...rest }: MenuHeaderProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-black h-14 w-full" {...rest}>
            <div className="w-full max-w-screen-desktop mx-auto flex justify-between items-center h-full px-4 desktop:px-8">
                {/* Logo ou Nome do projeto à esquerda */}
                <div className="flex items-center">
                    <Link href="/">
                        {logo ? (
                            <AvatarImage classNames={classNamesLogo} src={logo} altDescription={titulo} /> // Substitui img por AvatarImage
                        ) : (
                            <Typography
                                element="h3"
                                size="xl"
                                className="!font-bold text-white cursor-pointer"
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
                                <Link
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                    sizeIcon={20}
                                    className="text-white hover:text-gray-400 flex items-center space-x-2"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Ícone de dropdown para telas menores que tablet */}
                    {links.length > 0 && (
                        <div className="flex tablet:hidden relative">
                            <button
                                className="text-white focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                {/* Ícone de dropdown do Lucide (Menu) */}
                                <LucideIcons.Menu className="h-6 w-6" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-4 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
                                    {links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            icon={link.icon}
                                            sizeIcon={20}
                                            className="px-4 py-2 text-black hover:bg-gray-200 flex items-center space-x-2"
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
