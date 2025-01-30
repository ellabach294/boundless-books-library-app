import { Outlet } from "react-router-dom"
import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <Outlet />
    </div>
  )
}

export default Home