// 5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
// não é o mesmo utilizado em aula.
// https://openweathermap.org/current
// Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
// atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
// opções para o usuário:
// 1- Digitar latitude e longitude
// 2- Sair
// O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
// informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
// temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
// de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
// Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
// e de tomar o cuidado de não armazená-lo no sistema de controle de versão.
require('dotenv').config();
const axios = require('axios').default;

const readlineSync = require('readline-sync');



const searchTemps = (lat, long) => {
    return new Promise ((resolve, reject) => {
        axios.get(process.env.WEATHER_API, {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.API_KEY,
                units: process.env.UNITS
            }
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}


const loop = () => {
    var opcao;

    opcao = readlineSync.question('Digite uma das opcoes\n 1- Digite a Latitude e Longitude\n 2- Sair\n');
    switch (opcao) {
        case '1':   
        
            let lat = readlineSync.question('Digite a Latitude: ');
            let long = readlineSync.question('Digite a Longitude: ');
            
             searchTemps(lat, long)
                .then((response) => {
                    console.log(`A temperatura do lugar indicado é: ${response.data.main.temp}\n`);
                    loop()
                }).catch((error) => {
                    console.log('Erro ao buscar temperatura');
                    loop()
                });
            
            break;

        case '2':
            console.log("Saindo");
            break;

        default:
            console.log("Digite uma opção entre 1 ou 2"); 
            loop()
            break;
    }
}

loop()