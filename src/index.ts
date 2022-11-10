import { Client, GatewayIntentBits, Partials } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    // ...
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    //
  ],
});

client.on("ready", () => {
  console.log(client ? `Logged in as ${client.user?.tag}!` : "error");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nCreated at: ${interaction.user.createdAt}`
    );
  } else if (commandName === "random") {
    await interaction.reply(`${Math.random()}`);
  } else if (commandName === "random-name") {
    await interaction.reply(`${randomName()}`);
  }
});

const randomName = () => {
  const names = ["Best", "Bun", "Fluke", "Bird", "Eikkew"];
  var name = names[Math.floor(Math.random() * names.length)];
  return name;
};

client.login(
  "MTAyNzE0MzQwMzk0NDgxNjY4MA.G1oNQN.-B35MGzy4K8bSnNylzZl8-0d-AEQVV05a4PdlA"
);
