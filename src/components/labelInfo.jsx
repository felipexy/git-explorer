import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import ModalContent from "./modalContent";

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vmin;
  color: white;
  font-size: 0.7rem;
`;
const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 86.7vw;
`;

const FavoritesLabel = styled.h1``;

export default function LabelInfo({state}) {
  const searchResultRedux = useSelector((state) => state.search);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    debugger
    setOpen(false);
    state(true);
  };
  return (
    <ContainerRow>
      <ContainerColumn>
        <h1>GIT Repositories</h1>
        {searchResultRedux.length > 0 && (
          <h2>{searchResultRedux.length} Results</h2>
        )}
      </ContainerColumn>

      <FavoriteIcon
        sx={{ color: red[500] }}
        style={{ marginTop: "1.2rem", marginRight: "5px" }}
      />
      <FavoritesLabel onClick={handleOpen}>Favorites</FavoritesLabel>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <ModalContent />
      </Modal>
    </ContainerRow>
  );
}
