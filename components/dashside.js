import React, { useState } from 'react';
import LayoutDash from './dashlay';
import Image from 'next/image'
import user3pic from '../public/images/user3.jpeg'
import logo from '../public/images/rich_logo.png'

export default function Dashside() {

    return (
        <>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            <div className="card has-text-centered" id="s2">
                <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>

                <LayoutDash />

                <div className="us py-5"><Image src={user3pic} className="cp" alt="user3" width={50} height={50} /><i className="fas fa-circle icon ind pt-1" aria-hidden="true"></i></div>
            </div>
        </>
    )
}

// export default function Dashside() {
//     const router = useRouter()
//     const l = router.pathname;


//     const l1 = "/inbox";
//     const l2 = "/friends";
//     const l3 = "/analytics";

//     if (l.startsWith(l1)) {
//         return (
//             <>
//                 <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
//                 <div className="card has-text-centered" id="s2">
//                     <div className="sidex py-4"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
//                     <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
//                     <Link href="./inbox">
//                         <a>
//                             <div className="act py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./friends">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./analytics">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <div className="us py-5"><img src='./images/user3.jpeg' className="cp ml-2" /><i className="fas fa-circle icon ind pt-1" aria-hidden="true"></i></div>
//                     <div className="us py-5"><Image src={user3pic} className="cp" alt="user3" width={50} height={50}/><i className="fas fa-circle icon ind pt-1" aria-hidden="true"></i></div>
//                 </div>
//             </>
//         )
//     }
//     if (l.startsWith(l2)) {
//         return (
//             <>
//                 <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
//                 <div className="card has-text-centered" id="s2">
//                     <div className="sidex py-5"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
//                     <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
//                     <Link href="./inbox">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./friends">
//                         <a>
//                             <div className="act py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./analytics">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <div className="side py-5"><i className="fas fa-user-circle icon is-medium" aria-hidden="true"></i></div>
//                     <div className="us py-5"><Image src={user3pic} className="cp" alt="user3" width={50} height={50}/><i className="fas fa-circle icon ind pt-1" aria-hidden="true"></i></div>
//                 </div>
//             </>
//         )
//     }
//     if (l.startsWith(l3)) {
//         return (
//             <>
//                 <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
//                 <div className="card has-text-centered" id="s2">
//                     <div className="sidex py-5"><img src="/images/rich_logo.png" style={{ height: '40px' }} /></div>
//                     <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>
//                     <Link href="./inbox">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./friends">
//                         <a>
//                             <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <Link href="./analytics">
//                         <a>
//                             <div className="act py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
//                         </a>
//                     </Link>
//                     <div className="side py-5"><i className="fas fa-user-circle icon is-medium" aria-hidden="true"></i></div>
//                     <div className="us py-5"><Image src={user3pic} className="cp" alt="user3" width={50} height={50}/><i className="fas fa-circle icon ind pt-1" aria-hidden="true"></i></div>
//                 </div>
//             </>
//         )
//     }
// }