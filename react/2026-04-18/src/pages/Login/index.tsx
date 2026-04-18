import React, {useState} from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from 'react-toastify';
import api from "../../plugins/axios.ts";
import { useNavigate } from "react-router";

interface UserInfo {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: 'bangtx@test.com',
    password: '12345678'
  })

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const onSignIn = async () => {
    try {
      const {data} = await api.post('/auth/signin', userInfo)
      const {accessToken, refreshToken} =  data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      navigate('/')
    } catch (e) {
      toast.error("user or pass is incorrect")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              value={userInfo.email}
              onChange={onInput}
              name={'email'}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={userInfo.password}
              name={'password'}
              onChange={onInput}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={onSignIn}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid size={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid size={12}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;