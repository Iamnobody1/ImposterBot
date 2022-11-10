import { REST, Routes, SlashCommandBuilder } from "discord.js";
const { clientId, guildId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("random")
    .setDescription("Replies with random math!"),
  new SlashCommandBuilder()
    .setName("random-name")
    .setDescription("Replies with random name!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then((data: any) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
