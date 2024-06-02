// Use some server-only API
import { readFile } from "fs/promises";

let i = 0;
export async function onHello({ name }: { name: string }) {
  i++;
  const message = "Welcome " + name;
  return {
    requestId: i,
    message,
    fileContent: await readFile("./data/data.txt", "utf-8"),
  };
}
