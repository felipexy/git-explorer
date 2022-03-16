import { useRef } from "react";
import LoadData from "../services/getApi";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { yellow, red } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vmin;
  color: white;
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
        id="SearchField"
        label="username"
        variant="filled"
        fullWidth
        inputRef={valueRef}
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          margin: "2vmin",
        }}
      />
      <SearchIcon
        fontSize="large"
        onClick={handleAPICall}
        style={{ marginRight: "2vmin" }}
      />
    </Container>
  );
}
