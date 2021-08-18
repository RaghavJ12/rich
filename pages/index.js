import { useRouter } from 'next/router'
import Image from 'next/image'
import main from '../public/images/rich_inv_logo.png'

export default function Home() {
  const router = useRouter()
  const authenticate = event => {
    const id = event.target.name.value;
    event.preventDefault()
    if (id === 'b.b.raghav29@gmail.com' || id === 'shubhanshu@richpanel.com' || id === 'manoj@richpanel.com') {
      router.push('/inbox')
    }
    else {
      alert("Sorry you are not authorized.");
    }
  }
  return (
    <div className="wel" style={{ backgroundColor: '#004e96' }}>
      <br />
      <br />
      <div className="columns">
        <div className="column is-2 is-offset-1">
          <Image src={main} height={500} />
        </div>
        <div className="column is-4 is-offset-2">
          <p className="is-size-1 has-text-centered ht">Welcome to FB Helper</p>
          <br />
          <br />
          <div className="box">
            <form onSubmit={authenticate}>
              <p className="is-size-5 has-text-weight-semibold">Enter Email:</p>
              <br />
              <input id="name" className="input is-primary" type="text" autoComplete="email" required placeholder="Enter Email" />
              <br />
              <br />
              <div className="columns has-text-right">
                <div className="column is-4 is-offset-8">
                  <button className="button is-rounded" id="b1" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Link href="./inbox"><a>
        <button className="is-size-5">Accepted</button>
      </a></Link> */}
    </div>
  )
}