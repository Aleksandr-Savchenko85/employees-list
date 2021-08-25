import axios from 'axios'

const baseURL = 'https://608aaca2737e470017b73ae6.mockapi.io'

// ---FETCH USERS----//
export const getUsersList = async () => {
  const url = `${baseURL}/users`
  let response = {}
  try {
    response = await axios.get(url)
  } catch (error) {
    console.log('Failed get users')
    throw error
  }
  return response.data
}
