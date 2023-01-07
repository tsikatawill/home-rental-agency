export const Input = ({ ...rest }) => {
  return (
    <input
      className="w-full h-[50px] focus:outline-0 px-5 rounded-md bg-[#F9F9F9] border border-[#E6E6E6] dark:border-slate-500 dark:bg-[rgba(0,0,0,0.5)]"
      {...rest}
    />
  );
};
