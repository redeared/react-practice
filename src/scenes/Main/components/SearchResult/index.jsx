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
            sortByRating: true,
            sortByReleaseDate: false,
        };
    }
    getItems = () => (Array.isArray(this.props.items) ? this.props.items : []);

    getSortedItems = () => {
        const newItems = this.getItems().slice(0);
        newItems
            .sort((a, b) => (this.state.sortByReleaseDate ?
                new Date(b.date) - new Date(a.date) : 0))
            .sort((a, b) => (this.state.sortByRating ? b.rating - a.rating : 0));
        return newItems;
    };

    updateFilters = ({ sortByRating = false, sortByReleaseDate = false }) => {
        this.setState({
            sortByRating,
            sortByReleaseDate,
        });
    }
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
                            sortOrder={{
                                sortByRating: this.state.sortByRating,
                                sortByReleaseDate: this.state.sortByReleaseDate,
                            }}
                            changeSortOrder={this.updateFilters}
                        />
                    </span>
                </div>
                <Films items={this.getSortedItems()} onItemClick={this.props.onItemClick} />
            </Fragment>
        );
    }
}

export default SearchResult;
