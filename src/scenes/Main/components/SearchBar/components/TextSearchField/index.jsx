import React from 'react';

class TextSearchField extends React.Component {
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onEnter();
        }
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} />;
    }
}

export default TextSearchField;
