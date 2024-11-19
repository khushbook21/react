import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, welcome to React!',
    };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component is added to the screen');
    // Simulate an update after 3 seconds
    this.timer = setTimeout(() => {
      this.setState({ message: 'The message has been updated!' });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated');
    console.log('Previous State:', prevState.message);
    console.log('Current State:', this.state.message);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed');
    // Clean up the timer
    clearTimeout(this.timer);
  }

  render() {
    console.log('Render: Drawing the component');
    return <h1>{this.state.message}</h1>;

  }
}

export default LifecycleExample;
