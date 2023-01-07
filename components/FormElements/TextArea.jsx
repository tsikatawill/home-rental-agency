export const TextArea = ({ children, ...rest }) => {
  return (
    <textarea
      {...rest}
      className="w-full min-h-[150px] p-5 focus:outline-0 rounded-md bg-[#F9F9F9] border border-[#E6E6E6]  dark:border-slate-500 dark:bg-[rgba(0,0,0,0.5)]"
    >
      {children}
    </textarea>
  );
};
