
import { TailSpin } from "react-loader-spinner";

function LoadingFullScreen() {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 bg-black bg-opacity-50`}
    >
      <div className="bg-white rounded-lg px-14 py-4  ">
        <TailSpin
          height="80"
          width="80"
          color="#51469F"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className="mt-4">Loading ....</p>
      </div>
    </div>
  );
}

export default LoadingFullScreen;
