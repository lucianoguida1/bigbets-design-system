import { Meta, StoryObj } from "@storybook/react";

import Painel, { type PainelProps } from "./Painel";

const meta: Meta<PainelProps> = {
    title: "Design System/Molecules/Painel",
    component: Painel,
    argTypes: {
        children: { type: "string" },
        type: {
            type: "string",
            options: ["primary", "secondary"],
            control: { type: 'select' }
        },
        className: { type: "string" },
    },
};

export default meta;

export const Primary: StoryObj<PainelProps> = {
    args: {
        title: "Exemplo"
    },
}

export const Default: StoryObj<PainelProps> = {
    args: {}
}

export const Title: StoryObj<PainelProps> = {
    args: {
        title: "Exemplo Pequeno",
        classTitle: "text-xl"
    }
}

export const NoTitle: StoryObj<PainelProps> = {
    args: {}
}

export const Secondary: StoryObj<PainelProps> = {
    args: {
        type: 'secondary'
    }
}

export const SecondaryNoTitle: StoryObj<PainelProps> = {
    args: {
        type: 'secondary'
    }
}