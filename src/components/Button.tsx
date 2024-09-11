type TButtonProps = {
  onClick?: () => void;
  text: string;
  className?: string; // Сделать className необязательным
  disabled?: boolean;
};

const Button: React.FC<TButtonProps> = ({
  onClick,
  text,
  className = '',
  disabled = false,
}: TButtonProps): JSX.Element => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
