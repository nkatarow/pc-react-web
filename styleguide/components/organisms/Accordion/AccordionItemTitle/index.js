import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AccordionItemTitle extends Component {
    static accordionElementName = 'AccordionItemTitle';

    handleKeyPress(evt) {
      const { onClick } = this.props;
      if (evt.charCode === 13 || evt.charCode === 32) {
        onClick();
      }
    }

    handleKeyPress = this.handleKeyPress.bind(this);

    render() {
      const titleClassName = classNames(
        this.props.className,
        {
          [this.props.hideBodyClassName]: (this.props.hideBodyClassName && !this.props.expanded),
        },
      );

      return (
        <div
          id={this.props.id}
          aria-selected={this.props.expanded}
          aria-controls={this.props.ariaControls}
          className={titleClassName}
          onClick={this.props.onClick}
          role="tab"
          tabIndex="0"
          onKeyPress={this.handleKeyPress}
        >
          {this.props.children}
        </div>
      );
    }
}

AccordionItemTitle.defaultProps = {
  id: '',
  expanded: false,
  onClick: () => {},
  ariaControls: '',
  className: 'accordion-title',
  hideBodyClassName: '',
};

AccordionItemTitle.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  ariaControls: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideBodyClassName: PropTypes.string,
};
