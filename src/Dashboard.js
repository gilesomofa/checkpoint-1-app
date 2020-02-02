import React from "react";
import Onlinecard from "./Onlinecard";
import Volume from "./Volume";
import Soundquality from "./Soundquality";
import CardActions from "@material-ui/core/CardActions";
import Slider from "@material-ui/core/Slider";

class Dashboard extends React.Component {
  // here I need to render 3 cards and setState for those cards
  // as well as text for for Dashboard

  state = {
    notifications: []
  };

  handleNotificationChange = message => {
    let notifications = this.state.notifications;
    notifications.push(message);
    this.setState({ notifications });
  };
  render() {
    const title = "Soundquality";
    return (
      <div>
        <h1 className="WelcomeUser">Welcome User!</h1>
        <div className="Dashboard">
          <Onlinecard
            handleNotificationChange={this.handleNotificationChange}
          />
          <Volume handleNotificationChange={this.handleNotificationChange} />
          <Soundquality
            handleNotificationChange={this.handleNotificationChange}
          />
        </div>
        <h2 className="Notificationtext">Notifications:</h2>
        {this.state.notifications.map((message, index)=>{
           return <p key={index}>{ message }</p>
        })
    
        }
      </div>
    );
  }
}
export default Dashboard;
