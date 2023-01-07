export const PaginationButton = ({
  handleClick,
  children,
  current,
  disabled,
  number,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`p-5 border border-[#bdbdbd] disabled:bg-[#F3F3F3] disabled:text-[#bdbdbd] disabled:cursor-not-allowed  ${
        current
          ? "bg-orange-500 text-white"
          : "text-orange-500 dark:text-white dark:bg-slate-500 bg-white"
      } `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
