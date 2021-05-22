import { BrowserWindow } from "electron";

export default function (): BrowserWindow {
    const win = new BrowserWindow({
        minHeight: 600,
        minWidth: 800,
    })
    loadMainApp(win)
    return win;
}
function loadMainApp(win: BrowserWindow) {
    if (process.env.NODE_ENV === "production") {
        win.loadFile("./renderer/index.html")
    } else {
        win.loadURL("http://localhost:10310")
    }
}