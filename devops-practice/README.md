# ♾️ Práctica Final DevOps

Una experiencia web interactiva e inmersiva que ilustra la filosofía, arquitectura y ciclo de vida de **DevOps**. 
Construida con un diseño moderno utilizando Glassmorphism, animaciones fluidas y modelado 3D, esta página actúa como un viaje visual desde el código fuente hasta el despliegue en la nube.

Hecho por **Johan Gabriel Vasquez Camacho**.

## ✨ Características Principales

- **Diseño Glassmorphism:** Interfaz limpia con efecto de cristal esmerilado que resalta el contenido.
- **Modelo 3D Interactivo:** Un símbolo de infinito renderizado con `Three.js` que el usuario puede rotar libremente, representando el ciclo continuo de DevOps.
- **Línea de Tiempo CI/CD:** Animaciones impulsadas por el scroll (usando `GSAP`) que explican paso a paso la integración y entrega continua.
- **Las 7 C's de DevOps:** Sección de tarjetas interactivas (Bento Grid) que detallan los pilares fundamentales de la cultura DevOps.
- **Pipeline de Progreso Infinito:** Una representación visual animada de un pipeline verde simulando un flujo constante de despliegue.
- **Totalmente Dockerizado:** Listo para ser ejecutado en cualquier entorno con una imagen ultraligera basada en Nginx y Alpine.

## 🛠️ Stack Tecnológico

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [GSAP](https://gsap.com/) (ScrollTrigger)
- **Gráficos 3D:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Íconos:** [Lucide React](https://lucide.dev/)
- **Pruebas:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **CI/CD:** GitHub Actions + Docker Hub

## 🚀 Despliegue y Ejecución Local

### Opción 1: Entorno de Desarrollo (Node.js)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Johanvasquezdev/ProyectoFinalDevops.git
   cd ProyectoFinalDevops
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Opción 2: Ejecución mediante Docker

Dado que el proyecto abraza la cultura DevOps, está completamente empaquetado y listo para correr en un contenedor aislado.

1. Construye la imagen de Docker:
   ```bash
   docker build -t devops-practice .
   ```

2. Ejecuta el contenedor:
   ```bash
   docker run -d -p 8080:80 devops-practice
   ```

3. Visita en tu navegador: `http://localhost:8080`

## 🔄 Integración y Entrega Continua (CI/CD)

Este proyecto cuenta con un flujo de trabajo automatizado configurado en `.github/workflows/main.yml`. 
Cada vez que se hace un `push` a la rama `main`, el pipeline de GitHub Actions se encarga de:
1. Instalar las dependencias y validar la integridad del código.
2. Ejecutar las pruebas automáticas (`Vitest`).
3. Construir la imagen de Docker.
4. Publicar la imagen automáticamente en el registro de **Docker Hub**.

---
*Construido para unificar el Desarrollo y las Operaciones.*
