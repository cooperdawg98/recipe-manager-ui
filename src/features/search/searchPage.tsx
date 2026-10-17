import { NavLink, useSearchParams } from "react-router";
import Counter from "../counter/counter";
import GeneralInput from "../../components/GeneralInput";

const searchPage = () => {
  const [searchParams] = useSearchParams();

  console.log("search param tags: ", searchParams.getAll("tags"));
  console.log("search params createdBy: ", searchParams.get("createdBy"));
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col bg-mint-leaf-300 w-full h-full rounded-sm">
        <div className="p-3 divide-y divide-gray-600">
          <div className="flex flex-col p-2 gap-2">
            <h1 className="text-gray-600 ">Search Page</h1>
            <NavLink
              className="text-blue-400 hover:text-amber-600 p-1 border rounded-md w-40"
              to={"/"}
            >
              Go Home
            </NavLink>
          </div>
          <Counter />
          <div className="dark:bg-black p-8">
            <GeneralInput placeholder="Input here..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchPage;
