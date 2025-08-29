import Head from "next/head";
import { Inter } from "next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import solitare from "../../assets/solitaire.png";
import internet from "../../assets/internet.png";
import WinForm from "components/WinForm/WinForm";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MsgBox from "components/MsgBox/MsgBox";
import GamePortal from "@/programs/GamePortal";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const handleOpenMonadGames = () => {
    window.open("https://monad-games-id-site.vercel.app/", "_blank", "noopener,noreferrer");
  };


  return (
    <>
      <Head>
        <title>Retro Game Portal - Windows XP Gaming Hub</title>
        <meta name="description" content="Discover and play classic retro games with authentic Windows XP styling. Your nostalgic gaming destination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={() => handleRunApp(0)}
            title="Game Portal"
            img={solitare}
          />
          <DesktopIcon
            appID={2}
            doubleClick={handleOpenMonadGames}
            title="Monad Games ID"
            img={internet}
          />
          {Tabs.map((tab) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.GAMEPORTAL ? (
                  <GamePortal id={tab.id.toString()} />
                ) : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
