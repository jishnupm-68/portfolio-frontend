
import Body from './publicUser/Body'
import Education from './publicUser/contents/Education'
import ProfileCard from './publicUser/contents/ProfileCard'
import Project from './publicUser/contents/Project'
import Skill from './publicUser/contents/Skill'

const PublicUserRouter = [
  {
    path: '/', element: <Body />,
    children: [
      { path: "/", element: <ProfileCard /> },
      { path: "/profile", element: <ProfileCard /> },
      { path: "/project", element: <Project /> },
      { path: "/education", element: <Education /> },
      { path: "/skill", element: <Skill /> }
    ]
  }
]

export default PublicUserRouter