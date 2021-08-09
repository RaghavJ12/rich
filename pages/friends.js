import React from 'react';

import Dashside from '../components/dashside';
export default function Dashboard() {
    return (
        <>
            <div className="columns">
                <div class="column is-1">
                    <Dashside />
                </div>
                <div class="column is-11 is-size-3">
                    Hello, this is sample friends page.
                </div>
            </div>
        </>
    );
}