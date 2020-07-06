import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const { searchTerm, setSearchTerm } = useState('');

  function handleSearchTermChange (e){
    setSearchTerm(e.target.value);

    if(onSubmit) {
      const formValues = {
        searchTerm,
      }
      onSubmit(formValues);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default PostFilterForm;