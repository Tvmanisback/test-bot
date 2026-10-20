# TvCord Test Bot

A small JavaScript bot using the actual TvCord API module, `TvCord.js`.

## Commands

- `/ping` — checks that the bot is online.
- `/help` — lists commands.
- `/about` — describes the bot.
- `hello bot` — replies with a greeting.

Commands can work in server channels and direct messages **when the TvCord bot gateway supports and delivers those message types**.

## Setup

1. Create a bot in the [TvCord Developer Portal](https://tvmanisback.github.io/TvCord/developer-portal/).
2. Copy its token once and keep it private.
3. In this GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret**.
4. Name the secret `TVCORD_BOT_TOKEN` and paste the token as its value.
5. Open **Actions → Run TvCord Bot → Run workflow**.

The workflow runs for up to 350 minutes per run. GitHub Actions is suitable for testing, not permanent 24/7 hosting; start another run when it stops or use a dedicated host for continuous operation.

## Local run

Use Node.js 18 or newer, then set `TVCORD_BOT_TOKEN` in your terminal environment and run:

```sh
npm start
```

Never commit the bot token into this repository or put it in client-side website code.

## API dependency

`TvCord.js` is the TvCord API module downloaded from the main TvCord repository. The bot needs the TvCord Supabase Edge Function deployed and configured, and the API gateway's poll/send actions must match the current database schema. If the gateway is not deployed or does not support an action, the bot will log a gateway error rather than being able to message TvCord.
