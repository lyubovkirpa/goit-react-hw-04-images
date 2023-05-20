import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../API/fetch';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from 'components/Button';
import { ThreeDots } from 'react-loader-spinner';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    error: null,  
    isLoadMoreShown: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      try {
        this.setState({ loading: true, isLoadMoreShown: false });

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

        if (searchImages.length >= 12) {
          this.setState({ isLoadMoreShown: true });
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchName => {
    this.setState({
      searchName,
      images: [],
      page: 1,
    });
  };

  loadMoreSubmit = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, isLoadMoreShown } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {!!images.length && <ImageGallery images={images} />}
        {loading && (
          <ThreeDots
            height="60"
            width="60"
            radius="8"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        {isLoadMoreShown && <Button onClick={this.loadMoreSubmit} />}
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
  }
}
