import { useCallback, useEffect, useState } from "react";
import { ButtonDate, DateLabel, FloatButton, Main } from "./styles";
import { FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import IPillsDTO from "../../DTOS/pills";
import { useNavigate } from "react-router-dom";

function Dates() {
  const navigate = useNavigate();

  const [dateList, setDateList] = useState<IPillsDTO[]>([]);

  useEffect(() => {
    //verify if something exists in the localstorage, if not create then
    if (!localStorage.getItem("@pillsTracker")) {
      localStorage.setItem(
        "@pillsTracker",
        JSON.stringify([
          { name: new Date(), cosaminAsu: [], colagenTypeII: null },
        ])
      );
    }

    setDateList(JSON.parse(localStorage.getItem("@pillsTracker") as string));
  }, []);

  const handleAddDate = useCallback(() => {
    const getItems: IPillsDTO[] = JSON.parse(
      localStorage.getItem("@pillsTracker") as string
    );

    //Verifying if Date was already Created
    if (
      dayjs(getItems[getItems.length - 1].name).format("MM/DD/YYYY") ===
      dayjs(new Date()).format("MM/DD/YYYY")
    ) {
      return;
    }

    getItems.push({
      name: new Date(),
      cosaminAsu: [],
      colagenTypeII: null,
    });

    setDateList(getItems);

    localStorage.setItem("@pillsTracker", JSON.stringify(getItems));
  }, []);

  const handleGoToPage = useCallback((data: IPillsDTO) => {
    navigate("/pills", { state: data });
  }, []);

  return (
    <Main>
      {dateList.map((item: IPillsDTO) => {
        return (
          <ButtonDate
            onClick={() => {
              handleGoToPage(item);
            }}
          >
            <DateLabel>{`${dayjs(item.name).format("MM/DD/YYYY")}`}</DateLabel>
          </ButtonDate>
        );
      })}
      <FloatButton onClick={handleAddDate}>
        <FaPlus size={32} />
      </FloatButton>
    </Main>
  );
}

export { Dates };
