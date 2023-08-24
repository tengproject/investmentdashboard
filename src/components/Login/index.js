// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';

// const Login = () => {
//   return (
//     <Container maxWidth='lg' style={{ margin: '20px', textAlign: 'center'}}>
//       <h1>Teng's Portfolio Dashboard</h1>
//       <div>
//         <TextField
//           id="username"
//           label="Username"
//           variant="outlined"
//           margin="normal"
    
//         />
//       </div>
//       <div>
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           variant="outlined"
//           margin="normal"
    
//         />
//       </div>
//       <div>
//         <Button variant="contained" color="primary">
//         <Link to="/dashboard">Login</Link>
//         </Button>
//       </div>
//       <p>Username: Demo</p>
//       <p>Password: Password</p>
//       </Container>
//   );
// };

// export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'demo' && password === 'password') {
      // Redirect the user to the dashboard
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <Container maxWidth='lg' style={{ margin: '20px', textAlign: 'center'}}>
      <h1>Teng Portfolio Dashboard</h1>
      <div>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <p>Username: demo</p>
      <p>Password: password</p>
      </Container>
  );
};

export default Login