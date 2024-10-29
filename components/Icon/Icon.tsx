import * as LucideIcons from 'lucide-react'; // Importa todos os ícones

export interface IconProps {
  name: keyof typeof icons; // Garantir que 'name' seja uma chave válida do objeto 'icons'
  color?: string; // Omitindo para ser opcional
  size?: string;  // Omitindo para ser opcional
}

const Icon = ({ name, color = 'black', size = '24' }: IconProps) => {
  const LucideIcon = name ? LucideIcons[name] : null;

  // Verifica se o ícone existe
  if (!LucideIcon) {
    return <span>Ícone não encontrado</span>;
  }

  // Renderiza o ícone
  return <LucideIcon color={color} size={size} />;
};

export default Icon;
