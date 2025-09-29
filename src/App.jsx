
import PublicUserRouter from "./components/PublicUserRouter"
import AdminRouter from "./components/AdminRouter"
import { createBrowserRouter, RouterProvider } from "react-router"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"

const App = () => {

  const router = createBrowserRouter([...PublicUserRouter, ...AdminRouter])

 
  return (

    <>
    
    <Provider store={appStore}><RouterProvider router={router}></RouterProvider></Provider>
    </>
  )
}

export default App