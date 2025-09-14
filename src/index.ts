import { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } from 'discord.js';
import { rollCharacters, formatRolledCharacter } from './roll';

export const rollCommand = new SlashCommandBuilder()
  .setName('roll')
  .setDescription('Roll 5 random characters');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'roll') {
    const rolled = rollCharacters();
    const description = rolled
      .map((c, i) => `${i + 1}. ${formatRolledCharacter(c)}`)
      .join('\n\n');
    await interaction.reply({ content: description, ephemeral: true });
  }
});

export async function registerCommands(token: string, clientId: string, guildId?: string) {
  const rest = new REST({ version: '10' }).setToken(token);
  const body = [rollCommand.toJSON()];
  if (guildId) {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body });
  } else {
    await rest.put(Routes.applicationCommands(clientId), { body });
  }
}

if (require.main === module) {
  const token = process.env.BOT_TOKEN as string | undefined;
  const clientId = process.env.CLIENT_ID as string | undefined;
  const guildId = process.env.GUILD_ID as string | undefined;
  if (!token || !clientId) {
    console.error('Missing BOT_TOKEN or CLIENT_ID');
  } else {
    registerCommands(token, clientId, guildId).catch(console.error);
    client.login(token).catch(console.error);
  }
}
