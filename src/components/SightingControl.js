import React from 'react';
import EditSightingForm from './EditSightingForm';
import Sighting from './Sighting';
import SightingList from './SightingList';
import { connect } from 'react-redux';
import CreateSighting from './CreateSighting';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class SightingControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSighting: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateSightingElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateSightingElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterSightingList).forEach(sighting => {
      const newFormattedWaitTime = sighting.timeOpen.fromNow(true);
      const action = a.updateTime(sighting.id, newFormattedWaitTime);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedSighting != null) {
      this.setState({
        selectedSighting: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewSightingToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedSighting = (id) => {
    this.props.firestore.get({collection: 'sightings', doc: id}).then((sighting) => {
      const firestoreSighting = {
        name: sighting.get("name"),
        region: sighting.get("region"),
        details: sighting.get("details"),
        id: sighting.id
      }
      this.setState({selectedSighting: firestoreSighting});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSightingInList = () => {
    this.setState({
      editing: false,
      selectedSighting: null
    });
  }

  handleDeletingSighting = (id) => {
    this.props.firestore.delete({collection: 'tickets', doc: id});
    this.setState({selectedSighting: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditSightingForm sighting = {this.state.selectedSighting} onEditSighting = {this.handleEditingSightingInList} />
      buttonText = "Return to Sighting List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <CreateSighting onNewSightingCreation = {this.handleAddingNewSightingToList} />;
      buttonText = "Return to Ticket List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <CreateSighting onNewSightingCreation = {this.handleAddingNewSightingToList} />;
      buttonText =  "Return to Sighting List";
    } else {
      currentlyVisibleState = <CreateSighting onNewSightingCreation = {this.handleAddingNewSightingToList} />;
      buttonText = "Add Sighting"
    }
    return (
      <>
      {currentlyVisibleState}
      <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

SightingControl.propTypes = {
  masterSightingList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterSightingList: state.masterSightingList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SightingControl = connect(mapStateToProps)(SightingControl);



export default withFirestore(SightingControl);