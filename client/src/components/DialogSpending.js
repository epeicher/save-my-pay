import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
  withMobileDialog
} from 'material-ui/Dialog';
import CategoriesContainer from './CategoriesContainer';
import DateTimePayment from './DateTimePayment';

const styles = theme => ({
  amountField: {
    textAlign: 'right'
  }
});

const DialogSpending = class extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    timestamp: new Date(),
    parentCategory: null,
    subCategory: null,
    amount: null
  };

  handleChange = name => value => {
    this.setState(st => ({ ...st, [name]: value }));
  };

  handleSpendingAdded = () => {
    this.props.onSpendingAdded(this.state);
  };

  render() {
    const { classes, open, onRequestClose } = this.props;

    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <DialogTitle>Gasto</DialogTitle>
        <DialogContent>
          <DateTimePayment
            onTimestampChanged={this.handleChange('timestamp')}
            value={this.state.timestamp}
          />
          <CategoriesContainer
            onParentCategoryChanged={this.handleChange('parentCategory')}
            parentCategory={this.state.parentCategory}
            onSubCategoryChanged={this.handleChange('subCategory')}
            subCategory={this.state.subCategory}
          />
          <TextField
            InputProps={{ classes: { input: classes.amountField } }}
            onChange={e => this.handleChange('amount')(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Cantidad"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.handleSpendingAdded} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default withMobileDialog()(withStyles(styles)(DialogSpending));
