import "./App.css";
import OnigiriIcon from "./assets/icons/OnigiriIcon";

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // Example of fetching data from flask backend
  // useEffect(() => {
  //   fetch("/api/time")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentTime(data.time);
  //     });
  // }, []);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col w-2xl h-full justify-start items-center py-20">
        <h1 className="text-gray-600">Recipe Manager</h1>
        <p className="text-center pb-10">
          This a test page, don't mind anything here.
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <OnigiriIcon />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <OnigiriIcon />
          <OnigiriIcon />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <OnigiriIcon />
          <OnigiriIcon />
          <OnigiriIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
