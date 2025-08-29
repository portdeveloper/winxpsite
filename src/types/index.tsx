import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  message: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
    currentZIndex: number;
  };
  system: {
    backactive: boolean;
  };
};

export enum App {
  GAMEPORTAL,
  ERROR,
  INFO,
  HELP,
  WARNING,
}

export type Game = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  authorName: string;
  twitter: string;
  github: string;
  featured: boolean;
};