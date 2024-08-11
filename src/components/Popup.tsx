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

  const listenNewProjectWindowOpen = async () => await listen('open_new_project_window', () => {
    setWindowState(PopupWindowState.NewProject)
  });
  const listenPopupClose = async () => await listen('close_popup', () => {
    setWindowState(PopupWindowState.None)
  });

  useEffect(() => {
    listenFontWindowOpen()
    listenNewProjectWindowOpen()
    listenPopupClose()
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
