import supabase from './supabase'

// GET USER
export function getUser() {
  return supabase.auth.user()
}

// SIGN IN
export async function signIn({ email }) {
  const {error} = await supabase.auth.signIn({ email }) // pass in email only for magiclink
  return {data: !error, error}
}

// SIGN OUT
export async function signOut() {
  const {error} = await supabase.auth.signOut()
  return {data: !error, error}
}
