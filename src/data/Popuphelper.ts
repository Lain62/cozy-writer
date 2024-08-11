import { invoke } from "@tauri-apps/api";

export enum PopupWindowState {
  None,
  FontSettings,
  NewProject
}

export async function closePopup() {
  await invoke("close_popup");
};
