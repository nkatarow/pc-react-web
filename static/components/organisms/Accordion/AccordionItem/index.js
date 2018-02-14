import React, { Component } from 'react';
import consecutive from 'consecutive';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const nextUuid = consecutive();

export default class AccordionItem extends Component {
  state = {
    itemUuid: nextUuid(),
  };

  renderChildren() {
    const { itemUuid } = this.state;

    return React.Children.map(this.props.children, (item) => {
      const itemProps = {};

      if (item.type.accordionElementName === 'AccordionItemTitle') {
        itemProps.expanded = this.props.expanded;
        itemProps.key = 'title';
        itemProps.id = `accordion-title-${itemUuid}`;
        itemProps.ariaControls = `accordion-body-${itemUuid}`;
        itemProps.onClick = this.props.onClick;
        itemProps.role = this.props.accordion ? 'tab' : 'button';

        return React.cloneElement(item, itemProps);
      } else if (item.type.accordionElementName === 'AccordionItemBody') {
        itemProps.expanded = this.props.expanded;
        itemProps.key = 'body';
        itemProps.id = `accordion-body-${itemUuid}`;
        itemProps.role = this.props.accordion ? 'tabpanel' : null;

        return React.cloneElement(item, itemProps);
      }

      return item;
    });
  }

    renderChildren = this.renderChildren.bind(this);

    render() {
      const { className, expanded, hideBodyClassName } = this.props;

      const itemClassName = classNames(
        className,
        {
          [hideBodyClassName]: (!expanded && hideBodyClassName),
        },
      );

      return (
        <div className={itemClassName}>
          {this.renderChildren()}
        </div>
      );
    }
}

AccordionItem.defaultProps = {
  accordion: true,
  expanded: false,
  onClick: () => {},
  className: 'accordion-item',
  hideBodyClassName: '',
};

AccordionItem.propTypes = {
  accordion: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideBodyClassName: PropTypes.string,
};
