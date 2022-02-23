import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function HrLeave() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">HR Leaves and attendance</Typography>
    </SideNav>
  )
}

export default HrLeave