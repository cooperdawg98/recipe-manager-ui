import { NavLink } from "react-router";

const CatchAll = () => {
  return (
    <div className="flex w-full h-full justify-center items-center bg-amber-50">
      <div className="flex flex-col bg-amber-50 w-md h-40 rounded-sm items-center">
        <div className="flex flex-col p-2 justify-between h-full">
          <h1 className="text-gray-600">Page Not Found</h1>
          <p className="text-gray-600 text-center"> :(</p>
          <NavLink
            className="text-blue-400 hover:text-amber-600 p-1 border rounded-md w-40"
            to={"/"}
          >
            Go Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CatchAll;
