import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function EmpLeaves() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Manage Employee Leaves</Typography>
    </SideNav>
  )
}

export default EmpLeaves