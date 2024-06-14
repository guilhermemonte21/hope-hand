using Azure.Storage.Blobs;

namespace WebApiHopeHand.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        //    public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string stringConexao, string nomeContainer)
        //    {
        //        try
        //        {
        //            //verifica se o existe um arquivo 
        //            if (arquivo != null)
        //            {

        //                //gera um nome único + extensão do arquivo
        //                var blobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(arquivo.FileName);

        //                //cria uma instância do client Blob Service e passa a string de conexão 
        //                var blobServiceClient = new BlobServiceClient(stringConexao);

        //                //obtem um container client usando o nome do container do blob
        //                var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);

        //                //obtem um blob client usando o blob name
        //                var blobClient = blobContainerClient.GetBlobClient(blobName);

        //                //abre o fluxo de entrada do arquivo(foto)
        //                using (var stream = arquivo.OpenReadStream())
        //                {
        //                    //carrega o arquivo(foto) para o blob storage de forma assíncrona
        //                    await blobClient.UploadAsync(stream, true);
        //                }

        //                //retorna a uri do blob como uma string
        //                return blobClient.Uri.ToString();
        //            }
        //            else
        //            {
        //                //retorna a uri de uma imagem padrão caso nenhum arquivo seja enviado
        //                return "https://blobvitalhubtarde.blob.core.windows.net/containervitalhubtarde/profilepattern.png";
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            throw;
        //        }
        //    }
        //}

        public static async Task<string> UploadImageBlobAsync(IFormFile file, string connectionString, string containerName)
        {
            try
            {
                // Verifica se existe um arquivo
                if (file != null)
                {
                    // Gera um nome único + extensão do arquivo
                    // OU SEJA, pega o nome do arquivo, transformando-o, removendo os '-' e convertendo em GUID, colocando também o tipo do arquivo
                    // Ex: jk2n31-23b4-j1k4-4h22-3hj5lk + .png --> jk2n3123b4j1k44h223hj5lk.png
                    var blobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(file.FileName);

                    // Cria uma instância do client Blob Service e passa abre conexao com serviço de blob (pela string de conexão)
                    var blobServiceClient = new BlobServiceClient(connectionString);

                    // Obtem um client usando o nomedo container do blob
                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);

                    // Obtem um blob client usando o blob name
                    var blobClient = blobContainerClient.GetBlobClient(blobName);

                    // Abre o fluxo de entrada do arquivo(foto)
                    using (var stream = file.OpenReadStream())
                    {
                        // Carrega o arquivo(fokto) parao blob storage de forma assíncrona
                        await blobClient.UploadAsync(stream, true);
                    }

                    // Retorna a uri do blob como uma string
                    return blobClient.Uri.ToString();
                }
                return null!;
                //else
                //{
                //    // Retorna a uri de uma imagem padrão caso nenhum arquivo tenha sido enviado
                //    return "https://blobvitalhubgrupo9lucas.blob.core.windows.net/containervitalhubg9lucas/perfil-de-usuario.png";
                //}
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}
