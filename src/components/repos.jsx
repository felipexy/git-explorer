import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
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
const Title = styled.h3`
  font-size: 1rem;
  width: 40%;
`;

export default function Repos({ repository }) {
  const dispatch = useDispatch();
  const addFavorite = () => {
    dispatch({ type: "CURRENT_FAVORITES", package: repository });
    setIsFavorite(!isFavorite);
  };
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(false);
    stored.map((repo) => {
      if (repo.id === repository.id) {
        setIsFavorite(true);
      }
    });
  });

  return (
    <ContainerColumn>
      <BoxConainter>
        <ContainerRow>
          {isFavorite ? (
            <FavoriteIcon
              sx={{ color: red[500], marginRight: "10px" }}
              onClick={() => addFavorite()}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ marginRight: "10px" }}
              onClick={() => addFavorite()}
            />
          )}
          <Title>{repository.name}</Title>
          <h2 style={{ marginLeft: "50px" }}>{repository.stargazers_count}</h2>
          <StarIcon
            sx={{ color: yellow[500], marginRight: "20px", marginLeft: "4px" }}
          />
          <h2>{repository.forks_count}</h2>
          <ForkRightIcon />
        </ContainerRow>
        {repository.description && <p>{repository.description}</p>}
      </BoxConainter>
    </ContainerColumn>
  );
}
