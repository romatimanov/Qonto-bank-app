import "./button.css";

type ButtonProps = {
  text: string;
  style?: string;
  onClick?: () => void;
};

export function Button({ text, style, onClick }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={`button ${style}`}>
      {text}
    </button>
  );
}
