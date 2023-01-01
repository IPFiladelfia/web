import clsx from "clsx";
import { Copy } from "phosphor-react";
import React from "react";
import { toast } from "react-toastify";

const CopyIcon = () => <Copy className="opacity-25" size={20} />;

interface ICopyField {
  children: React.ReactNode;
  value: string;
  toastMessage: string;
  className?: string;
}

export const CopyField: React.FC<ICopyField> = ({
  children,
  value,
  toastMessage,
  className,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success(toastMessage);
  };

  return (
    <span
      onClick={handleCopy}
      className={clsx(className, "flex gap-2 hover:cursor-pointer")}
    >
      {children} <CopyIcon />
    </span>
  );
};
