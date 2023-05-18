import React,{ Component } from 'react';
import toast from 'react-hot-toast';
import { fetchImages } from '../API/fetch';
import SearchBar from './Searchbar';
import ImageGallery from "./ImageGallery";


export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      try {
        this.setState({ loading: true });

        const searchImages = await fetchImages(searchName, page);

        if (searchImages.length === 0) {
          toast.error(
            `Sorry, the images you requested: ${searchName}not found.`
          );
        }

        this.setState(({ images }) => {
          return {
            images: [...images, ...searchImages],
          };
        });
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName, currentPage: 1, images: [] });
  };

   
  render() {   
    const { images } = this.state;
    return (
      <>
        <SearchBar  onSubmit={this.handleFormSubmit}  />
        {images && <ImageGallery images={images} />}        
      </>
    );
  }
}

