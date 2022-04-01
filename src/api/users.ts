import baseApi from './baseApi'

const fetchUsers = {
   async getUsers() {
      const data = await baseApi.get('users')
      return data.data
    }
}

export default fetchUsers