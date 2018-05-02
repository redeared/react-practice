import React from 'react';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.inp = React.createRef();
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.enterCallBack();
        }
    }

    handleChange = (e) => {
        this.props.inputCallBack(e.target.value);
    }

    render() {
        return <input type="text" ref={this.inp} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />;
    }
}

export default SearchField;
