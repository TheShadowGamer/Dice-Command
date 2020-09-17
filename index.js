const { React } = require("powercord/webpack");
const { Plugin } = require("powercord/entities");

const Settings = require("./Settings.jsx");

module.exports = class DiceCommand extends Plugin {
  startPlugin() {
    powercord.api.settings.registerSettings("dice-command", {
      category: this.entityID,
      label: "Dice Command",
      render: Settings,
    });
    powercord.api.commands.registerCommand({
      command: "roll",
      description: "Rolls the dice.",
      usage: "{c} <sides>",
      aliases: ["dice"],
      executor: (args) => {
        return {
          send: this.settings.get("sendAsUser", false),
          result: `${
            this.settings.get("gameMode", false) ? "You rolled a " : ""
          }${Math.floor(
            Math.random() * ((parseInt(args[0]) + 1 || 7) - 1) + 1
          )}`,
        };
      },
    });
  }

  pluginWillUnload() {
    powercord.api.settings.unregisterSettings("dice-command");
    powercord.api.commands.unregisterCommand("roll");
  }
};
