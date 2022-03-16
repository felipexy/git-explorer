import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ForkRightIcon from "@mui/icons-material/ForkRight";
import StarIcon from "@mui/icons-material/Star";
import { yellow, red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vmin;
  color: white;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BoxConainter = styled.div`
  background-color: #3d4452;
  border-radius: 15px;
  padding: 1vmin;
`;

export default function Repos({ repository }) {
  const dispatch = useDispatch();
  const addFavorite = () => {
    setIsFavorite(!isFavorite);
    dispatch({ type: "CURRENT_FAVORITES", package: repository });
  };
  const stored = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    stored.map((repo) => {
      if (repo.name === repository.name) {
        setIsFavorite(true);
        return;
      }
    });
  });

  return (
    <ContainerColumn>
      <BoxConainter>
        <ContainerRow>
          {isFavorite ? (
            <FavoriteIcon
              sx={{ color: red[500] }}
              onClick={() => addFavorite()}
            />
          ) : (
            <FavoriteBorderIcon onClick={() => addFavorite()} />
          )}
          <h1>Title: {repository.name}</h1>
          <StarIcon sx={{ color: yellow[500] }} />
          <ForkRightIcon />
          <p>Description: {repository.description}</p>
        </ContainerRow>
      </BoxConainter>
    </ContainerColumn>
  );
}
