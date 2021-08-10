import Link from 'next/link';
import { useRouter } from 'next/router'

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
    <div class="wel" style={{ backgroundColor: '#004e96' }}>
      <br />
      <br />
      <div class="columns">
        <div class="column is-2 is-offset-1">
          <div><img src="/images/rich_inv_logo.png" style={{ height: '200px' }} /></div>
        </div>
        <div class="column is-4 is-offset-2">
          <p class="is-size-1 has-text-centered ht">Welcome to FB Helper</p>
          <br />
          <br />
          <div class="box">
            <form onSubmit={authenticate}>
              <p class="is-size-5 has-text-weight-semibold">Enter Email:</p>
              <br />
              <input id="name" class="input is-primary" type="text" autoComplete="email" required placeholder="Enter Email" />
              <br />
              <br />
              <div class="columns has-text-right">
                <div class="column is-4 is-offset-8">
                  <button class="button is-rounded" id="b1" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Link href="./inbox"><a>
        <button class="is-size-5">Accepted</button>
      </a></Link> */}
    </div>
  )
}
