import React from 'react';
import PokeList from './PokeList';
import PokeDetail from './PokeDetail';
import AddPoke from './AddPoke';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import ReusablePokeForm from './ReusablePokeForm';

class PokeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPoke: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updatePokeElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePokeElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterPokeList).forEach(poke => {
      const newFormattedWaitTime = poke.timeOpen.fromNow(true);
      const action = a.updateTime(poke.id, newFormattedWaitTime);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedPoke != null) {
      this.setState({
        selectedPoke: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.togglePokeForm();
      dispatch(action);
    }
  }

  handleAddingNewPokeToList = () => {
    const { dispatch } = this.props;
    const action = a.togglePokeForm();
    dispatch(action);
  }

  handleChangingSelectedPoke = (id) => {
    this.props.firestore.get({collection: 'pokemon', doc: id}).then((poke) => {
      const firestorePoke = {
        number: poke.get("number"),
        img: poke.get("img"),
        name: poke.get("name"),
        description: poke.get("description"),
        types: poke.get("types"),
        weaknesses: poke.get("weaknesses"),
        id: poke.id
      }
      this.setState({selectedPoke: firestorePoke});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleEditingPokeInList = () => {
    this.setState({
      editing: false,
      selectedPoke: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPoke != null) {
      currentlyVisibleState = <AddPoke poke = {this.state.selectedPoke} onClickingDelete = {this.handleDeletingPoke} onClickingEdit = {this.handleEditClick} />;
      buttonText = "Return to Poke List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddPoke onNewPokeCreation = {this.handleAddingNewPokeToList} />;
      buttonText =  "Return to Poke List";
    } else {
      currentlyVisibleState = <PokeList PokeList = {this.props.masterPokeList} onPokeSelection = {this.handleChangingSelectedPoke} />;
      buttonText = "Add Poke"
    }
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              {/* {currentlyVisibleState} */}
              <PokeDetail poke = {this.state.selectedPoke} onClickingDelete = {this.handleDeletingPoke} onClickingEdit = {this.handleEditClick} />
            </div>
            <div className='col-md-6'>
              <AddPoke onNewPokeCreation = {this.handleAddingNewPokeToList} />
              <PokeList PokeList = {this.props.masterPokeList} onPokeSelection = {this.handleChangingSelectedPoke} />
            </div>
          </div>
        </div>
        {/* {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button> */}
      </>
    );
  }
}

  PokeControl.propTypes = {
      masterPokeList: PropTypes.object
  };

  const mapStateToProps = state => {
    return {
      masterPokeList: state.masterPokeList,
      formVisibleOnPage: state.formVisibleOnPage
    }
  }

  PokeControl = connect(mapStateToProps)(PokeControl)



export default withFirestore(PokeControl);