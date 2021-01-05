import { connectHits } from 'react-instantsearch-dom';
import React, { Component } from 'react';

const Hits = ({ hits }) => (
    <React.Fragment>
        <table className="table">
            <tbody>
                {hits.map(hit => (
                    <tr key={hit.objectID}>
                        <td><b>{hit.name}</b></td>
                        <td>{hit.latex}</td>
                        <td>btn placeholder</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </React.Fragment>
);

const CustomHits = connectHits(Hits);

export default CustomHits;