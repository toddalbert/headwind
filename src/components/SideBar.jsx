import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="24" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="24" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  )
}

function SideBarIcon({ icon, text = 'tooltip 💡' }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}


const Divider = () => <hr className="sidebar-hr" />;