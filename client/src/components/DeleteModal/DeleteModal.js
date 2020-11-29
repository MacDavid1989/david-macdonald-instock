import React, { Component } from "react";
import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DeleteModal extends Component {

  state = {
    display: false,
  };

  //closes the screen
  onCloseDeleteScreen = () => {
    this.setState({
      display: false,
    });
  };

  //delete the item
  onSubmitDelete = () => {

    this.props.onDeleteRoute(this.props.deleteThing.id);
    this.onCloseDeleteScreen();
    /*
    axios
      .delete(`http://localhost:8080/warehouse/${this.props.deleteThing.id}`)
      .then((res) => {
        this.onCloseDeleteScreen();
        this.props.updateObject(res.data.warehouses);
      });
      */
  };

  //Check if you have data alrady 
  componentDidMount() {
    if (this.props.deleteThing.name) {
      this.setState({
        display: true,
      });
    }
  }

  //Won't open unless this is here
  componentDidUpdate(prevP, prevS) {
    if (prevS.display === this.state.display && this.props.deleteThing.name) {
      this.setState({
        display: true,
      });
    }
  }

  render() {
    return (
      <div
        className="deleteModal"
        style={{ display: this.state.display ? "block" : "none" }}
      >
        <div className="deleteModal__wrapper">
          <div className="deleteModal__close-wrapper">
            <img src={close} alt="close" onClick={this.onCloseDeleteScreen} />
          </div>
          <div>
            <h1>Delete {this.props.deleteThing.name} warehouse?</h1>
            <p>
              Please confirm that you'd like to delete the King West from the
              list of warehouses. You won't be able to undo this action.
            </p>
          </div>
          <div className="deleteModal__btn-wrapper">
            <button
              className="deleteModal__btn"
              onClick={this.onCloseDeleteScreen}
            >
              Cancel
            </button>
            <button
              className="deleteModal__btn deleteModal__btn--delete"
              onClick={this.onSubmitDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DeleteModal);
