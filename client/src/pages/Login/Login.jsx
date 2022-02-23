import React from 'react'
import { Card, Box, TextField, Typography, Button, Link } from '@mui/material'
import styles from './index.module.scss'

function Login() {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.loginCard}>
        <Box className={styles.img}/>
        <Box className={styles.cardContent}>
          <Typography className={styles.heading}>Welcome Back!</Typography>
          <TextField variant="outlined" className={styles.input} />
          <TextField variant="outlined" className={styles.input} />
          <div style={{ display: 'flex' }}>
            <input type="checkbox"/>
            <Typography className={styles.rememberMe} variant="paragraph">Remember Me</Typography>
          </div>
          <Button className={styles.loginButton}>Login</Button>
          <hr className={styles.divider} />
          <Button className={styles.googleButton}>Login with Google</Button>
          <Button className={styles.facebookButton}>Login with Facebook</Button>
          <hr className={styles.divider} />
          <Link className={styles.links} href="#">Forgot Password?</Link>
          <Link className={styles.links} href="#">Create an Account!</Link>
        </Box>
      </Card>
    </div>
  )
}

export default Login