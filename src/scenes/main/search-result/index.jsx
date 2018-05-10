import React, { Fragment, Component } from 'react';
import { ColumnsLayout } from './../../../components/layout';
import { ResultStatus } from './result-status';
import { ResultSort } from './result-sort';
import { Films } from './../films/index';
import { EmptyResult } from './empty-result';

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};

const emptyStyle = {
    background: 'white',
    alignItems: 'center',
    justifyContent: 'center',
};

const sortingControlsPosition = { float: 'right' };

export class SearchResult extends Component {
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
                <ColumnsLayout style={emptyStyle}>
                    <EmptyResult />
                </ColumnsLayout>
            );
        }
        return (
            <Fragment>
                <div style={statusBarStyle}>
                    <ResultStatus items={this.getItems()} />
                    <span style={sortingControlsPosition}>
                        <ResultSort
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
