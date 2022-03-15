import { useState, useEffect, useRef } from "react";
import LoadData from "../services/getApi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function LabelInfo() {
  const searchResultRedux = useSelector((state) => state.search);
  
  return (
    <ContainerRow>
      <ContainerColumn>
        <h1>Repositories</h1>
        <h3>{searchResultRedux.length} Results</h3>
      </ContainerColumn>
      <h1 style={{marginLeft: "63vw"}}>{} Favorites</h1>
    </ContainerRow>
  );
}
