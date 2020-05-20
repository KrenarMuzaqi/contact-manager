import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  //tek array function we should put "async" before parameters not before name of function
  onDeleteClick = async (id, dispatch) => {
    // await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    // dispatch({ type: "DELETE_CONTACT", payload: id });

    //userin e ri qe e shtojm nuk mundemi me e fshi per arsye se nuk egziston ne DB te JSON API por ne DOM tonin
    //nese e kishum pas DB ton ateher kish funksionu kodi me siper por per kete mundemi me ba me "try catch"

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down"
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  className="fas fa-times"
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "10px",
                      color: "black",
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
