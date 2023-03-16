export function buildRoutePath(path) {
  // O g identifica o regex como global
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  // Substituindo o :id pelo id do usuário
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)');

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
