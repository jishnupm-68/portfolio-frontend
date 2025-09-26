
import Body from './publicUser/Body'
import Profile from './publicUser/Profile'

const PublicUserRouter = [
    {
      path:'/', element: <Body />,
      children:[
       { path:"/", element: <Profile />}
      ]
    }
  ]

export default PublicUserRouter