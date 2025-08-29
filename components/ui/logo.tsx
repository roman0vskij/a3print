import Image from "next/image";

type TProps = {
  className?: string;
};

export function Logo({ className }: TProps) {
  return (
    <div
      className={`flex flex-col items-end justify-end bg-(--primary-color) min-w-11 w-11.25 lg:w-21 lg:min-w-21 h-14 lg:h-26.25 ${className}`}
    >
      <Image
        src="/logo/A3.svg"
        alt="A3"
        width={43}
        height={27}
        className="mr-[3.95px] lg:mr-[7.36px] mb-[1.31px] lg:mb-[2.45px] w-[22.66px] lg:w-[42.3px] h-[14.1px] lg:h-[26.31px]"
      />
      <Image
        src="/logo/print.svg"
        alt="print"
        width={44}
        height={11}
        className="mr-[3.9px] lg:mr-[7.28px] mb-[4.19px] lg:mb-[7.82px] w-[22.9px] lg:w-[44px] h-[6px] lg:h-[11px]"
      />
    </div>
  );
}
