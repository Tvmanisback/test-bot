// TvCord test bot. Commands work in servers and bot DMs when the gateway is deployed.
import { Bot } from "./TvCord.js";

const token = process.env.TVCORD_BOT_TOKEN;
if (!token) {
  console.error("Missing TVCORD_BOT_TOKEN. Add it as a repository Actions secret.");
  process.exit(1);
}

const bot = new Bot(token);

bot.command("ping", async (message) => {
  await message.reply("Pong! TvCord bot is online. 🟢");
});

bot.command("help", async (message) => {
  await message.reply("**TvCord Test Bot**\nCommands: /ping, /help, /about\nThese commands can be used in a server channel or in this bot's DM.");
});

bot.command("about", async (message) => {
  await message.reply("I'm the TvCord test bot, powered by the official TvCord.js API.");
});

bot.onMessage(async (message) => {
  // Add custom message handling here. Avoid replying to every message to prevent loops.
  if (message.content.trim().toLowerCase() === "hello bot") {
    await message.reply("Hello! Try /help to see my commands.");
  }
});

process.on("SIGINT", () => { bot.stop(); process.exit(0); });
process.on("SIGTERM", () => { bot.stop(); process.exit(0); });

await bot.start();
