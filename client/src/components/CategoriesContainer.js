import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { categories, subCategories } from './Categories';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class CategoriesContainer extends Component {
  state = { parentCategory: null, subCategory: null };

  handleParentCategoryChange = event => {
    this.props.onParentCategoryChanged(event.target.value);
  };

  handleSubCategoryChange = event => {
    const optionSelected = event.target.options[event.target.selectedIndex];
    this.props.onParentCategoryChanged(optionSelected.dataset.parentId);
    this.props.onSubCategoryChanged(event.target.value);
  };

  getOptionGroupComponent(key, label, options) {
    return (
      <optgroup key={key} label={label}>
        {options.map(o => (
          <option key={o} data-parent-id={key} value={o}>
            {o}
          </option>
        ))}
      </optgroup>
    );
  }

  renderOptionGroups() {
    if (!this.props.parentCategory) {
      return Object.keys(subCategories).map(c =>
        this.getOptionGroupComponent(c, categories[c].value, subCategories[c])
      );
    }
    const c = this.props.parentCategory;
    return this.getOptionGroupComponent(
      c,
      categories[c].value,
      subCategories[c]
    );
  }

  getCategoryFromState = () => {
    if (!this.props.parentCategory) return;
    return categories[this.props.parentCategory].value;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="parent-category">Categoría</InputLabel>
          <Select
            native
            value={this.props.parentCategory || ''}
            onChange={this.handleParentCategoryChange}
            input={<Input id="parent-category" />}
          >
            <option value="" />
            {Object.values(categories).map(c => (
              <option key={c.id} value={c.id}>
                {c.value}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sub-category">Subcategoría</InputLabel>
          <Select
            native
            value={this.props.subCategory || ''}
            onChange={this.handleSubCategoryChange}
            input={<Input id="sub-category" />}
          >
            <option value="" />
            {this.renderOptionGroups()}
          </Select>
        </FormControl>
      </div>
    );
  }
}

CategoriesContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoriesContainer);
