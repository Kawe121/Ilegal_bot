import { Client, GatewayIntentBits, Partials, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel]
});

client.once(Events.ClientReady, () => {
  console.log(`Bot online: ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'menu') {
    const embed = new EmbedBuilder()
      .setTitle('ILEGAL BROOKLYN RJ - MENU')
      .setDescription('Clique no botão para exibir funções')
      .setColor(0xff0000)
      .setImage('https://cdn.discordapp.com/attachments/1370945259303075932/1371577476664393738/width293.png');

    const button = new ButtonBuilder()
      .setCustomId('abrir_menu')
      .setLabel('Iniciar Menu')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  }
});

client.login(process.env.TOKEN);