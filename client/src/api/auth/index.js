import { url } from "constant/url"

const signin = async (user) => {
    try {
        let response = await fetch( url.baseUrl + url.port + '/auth/signin/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // credentials: 'include',
          body: JSON.stringify(user)
        })
        return await response.json()
      } catch(err) {
        console.log(err)
      }
}
  
const signout = async () => {
try {
    let response = await fetch( url.baseUrl + url.port + '/auth/signout/', { method: 'GET' })
    return await response.json()
} catch(err) {
    console.log(err)
}
}

export {
    signin,
    signout
}