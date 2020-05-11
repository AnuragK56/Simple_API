  const axios = require("axios");
  const cheerio = require("cheerio");
  const url = "https://en.wikipedia.org/wiki/List_of_Naruto:_Shippuden_episodes";
  const Naruto_shippuden = [];
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const statsTable = $("tbody tr");

      statsTable.each(function () { 
        if (statsTable) {
          const data = $(this).find("td");
          const title = $(data[0]).text();
          const og_ad = $(data[1]).text();
          var en_ad = $(data[2]).text();

          if (title === "" || title.includes("Japanese") === false) {
          } else {
            if (en_ad === "") {
              en_ad = "TBA  ";
            }
            Naruto_shippuden.push({
              title,
              og_ad,
              en_ad,
            });
          }
        }
      });

      console.log(Naruto_shippuden);
    })
    .catch(console.error);

  module.exports = Naruto_shippuden;



