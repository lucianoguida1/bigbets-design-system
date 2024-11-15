import * as LucideIcons from 'lucide-react'; // Importa todos os ícones
import { LucideProps } from 'lucide-react';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: keyof typeof LucideIcons;
  sizeIcon?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
    case 'secondary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';
    case 'tertiary':
    default:
      return disabled ? 'text-disabled' : 'text-primary';
  }
}

const Button = ({ variant = 'primary', sizeIcon = 20, icon, children, className, disabled, ...rest }: ButtonProps) => {
  // Acessa o ícone dinamicamente com uma tipagem para React.ComponentType
  const LucideIcon = icon ? (LucideIcons[icon] as React.ComponentType<LucideProps>) : null;

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {/* Renderiza o ícone se ele for válido */}
      {LucideIcon && <LucideIcon size={sizeIcon} />}
      {children}
    </button>
  );
}

export default Button;
