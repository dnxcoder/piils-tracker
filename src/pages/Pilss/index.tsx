import dayjs from "dayjs";
//import IPillsDTO from "../../DTOS/pills";
import { Container, Row, Name, Content, ButtonPlus } from "./styled";
import { useLocation } from "react-router-dom";
import IPillsDTO from "../../DTOS/pills";
import { useCallback, useEffect, useState } from "react";

function Pills() {
  const location = useLocation();
  const { state } = location;
  const [loading, setLoading] = useState(true);
  const [pills, setPills] = useState({} as IPillsDTO);

  const { name } = state as IPillsDTO;

  console.log(state);

  useEffect(() => {
    const itemsStorage = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    ) as IPillsDTO[];
    const itemIndex = itemsStorage.findIndex((item) => {
      return (
        dayjs(item.name).format("MM/DD/YYYY") ===
        dayjs(name).format("MM/DD/YYYY")
      );
    });

    setPills(itemsStorage[itemIndex] as IPillsDTO);

    setLoading(false);
  }, [""]);

  const handleAddCosamin = useCallback(() => {
    const itemsStorage = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    ) as IPillsDTO[];

    const itemIndex = itemsStorage.findIndex((item) => {
      return (
        dayjs(item.name).format("MM/DD/YYYY") ===
        dayjs(name).format("MM/DD/YYYY")
      );
    });

    itemsStorage[itemIndex].cosaminAsu.push(new Date());

    //storaging pill in the localstorage
    localStorage.setItem("@pillsTracker", JSON.stringify(itemsStorage));
    setPills(itemsStorage[itemIndex]);
  }, []);

  const handleRemoveCosamin = useCallback(() => {
    const itemsStorage = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    ) as IPillsDTO[];

    const itemIndex = itemsStorage.findIndex((item) => {
      return (
        dayjs(item.name).format("MM/DD/YYYY") ===
        dayjs(name).format("MM/DD/YYYY")
      );
    });

    if (itemIndex !== -1 && itemsStorage[itemIndex].cosaminAsu.length > 0) {
      const confirmRemove = window.confirm(
        "Tem certeza de que deseja retirar o último registro de cosaminAsu?"
      );
      if (confirmRemove) {
        itemsStorage[itemIndex].cosaminAsu.pop(); // Remove o último registro de cosaminAsu

        // Atualiza o local storage com as mudanças
        localStorage.setItem("@pillsTracker", JSON.stringify(itemsStorage));
        setPills(itemsStorage[itemIndex]); // Talvez você queira atualizar o estado com o item modificado
      }
    }
  }, []);

  const handleAddColagen = useCallback(() => {
    const itemsStorage = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    ) as IPillsDTO[];

    const itemIndex = itemsStorage.findIndex((item) => {
      return (
        dayjs(item.name).format("MM/DD/YYYY") ===
        dayjs(name).format("MM/DD/YYYY")
      );
    });

    itemsStorage[itemIndex].colagenTypeII = new Date();

    //storaging pill in the localstorage
    localStorage.setItem("@pillsTracker", JSON.stringify(itemsStorage));
    setPills(itemsStorage[itemIndex]);
  }, []);

  const handleRemoveColagen = useCallback(() => {
    const itemsStorage = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    ) as IPillsDTO[];

    const itemIndex = itemsStorage.findIndex((item) => {
      return (
        dayjs(item.name).format("MM/DD/YYYY") ===
        dayjs(name).format("MM/DD/YYYY")
      );
    });

    if (itemIndex !== -1) {
      itemsStorage[itemIndex].colagenTypeII = null; // Define como null

      // Atualiza o local storage com as mudanças
      localStorage.setItem("@pillsTracker", JSON.stringify(itemsStorage));
      setPills(itemsStorage[itemIndex]); // Talvez você queira atualizar o estado com o item modificado
    }
  }, []);

  return !loading ? (
    <Container>
      <Content>
        <Row>
          <Name>Medicine Date: {dayjs(pills.name).format("MM/DD/YYYY")}</Name>
        </Row>
        <Row>
          <Name>Cosamin ASU: {pills.cosaminAsu.map(() => `💊`)}</Name>
          <ButtonPlus onClick={handleAddCosamin}>➕</ButtonPlus>
          <ButtonPlus onClick={handleRemoveCosamin}>➖</ButtonPlus>
        </Row>
        <Row>
          <Name>Colagen Type II: {pills.colagenTypeII ? "💊" : ""}</Name>
          <ButtonPlus onClick={handleAddColagen}>➕</ButtonPlus>
          <ButtonPlus onClick={handleRemoveColagen}>➖</ButtonPlus>
        </Row>
      </Content>
    </Container>
  ) : (
    <></>
  );
}

export default Pills;
