"use client";

const Results = () => {
  return (
    <div className="flex flex-col h-full items-center justify-around bg-gradient-to-b from-[#6643FE] to-[#312BE8] rounded-tl-none rounded-tr-none rounded-bl-[20px] rounded-br-[20px] md:rounded-[20px] px-5">
      <p className="text-[#BEC4FD] pt-3 md:p-0">Your Result</p>
      <div className="bg-gradient-to-b from-[#4B25CC]  to-[#4A37F3] flex flex-col items-center justify-center w-[170px] h-[170px] rounded-full">
        <p className="text-[56px] font-bold text-white">76</p>
        <p className="text-[16px] text-[#7365F7]">of 100</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[24px] text-white font-bold  mb-2">Greate</p>
        <p className=" text-center px-0 pb-3 text-[#bec4fd]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Results;
