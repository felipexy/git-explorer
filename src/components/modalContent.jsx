import Repos from "./repos";
import styled from "styled-components";
import { useState } from "react";

function ModalContent() {
  const favoritesLocalStorage =
    JSON.parse(localStorage.getItem("favorites")) || [];
  const ModalTitle = styled.h1`
    color: white;
    text-align: center;
  `;
  const [update, setUpdate] = useState(false);

  return (
    <div onClick={() => setUpdate(!update)}>
      <ModalTitle>
        Favorite Repositories: {favoritesLocalStorage.length}
      </ModalTitle>
      {favoritesLocalStorage.length > 0 &&
        favoritesLocalStorage.map((repo, index) => {
          return <Repos key={index} repository={repo} />;
        })}
    </div>
  );
}

export default ModalContent;
