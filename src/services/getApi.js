//  Função responsável por fazer o Fetch na API e setar o loading para a aplicação
async function LoadData(userName) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos`
  );
  const data = await response.json();

  return data;
}

export default LoadData;
