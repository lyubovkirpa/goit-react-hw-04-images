import { Component } from "react";
import Modal from "./Modal/Modal";

export class App extends Component  {
state = {
  showModal: false
}

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
}
render() {
  const {showModal} = this.state;

  return (
    <div>
     {showModal && <Modal/>}
    </div>
  );
}
};
