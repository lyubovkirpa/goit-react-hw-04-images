import { Component } from "react";
import { Backdrop, ModalContent } from './Modal.styled';


export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
  }


  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
  }

  render() {
    return (
      <Backdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}