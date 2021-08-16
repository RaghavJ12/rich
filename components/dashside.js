import React, { useState } from 'react';
import Layout from './dashlay';
import Image from 'next/image';
import logo from '../public/images/fb-w.png'
import { useSession, signOut } from 'next-auth/client';
import { Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Dashside() {

    const [sess] = useSession();
    const MyImage = sess.user.image;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            <div className="card has-text-centered" id="s2">
                <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>

                <Layout />

                <div className="us py-5">
                    <Image
                        src={MyImage}
                        onClick={() => setModalOpen(!modalOpen)}
                        className="cp"
                        alt="user3"
                        width={50}
                        height={50} />
                </div>
            </div>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} className="mr">
                <div className="card p-3 mrend" style={{ width: '60%' }}>
                    <div className="modal-header">
                        <div className="modtop columns">
                            <div className="column is-1 is-offset-11">
                                <div
                                    aria-label="Close"
                                    className="close"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    <span aria-hidden={true} style={{ cursor: 'pointer' }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-mobile is-multiline is-gapless">
                            <div className="column is-4 is-offset-4">
                                <div class="gradient-avatar">
                                    <Image class="gradient-avatar__image" src={MyImage} width={130} height={130} /></div>
                            </div>
                            <div className="column is-6 is-offset-3 has-text-centered">
                                <p className="has-text-weight-semibold is-size-5 py-2">{sess.user.name}</p>
                            </div>
                            <div className="column is-6 is-offset-3 has-text-centered"><p className="is-size-6" style={{ color: 'green' }}><i className="fas fa-circle icon is-small pr-2"></i>Online</p></div>
                        </div>
                    </div>
                    <br />
                    <ModalBody>
                        <p className="has-text-weight-semibold is-size-5 has-text-centered">You want to Log Out?</p>
                    </ModalBody>
                    <br />
                    <ModalFooter>
                        <div className="columns is-mobile">
                            <div className="column is-6 has-text-centered">
                                <button
                                    className="button is-medium"
                                    style={{ minWidth: '8vw' }}
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Go Back
                                </button>
                            </div>
                            <div className="column is-6 has-text-centered">
                                <button className="button is-medium" id="so" style={{ minWidth: '8vw' }} onClick={signOut}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </ModalFooter>
                    <br />
                </div>
            </Modal>
        </>
    )
}