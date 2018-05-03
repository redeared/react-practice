import React, { Fragment, Component } from 'react';
import Empty from './components/Empty';
import ItemsStatus from './components/ItemsStatus';
import ItemsSort from './components/ItemsSort';
import Films from '../Films';

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};

const emptyStyle = {
    background: 'white',
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
};

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onItemClick: () => { },
            ...props,
        };
        this.state.previousState = props.items;
    }
    componentDidMount() {
        // default sort
        this.changeItemsOrder({ sortByRating: true, sortByReleaseDate: false });
    }
    getItems = () => (Array.isArray(this.props.items) ? this.props.items : []);

    changeItemsOrder = ({ sortByRating = false, sortByReleaseDate = false }) => {
        if (!sortByRating && !sortByReleaseDate) {
            // TODO: revert sort
        } else {
            // mutation?
            this.getItems()
                .sort((a, b) => (sortByReleaseDate ? new Date(b.date) - new Date(a.date) : 0))
                .sort((a, b) => (sortByRating ? b.rating - a.rating : 0));
            this.setState(this.state);
        }
    };

    render() {
        if (!this.props.items || this.props.items.length === 0) {
            return (
                <div style={emptyStyle}>
                    <Empty />
                </div>
            );
        }
        return (
            <Fragment>
                <div style={statusBarStyle}>
                    <ItemsStatus items={this.getItems()} />
                    <span style={{ float: 'right' }}>
                        <ItemsSort
                            sortOrder={{ sortByRating: true, sortByReleaseDate: false }}
                            changeSortOrder={this.changeItemsOrder}
                        />
                    </span>
                </div>
                <Films items={this.getItems()} onItemClick={this.state.onItemClick} />
            </Fragment>
        );
    }
}

export default SearchResult;
