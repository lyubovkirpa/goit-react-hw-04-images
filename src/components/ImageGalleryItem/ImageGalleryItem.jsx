import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from './ImageGalleryItem.styled';
import Modal from '../Modal';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Card>
      <Image src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal url={largeImageURL} tags={tags} onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </Card>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
