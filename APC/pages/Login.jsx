import { useState } from 'react';
import styles from '../styles/FuelQuoteForm.module.css';

const SigninForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform custom validation
    if (username.length < 3) {
      setErrorMessage('Username must be at least 3 characters long.');
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      return;
    }

    

    // If all validations pass, submit the form
    const formData = {
      username,
      password,
     
    };

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label className={styles['label']} htmlFor="username">Username</label>
        <input
          minLength="3"
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label className={styles['label']} htmlFor="password">Password</label>
        <input
          minLength="5"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
     
	  <br />
       <div className={styles['form-group']}>
          <button className={styles['button']} type="submit">
            Submit
          </button>
		<a href="New-Login" className={`${styles['link']} ${styles['underline']}`} style={{ color: 'blue', marginLeft: '10px', fontSize: 'smaller' }}>
  Create a New Account
</a>


        </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default SigninForm;
