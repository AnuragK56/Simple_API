const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/List_of_Naruto_episodes";
const Naruto = [];
axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const table = $("tbody tr");
    table.each(function () {
      if (table) {
        const data = $(this).find("td");
        const title = $(data[0]).text();
        const og_ad = $(data[1]).text();
        const en_ad = $(data[2]).text();
        if (title !== "" && title.includes("Japanese") === true) {
          Naruto.push({
            title,
            og_ad,
            en_ad,
          });
        }
      }
    });
    console.log(Naruto);
  })
  .catch(console.error);
module.exports = Naruto;
