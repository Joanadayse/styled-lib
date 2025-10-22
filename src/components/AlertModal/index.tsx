import type { ReactNode } from "react";
import { Button } from "../Button";


interface AlertModalProps {
  icon?: ReactNode;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const AlertModal = ({
  icon,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  className = "",
}: AlertModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
<div
  className={`bg-[#FDFDFF] rounded-[12px] p-[32px] w-[369px] max-w-full shadow-[3px_0px_28.6px_-23px_#7C9BC647] flex flex-col items-center gap-[24px] ${className}`}
>

        {icon && <div className="w-[146px] h-[146px] flex items-center justify-center">{icon}</div>}

        <h2 className="font-inter font-bold text-[24px] leading-[120%] text-[#314158] text-center">
          {title}
        </h2>

        {message && (
          <p className="text-[#45556C] text-[16px] leading-[140%] text-center">{message}</p>
        )}

        <div className="flex gap-[16px] w-full justify-center mt-[8px]">

          {/* Confirm button (primary) */}
          {confirmText && onConfirm && (
            <Button
              onClick={onConfirm}
              variant={cancelText ? "secondary" : "primary"} // se só tiver 1 botão, deixa como secondary
              width={150}
              height={48}
            >
              {confirmText}
            </Button>
          )}



          {/* Cancel button (secondary) */}
          {cancelText && onCancel && (
            <Button
              onClick={onCancel}
              variant="primary"
              width={150}
              height={48}
            >
              {cancelText}
            </Button>
          )}

        </div>
      </div>
    </div>
  );
};
