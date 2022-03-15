import { useState, useEffect, useRef } from "react";
import LoadData from "../services/getApi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Search() {
  const dispatch = useDispatch();
  const valueRef = useRef("");

  async function handleAPICall() {
    const apiCall = await LoadData(valueRef.current.value);
    dispatch({ type: "CURRENT_SEARCH", package: apiCall });
  }

  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="username"
        variant="outlined"
        inputRef={valueRef}
      />
      <SearchIcon fontSize="large" onClick={handleAPICall} />
    </Container>
  );
}
