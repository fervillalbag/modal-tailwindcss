import React from "react";
import { HiOutlineX } from "react-icons/hi";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  isOpen,
}) => {
  const show: string = isOpen ? "block" : "hidden";

  return (
    <div className={`${show} fixed inset-0 w-full`}>
      <div
        className={`${show} fixed inset-0 bg-gray-900/75 w-full`}
        onClick={() => onClose(false)}
      />
      <div
        className={`${show} absolute mx-auto inset-0 max-w-xl w-full bg-white h-min top-[30vh] max-h-96 overflow-y-auto rounded-lg overflow-hidden ring-1 ring-black/5 z-20`}
      >
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <span className="block text-xl text-gray-500">{title}</span>
          <button
            type="button"
            className="w-10 h-10 text-xl rounded-lg grid place-items-center bg-gray-100 text-gray-700 focus:outline-gray-700 focus:outline-2"
            onClick={() => onClose(false)}
          >
            <HiOutlineX />
          </button>
        </div>
        <div className="px-4 py-6">{children}</div>
        <div className="flex justify-end items-center border-t border-gray-200 p-4">
          <button
            className="mr-2 py-2 px-6 text-gray-500"
            onClick={() => onClose(false)}
          >
            Cancel
          </button>
          <button className="bg-blue-600 py-3 px-8 text-white rounded-lg font-medium">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
