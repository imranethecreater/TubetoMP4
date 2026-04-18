import fetch from 'node-fetch';

async function testFetch() {
  try {
    const res = await fetch('https://loader.to/ajax/download.php?format=1080&url=https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    console.log("CORS header:", res.headers.get('access-control-allow-origin'));
  } catch (e) {
    console.log(e);
  }
}
testFetch();
