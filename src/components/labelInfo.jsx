import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vmin;
  color: white;
`;
const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vmin;
  float: left;
`;

const FavoritesLabel = styled.h1``;

export default function LabelInfo() {
  const searchResultRedux = useSelector((state) => state.search);

  return (
    <ContainerRow>
      <ContainerColumn>
        <h1>GIT Repositories</h1>
        {searchResultRedux.length > 0 && (
          <h3>{searchResultRedux.length} Results</h3>
        )}
      </ContainerColumn>

      <FavoriteIcon
        sx={{ color: red[500] }}
        style={{ marginTop: "34px", marginRight: "5px" }}
      />
      <FavoritesLabel>See Favorites</FavoritesLabel>
    </ContainerRow>
  );
}
