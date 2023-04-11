import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';

// This is just a holder for the props and children for tab, thus
// there is no logic here.
const Tab = ({ children, idx, className }) => (
  <Col id={`tab_${idx}`} s={12} className={className}>
    {children}
  </Col>
);

Tab.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
  idx: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  active: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  tabWidth: PropTypes.number
};

export default Tab;
