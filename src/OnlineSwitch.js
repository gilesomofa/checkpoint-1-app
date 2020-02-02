import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";

class OnlineSwitch extends React.Component { 
  
//this function toggles between online and offline
 
render() {
  return (
    <FormGroup>
        <Switch onChange={this.props.toggleOnlineChange} />
      
    </FormGroup>
  );

  }
}
export default OnlineSwitch