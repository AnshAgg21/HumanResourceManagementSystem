import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function CreateCampaign() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Create a Campaign</Typography>
    </SideNav>
  )
}

export default CreateCampaign