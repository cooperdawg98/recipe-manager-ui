import { NavLink } from "react-router";
import Counter from "../counter/counter";

const recipePage = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col bg-amber-50 w-md h-80 rounded-sm">
        <div className="p-3 divide-y divide-gray-600">
          <div className="flex flex-col p-2 gap-2">
            <h1 className="text-gray-600">Test Recipe Page</h1>
            <NavLink
              className="text-blue-400 hover:text-amber-600 p-1 border rounded-md w-40"
              to={"/"}
            >
              Go Home
            </NavLink>
          </div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default recipePage;
