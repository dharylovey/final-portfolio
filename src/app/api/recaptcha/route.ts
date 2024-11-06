import axios from 'axios';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const data = await req.json();
  const { token } = data;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!token) {
    return new Response('Bad request', { status: 400 });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    );

    if (response.data.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'Success to verify recaptcha' }),
        {
          status: 200,
        },
      );
    }

    return new Response(JSON.stringify({ success: false, message: 'Failed to verify recaptcha' }), {
      status: 400,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Internal server error' }), {
      status: 500,
    });
  }
}
