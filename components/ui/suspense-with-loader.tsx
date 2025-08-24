"use client";

import { Suspense, useState, useEffect } from "react";

function Loader({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-(--primary-color) w-25 lg:w-50 h-31.25 lg:h-62.5 flex flex-col items-end justify-end p-1">
        <div className="font-bold text-4xl lg:text-[64px]">А3</div>
        <div className="font-bold text-sm lg:text-2xl">ПРИНТ</div>
      </div>
      <div className="loader mx-auto mt-10 lg:mt-20" />
    </div>
  );
}

function Content({
  onLoaded,
  children,
}: {
  onLoaded: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);
  return <>{children}</>;
}

export function SuspenseWithLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Когда дочерний контент готов, запускаем плавное скрытие
  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setShowLoader(false), 700);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <>
      {showLoader && <Loader visible={loaded ? false : true} />}
      <Suspense fallback={null}>
        <Content onLoaded={() => setLoaded(true)}>{children}</Content>
      </Suspense>
    </>
  );
}
