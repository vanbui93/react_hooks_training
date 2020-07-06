import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');

  // hàm useRef: Sẽ giữ nguyên giá trị sau mỗi lần render
  const typingTimeoutRef = useRef(null);  //giá trị khởi tạo là null

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);

    //CLEAR timeout cũ, nếu render chưa đến 500 thì CLEAR
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (onSubmit) {

      typingTimeoutRef.current = setTimeout(() => {
        const formValues = {
          searchTerm,
        }
        onSubmit(formValues);
      }, 500);

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