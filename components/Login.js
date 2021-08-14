import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { signin, signIn } from 'next-auth/client';
import Link from 'next/link';
import Image from 'next/image'

export default function Login() {
    
    // const [exp,setexp]=useState(null);
    // const router = useRouter()
    // const authenticate = event => {
    //   const n = event.target.name.value;
    //   const e = event.target.email.value;
    //   const p= event.target.ph.value;
    //   const obj={
    //     uname: n,
    //     email: e,
    //     phone: p
    //   };
    //   setexp(obj);
    //   router.push('/inbox')
    //   event.preventDefault()
    // }
  
    // console.log(exp);
  
    // const [ session, loading ] = useSession()
  
    return (
      <div className="wel" style={{ backgroundColor: '#004e96' }}>
        <br />
        <br />
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <p className="is-size-1 has-text-centered ht">Welcome to FB Helper</p>
            <br />
            <br />
            <div className="box">
              {/* <form>
              <p className="is-size-5 has-text-weight-semibold">Enter Name: <span style={{color: "red"}}>*</span></p>
                <br />
                <input id="name" className="input is-primary" type="text" autoComplete="name" required placeholder="Enter Name" />
                <br />
                <br />
                <p className="is-size-5 has-text-weight-semibold">Enter Email: <span style={{color: "red"}}>*</span></p>
                <br />
                <input id="email" className="input is-primary" type="text" autoComplete="email" required placeholder="Enter Email" />
                <br />
                <br/>
                <p className="is-size-5 has-text-weight-semibold">Enter Phone: </p>
                <br />
                <input id="ph" className="input is-primary" type="text" autoComplete="phone" placeholder="Enter Phone" />
                <br />
                <br />
                <div className="columns has-text-right">
                  <div className="column is-4 is-offset-8">
                    <button className="button is-rounded" id="b1" type="submit">Submit</button>
                  </div>
                </div>
              </form> */}
              <button className="button is-rounded" id="b1" onClick={signin}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  