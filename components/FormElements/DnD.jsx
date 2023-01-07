import { useCallback, useEffect } from "react";

import { useDropzone } from "react-dropzone";

export const DnD = () => {
  const onDrop = useCallback((acceptedFiles) => {
    alert("Files accepted");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div
      {...getRootProps()}
      className={`w-full h-[100px] p-5 cursor-pointer transition-all duration-150 text-center ${
        isDragActive
          ? "bg-orange-50 dark:bg-slate-700"
          : "bg-[#F9F9F9]   dark:bg-[rgba(0,0,0,0.5)]"
      } font-700 focus:outline-0 rounded-md bg-[rgba(244, 81, 30, 0.01)] border border-dashed border-orange-500 flex justify-center items-center`}
    >
      <input
        {...getInputProps()}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
      />
      {isDragActive ? (
        <p>Drop files here ...</p>
      ) : (
        <p>
          Drag your images here, or{" "}
          <span className="text-orange-500">click to browse</span>
        </p>
      )}
    </div>
  );
};
