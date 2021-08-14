import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/images/rich_logo.png'
import { useSession, signOut } from 'next-auth/client';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Dashside() {
    const router = useRouter()
    const l = router.pathname;

    const [sess] = useSession();

    const l2 = "/friends";
    const l3 = "/analytics";

    const MyImage = sess.user.image;
    const [modalOpen, setModalOpen] = useState(false);

    if (l.startsWith(l2)) {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div className="card has-text-centered" id="s2">
                    <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
                    <Link href="./">
                        <a>
                            <div className="side py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div className="act py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div className="us py-5">
                        <Image
                            src={MyImage}
                            onClick={Mod}
                            className="cp"
                            alt="user3"
                            width={50}
                            height={50} />
                    </div>
                </div>
            </>
        )
    }
    if (l.startsWith(l3)) {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div className="card has-text-centered" id="s2">
                    <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
                    <Link href="./">
                        <a>
                            <div className="side py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div className="act py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div className="us py-5">
                        <Image
                            src={MyImage}
                            onClick={Mod}
                            className="cp"
                            alt="user3"
                            width={50}
                            height={50} />
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div className="card has-text-centered" id="s2">
                    <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
                    <Link href="./">
                        <a>
                            <div className="act py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div className="us py-5">
                        <Image
                            src={MyImage}
                            onClick={() => setModalOpen(!modalOpen)}
                            className="cp"
                            alt="user3"
                            width={50}
                            height={50} />
                    </div>
                    <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                        <div className=" modal-header">
                            <h5 className=" modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                aria-label="Close"
                                className=" close"
                                type="button"
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <ModalBody>You want to Log Out?</ModalBody>
                        <ModalFooter>
                            <Button
                                color="secondary"
                                type="button"
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                No
                            </Button>
                            <Button color="primary" type="button" onClick={signOut}>
                                Yes
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        )
    }
}