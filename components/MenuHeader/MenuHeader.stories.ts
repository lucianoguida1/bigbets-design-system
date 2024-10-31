import { Meta, StoryObj } from '@storybook/react'

import MenuHeader, { MenuHeaderProps } from './MenuHeader'

const meta: Meta<MenuHeaderProps> = {
    title: 'Design System/Molecules/MenuHeader',
    component: MenuHeader,
    argTypes: {}
}

export default meta


export const Primary: StoryObj<MenuHeaderProps> = {
    args: {
        titulo: 'BIGBETS',
        links: [
            { href: "/profile", text: "Perfil", icon: 'Home' },
            { href: "/settings", text: "Configurações", icon: 'Home' },
            { href: "/about", text: "Sobre", icon: 'Home' },
            { href: "/contact", text: "Contato", icon: 'Home' },
        ]
    }
}