import * as LucideIcons from 'lucide-react'; // Importa todos os ícones

export interface IconProps {
  name: keyof typeof LucideIcons; // Garantir que 'name' seja uma chave válida do objeto 'LucideIcons'
  color?: string; // Cor opcional
  size?: string;  // Tamanho opcional
  className?: string; // Classe CSS opcional para estilização
}

const Icon = ({ name, color = 'black', size = '24', className = '' }: IconProps) => {
  const LucideIcon = name ? LucideIcons[name] : null;

  // Verifica se o ícone existe
  if (!LucideIcon) {
    return <span>Ícone não encontrado</span>;
  }

  // Renderiza o ícone com as propriedades fornecidas, incluindo className
  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;
