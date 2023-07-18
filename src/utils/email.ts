import emailjs from 'emailjs-com';

async function sendEmail(
  name: string,
  phone: string,
  email: string,
  company: string,
  demand: string,
  comment: string
) {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  try {
    await emailjs.send('service_12smlo1', 'template_mk1zlko', {
      name,
      phone,
      email,
      company,
      demand,
      comment,
    });

    return true;
  } catch (err) {
    return err;
  }
}

export default sendEmail;
