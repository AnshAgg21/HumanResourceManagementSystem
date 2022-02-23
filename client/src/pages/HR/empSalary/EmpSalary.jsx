import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function EmpSalary() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Manage Employee Salary</Typography>
    </SideNav>
  )
}

export default EmpSalary