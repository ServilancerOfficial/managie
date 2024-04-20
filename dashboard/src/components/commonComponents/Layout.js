import React from 'react';
import logo from "../../static/images/logo.png";
import { Divider } from 'primereact/divider';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

function Layout() {
  const items = [{ label: 'Dashboard' }, { label: 'Home' }];
  const home = { url: '/' }

  return (
    <div className='grid'>
      <div className='hidden md:block md:col-3 p-3'>
        <div class="text-center text-red p-3 border-round-lg bg-white font-bold ">
          <img src={logo} alt="Managie" width={"60%"} />
          <Divider />
        </div>
      </div>
      <div className='block col-12 md:col-9 p-3'>
        <div className='navbar'>
          <div>
            <BreadCrumb className="main_breadcrumb" model={items} home={home} />
            <h2 className='page_name'>Dashboard</h2>
          </div>
          <div className='p-3 navbar_menu'>
            <InputText className="p-inputtext-sm" placeholder='Search' />
            <FaUserCircle />
            <CiSettings />
            <FaBell />
          </div>
        </div>
        <div>Main Content</div>
      </div>
    </div>
  )
}

export default Layout;