const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const listId = process.env.LIST_ID;

async function addContact(req, res) {
  const email = req.body.email;

  mailchimp.setConfig({
    apiKey: apiKey,
    server: server,
  });
  
  const subscribers = await mailchimp.lists.getListMembersInfo(listId);
  const member = subscribers.members.filter(member => member.email_address === email);
  try {
    if(member.length === 0) {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed"
      });

      res.status(200).json({ status: response.status, detail: "User successfully subscribed." })
    }

    else if(member[0].status === "unsubscribed") {
      const subscriberHash = md5(email);
      const response = await mailchimp.lists.updateListMember(listId, subscriberHash, {
        status: "subscribed"
      });
      console.log("response for member update", response);
      res.status(200).json({ status: "subscribed", detail: "User successfully subscribed." })
    }

    else if(member[0].status === "subscribed") {
      console.log("already subscribed backend");
      res.status(400).json({ status: "already subscribed", detail: "You are already subscribed." })
    }
  } catch(err) {
    console.error(err, err.stack);
    res.status(400).json({ error: err });
  }
}

export default addContact;
