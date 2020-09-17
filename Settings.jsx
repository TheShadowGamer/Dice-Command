const { React } = require("powercord/webpack");
const { Card, Text, Divider } = require("powercord/components");
const { SwitchItem } = require("powercord/components/settings");

module.exports = class Settings extends React.Component {
  render() {
    const { getSetting, toggleSetting } = this.props;
    return (
      <div>
        <SwitchItem
          note="If toggled, the result will be sent as you."
          value={getSetting("sendAsUser", false)}
          onChange={() => toggleSetting("sendAsUser")}
        >
          Return as You
        </SwitchItem>
        <SwitchItem
          note='If enabled, will say "You rolled a " followed by what you rolled.'
          value={getSetting("gameMode", false)}
          onChange={() => toggleSetting("gameMode")}
        >
          Game Mode
        </SwitchItem>
      </div>
    );
  }
};
