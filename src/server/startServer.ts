import createDebug from "debug";
import { app } from "./index.js";

const debug = createDebug("onepath:server:startServer");

const startServer = async (port: number) => {
  app.listen(port);
  debug("Hola");
};

export default startServer;
