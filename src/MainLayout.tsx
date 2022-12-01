import { useState } from "react";
import { useAppSelector } from "./store/hooks";
import { useMainLayoutStyle } from "./style";

export default function MainLayout() {
  const { value } = useAppSelector((state) => state.counter);
  const { MainLayoutSC } = useMainLayoutStyle();

  return <MainLayoutSC>Hello {value} !!!</MainLayoutSC>;
}
