const mailchimp = require("@mailchimp/mailchimp_marketing");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const listId = process.env.LIST_ID;

async function addContact(req, res) {
  console.log("inside addContact of API");
  const email = req.body.email;


  mailchimp.setConfig({
    apiKey: apiKey,
    server: server,
  });


  const response = await mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: "subscribed",
  });

  console.log("response", response);

  const { status, detail } = response;

  if(status !== "subscribed") {
    console.error("Error: ", { status, detail });

    return { status: "Error", detail: "Unable to add contact." };
  }

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );

  return { status: "Success", detail: "Contact successfully added." };
}

export default addContact;
