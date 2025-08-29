import {
  App,
  Tab,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import solitaire from "../../assets/solitaire.png";

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Game Portal",
      message: "",
      Icon: solitaire,
      isMinimized: false,
      zIndex: 0,
      program: App.GAMEPORTAL,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    3,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);