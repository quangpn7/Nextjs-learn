import React, { useCallback, useState } from "react";
import { forEach } from "lodash";

type Props = {};
type StickerType = {
  id: number;
  value: number;
  qty: number;
};

const Sticker = (props: Props) => {
  let dataSticker: StickerType[] = [
    { id: 1, value: 10, qty: 0 },
    { id: 2, value: 20, qty: 0 },
    { id: 3, value: 30, qty: 0 },
    { id: 4, value: 40, qty: 0 },
    { id: 5, value: 50, qty: 0 },
    { id: 6, value: 60, qty: 0 },
  ];
  const [sticker, setSticker] = useState<StickerType[]>(dataSticker);
  const [total, setTotal] = useState<number>(0);
  const handleClickSticker = useCallback(
    (item: StickerType) => {
      const donated = [];
      const newArray = [...sticker];

      const addingData = forEach(newArray, (subItem: StickerType) => {
        if (item.id === subItem.id) {
          subItem.qty += 1;
        }
      });
      //   const addingData = newArray.forEach((subItem: StickerType) => {
      //     if (item.id === subItem.id) {
      //       subItem.qty += 1;
      //     }
      //   });

      forEach(addingData, (value: StickerType) => {
        if (value.qty > 0) {
          donated.push({
            id: value.id,
            qty: value.qty,
          });
        }
      });
      setTotal((prevTotal) => (prevTotal += item.value));
      setSticker(addingData);
    },
    [sticker]
  );
  console.log("Render");
  return (
    <>
      <div
        className="sticker row gy-4"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {sticker.map((item: StickerType, index: number) => {
          return (
            <div className="col-4" key={index}>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleClickSticker(item);
                }}
              >
                {item.id}
              </button>
              <span>Clicked Count: {item.qty}</span>
            </div>
          );
        })}
      </div>
      <div className="text-center display-4">Total: {total}</div>
    </>
  );
};

export default Sticker;
