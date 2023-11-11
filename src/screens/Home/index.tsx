import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "João",
    "Pedro",
    "Ana",
    "Maria",
  ];

  function handleParticipantAdd() {
    if(participants.includes("João")){
      return Alert.alert("Participante já cadastrado");
    }
    console.log("handleParticipantAdd");
  }

  function handleParticipantRemoved(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          console.log("handleParticipantRemoved");
        },
      },
    ]);
    console.log("handleParticipantRemoved");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={participants} keyExtractor={item => item} renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemoved(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum participante cadastrado</Text>
          </View>
        )}
        />
    </View>
  );
}
