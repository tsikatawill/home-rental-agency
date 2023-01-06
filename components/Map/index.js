import dynamic from "next/dynamic";

export const Map = dynamic(
  () => {
    return import("./Map");
  },
  {
    ssr: false,
    loading: () => (
      <div className="grid place-content-center text-3xl font-bold h-full w-full">
        Map
      </div>
    ),
  }
);
