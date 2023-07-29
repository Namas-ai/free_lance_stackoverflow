import twilio from 'twilio';
import dotenv from 'dotenv'
dotenv.config()

const accountSid = process.env.TWILIO_TOKEN;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendOTP = (user) => {
  // console.log(user);
  client.messages
  .create({
     body: user.otp+'This is the OTP from Stackoverflow clone',
     from: '+14175053515',
     to: user.phno
   })
    .then(message => console.log(message.sid))
    .then((verification) => {
      console.log('OTP Send SUccess');
      return true;
    })
    .catch((error) => {
      console.log('OTP Send failed', error);
      return false;
    });
}

export default sendOTP;