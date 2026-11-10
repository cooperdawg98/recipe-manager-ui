import { useSearchParams } from "react-router";
import SearchBar from "../../components/search/SearchBar";

const searchPage = () => {
  const [searchParams] = useSearchParams();

  console.log("search param tags: ", searchParams.getAll("tags"));
  console.log("search params createdBy: ", searchParams.get("createdBy"));
  return (
    <div className="flex w-screen h-full justify-start items-center p-4 pb-40">
      <div id="search container" className="flex flex-col w-full h-full">
        <div id="search bar" className="w-full">
          <SearchBar />
        </div>
        <div id="search results" className="h-150"></div>
      </div>
    </div>
  );
};

export default searchPage;
