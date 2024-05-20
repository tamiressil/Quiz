import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['A) Rio de Janeiro', 'B) São Paulo', 'C) Brasília', 'D) Belo Horizonte'],
    resposta: 'C) Brasília'
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['A) Pedro Álvares Cabral', 'B) Cristóvão Colombo', 'C) Vasco da Gama', 'D) Fernão de Magalhães'],
    resposta: 'A) Pedro Álvares Cabral'
  },
  {
    pergunta: 'Quantos planetas existem no sistema solar?',
    opcoes: ['A) 5', 'B) 7', 'C) 9', 'D) 8'],
    resposta: 'D) 8'
  }
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]);

    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado();
    }
  };

  const calcularResultado = () => {
    let pontuacao = 0;

    for (let i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }

    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div className='Container'>
      <h2 className='pergunta'>Jogue o Quiz e Teste os Seus Conhecimentos Gerais</h2>
      {resultado !== null ? (
        <div className="resultado">
          <h2>Resultado do Quiz</h2>
          <div>
            <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          </div>
          <div className="button-container">
            <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='pergunta'>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul className='opcoes'>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
