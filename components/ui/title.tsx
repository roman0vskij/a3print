"use client";

type TProps = {
  title: string;
  w?: string;
};

export function Title({ title, w = "w-full" }: TProps) {
  return (
    <h2
      className={`${w} font-nunito-sans text-center text-4xl md:text-5xl lg:text-6xl font-medium leading-[129%]`}
      key={title}
    >
      {title}
    </h2>
  );
}
