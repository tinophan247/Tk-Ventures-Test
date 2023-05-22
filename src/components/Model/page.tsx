"use client";
import React, { FunctionComponent } from "react";

interface ModalProps {
  onClose: () => void;
  isVisible?: boolean;
  children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
  onClose,
  isVisible,
  children,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[40%] flex flex-col">
        <div className="bg-white p-2 rounded">
          <div className="flex justify-end">
            <button className="text-xl font-bold w-10 h-10 border-none hover:text-red-500" onClick={() => onClose()}>
              X
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
