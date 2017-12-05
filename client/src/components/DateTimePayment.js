import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 230
  }
});

function fillWithZero(v) {
  return v.toString().padStart(2, '0');
}

function getTimeStamp() {
  return getFormattedValue(new Date());
}
function getFormattedValue(dt) {
  return `${dt.getFullYear()}-${fillWithZero(dt.getMonth() + 1)}-${fillWithZero(
    dt.getDate()
  )}T${fillWithZero(dt.getHours())}:${fillWithZero(dt.getMinutes())}`;
}

function DateTimePayment(props) {
  const { classes, value, onTimestampChanged } = props;
  const formattedValue = getFormattedValue(new Date(value));
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Fecha"
        type="datetime-local"
        value={formattedValue || getTimeStamp()}
        onChange={e => onTimestampChanged(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}

DateTimePayment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateTimePayment);
