import axios from 'axios';

export async function handleCaptchaSubmission(token: string | null) {
  try {
    if (token) {
      await axios.post(
        '/api/recaptcha',
        { token },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      return true; // Verification successful
    }
    return false; // No token provided
  } catch {
    return false; // Verification failed
  }
}
