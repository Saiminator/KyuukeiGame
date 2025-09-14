# KyuukeiGame

Experimental Discord bot game. Currently provides a `/roll` command that generates five random characters with randomized stats.

## Development

```bash
npm install
npm test
npm run build
```

To run the bot locally:

```bash
BOT_TOKEN=your_token CLIENT_ID=your_client_id npm run dev
```

Optionally set `GUILD_ID` to register commands to a specific server during development.
