import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./ColorsGroup.module.scss";
import { T22 } from "@/components/Texts/Texts";
import Flex from "@/components/Flex/Flex";

// colors : #1C1D1D #FE7B7A #FEC673 #85FFB4 #71F7FF #6A7BFF #473834 #73667A

interface colorType {
  color: string;
  selected: boolean;
}

function ColorsGroup() {
  const [colors, setColors] = React.useState<colorType[]>([
    { color: "#1C1D1D", selected: false },
    { color: "#FE7B7A", selected: false },
    { color: "#FEC673", selected: false },
    { color: "#85FFB4", selected: false },
    { color: "#71F7FF", selected: false },
    { color: "#6A7BFF", selected: false },
    { color: "#473834", selected: false },
    { color: "#73667A", selected: false },
  ]);

  const handleColorClick = (color: string) => {
    const newColors = colors.map((c) => {
      if (c.color === color) {
        return { ...c, selected: !c.selected };
      }
      return c;
    });

    setColors(newColors);
  };

  return (
    <div className={styles.main}>
      <T22 weight={600}>Colors</T22>
      <Flex flex="between">
        {colors.map((color) => (
          <div
            key={color.color}
            className={styles.color}
            style={{ backgroundColor: color.color }}
            onClick={() => handleColorClick(color.color)}
          >
            {color.selected && <FaCheck className={styles.check} />}
          </div>
        ))}
      </Flex>
    </div>
  );
}

export default ColorsGroup;
