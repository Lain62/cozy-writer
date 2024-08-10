import Fontwindow from "./Fontwindow";
import Newprojectwindow from "./Newprojectwindow";
import { listen } from "@tauri-apps/api/event";
import { PopupWindowState } from "../data/Popuphelper";
import { useState, useEffect } from "react";

function Popup() {
  const [windowState, setWindowState] = useState<PopupWindowState>(PopupWindowState.None);

  const listenFontWindowOpen = async () => await listen('open_font_window', () => {
    setWindowState(PopupWindowState.FontSettings)
  });
  const listenFontWindowClose = async () => await listen('close_font_window', () => {
    setWindowState(PopupWindowState.None)
  });

  const listenNewProjectWindowOpen = async () => await listen('open_new_project_window', () => {
    setWindowState(PopupWindowState.NewProject)
  });
  const listenNewProjectWindowClose = async () => await listen('close_new_project_window', () => {
    setWindowState(PopupWindowState.None)
  });

  useEffect(() => {
    listenFontWindowOpen()
    listenFontWindowClose()
    listenNewProjectWindowOpen()
    listenNewProjectWindowClose()
  }, [])

  switch (windowState) {
    case PopupWindowState.None:
      return (
        <div />
      )
    case PopupWindowState.FontSettings:
      return (
        <Fontwindow />
      )
    case PopupWindowState.NewProject:
      return (
        <Newprojectwindow />
      )
    default:
      return (
        <div />
      )
  }
};

export default Popup;
