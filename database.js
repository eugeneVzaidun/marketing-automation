require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

(async () => {
  // const response = await notion.databases.query({
  //   database_id: process.env.NOTION_DATABASE_ID,
  //   query: {
  //     filter: {},
  //   },
  // });
  // console.log(JSON.stringify(response));
  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: { content: "Hello, world!" },
          },
        ],
      },
      Date: {
        date: {
          start: new Date().toISOString().split("T")[0],
        },
      },
    },
  });
})();
