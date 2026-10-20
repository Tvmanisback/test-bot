# TvCord Test Bot

This repository contains the runnable JavaScript test bot and its GitHub Actions workflow.

## Files

- `TvCord.js` — the TvCord JavaScript SDK/API module.
- `bot.js` — the bot program that imports the SDK and registers commands.
- `package.json` — Node.js project configuration.
- `.github/workflows/build.yml` — the GitHub Actions workflow used to run the bot.

You do **not** need to download a starter bot from the Developer Portal. Keep the SDK file `TvCord.js` alongside `bot.js`.

## Commands

- `/ping` — checks that the bot is online.
- `/help` — lists commands.
- `/about` — describes the bot.
- `hello bot` — replies with a greeting.

Commands work in server channels and direct messages only when the deployed TvCord gateway supports and delivers those message types.

## Setup

1. Create a bot in the [TvCord Developer Portal](https://tvmanisback.github.io/TvCord/developer-portal/).
2. Copy its token once and keep it private.
3. In this repository, open **Settings → Secrets and variables → Actions → New repository secret**.
4. Set the secret name to `TVCORD_BOT_TOKEN` and paste the bot token as its value.
5. Open **Actions → Run TvCord Bot → Run workflow**.

The workflow runs for up to 350 minutes per run. GitHub Actions is suitable for testing, not permanent 24/7 hosting; start another run when it stops or use a dedicated host for continuous operation.

## Local run

Use Node.js 18 or newer, set `TVCORD_BOT_TOKEN` in your terminal environment, then run:

```sh
npm start
```

Never commit the bot token into this repository or put it in client-side website code.

## Gateway requirement

The bot requires the TvCord Supabase Edge Function to be deployed and configured, with poll/send actions matching the current database schema. The workflow can start the bot, but a successful live connection has not been verified.
