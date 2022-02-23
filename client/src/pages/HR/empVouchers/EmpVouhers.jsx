import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function EmpVouchers() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Employee Voucher History</Typography>
    </SideNav>
  )
}

export default EmpVouchers