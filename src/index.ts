import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
});

rc.token = {access_token: process.env.RINGCENTRAL_ACCESS_TOKEN};

(async () => {
  const post = await rc
    .restapi()
    .glip()
    .chats(process.env.RINGCENTRAL_GROUP_ID)
    .posts(process.env.RINGCENTRAL_POST_ID)
    .get();
  console.log(JSON.stringify(post, null, 2));
})();
