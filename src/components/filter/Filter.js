import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <form>
    <label>
      Find contacts by name
      <br />
      <input
        style={{ borderRadius: 4 }}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </label>
  </form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
