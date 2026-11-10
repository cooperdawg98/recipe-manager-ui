import { Input, type InputProps } from "@base-ui/react/input";
import SearchIcon from "../../assets/icons/SearchIcon";

type SearchBarProps = {} & InputProps;

const SearchBar = ({ ref, ...props }: SearchBarProps) => {
  return (
    <div
      className={
        "flex items-center py-1 h-12 lg:w-200 w-full border rounded-md border-slate-300 bg-white px-2 text-sm any-pointer-coarse:text-base font-normal text-neutral-950 placeholder:text-neutral-500 focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-deep-saffron-500"
      }
    >
      {/* Start Adornment */}
      <SearchIcon />

      <Input
        ref={ref}
        className={"border-none outline-none bg-transparent flex-1 p-1"}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
