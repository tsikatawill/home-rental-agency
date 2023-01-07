export const Select = ({ children, ...rest }) => {
  return (
    <select
      className="w-full h-[50px] px-5 focus:outline-0 rounded-md bg-[#F9F9F9] border border-[#E6E6E6]  dark:border-slate-500 dark:bg-[rgba(0,0,0,0.5)]"
      {...rest}
    >
      {children}
    </select>
  );
};
