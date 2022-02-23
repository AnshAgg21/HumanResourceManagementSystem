import React from 'react'
import { Typography } from '@mui/material';
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks
function HRDash() {

  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Welcome to HR Dashboard</Typography>
    </SideNav>
  )
}

export default HRDash