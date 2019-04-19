import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor(props) {
    //     super(props);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     //bind eventHandler to this
    // }


    renderTags() {
        if (this.state.tags.length === 0)
            return <p>There are no tags</p>;
        else
            return <u>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</u>
    }

    handleIncrement = () =>{
        // bind eventHandler tot this
        this.setState({ count: this.state.count +1});
    };

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && 'please create a new tag'}
                {this.renderTags()}

                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>

            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;