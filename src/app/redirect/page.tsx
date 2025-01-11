'use server'
import RedirectPage from './RedirectPage'
import { auth } from '@/auth'

const Redirect = async () => {
  const session = await auth()

  return (
    <RedirectPage session={session} />
  )
}

export default Redirect;
