import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function HrReimb() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">HR vouchers</Typography>
    </SideNav>
  )
}

export default HrReimb