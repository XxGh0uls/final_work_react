
# ProyectoFinal Franco Calderon - E-commerce (React + Firebase)

Repositorio: ProyectoFinalFranco_Calderon

## Descripción
Aplicación Front-End de e-commerce desarrollada con React y Vite. Cumple la consigna del curso: listado y detalle de productos, ItemCount, carrito con Context API, navegación con React Router, y creación de órdenes en Firestore.

## Instrucciones rápidas
1. Ejecutar: `npm install`
2. (Opcional) Crear `.env` en la raíz con las variables VITE_FIREBASE_* (ver abajo) si quieres usar Firestore real.
3. Ejecutar: `npm run dev`

## Variables de entorno (opcional, para Firebase)
Crea un archivo `.env` con:
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id

Si no configuras Firebase, la app usa mock (`public/data.json`) y las órdenes devuelven un id MOCK-XXXX.

## Estructura recomendada
- src/components: UI y presentación
- src/containers: contenedores (ItemListContainer, ItemDetailContainer)
- src/context: CartContext
- src/pages: Cart, Checkout
- src/services: firebase service (con fallback)

## Entrega
Nombre del repositorio sugerido: ProyectoFinalFranco_Calderon
