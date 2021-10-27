import { EnvironmentContext } from "@jest/environment";
import { ProjectConfig } from "@jest/types/build/Config";
import JSDOMEnvironment from "jest-environment-jsdom";

class CustomEnvironment extends JSDOMEnvironment {
  constructor(config: ProjectConfig, options?: EnvironmentContext) {
    super(
      {
        ...config,
        // testURL: "http://example.com",
      },
      options
    );
  }
  async setup() {
    await super.setup();
    this.dom?.cookieJar.setCookie("local00=L00", "http://localhost");
    this.dom?.cookieJar.setCookie("local44=L44", "http://localhost:4444");
    this.dom?.cookieJar.setCookie("local55=L55", "http://localhost:5555");
    this.dom?.cookieJar.setCookie("local66=L66", "http://localhost:6666");
    this.dom?.cookieJar.setCookie("example=example", "https://example.com", {
      secure: true,
    });
  }

  // async teardown() {
  //   this.global.jsdom = destroyGlobalObject();
  //   await super.teardown();
  // }
}

export default CustomEnvironment;
