import { useSelector } from "react-redux";
import Search from "./components/search";
import LabelInfo from "./components/labelInfo";
import Repos from "./components/repos";

function App() {
  const searchResultRedux = useSelector((state) => state.search);

  return (
    <div>
      <Search />
      <LabelInfo />
      {searchResultRedux.length > 0 &&
        searchResultRedux.map((repo) => {
          return <Repos repository={repo} />;
        })}
    </div>
  );
}

export default App;
