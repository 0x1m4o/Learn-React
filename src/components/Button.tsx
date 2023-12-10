interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  handler: () => void;
}

const Button = ({ children, color = "primary", handler }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
