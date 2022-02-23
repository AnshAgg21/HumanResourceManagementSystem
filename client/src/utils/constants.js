import InboxIcon from '@mui/icons-material/Inbox'

export const HRnavLinks = [
  {
    main: 'Dashboard',
    icon: <InboxIcon />,
    collapsible: false,
    url: '/hr'
  },
  {
    main: 'Profile',
    subhead: [
      { title: 'Edit Profile', url: '/hr/editprofile'}, 
      { title: 'Apply for Leave', url: '/hr/leave'}, 
      { title: 'Reimbursement Voucher', url: '/hr/reimb'}, 
      { title: 'Salary Management', url: '/hr/salary'},
    ],
    icon: <InboxIcon />,
    collapsible: true,
    url: '#'
  },
  {
    main: 'Job Portal',
    subhead: [
      { title: 'Create Campaign', url: '/hr/createCampaign' },
      { title: 'Manage Campaigns', url: '/hr/manageCamp' },
    ],
    icon: <InboxIcon />,
    collapsible: true,
  },
  {
    main: 'Employee Portal',
    subhead: [
      { title: 'Voucher Applications', url: '/hr/empVouchers' },
      { title: 'Leave Applications', url: '/hr/empLeaves' },
      { title: 'Manage Employees', url: '/hr/manageEmp' },
      { title: 'Salary Management', url: '/hr/empSalary' },
    ],
    icon: <InboxIcon />,
    collapsible: true,
  },
]