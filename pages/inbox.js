import React from 'react';

import Dashside from '../components/dashside';

const data = [
    {
        name: 'Amrit RG',
        type: 'Facebook DM',
        time: '10m',
        short: 'Awesome Product',
        msg: 'Hey there'
    },
    {
        name: 'Hiten Saxena',
        type: 'Facebook Post',
        time: '10m',
        short: 'Available in store?',
        msg: 'Hi do you have'
    }
]

export default function Dashboard() {
    return (
        <>
            <Dashside />
            <div className="columns is-gapless is-mobile" style={{ marginLeft: '90px' }}>
                <div class="column is-3">
                    <div class="card" style={{ height: '100%' }}>
                        <div class="card p-3" style={{ borderRadius: '0' }}>
                            <div className="columns is-gapless mx-2">
                                <div class="column is-1" style={{ color: '#C0C0C0' }}>
                                    <i class=" mt-3 fas fa-align-left icon"></i>
                                </div>
                                <div class="column is-size-3 has-text-weight-bold">
                                    Conversations
                                </div>
                                <div class="column is-1" style={{ color: '#8a8989' }}>
                                    <i class="fas fa-redo-alt mt-3 icon"></i>
                                </div>
                            </div>
                        </div>
                        {/* <br/> */}
                        <div class="card cbt" style={{ borderRadius: '0' }}>
                            {data.map((n) => {
                                return (
                                    <>
                                        <div class="card p-3 cbb" style={{ borderRadius: '0' }}>
                                            <div>{n.name}</div>
                                        </div>
                                        <br />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div class="column is-5">
                    <div class="card">
                        Conversations
                    </div>
                </div>
                <div class="column is-3"></div>
            </div>
        </>
    );
}