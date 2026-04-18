import https from 'https';

https.get('https://loader.to/ajax/download.php?format=1080&url=https://www.youtube.com/watch?v=dQw4w9WgXcQ', (res) => {
  console.log("Headers:", res.headers);
});
