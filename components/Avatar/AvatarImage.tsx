export type AvatarImageProps = {
  src: string;
  altDescription: string;
};

const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  return (
    <div>
      {/* Utiliza `img` para compatibilidade independente do Next.js */}
      <img
        src={src || ''}
        alt={altDescription}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;
