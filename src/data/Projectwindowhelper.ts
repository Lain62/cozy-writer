import { invoke } from "@tauri-apps/api";
import { createDir, BaseDirectory, FileEntry, readDir } from "@tauri-apps/api/fs";

export async function closeNewProjectWindow() {
  await invoke("close_new_project_window");
};

export async function createProject(name: string) {
  await createDir(`Cozy Writer/${name}`, { dir: BaseDirectory.Document, recursive: true });
};

export async function getProjects(): Promise<FileEntry[]> {
  return await readDir('Cozy Writer', { dir: BaseDirectory.Document, recursive: true })
};
