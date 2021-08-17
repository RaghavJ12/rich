import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function LayoutDash() {

    const router = useRouter()
    const l = router.pathname;
    // const l2 = "/friends";
    // const l3 = "/analytics";

    return (
        <>
            <Link href="./">
                <a>
                    <div className="act py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                </a>
            </Link>
            <Link href="./#">
                <a>
                    <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                </a>
            </Link>
            <Link href="./#">
                <a>
                    <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                </a>
            </Link>
        </>
    )
}