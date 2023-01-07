export const Select = ({ children, ...rest }) => {
  return (
    <select
      className="w-full h-[50px] px-5 focus:outline-0 rounded-md bg-[#F9F9F9] border border-[#E6E6E6]"
      {...rest}
    >
      {children}
    </select>
  );
};
