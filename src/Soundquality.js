import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const Soundquality = props => {
    const onSelectChange =(e)=>{
        if(e.target.value === 'low'){
            props.handleNotificationChange('Your sound level has degraded, consider increasing it.')


        }
        

    }

  return (
    <Card>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          manually control the music quality <br />
          in the event of a poor connection
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl className="SoundSelector">
          <InputLabel id="demo-simple-select-label"> Quality</InputLabel>
          <Select onChange={onSelectChange}labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value='low'>low</MenuItem>
            <MenuItem value='normal'>normal</MenuItem>
            <MenuItem value='high'>high</MenuItem>
        
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default Soundquality;
