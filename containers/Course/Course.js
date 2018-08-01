import React, { Component } from 'react';

class Course extends Component {
    state = {
        CourseId: null,
        CourseName: null
    }

    componentDidMount() {
        this.loadCourseDetails();
    }

    componentDidUpdate() {
        if (this.state.CourseId !== this.props.match.params.id) {
            this.loadCourseDetails();
        }
    }

    loadCourseDetails() {
        const query = new URLSearchParams(this.props.location.search);
        let courseName = null;
        for (let param of query.entries()) {
            courseName = param[1];
        }

        this.setState({ CourseId: this.props.match.params.id, courseName: courseName });
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseName}</h1>
                <p>You selected the Course with ID: {this.state.CourseId}</p>
            </div>
        );
    }
}

export default Course;