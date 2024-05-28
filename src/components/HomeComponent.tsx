import React, { useState, useRef } from "react";
import { Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import styles from '../../public/css/home.module.css';
import { Spacer } from "./Spacer";
import PaginationDesktop from "./PaginationDesktop";
import PaginationMobile from "./PaginationMobile";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();
  const [selected, setSelected] = useState(0);
  const cardListRef = useRef<HTMLDivElement>(null);

  const onClickNavigate = (left: boolean) => {
    const cardList = cardListRef.current;
    const card = cardList?.firstElementChild as HTMLElement;
    const cardSize = (card?.clientWidth ?? 0) + 24;
    const scrollPosition = cardList?.scrollLeft ?? 0;

    cardList?.scrollTo({ left: scrollPosition + (left ? -cardSize : cardSize), behavior: 'smooth' });
  };

  const onClickMobile = (index: number) => {
    const cardList = cardListRef.current;
    const card = cardList?.firstElementChild as HTMLElement;
    const cardSize = (card?.clientWidth ?? 0) + 24;

    cardList?.scrollTo({ left: index * cardSize, behavior: 'smooth' });
    setSelected(index);
  };

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} ref={cardListRef} id="card-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <PaginationDesktop onClickLeft={() => onClickNavigate(true)} onClickRight={() => onClickNavigate(false)} />
      <PaginationMobile selected={selected} onClick={onClickMobile} total={cars.length} />
    </div>
  );
};
