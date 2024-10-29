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
          { href: "/profile", text: "Perfil" },
          { href: "/settings", text: "Configurações" },
          { href: "/about", text: "Sobre" },
          { href: "/contact", text: "Contato" },
        ]
    }
}