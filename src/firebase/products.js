import firebase from './index'
import "firebase/storage"
const storage = firebase.storage()
const storageRef = storage.ref()
let add = 0
const doAddFile = (file) => {

  console.log(add, "<-----------------------count from firebase")
  console.log(file, "<---from Firreee")
  add++
  console.log(add, "<-------------------------adding")
  return storageRef 
     .child(`${add} ${file.name}`)
     .put(file)
}

export {
  doAddFile
}
// doAddFile(e.target.files[0])
// .then(file => file.ref.getDownloadURL())
// .then(async url => {
//   const updateUser = await fetch(`/auth/users/${this.state.currentUser._id}`, {
//     method: "PUT",
//     body: JSON.stringify({imgUrl: url}),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   const updateUserJson = await updateUser.json()
//   this.doSetCurrentUser(updateUserJson)
// })