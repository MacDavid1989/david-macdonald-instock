import React, { Component } from "react";
import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";
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
            <h1>Delete {this.props.deleteThing.name} {this.props.deleteThing.header}?</h1>
            <p>
              Please confirm that you'd like to delete the {this.props.deleteThing.name} from {this.props.deleteThing.body} You won't be able to undo this action.
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
