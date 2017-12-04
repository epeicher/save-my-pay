import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  withMobileDialog
} from 'material-ui/Dialog';
import CategoriesAutoSuggest from './CategoriesAutoSuggest';
import CategoriesContainer from './CategoriesContainer';

const DialogSpending = class extends React.Component {
  render() {
    const { open, onRequestClose, onSpendingAdded } = this.props;

    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <DialogTitle>Gasto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occationally.
          </DialogContentText>
          <CategoriesContainer />

          <TextField
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
            Cancel
          </Button>
          <Button onClick={onSpendingAdded} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default withMobileDialog()(DialogSpending);
