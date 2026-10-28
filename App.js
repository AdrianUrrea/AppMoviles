import { useState } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Platform, StatusBar } from "react-native";
import CamaraScreen from "./src/CamaraScreen";
import UbicacionScreen from "./src/UbicacionScreen";
import BrujulaScreen from "./src/BrujulaScreen";

const TABS = [
  { id: "camara", titulo: "Cámara", Comp: CamaraScreen },
  { id: "ubicacion", titulo: "Ubicación", Comp: UbicacionScreen },
  { id: "brujula", titulo: "Brújula", Comp: BrujulaScreen },
];

export default function App() {
  const [activa, setActiva] = useState("camara");
  const { Comp } = TABS.find((t) => t.id === activa);

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.titulo}>Explorador móvil</Text>
      <View style={styles.tabs}>
        {TABS.map((t) => (
          <Pressable
            key={t.id}
            onPress={() => setActiva(t.id)}
            style={[styles.tab, activa === t.id && styles.tabActiva]}
          >
            <Text style={[styles.tabTexto, activa === t.id && styles.tabTextoActivo]}>
              {t.titulo}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.contenido}>
        <Comp />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titulo: { fontSize: 24, fontWeight: "700", textAlign: "center", marginVertical: 12 },
  tabs: { flexDirection: "row", marginHorizontal: 12, gap: 8 },
  tab: {
    flex: 1, paddingVertical: 10, borderRadius: 8,
    backgroundColor: "#dde3ea", alignItems: "center",
  },
  tabActiva: { backgroundColor: "#1f6feb" },
  tabTexto: { fontWeight: "600", color: "#333" },
  tabTextoActivo: { color: "#fff" },
  contenido: { flex: 1, marginTop: 12 },
});
