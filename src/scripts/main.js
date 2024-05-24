AOS.init();//pra funcionar a animaçao q pegamos nos site

const dataDoEvento = new Date("Jun 1, 2024 19:00:00");//criando data do evento
const timeStampDoEvento = dataDoEvento.getTime();//pegando o tempo do evento horas,min,seg

const contaAsHoras = setInterval (function() { //fazendo a funçao setInterval de receber o tempo que esta passando q sao aqueles 1000 que estao la embaixo cada vez que ele passsa vai criandao uma newDate q vai atualizando e assim vai
    const agora = new Date();//entao dentro desse bloco a cada 1s vai ser atualizado tempo do evento pois essa funçao sera recriada e assim vai passando o tempo
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;//stamp evento(data q criamos) sempre vai se maior que o a stamp atual(que é o tempo ta passando) por isso vem primeiro e assim vamos ter os milesegundos q falta ate o evnto

    const diaEmMs = 1000 * 60 * 60 * 24; //1s = (1000milesegundos) * 1h = (60s) * 1h = (60s) * 24hrs assim temos o resultado de 1DIA
    const horaEmMs = 1000 * 60 * 60; //1s = (1000milesegundos) 1minuto = 1000 * 60 e 1hr é = 1000 * 60 *60
    const minutoEmMs = 1000 * 60; 
    

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);//entao aqui nessa divisao temos quantos dias faltam ate po evento em resumo temos dias em milesugundo / dias em milesegundos funcao math usada pra n ficar numero quebrado
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);//pegado quantas horas faltam usamos % pq queremos so o resto da divisao e dps dividimos pela a hr que da o resultado
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    //OBS pra ajuda a entender sempre q dvidimos por ex distanciaAteOEvento / diaEmMs vai ter um numero quebrado no final por mais q tenha a funçao math mas msm assim divisiao n da inteira isso vai ser as horas  e assim vai seguindo quando vamos dividir a hr oq sobra da divisao é os minutos e dps os sobra dos minutos sao segundo.... e por a %

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; //escrevndo no site o tempo

    if (distanciaAteOEvento < 0) { //funcao para q quando acabar o tempo aparecer uma mensagem
        clearInterval(contaAsHoras);//funcao de limpar oq foi escrito
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

}, 1000)//esse 1000 é quantos segundos cada intervalo de tempo de evento vai durar no caso ai sao 1000milesegundo(1segundo) ou seja toda nossa função vai rodar a cada 1s


//new Date nos fornece o dia ano e o horario que foi criado essa função nos fornece tanto numero quanto nome janeiro/01 segunda
//supondo que temos um var hj = new Date a partir dele nos da novos acessos como hoje.getFullYear() pra pegar so o ano ou month(mês).... 
//temos o getTime que pega o tempo em que a funçao esta entao imagina que temos 2 funções podemos tirar a diferença de tempo se tivermos 2var 
//pego a var de 1 e subtraio por outro e teriamos a diferença de tempo so q a resultado vai ta em mlisegundo e pra ficar em segundo / 1000 e dps
//chegamos de segundos pra minuto / 60(pois 1 hr tem 60min) dai temos minutos