import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOptions } from '../../redux/tasks/tasks.selectors';

import {
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
} from '../../redux/tasks/tasks.actions';

import NavOptionItem from '../nav-option-item';

import './navOptions.css';

const NavOptions = ({
  options: { all, active, done },
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
}) => (
  <div className='options'>
    <div className='options-features'>
      <NavOptionItem toggleBtn={toggleBtnAll} nav={all} name={'All'} />
      <NavOptionItem toggleBtn={toggleBtnActive} nav={active} name={'Active'} />
      <NavOptionItem toggleBtn={toggleBtnDone} nav={done} name={'Done'} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  options: selectOptions,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBtnAll: () => dispatch(toggleBtnAll()),
  toggleBtnActive: () => dispatch(toggleBtnActive()),
  toggleBtnDone: () => dispatch(toggleBtnDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavOptions);
