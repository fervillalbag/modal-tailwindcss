import type { NextPage } from "next";
import { useState } from "react";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[280px,1fr] h-screen">
      <div className="bg-white"></div>
      <div className="bg-blue-200 p-5">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Abrir modal
        </button>
      </div>

      <Modal title="Header title" isOpen={isOpen} onClose={setIsOpen}>
        Hello from
      </Modal>
    </div>
  );
};

export default Home;
