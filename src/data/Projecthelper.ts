import { createDir, BaseDirectory, FileEntry, readDir, writeTextFile, readTextFile } from "@tauri-apps/api/fs";

export async function createProject(name: string) {
  await createDir(`Cozy Writer/${name}`, { dir: BaseDirectory.Document, recursive: true });
  await writeTextFile(`Cozy Writer/${name}/main.txt`, 'Insert Story Here', { dir: BaseDirectory.Document });
};

export async function getProjects(): Promise<FileEntry[]> {
  return await readDir('Cozy Writer', { dir: BaseDirectory.Document, recursive: true })
};

export async function getProject(name: string): Promise<FileEntry[]> {
  return await readDir(`Cozy Writer/${name}`, { dir: BaseDirectory.Document, recursive: true })
};

export async function getTextFile(path: string): Promise<string> {
  return await readTextFile(`${path}`)
}