import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
import nProgress from "nprogress"


/**
 * entry point
 */
main()

async function main() {
    
    nProgress.start()

    await downloadAndRunApplication()

    nProgress.done()
}

async function downloadAndRunApplication() {
    const app = await import("./App");
    app.default();
}