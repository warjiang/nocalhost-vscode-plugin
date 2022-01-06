import { DebugConfiguration } from "vscode";
import * as assert from "assert";

import { IDebugProvider } from "./IDebugProvider";
import logger, { loggerDebug } from "../../utils/logger";
import { SocketDebugClient } from "../SocketDebugClient";

export class PythonDebugProvider extends IDebugProvider {
  name: string = "python";
  requireExtensions: string[] = ["ms-python.python"];

  downloadUrl: string = "https://www.python.org/downloads/";
  commandName: string = this.name;

  getDebugConfiguration(
    name: string,
    port: number,
    remoteRoot: string
  ): DebugConfiguration {
    // https://code.visualstudio.com/docs/python/debugging
    return {
      name,
      type: "python",
      request: "attach",
      pathMappings: [
        {
          localRoot: "${workspaceFolder}",
          remoteRoot,
        },
      ],
      connect: {
        port,
        host: "127.0.0.1",
      },
    };
  }

  async waitDebuggerStart(port: number) {
    const debugClient = new SocketDebugClient(port);
    await debugClient.connect(2);

    const result = await debugClient.request("debugpySystemInfo", null, 2);

    assert(result.success);

    loggerDebug.debug("debugpy debugpySystemInfo", result);

    debugClient.destroy();
  }
}
