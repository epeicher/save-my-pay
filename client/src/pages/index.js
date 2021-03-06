/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import DialogSpending from '../components/DialogSpending';
import * as api from '../api';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200
  }
};

class Index extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.closeDialog();
  };

  handleSpendingAdded = payment => {
    api
      .addSpending(payment)
      .then(() => this.closeDialog())
      .catch(e => {
        const errorMsgs = e.Errors || ['Error desconocido'];
        this.setState(st => {
          return { ...st, errors: errorMsgs };
        });
      });
  };

  closeDialog() {
    this.setState({
      open: false,
      errors: undefined
    });
  }

  handleAddSpending = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <DialogSpending
          onRequestClose={this.handleRequestClose}
          onSpendingAdded={this.handleSpendingAdded}
          open={this.state.open}
          errors={this.state.errors}
        />
        <Typography type="display1" gutterBottom>
          Añade tu Gasto
        </Typography>
        <Button
          fab
          color="accent"
          aria-label="add"
          onClick={this.handleAddSpending}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
