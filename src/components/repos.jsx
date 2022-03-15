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

export default function Repos() {
  const searchResultRedux = useSelector((state) => state.search);
  
  return (
    <ContainerColumn>
        <ContainerRow>
            <h1>Title</h1>
            <h2>stars</h2>
            <h2>forks</h2>
            <p>description</p>
        </ContainerRow>
    </ContainerColumn>
  );
}
