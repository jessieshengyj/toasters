import { ReactComponent as ToastingToastSvg } from "../icons/toasting-toast.svg";
import "./ToastingPage.css";

function ToastingPage() {
  return (
    <div className="toasting-page flex flex-col gap-8 p-16">
      <div className="toasting-toast-icon w-full flex items-center justify-center">
        <ToastingToastSvg />
      </div>
      <span className="toast-font font-semibold text-4xl">Still Toasting... <br/> Please come back later</span>
    </div>
  );
}

export default ToastingPage;
