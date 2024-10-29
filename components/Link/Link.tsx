import * as LucideIcons from 'lucide-react'; // Importa todos os ícones


export type LinkProps = {
  children: React.ReactNode;
  icon?: keyof typeof LucideIcons;
  sizeIcon: number;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, sizeIcon = 20, icon, href, disabled, className, ...rest }: LinkProps) => {
  const LucideIcon = icon ? LucideIcons[icon] : null;

  return <a
    href={disabled ? undefined : href}
    className={`text-primary aria-disabled:text-disabled ${className}`}
    aria-disabled={disabled}
    {...rest}
  >
    {LucideIcon && <LucideIcon size={sizeIcon} />}

    {children}
  </a>
}

export default Link