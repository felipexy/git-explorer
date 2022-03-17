import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "./components/search";
import LabelInfo from "./components/labelInfo";
import Repos from "./components/repos";
import styled from "styled-components";

function App() {
  const searchResultRedux = useSelector((state) => state.search);
  const [update, setUpdate] = useState(false);
  const Container = styled.div``;

  return (
    <Container>
      <Search />
      <LabelInfo/>
      <div onClick={() => setUpdate(!update)}>
        {searchResultRedux.length > 0 &&
          searchResultRedux.map((repo, index) => {
            return <Repos key={index} repository={repo} />;
          })}
      </div>
    </Container>
  );
}

export default App;
