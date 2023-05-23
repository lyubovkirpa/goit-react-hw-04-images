import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { SearchbarWrap, Form, Input, SearchBtn } from './Searchbar.styled';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const onInputChange = event => {
    setSearchName(event.currentTarget.value);
  };

  const onSearchBtnClick = event => {
    event.preventDefault();

    if (searchName.trim().toLowerCase()) {
      onSubmit(searchName);
      setSearchName('');
    } else {
      toast.error('Fill in the search field');
    }
  };

  return (
    <SearchbarWrap>
      <Form>
        <SearchBtn type="submit" onClick={onSearchBtnClick}>
          <SearchIcon size="20" />
        </SearchBtn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          maxLength="20"
          value={searchName}
          onChange={onInputChange}
        />
      </Form>
    </SearchbarWrap>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
