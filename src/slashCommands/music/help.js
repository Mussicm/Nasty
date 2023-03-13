const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Get the Information of available Commands',
  run: (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('Blue')
		.setDescription(`
<a:782167252299546644:1043593903187689483>    **Configuration**
\`\`\` join , disconnect 
\`\`\`<a:ping:1081495442455548005>**Information**
\`\`\` Help , Ping 
\`\`\`<a:778521981468540960:1043608467623133184>**Music**
\`\`\` play , skip , move ,\n loop , pause , queue ,\n remove , seek , volume ,\n shuffle , resume , clearqueue
\`\`\`
**For Any Help Or Complain Join**
**[SUPPORT SERVER](https://discord.gg/D6SFg5XHYu)|[INVITE](https://discord.com/oauth2/authorize?client_id=995330617661210704&scope=bot&permissions=8)**`)
	return interaction.reply({
      embeds: [embed],
    });
  },
};
