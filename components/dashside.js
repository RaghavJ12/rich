import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Dashside() {
    const router = useRouter()
    const l = router.pathname;


    const l1 = "/inbox";
    const l2 = "/friends";
    const l3 = "/analytics";

    if (l.startsWith(l1)) {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div class="card has-text-centered" id="s2">
                    <div class="sidex py-4"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
                    <Link href="./inbox">
                        <a>
                            <div class="act py-5"><i class="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div class="side py-5"><i class="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div class="side py-5"><i class="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div class="us py-5"><i class="fas fa-user-circle icon is-medium" aria-hidden="true"></i></div>
                </div>
            </>
        )
    }
    if (l.startsWith(l2)) {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div class="card has-text-centered" id="s2">
                    <div class="sidex py-5"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
                    <Link href="./inbox">
                        <a>
                            <div class="side py-5"><i class="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div class="act py-5"><i class="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div class="side py-5"><i class="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div class="side py-5"><i class="fas fa-user-circle icon is-medium" aria-hidden="true"></i></div>
                </div>
            </>
        )
    }
    if (l.startsWith(l3)) {
        return (
            <>
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <div class="card has-text-centered" id="s2">
                    <div class="sidex py-5"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
                    <Link href="./inbox">
                        <a>
                            <div class="side py-5"><i class="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div class="side py-5"><i class="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div class="act py-5"><i class="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                        </a>
                    </Link>
                    <div class="side py-5"><i class="fas fa-user-circle icon is-medium" aria-hidden="true"></i></div>
                </div>
            </>
        )
    }
}