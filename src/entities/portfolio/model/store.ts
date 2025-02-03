import { type CardProps } from "./types";
import picF from "@/shared/ui/Assets/Images/1.png";
import picS from "@/shared/ui/Assets/Images/2.png";
import picT from "@/shared/ui/Assets/Images/3.png";

export const Cards: CardProps[] = [
  {
    name: "Exemple v1",
    image: picF,
    stack: ["ex", "323", "vue"],
  },
  {
    name: "Exemple v2",
    image: picS,
    stack: ["ex", "323", "vue"],
  },
  {
    name: "Exemple v3",
    image: picT,
    stack: ["ex", "323", "vue"],
  },
];
