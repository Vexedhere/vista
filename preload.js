const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("vista", {
  version: "0.1.0"
});
