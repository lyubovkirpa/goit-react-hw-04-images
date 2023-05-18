import { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { SearchbarWrap, Form, Input, SearchBtn } from './Searchbar.styled';



export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  onInputChange = event => {
    const searchName = event.currentTarget.value;
    this.setState({ searchName });
  };

  onSearchBtnClick = event => {
    event.preventDefault();

  const searchName = this.state.searchName.trim().toLowerCase();
    
    if (searchName) {
      this.props.onSubmit(searchName);
    } else {
      alert(`Enter something`);
    }
  };

  render() {
    const { searchName } = this.state;
    return (
      <SearchbarWrap>
        <Form>
          <SearchBtn type="submit" onClick={this.onSearchBtnClick}>
            <SearchIcon size="20" />
          </SearchBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            maxLength="20"
            value={searchName}
            onChange={this.onInputChange}
          />
        </Form>
      </SearchbarWrap>
    );
  }
}