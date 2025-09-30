
import AdminBody from './admin/AdminBody'
import Skill from './admin/skill/Skill'
import Education from './admin/education/Education'
import AdminProfile from './admin/content/AdminProfile'
import Login from './admin/Login'
import ProtectRoute from './admin/ProtectRoute'
import AddSkill from './admin/skill/AddSkill'
import NpmModule from './admin/npmModule/NpmModule'
import AddNpmModule from './admin/npmModule/AddNpmModule'
import AddEducation from './admin/education/AddEducation'
import EditEducation from './admin/education/EditEducation'
import Project from './admin/project/Project'
import AddProject from './admin/project/AddProject'
import EditProject from './admin/project/EditProject'


const AdminRouter = [
    {
        path: "/admin/login", element: <Login />
    },
    {
        element: <ProtectRoute />,
        children: [
            {
                path: "admin", element: <AdminBody />,
                children: [
                    { path: "/admin/profile", element: <AdminProfile /> },
                    { path: "/admin/skill", element: <Skill /> },
                    { path: "/admin/skill/addSkill", element: <AddSkill /> },
                    { path: "/admin/education", element: <Education /> },
                    { path: "/admin/education/addEducation", element: <AddEducation /> },
                    { path: "/admin/education/editEducation", element: <EditEducation /> },
                    { path: "/admin/project", element: <Project /> },
                    { path: "/admin/project/addProject", element: <AddProject /> },
                    { path: "/admin/project/editProject", element: <EditProject /> },
                    { path: "/admin/npmModule", element: <NpmModule /> },
                    { path: "/admin/npmModule/addNpmModule", element: <AddNpmModule /> }
                ]
            }
        ]
    },
]

export default AdminRouter



