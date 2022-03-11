require("./base.spec");

const { installManifestLocal } = require("./install");

const { portForwardTests } = require("./portForward.test");
const { devModeTests } = require("./devMode.test");
const { viewLogTests } = require("./viewLog.test");
const { editConfigTests } = require("./editConfig.test");
const { remoteRunTests } = require("./remoteRun.test");
const { applyManifestTests } = require("./applyManifest.test");

it("install manifest", installManifestLocal);

describe("portForward", portForwardTests);
describe("devMode", devModeTests);
describe("viewLog", viewLogTests);
describe("editConfig", editConfigTests);
// remote run after edit config hotreload
describe("remoteRun", remoteRunTests);
describe("applyManifest", applyManifestTests);
