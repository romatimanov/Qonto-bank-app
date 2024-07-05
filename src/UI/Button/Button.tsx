import "./button.css";

type ButtonProps = {
  text: string;
  style?: string;
};

export function Button({ text, style }: ButtonProps): JSX.Element {
  return <button className={`button ${style}`}>{text}</button>;
}
