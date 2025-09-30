
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
import NpmModule from './contents/NpmModule'

const Body = () => {
  return (
    <div className='font-dancing'>
      {/* <Navbar />
      <Content />
      <Footer /> */}


      <div className="flex flex-col min-h-screen">
      <Navbar />
      <NpmModule/>
      <main className="flex-1">
        <Content />
      </main>
      
      <Footer />
    </div>


    </div>
  )
}

export default Body