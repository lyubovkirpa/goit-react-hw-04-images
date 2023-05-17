// import { Component } from "react";
// import PropTypes from 'prop-types';
// import { Overlay, ModalContent } from './Modal.styled';



// export default class Modal extends Component {
//   componentDidMount() {
//     // console.log("Modal componentDidMount");
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     // console.log("Modal componentWillUnmount");
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       // console.log('ESC');
//       this.props.onClose();
//     }
//   }  

//   handleBackdropClick = e => {
//     // console.log('BackdropClick');
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   }


//   render() {
//     const {modalImg: { imageURL, tags },
//     } = this.props;
//     return (
//       <Overlay onClick = {this.handleBackdropClick}>
//         <ModalContent><img src={imageURL} alt={tags} /></ModalContent>
//       </Overlay>
//     );
//   }
// }


// Modal.propTypes = {
//   modalImg: PropTypes.shape({
//     imageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }).isRequired,
//   onClose: PropTypes.func.isRequired,
// };