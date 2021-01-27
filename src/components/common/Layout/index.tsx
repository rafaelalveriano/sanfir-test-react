import Drawer from './Drawer'
import React from 'react'

interface LayoutProps {
  title: string
  children: React.ReactChild | React.ReactChildren
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <Drawer title={title}>{children}</Drawer>
)

export default Layout
