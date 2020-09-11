//versão 0.1
// Alunos:
// Daniel Henrique Amorim C. 
// Murilo Ventura
// 09/20




//Funções



function fatorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return fatorial(n-1)*n;
} 

function calcular(){


// 1.Variáveis
let users=0;
let probActiveUsers=0;
//let pUsuarioInativo;
let maxUsersInCircuit = 0;
let UseOfLink= 0; // 0 a 1
let ActiveUsersConsume=0;
let linkCapacity=0;

    
  
   users = document.getElementById('users').value;
   probActiveUsers = document.getElementById('probActiveUsers').value;
   ActiveUsersConsume = document.getElementById('ActiveUsersConsume').value;
   linkCapacity = document.getElementById('linkCapacity').value;



//Main
//users = prompt(' Numero de usuários conectados');
//probActiveUsers = prompt(' probabilidade do usuario estar ativo( valor entre 0 a 100)');
probActiveUsers = probActiveUsers/100;


//ActiveUsersConsume = prompt(
  //' Digite o requesito da taxa de dados em Mbps, de cada usuário quando ativo'
//);

//linkCapacity = prompt(' Digite a capacidade total do enlace em Mbps:');
//console.log("Consumo ativo:",ActiveUsersConsume);
//console.log("Capacidade enlace: ",linkCapacity);
if (+ActiveUsersConsume < +linkCapacity){
  while (UseOfLink <= 1) {
    maxUsersInCircuit++;
    UseOfLink = Number((+ActiveUsersConsume * +maxUsersInCircuit) /+linkCapacity);
  }
  maxUsersInCircuit--; //retirando o usuário que extrapolou.
  //console.log('valor máximo de usuários:', maxUsersInCircuit);
  document.getElementById('resultado').value = maxUsersInCircuit;
} else {
  document.getElementById('resultado').value = '1'; //mas com taxa abaixo do consumoAtivo
}




//Letra B

let k = maxUsersInCircuit; // usuarios ativos
let n =users; //número total de usuários
let p = probActiveUsers // probabilidade de estar transmitindo
let somatorioProbabilidades = 0;

while(k<=n){
let probabilidade = (fatorial(n)/(fatorial(k)*fatorial(n-k)))*Math.pow(p,k)*Math.pow((1-p),(n-k));
//console.log("Probabilidade para : "+k+" usuários ativo(s):",Number(probabilidade));

somatorioProbabilidades += Number(probabilidade);
k++;
}

//console.log("probabilidade: ",somatorioProbabilidades);
document.getElementById('resultado2').value = somatorioProbabilidades;
//e.preventDefault();
}