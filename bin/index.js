"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        // ...
    ],
});
client.on("ready", () => {
    console.log(client ? `Logged in as ${client.user.tag}!` : "error");
});
client.on("message", (msg) => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});
console.log(process.env.TOKEN);
client.login("MTAyNzE0MzQwMzk0NDgxNjY4MA.G1oNQN.-B35MGzy4K8bSnNylzZl8-0d-AEQVV05a4PdlA");
