import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message: string;
}

export const showToast = ({ message }: ToastProps) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};
