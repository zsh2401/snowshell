import { app, BrowserWindow } from "electron"
import createMainWindow from "./createMainWindow"
(async () => {
   
    await app.whenReady()
    
    createMainWindow()
    
    app.on("window-all-closed", () => {
        app.exit()
    })
    
})();