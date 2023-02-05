import "dotenv/config";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID || "";
const authToken = process.env.TWILIO_AUTH_TOKEN || "";
const myNumber = process.env.MY_NUMBER || "";
const twilioNumber = process.env.TWILIO_PHONE_NUMBER || "";

const client = new Twilio(accountSid, authToken);

if (accountSid && authToken && myNumber && twilioNumber) {
    const client = new Twilio(accountSid, authToken)!;

    client.messages
    .create({
        from: twilioNumber,
        to: myNumber,
        body: "Here is your 2FA code for Substore: 28593",
    })
    .then((message) => console.log(message.sid));
} else {
    console.error(
            "You are missing one of the variables you need to send a message"
            );
}