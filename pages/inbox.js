import React from 'react';

import Dashside from '../components/dashside';
export default function Dashboard() {
    return (
        <>
            <div className="columns">
                <div class="column is-1">
                    <Dashside />
                </div>
                <div class="column is-11">
                    hi
                </div>
            </div>
        </>
    );
}