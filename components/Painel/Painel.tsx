import React from "react";
import classNames from "classnames";
import Typography from "../Typography/Typography";


export type PainelProps = {
    title?: string,
    type?: "primary" | "secondary";
    classTitle?: string,
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
    primary: "bg-dark",
    secondary: "bg-light",
};

const Painel = ({
    title,
    type = "primary",
    children,
    classTitle,
    className,
    ...rest
}: PainelProps) => {
    const classes = classNames(
        "p-2 border-solid border border-divider relative", // Adicionei 'relative' aqui
        {
            "rounded-md": true,
            "border border-gray-100": true,
            [boxClassMap[type]]: type,
        }
    );
    return (
        <div className={classes} {...rest}>
            {title &&
                <div className={classNames(
                    "rounded-sm absolute top-[-1.3rem] left-1/2 transform -translate-x-1/2 pl-4 pr-4 border-solid border border-divider",
                    boxClassMap[type]
                )}>
                    <Typography element="h1" className={classNames("!font-bold",classTitle)}>{title}</Typography>
                </div>
            }
            <div className="text-gray-primary pt-1">
                {children}
            </div>
        </div>
    )
};

export default Painel;