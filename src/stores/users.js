import { defineStore } from 'pinia'
import { ref } from 'vue'
// // firebase
// import { DB, AUTH} from '@/utils/firebase'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
// import { isAdmin } from '@firebase/util'

const DEFAULT_USER = {
  uid: null,
  email: null,
  firstname: null,
  lastname: null,
  isAdmin: null
}

export const useUserStore = defineStore('users', () => {
    const users = {
      user: DEFAULT_USER,
      // auth: false
    }
    
    const auth = ref(true)

     const tabs = ref(['Profile', 'Articles', 'Add Articles']);
     
     const vee = ref (
      {
        first: '',
        last: '',
        email: ''
      }
    )

    //  const currentTab = ref('profile')
     
  
// const register = async(formData) => {
//   try {
//     const response = await createUserWithEmailAndPassword(
//       AUTH,
//       formData.email,
//       formData.password
//     )
//     const newUser = {
//       uid: response.user.uid,
//       email: response.user.email,
//       isAdmin: false
//     }
//     await setDoc(doc(DB, 'users', response.user.uid), newUser)

    
//   } catch(error) {
//       throw new error(error.code)
//   }
// };

  return { DEFAULT_USER, users, auth, tabs, vee }
})
