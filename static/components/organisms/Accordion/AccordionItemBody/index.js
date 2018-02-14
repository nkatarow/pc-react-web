import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AccordionItemBody = (props) => {
  const bodyClass = classNames(
    props.className,
    { [props.hideBodyClassName]: !props.expanded },
  );

  const ariaHidden = !props.expanded;

  return (
    <div
      id={props.id}
      className={bodyClass}
      aria-hidden={ariaHidden}
      aria-labelledby={props.id.replace('accordion-body-', 'accordion-title-')}
      role={props.role}
    >
      {props.children}
    </div>
  );
};

AccordionItemBody.defaultProps = {
  id: '',
  expanded: false,
  className: 'accordion-body',
  hideBodyClassName: 'accordion-body--hidden',
  role: '',
};

AccordionItemBody.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideBodyClassName: PropTypes.string,
  role: PropTypes.string,
};

// AccordionItemBody.defaultProps = defaultProps;
// We need this to be able to assign correct params to element.
// Minifiers modify component name
AccordionItemBody.accordionElementName = 'AccordionItemBody';

export default AccordionItemBody;
