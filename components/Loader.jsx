import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center z-[99999] bg-mainWhite overflow-hidden">
      <Image
        src="/gear-spinner.svg"
        alt="Loading..."
        width={300}
        height={300}
      />
    </div>
  );
};

export default Loader;
