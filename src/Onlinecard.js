import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OnlineSwitch from "./OnlineSwitch";

export default class Onlinecard extends React.Component {
  state = {
    isOnline: false
  };
  toggleOnlineChange = () => {
    let isOnline = !this.state.isOnline;
    this.setState({ isOnline });
    if (isOnline === false) {
      this.props.handleNotificationChange('You are offline, please login.');
    }
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textPrimary" gutterBottom>
            Online Mode
          </Typography>
          <Typography>
            Is this application connected
            <br /> to the internet?
          </Typography>
        </CardContent>
        <CardActions>
          <OnlineSwitch
            isOnline={this.state.isOnline}
            size="small"
            toggleOnlineChange={this.toggleOnlineChange}
          />
        </CardActions>
      </Card>
    );
  }
}
