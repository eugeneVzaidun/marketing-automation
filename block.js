require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

//
(async () => {
  await notion.blocks.children.append({
    block_id: "8a345e82-15ad-45b5-a1ed-006b49eda54f",
    children: [
      {
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Lacinato kale",
              },
            },
          ],
        },
      },
      {
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                link: {
                  url: "https://en.wikipedia.org/wiki/Lacinato_kale",
                },
              },
            },
          ],
        },
      },
    ],
  });
})();
