# Explorador móvil

App de Expo + React Native que permite tomar fotos, consultar la ubicación actual y ver una orientación aproximada con el magnetómetro.

## Instalación

```bash
npx create-expo-app@latest explorador-movil --template blank
cd explorador-movil
npx expo install expo-camera expo-location expo-sensors
```

Reemplaza `App.js` por el de este repositorio y copia la carpeta `components/`.

## Ejecución

```bash
npx expo start
```

Escanea el QR con **Expo Go** en un teléfono físico (misma red local). Si falla la conexión: `npx expo start --tunnel`.

## Estructura

- `App.js`: navegación simple por pestañas (Cámara, Ubicación, Brújula).
- `components/CamaraScreen.js`: permiso, vista previa con `CameraView`, captura e imagen.
- `components/UbicacionScreen.js`: permiso en primer plano, `getCurrentPositionAsync`, carga y errores.
- `components/BrujulaScreen.js`: `Magnetometer` dentro de `useEffect` con limpieza; "Sensor no disponible".

## Limitaciones conocidas

- La brújula usa `atan2(y, x)` y asume el teléfono horizontal; no corrige inclinación ni declinación magnética, y no está calibrada.
- Metales, imanes y electrónica cercana alteran la lectura del magnetómetro.
- La precisión de la ubicación es una estimación del dispositivo, no un error garantizado.
- Las fotos no se guardan en la galería; solo se muestran mientras la app está abierta.
- La ubicación no se almacena ni se envía.
- Probado en teléfono físico; los simuladores pueden carecer de cámara/sensores.
