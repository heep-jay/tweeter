 
  interface Image {
    asset:{
        url:string
    }
}
 export type TweetBody = {
    text: string
    user: User
    profileImage: string
    image: Image
    imageUrl: string
 }
 export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    _uodatedAt: string
    _rev:string
    _type: 'tweet'
    blockTweet: boolean
 }


export interface Creator {
    _id: string
    username: string
    name: string
    bio: string
   
    image: Image
    bio: string
}
interface User{
    _id: string
    username: string
    name: string
    bio: string

}