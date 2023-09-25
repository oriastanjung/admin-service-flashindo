

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center transition-opacity duration-300 bg-black bg-opacity-50`}
    >
      <div className="bg-white w-[90%] md:w-1/2 rounded-2xl p-4 max-h-[90%] overflow-y-scroll ">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 101.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
