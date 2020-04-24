addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Access the published website at: https://criley-cf-project.criley.workers.dev/

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const response = await fetch('https://cfw-takehome.developers.workers.dev/api/variants');
  const json = await response.json();
  const urlArr = json["variants"];
  const urlResp = await fetch(urlArr[Math.round(Math.random())]);
  const urlText = await urlResp.text();
  return new Response(urlText, {
    headers: { 'content-type': 'text/html' },
  })
}
