import React from "react";
import { Text } from "vcc-ui";
import { useCars } from "../rooks/useCars";
import { CarCard } from "./CarCard";

import styles from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();
  
  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car => <CarCard key={car.id} car={car}/>)}
      </div>
      {/* <PaginationDesktop onClickLeft={() => onClickNavigate(true)} onClickRight={() => onClickNavigate(false)}/>
      <PaginationMobile selected={selected} onClick={onClickMobile} total={cars.length}></PaginationMobile> */}
    </div>
  );
};
