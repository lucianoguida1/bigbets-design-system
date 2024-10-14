import React from "react";
import classNames from "classnames";
import Typography from "../Typography/Typography";


export type PainelProps = {
    title: string,
    isTitle?: boolean;
    type?: "primary" | "secondary";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
    primary: "bg-dark",
    secondary: "bg-light",
};

const Painel = ({
    title = "Defina um titulo",
    isTitle = true,
    type = "primary",
    children,
    className,
    ...rest
}: PainelProps) => {
    const classes = classNames(
        "p-2 border-solid border-2 border-divider",
        {
            "rounded-md": true,
            "border border-gray-100": true,
            [boxClassMap[type]]: type,
        }
    );
    return (
        <div className={classes} {...rest}>
            {isTitle &&
                <div className={classNames(
                    //"rounded-md absolute top-[-10%] left-1/2 transform -translate-x-1/2 p-1 pl-4 pr-4 border-solid border-2 border-divider",
                    "rounded-md absolute top-[-0.5rem] left-1/2 transform -translate-x-1/2 pl-4 pr-4 border-solid border-2 border-divider",
                    boxClassMap[type]
                )}>
                    <Typography element="h1" className="font-black text-xl">{title}</Typography>
                </div>
            }
            <div className="text-gray-primary pt-1">
                {children}
            </div>
        </div>
    )
};

export default Painel;