import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';
import { Box } from 'components/Box';

const Button = ({ onClick }) => {
  return (
    <Box display="flex" justifyContent="center" mt="12px">
      <Btn type="button" onClick={() => onClick()}>
        Load more
      </Btn>
    </Box>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
