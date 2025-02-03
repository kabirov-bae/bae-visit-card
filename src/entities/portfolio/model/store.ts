import { type CardProps } from "./types";
import picF from "@/shared/ui/Assets/Images/1.png";
import picS from "@/shared/ui/Assets/Images/2.png";
import picT from "@/shared/ui/Assets/Images/3.png";

export const Cards: CardProps[] = [
  {
    name: "Exemple v1",
    image: picF,
    descr:
      "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invidunt ut labore et dolore magna aliqu sapien et dolore magna aliqu sapien et dolore magna aliqu",
    stack: ["react"],
  },
  {
    name: "Exemple v2",
    image: picS,
    descr:
      "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invidunt ut labore et dolore magna aliqu sapien et dolore magna aliqu sapien et dolore magna aliqu",
    stack: ["vue"],
  },
  {
    name: "Exemple v3",
    image: picT,
    descr:
      "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invidunt ut labore et dolore magna aliqu sapien et dolore magna aliqu sapien et dolore magna aliqu",
    stack: ['php', 'Gulp.js'],
  },
];
