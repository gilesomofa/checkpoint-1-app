import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Volume = (props) => {
  const onVolumeChange = level => {
    let volume = level.target.textContent;
    if (volume > 80) {
      props.handleNotificationChange(
        "Listening to music this loud can damage your hearing!"
      );
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Master Volume
        </Typography>
        <Typography></Typography>
        <Typography color="textSecondary"></Typography>
        <Typography variant="body2" component="p">
          overrides all other sound settings
          <br /> in this application.
          {}
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          onChange={onVolumeChange}
        />
      </CardActions>
    </Card>
  );
};

export default Volume;
