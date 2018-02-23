import React, { Component } from "react";
import { Link } from "react-router-dom";

import WorkoutsBlock from "./workoutsBlock";
import CreateModal from "../../components/UI/createModal";
import DeleteModal from "../../components/UI/deleteModal";

// add workout delete modal 
// within modal dispatch delete workout action 
// will have to pass id to modal

class workoutsGrid extends Component {
    state = {
        selectedWorkoutIndex: null
    }

    handleDeleteModal = (workoutIndex) => {
        this.setState({
            selectedWorkoutIndex: workoutIndex
        });
        this.props.handleOpenDeleteModal()
    }

    render() {
        return (
            <div>
                <CreateModal 
                    isOpen={this.props.createModalIsOpen}
                    handleCloseModal={this.props.handleCloseCreateModal} />
                <DeleteModal
                    isOpen={this.props.deleteModalIsOpen}
                    handleCloseModal={this.props.handleCloseDeleteModal} 
                    modalTitle="Workout"
                    selectedWorkoutIndex={this.state.selectedWorkoutIndex}
                    />
                <div className="workouts__wrapper">
                    <div className="container">
                        <div className="workouts__grid">
                            {this.props.workouts.map((workout, index) =>
                                <div key={workout.title}> 
                                    <Link to={{pathname:`/workouts/${workout.title.split(" ").join("-").toLowerCase()}/start`, state: {workout: workout.exercises}}}>
                                        <WorkoutsBlock 
                                            title={workout.title}
                                            totalTime={workout.totalTime} />
                                    </Link>
                                    <div className="workoutsBlock__edit">
                                        <Link to={{pathname:`/workouts/${workout.title.split(" ").join("-").toLowerCase()}/edit`, state: {workout: workout.exercises}}}>
                                            <h3><i className="far fa-edit"></i> Edit</h3>
                                        </Link>
                                        <h3 onClick={() => this.handleDeleteModal(index)}><i className="far fa-trash-alt"></i> Delete</h3>
                                    </div>
                                </div>
                            )}
                            <div onClick={this.props.handleOpenCreateModal} className="workouts__addBlock">
                                <h1>Create a workout</h1>
                                <i className="fas fa-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default workoutsGrid;