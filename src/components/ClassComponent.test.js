import React from 'react'

class ClassComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            clicked: 0
        }
    }

    // es6 arrow function handler
    handleClick = () => {
        const { clicked } = this.state

        this.setState({
            clicked: clicked + 1
        })

        console.log('you clicked me')
    }

    render() {
        const { clicked } = this.state
        return (
            <div>
                <h1>Hey there i am a class component</h1>
                <button onClick={this.handleClick}>you clicked me {clicked} times</button>
            </div>
        )
    }
}

export default ClassComponent