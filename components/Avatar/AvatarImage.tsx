export type AvatarImageProps = {
  src: string;
  altDescription: string;
  classNames?: string;
};

const AvatarImage = ({ src, altDescription, classNames }: AvatarImageProps) => {
  return (
    <div>
      {/* Utiliza `img` para compatibilidade independente do Next.js */}
      <img
        src={src || ''}
        alt={altDescription}
        className={classNames}
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;
