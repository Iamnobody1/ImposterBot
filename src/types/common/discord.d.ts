import { Client } from "discord.js";
export class ClientX extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  commands: Collection<unknown, any>;
}
