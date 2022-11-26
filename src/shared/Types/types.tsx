export interface User{
  id: number,
  name: string,
  userType: string,
}

export interface LoginRequest {
  email: string,
  password: string,
}

export interface TypeTopic {
  id?: number,
  title: string,
  description: string,
  creationDate: Date,
  userName: string
  numberOfComments:{Comment: number}
}

export interface CreateTopic {
  title: string,
  description: string,
  userId?: number
}