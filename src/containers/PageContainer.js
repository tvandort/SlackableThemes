import React from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import ColorPicker from '../components/ColorPicker';

const PageContainer = props => {
  return (
    <div>
      <SideBar />
      <DashBoard />
      <ColorPicker />
    </div>
  )
}

export default PageContainer;