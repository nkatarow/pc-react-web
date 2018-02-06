import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isArraysEqualShallow } from './utils';
import './style.css';

export default class Accordion extends Component {
  state = {
    activeItems: this.preExpandedItems(),
    // accordion: true,
  };

  componentWillReceiveProps(nextProps) {
    if (!isArraysEqualShallow(nextProps.activeItems, this.state.activeItems)) {
      let newActiveItems;
      if (nextProps.accordion) {
        newActiveItems = nextProps.activeItems.length
          ? [nextProps.activeItems[0]]
          : [];
      } else {
        newActiveItems = nextProps.activeItems.slice();
      }
      this.setState({
        activeItems: newActiveItems,
      });

      nextProps.onChange(nextProps.accordion ? newActiveItems[0] : newActiveItems);
    }
  }

  preExpandedItems() {
    let activeItems = [];
    React.Children.map(this.props.children, (item, index) => {
      if (item.props.expanded) {
        if (this.props.accordion) {
          if (activeItems.length === 0) activeItems.push(item.props.customKey || index);
        } else {
          activeItems.push(item.props.customKey || index);
        }
      }
    });
    if (activeItems.length === 0 && this.props.activeItems.length !== 0) {
      activeItems = this.props.accordion ? [this.props.activeItems[0]] : this.props.activeItems.slice();
    }
    return activeItems;
  }

  handleClick(key) {
    let activeItems = [...this.state.activeItems];
    if (this.props.accordion) {
      activeItems = activeItems[0] === key ? [] : [key];
    } else {
      activeItems = [...activeItems];
      const index = activeItems.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        activeItems.splice(index, 1);
      } else {
        activeItems.push(key);
      }
    }
    this.setState({
      activeItems,
    });

    this.props.onChange(this.props.accordion ? activeItems[0] : activeItems);
  }

  renderItems() {
    const { accordion, children } = this.props;

    return React.Children.map(children, (item, index) => {
      const key = item.props.customKey || index;
      const expanded = (this.state.activeItems.indexOf(key) !== -1) && (!item.props.disabled);

      return React.cloneElement(item, {
        disabled: item.props.disabled,
        accordion,
        expanded,
        key: `accordion__item-${key}`,
        onClick: this.handleClick.bind(this, key),
      });
    });
  }

  renderItems = this.renderItems.bind(this);

  render() {
    const { className, accordion } = this.props;
    return (
      <div role={accordion ? 'tablist' : null} className={className}>
        {this.renderItems()}
      </div>
    );
  }
}

Accordion.defaultProps = {
  accordion: true,
  onChange: () => {},
  className: 'accordion',
  activeItems: [],
};
Accordion.propTypes = {
  accordion: PropTypes.bool,
  children: PropTypes.node.isRequired,
  activeItems: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
