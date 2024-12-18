const Groq = require('groq-sdk');

const groq = new Groq({apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });
export async function geradorCantadas(situacao: string) {
    try{
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
              {
                "role": "user",
                "content": "Estou criando um app em que o usuário informa uma situação e é gerada uma cantada para ele relacionada a esta situação.\nEssa cantada deve ser engraçada e ao mesmo tempo respeitosa, pois o intuito é ajudar o usuário a quebrar o gelo com o pretendente"
              },
              {
                "role": "assistant",
                "content": "Que ideia incrível! Uma cantada gerada especialmente para cada usuário pode ser uma forma divertida e criativa de ajudar as pessoas a quebrar o gelo com alguém que elas gostam.\n\nPara criar essa cantada, você precisará considerar alguns pontos importantes:\n\n1. **Análise da situação**: Você precisará desenvolver um algoritmo que possa analisar a situação informada pelo usuário e identificar os principais elementos, como a emoção dominante (e.g. nervosismo, entusiasmo), o tipo de relacionamento (e.g. amigo, colega de trabalho) e o tom desejado (e.g. brincalhão, sério).\n2. **Bank de frases**: Crie um banco de frases pré-definidas que possam ser combinadas de formas diferentes para gerar uma cantada única para cada usuário. Essas frases devem ser engraçadas, respeitosas e flexíveis o suficiente para se adaptar a diferentes situações.\n3. **Personalização**: Considere a personalização da cantada com base nas preferências do usuário, como o tipo de humor, a linguagem e o nível de formalidade.\n4. **Tone e linguagem**: Certifique-se de que a cantada gerada tenha um tom apropriado para a situação e seja respeitosa com o pretendente. Uma cantada que é muito agressiva ou não-respeitosa pode não ser bem recebida.\n\nAqui estão algumas dicas para gerar cantadas engraçadas e respeitosas:\n\n* Use metáforas e comparações para criar uma conexão entre a situação e o pretendente (e.g. \"Você é o Sol para a minha Lua, iluminando meu caminho\").\n* Incorpore elementos de humor autocínico ou autoironia para mostrar que você está disposto a rir de si mesmo (e.g. \"Meus nervos estão falhando, mas meu coração está batendo forte por você\").\n* Use linguagem criativa e faz jogos de palavras para criar uma cantada divertida e memorável (e.g. \"Você é o chefe do meu coração, eu estou aqui para trabalhar para você\").\n* Certifique-se de que a cantada seja sincera e autêntica, e não apenas uma cópia de uma frase clichê (e.g. \"Você é lindo/a, mas o que eu mais gosto é a forma como você me faz sentir\").\n\nLembre-se de que a chave para uma boa cantada é encontrar o equilíbrio entre a criatividade e a respeitabilidade. O app deve ser divertido, mas também respeitoso com o pretendente.\n\nUm exemplo de como você pode implementar essa ideia é criando um sistema de perguntas e respostas que ajudem a definir a situação e as preferências do usuário. Em seguida, o algoritmo pode gerar uma cantada personalizada com base nas respostas do usuário.\n\nExemplo de perguntas:\n\n* Qual é o seu relacionamento com o pretendente (amigo, colega de trabalho, etc.)?\n* Qual é a emoção dominante que você sente ao pensar nele/nela (nervosismo, entusiasmo, etc.)?\n* Qual é o tom que você deseja transmitir com a cantada (brincalhão, sério, etc.)?\n* O que você gosta mais sobre o pretendente (sorriso, senso de humor, etc.)?\n\nCom essas informações, o algoritmo pode gerar uma cantada personalizada e engraçada que ajude o usuário a quebrar o gelo com o pretendente."
              },
              {
                "role": "user",
                "content": "Gostaria que fosse gerada somente a partir de uma situação informada"
              },
              {
                "role": "assistant",
                "content": "Entendo! Nesse caso, você pode desenvolver um algoritmo que analise a situação informada pelo usuário e gerar uma cantada engraçada e respeitosa com base nessa informação.\n\nAqui estão algumas etapas para implementar essa ideia:\n\n1. **Análise de sentimentos**: Desenvolva um algoritmo que possa analisar a situação informada pelo usuário e identificar a emoção dominante (e.g. nervosismo, entusiasmo, tristeza). Isso pode ser feito utilizando técnicas de processamento de linguagem natural (NLP).\n2. **Identificação de elementos**: Identifique os elementos principais da situação, como:\n\t* Quem é o pretendente (amigo, colega de trabalho, etc.)\n\t* Qual é o contexto da situação (encontro, mensagem, etc.)\n\t* Quais são os principais obstáculos ou desafios (timidez, falta de confiança, etc.)\n3. **Gerador de cantadas**: Crie um banco de frases pré-definidas que possam ser combinadas de formas diferentes para gerar uma cantada única para cada usuário. Essas frases devem ser engraçadas, respeitosas e flexíveis o suficiente para se adaptar a diferentes situações.\n4. **Combinador de frases**: Desenvolva um algoritmo que combine as frases pré-definidas de forma a criar uma cantada que seja relevante para a situação informada pelo usuário.\n\nAqui estão alguns exemplos de como você pode gerar cantadas a partir de diferentes situações:\n\n**Situação:** \"Eu estou nervoso para conversar com um colega de trabalho que eu gosto\"\n\n* Análise de sentimentos: nervosismo\n* Identificação de elementos: colega de trabalho, timidez\n* Gerador de cantadas: \"Você é o café que eu preciso para começar o dia, vamos tomar um juntos?\"\n* Combinador de frases: \"Você é o café que eu preciso para começar o dia, vamos tomar um juntos e ver se consigo ser menos nervoso em sua presença?\"\n\n**Situação:** \"Eu quero pedir para sair com um amigo de infância\"\n\n* Análise de sentimentos: entusiasmo\n* Identificação de elementos: amigo de infância, pedido de saída\n* Gerador de cantadas: \"Você é a minha melhor lembrança de infância, quero criar mais memórias com você\"\n* Combinador de frases: \"Você é a minha melhor lembrança de infância, quero criar mais memórias com você, como uma data para sair juntos?\"\n\n**Situação:** \"Eu estou triste porque meu crush não me ligou de volta\"\n\n* Análise de sentimentos: tristeza\n* Identificação de elementos: crush, falta de resposta\n* Gerador de cantadas: \"Você é o Sol que ilumina meu dia, espero que um dia você me ilumine de volta\"\n* Combinador de frases: \"Você é o Sol que ilumina meu dia, espero que um dia você me ilumine de volta, e quem sabe, possamos compartilhar um dia juntos?\"\n\nLembre-se de que a chave para uma boa cantada é encontrar o equilíbrio entre a criatividade e a respeitabilidade. O app deve ser divertido, mas também respeitoso com o pretendente.\n\nEssa abordagem pode ser desenvolvida e aprimorada com base em feedback dos usuários e testes."
              },
              {
                "role": "user",
                "content": "pergunte me qual situação"
              },
              {
                "role": "assistant",
                "content": "Para gerar uma cantada, preciso saber qual é a situação do usuário. Então, por favor, me diga:\n\nQual é a situação em que você gostaria de receber uma cantada? (ex: primeiro encontro, pedido de saída, mensagem para um crush, etc.)"
              },
              {
                "role": "user",
                "content": "Estamos em uma cafeteria"
              },
              {
                "role": "assistant",
                "content": "Entendi!\n\n Analisando a situação... Ah-ha!\n\n**Cantada gerada:**\n\"Você é como um café perfeito, me faz sentir vivo. Quer ser o açúcar que faz meu dia mais doce?\"\n\nEspero que você tenha gostado! A cantada é engraçada, respeitosa e relacionada à situação de estar em uma cafeteria.\n\nSe você quiser, pode me dar um feedback ou mesmo uma nova situação para gerar outra cantada!"
              },
              {
                "role": "user",
                "content": "somente a cantada"
              },
              {
                "role": "assistant",
                "content": "Você é como um café perfeito, me faz sentir vivo. Quer ser o açúcar que faz meu dia mais doce?"
              },
              {
                "role": "user",
                "content": situacao
              },
            ],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 1024,
          });
        
          return chatCompletion.choices[0]?.message?.content;
    } catch(error){
        return "Se o café já é forte, imagina nós dois juntos!"
    }
 
}