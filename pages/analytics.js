import React from 'react';

import Dashside from '../components/dashside';
export default function Dashboard() {
    return (
        <>
            <div classNameName="columns">
                <div className="column is-1">
                    <Dashside />
                </div>
                <div className="column is-11 is-size-3">
                    Hello, this is sample analytics page.
                </div>
            </div>
        </>
    );
}