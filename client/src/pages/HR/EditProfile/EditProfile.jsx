import React from 'react'
import { Typography } from '@mui/material'
import SideNav from '../../../components/SideNav/SideNav'
import { HRnavLinks } from '../../../utils/constants'
const navLinks = HRnavLinks

function EditProfile() {
  return (
    <SideNav links={navLinks}>
      <Typography variant="h4">Edit Profile</Typography>
    </SideNav>
  )
}

export default EditProfile