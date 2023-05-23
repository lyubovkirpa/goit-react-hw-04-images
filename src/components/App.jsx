import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../API/fetch';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from 'components/Button';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(false);

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        setIsLoadMoreShown(false);
        const searchImages = await fetchImages(searchName, page);

        if (searchImages.length === 0) {
          toast.error(
            `Sorry, the images you requested: ${searchName}not found.`
          );
        }

        setImages(prev => [...prev, ...searchImages]);

        if (searchImages.length >= 12) {
          setIsLoadMoreShown(true);
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [searchName, page]);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
    setPage(1);
  };

  const loadMoreSubmit = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
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
      {isLoadMoreShown && <Button onClick={loadMoreSubmit} />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
