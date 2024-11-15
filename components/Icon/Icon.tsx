import * as LucideIcons from 'lucide-react'; // Importa todos os ícones
import { LucideProps } from 'lucide-react';

export interface IconProps {
  name: keyof typeof LucideIcons; // Garantir que 'name' seja uma chave válida do objeto 'LucideIcons'
  color?: string; // Cor opcional
  size?: number;  // Tamanho opcional como number
  className?: string; // Classe CSS opcional para estilização
}

const Icon = ({ name, color = 'black', size = 24, className = '' }: IconProps) => {
  // Acessa o ícone dinamicamente e o tipa como React.ComponentType<LucideProps>
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideProps>;

  // Renderiza o ícone com as propriedades fornecidas, incluindo className
  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;
