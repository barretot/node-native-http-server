export async function json(request, response) {
  // Array de buffers
  const buffers = [];

  // Percorre toda a stream e enquanto ela não for percorrida por completo, ela não da continuidade no código.
  // chunk => pedaço
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // Pegando array de buffers e unindo todos os pedaços com o .concat
    // Parseando para JSON para que o servidor entenda
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    request.body = null;
  }

  response.setHeader('Content-type', 'application/json');
}
