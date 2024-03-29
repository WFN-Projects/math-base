import { connectHits } from 'react-instantsearch-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import React from 'react';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Hits = ({ hits }) => (
    <React.Fragment>
        <table className="table">
            <tbody>
                {hits.map(hit => (
                    <tr key={hit.objectID}>
                        <td width="150"><b>{hit.name}</b></td>
                        <td width="auto"><InlineMath math={hit.latex}/></td>
                        <td width="150">
                            <CopyToClipboard text={hit.latex}>
                            <button type="button" class="btn btn-outline-secondary">Copy LaTeX</button>
                            </CopyToClipboard>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </React.Fragment>
);

const CustomHits = connectHits(Hits);

export default CustomHits;