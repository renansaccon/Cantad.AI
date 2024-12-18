import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { MotiView } from 'moti';
import { geradorCantadas } from "./services/api/geradorCantada";

export default function Index() {

  //Criando os states
  const [situacao, setSituacao] = useState("");
  const [cantada, setCantada] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Verificando se a situação é menor do 3 caracteres, setando states para melhor usabilidade, gerando nova cantada
  const gerandoCantada = async () => {
    if (situacao.length < 3) {
      alert("Para que eu possa te ajudar, insira uma situação com mais de 3 caracteres")
      return;
    }

    setIsLoading(true);
    setSituacao("");
    setCantada("");

    try {
      const cantadaGerada = await geradorCantadas(situacao);
      setCantada(cantadaGerada)
    } catch (error) {
      alert(error)
    } finally{
      setIsLoading(false)
    }
  }


  return (
    <View
      style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>

      <Text style={styles.titulo}>Cantad.AI</Text>
      <Text style={styles.subtitulo}>Te dando aquela forcinha para quebrar o gelo</Text>

      <TextInput
        style={styles.input}
        placeholder="Diga-me, em qual local estão?"
        value={situacao}
        onChangeText={setSituacao}>
      </TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={gerandoCantada}>
        <Text style={styles.buttonText}>{isLoading ? "Gerando... aguarde" : "Gerar cantada"}</Text>
      </TouchableOpacity>

      {cantada &&
        (<MotiView
          style={styles.card}
          from={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}>

          <Text style={styles.cardTitle}>Ta na mão!</Text>
          <Text style={styles.cardText}>{cantada}</Text>

        </MotiView>)
      }

    </View>
  );
}
