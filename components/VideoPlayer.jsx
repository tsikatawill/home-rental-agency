import dynamic from "next/dynamic";

export const VideoPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading video...</p>,
});
