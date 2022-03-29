import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "OTU2NDExMTUxNTkwMjYwNzU3.YkD1lA._9NjhSARvsTDJ0pu7DOIm3sT9v4"
);

gateway.on("message", (m) => {
  if (m.channel_id === "512010319795847182") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/957899401026744372/HOKivNZYNFq544UAafaO7hzntb1k3xdizgJ6_C4tX3_zq5zrqzUoHv85RHtbUXhRSquw",
      content
    );
  }
});
