export const TextArea = ({ children, ...rest }) => {
  return (
    <textarea
      {...rest}
      className="w-full min-h-[150px] p-5 focus:outline-0 rounded-md bg-[#F9F9F9] border border-[#E6E6E6]"
    >
      {children}
    </textarea>
  );
};
