import { Component } from "react";
// import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled';



export default class Modal extends Component {
  componentDidMount() {    
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {   
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {      
      this.props.onClose();
    }
  }  

  handleBackdropClick = event => {    
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }


  render() {
    // const {modalImg: { imageURL, id },
    // } = this.props;
    return (
      <Overlay onClick = {this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Overlay>
    );
  }
}


// Modal.propTypes = {
//   modalImg: PropTypes.shape({
//     imageURL: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
//   onClose: PropTypes.func.isRequired,
// };

{/* <Overlay onClick = {this.handleBackdropClick}>
<ModalContent><img src={imageURL} alt={id} />{this.props.children}</ModalContent>
</Overlay> */}