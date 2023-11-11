import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ["Rodrigo", "Otavio", "Anna"];

  function handleParticipantAdd() {
    console.log("handleParticipantAdd");
  }

  function handleParticipantRemoved(name: string) {
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemoved(participant)}
          />
        ))}
      </ScrollView>

      {/* <Participant name="Anna" onRemove={() => handleParticipantRemoved("Anna")} />
      <Participant name="Otavio" /> */}
    </View>
  );
}
