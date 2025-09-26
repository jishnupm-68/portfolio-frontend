
import AdminBody from './admin/AdminBody'
import Skill from './admin/skill/Skill'
import Education from './admin/content/Education'
import Project from './admin/content/Project'
import AdminProfile from './admin/content/AdminProfile'
import Login from './admin/Login'
import ProtectRoute from './admin/ProtectRoute'
import AddSkill from './admin/skill/AddSkill'
import NpmModule from './admin/npmModule/npmModule'
import AddNpmModule from './admin/npmModule/AddNpmModule'

const AdminRouter =  [
    {
            // path:"/admin" , element:<ProtectRoute><AdminBody /></ProtectRoute> ,
            path:"/admin", element: <AdminBody />,
            
            children:[
                
                {path:"/admin/profile", element:<AdminProfile />},
                {path:"/admin/skill", element:<Skill />},
                {path:"/admin/skill/addSkill", element:<AddSkill />},
              
                {path:"/admin/education", element:<Education />},
                {path:"/admin/project", element:<Project />},
                {path:"/admin/npmModule", element:<NpmModule />},
                {path:"/admin/npmModule/addNpmModule", element:<AddNpmModule />}

                
                
                
            ]
        },

        {
            path:"/admin/login" , element:<Login />
        }
    ]

export default AdminRouter