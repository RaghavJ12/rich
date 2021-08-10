import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Dashside from '../components/dashside';
import { BorderAll } from '@material-ui/icons';

const data = [
    {
        id: 1,
        fname: 'Amit',
        lname: 'RG',
        type: 'Facebook DM',
        time: '10m',
        short: 'Awesome Product',
        msg: 'Hey there! I probably did one of the bes...',
        pic: './images/user1',
        status: 'online',
        email: 'amit@richpanel.com'
    },
    {
        id: 2,
        fname: 'Hiten',
        lname: 'Saxena',
        type: 'Facebook Post',
        time: '10m',
        short: 'Available in store?',
        msg: 'Hi do you have any T-Shirt available in st...',
        pic: './images/user2',
        status: 'offline',
        email: 'hiten@richpanel.com'
    }
]

export default function Dashboard() {
    const [user, setuser] = useState(1);

    function getuser(n) {
        setuser(n);
    }
    console.log(user);

    // useEffect(() => {
    //     s
    // });

    return (
        <>
            <Dashside />
            <div className="columns is-gapless is-mobile" style={{ marginLeft: '82px' }}>
                <div class="column is-3">
                    <div class="card" style={{ height: '100vh' }}>
                        <div class="card p-3" style={{ borderRadius: '0' }}>
                            <div className="columns is-gapless mx-2">
                                <div class="column is-1" style={{ color: '#C0C0C0' }}>
                                    <i class=" mt-3 fas fa-align-left icon"></i>
                                </div>
                                <div class="column is-size-4 mt-1 has-text-weight-bold">
                                    Conversations
                                </div>
                                <div class="column is-2 is-offset-1 mt-2">
                                    <button class="redo"><Link href="./inbox"><i class="fas fa-redo-alt icon is-medium px-1 r1" style={{ color: '#8a8989' }}></i></Link></button>
                                </div>
                            </div>
                        </div>
                        <div class="columns is-gapless is-multiline card cbt is-fullwidth" style={{ borderRadius: '0' }}>
                            {data.map((n) => {
                                return (
                                    <a>
                                        {/* <a> */}
                                        <div id="sel">
                                            <div class="card py-3 px-5 cbb column is-full mr-2" style={{ borderRadius: 0 }}>
                                                <div class="columns">
                                                    <div class="column is-1">
                                                        <input type="checkbox" />
                                                    </div>
                                                    <div class="column is-6">
                                                        <p class="has-text-weight-bold">{n.fname} {n.lname}</p>
                                                        <p class="has-text-weight-semibold">{n.type}</p>
                                                    </div>
                                                    <div class="column is-1 is-offset-3 has-text-weight-semibold">{n.time}</div>
                                                </div>
                                                <p style={{ marginTop: '-15px' }}>
                                                    <p class="has-text-weight-semibold">{n.short}</p>
                                                    <p class="pr-3" style={{ color: '#8a8989' }}>{n.msg}</p>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div class="card mid" style={{ height: '100vh' }}>
                        <div class="card p-4 cbb" style={{ borderRadius: '0' }}>
                            <p class="is-size-4 has-text-weight-bold mx-2">Amit RG</p>
                        </div>
                        <div style={{ height: '80vh' }}></div>
                        <div class="columns">
                            <div class="column is-11">
                                <input id="name" class="input is-info mx-5" type="text" required placeholder="Message Hiten Saxena" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="card cbb pb-5">
                        <div class="columns pt-4 is-multiline">
                            <div class="column is-3 is-offset-5">
                                <img src='./images/user1.jfif' class="dp"></img>
                            </div>
                            <div class="column is-5 is-offset-5">
                                <p class="is-size-5 has-text-weight-bold" style={{ marginTop: '-20px' }}>Amit RG</p>
                            </div>
                            <div class="column is-5 is-offset-5">
                                <p class="is-size-6 ml-2" style={{ marginTop: '-20px', color: '#8a8989' }}><i class="fas fa-circle icon is-small pr-2"></i>Offline</p>
                            </div>
                        </div>
                        <div class="columns is-mobile">
                            <div class="column is-3 is-offset-3">
                                <button class="button"><i class="fas fa-phone fa-rotate-180 mr-2"></i>Call</button>
                            </div>
                            <div class="column is-3">
                                <button class="button"><i class="fas fa-user-circle icon mr-2" aria-hidden="true"></i>Profile</button>
                            </div>
                        </div>
                    </div>
                    <div class="card m-4 p-4" style={{ border: '1px solid #D3D3D3' }}>
                        <p class="has-text-weight-semibold is-size-5 mb-3">Customer Details</p>
                        <div class="columns is-mobile is-multiline is-size-6">
                            <div class="column is-4 tg">Email</div>
                            <div class="column is-8 has-text-right"><p class="has-text-weight-semibold">amit@richpanel.com</p></div>
                            <div class="column is-4 tg">First Name</div>
                            <div class="column is-8 has-text-right"><p class="has-text-weight-semibold">Amit</p></div>
                            <div class="column is-4 tg">Last Name</div>
                            <div class="column is-8 has-text-right"><p class="has-text-weight-semibold">RG</p></div>
                        </div>
                        <a class="vd">View more details</a>
                    </div>
                </div>
            </div>
        </>
    );
}