import firebaseConfig from "./config"
import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"

app.initializeApp(firebaseConfig)

export const auth = app.auth();
export const firestore = app.firestore();

const google_provider = new app.auth.GoogleAuthProvider();
google_provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle =()=> auth.signInWithPopup(google_provider);

const facebook_provider = new app.auth.FacebookAuthProvider();
facebook_provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithFacebook =()=> auth.signInWithPopup(facebook_provider);

class Firebase {
  constructor() {
    if (!firebaseInstance) {
      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }

  getUserProfile({ userId, onSnapshot }) {
    return this.db
      .collection("publicProfiles")
      .where("userId", "==", userId)
      .limit(1)
      .onSnapshot(onSnapshot)
  }

  async createAuthor({ authorName }) {
    const createAuthorCallable = this.functions.httpsCallable("createAuthor")
    return createAuthorCallable({
      authorName,
    })
  }

  async getAuthors() {
    return this.db.collection("authors").get()
  }

  async createBook({ bookName, authorId, bookCover, summary }) {
    const createBookCallable = this.functions.httpsCallable("createBook")
    return createBookCallable({
      bookName,
      authorId,
      bookCover,
      summary,
    })
  }

  async register({ email, password, username }) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    const createProfileCallable = this.functions.httpsCallable(
      "createPublicProfile"
    )
    return createProfileCallable({
      username,
    })
  }

  async postComment({ text, bookId }) {
    const postCommentCallable = this.functions.httpsCallable("postComment")
    return postCommentCallable({
      text,
      bookId,
    })
  }

  subscribeToBookComments({ bookId, onSnapshot }) {
    const bookRef = this.db.collection("books").doc(bookId)
    return this.db
      .collection("comments")
      .where("book", "==", bookRef)
      .orderBy("dateCreated", "desc")
      .onSnapshot(onSnapshot)
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)  
  }

  async logout() {
    await this.auth.signOut()
    
  }
}

let firebaseInstance

function getFirebaseInstance() {
  if (!firebaseInstance) {
    firebaseInstance = new Firebase(app)
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
