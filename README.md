# Red Social - Proyecto Frontend

Este proyecto frontend es parte de una red social desarrollada utilizando React, Redux y desplegada en Amazon Web Services (AWS). Permite a los usuarios registrarse, iniciar sesión, publicar mensajes, interactuar con publicaciones (editar, eliminar, dar/quitar like, comentar), buscar posts, entre otras funcionalidades.

![Captura de pantalla 2024-06-13 151318](https://github.com/evagarcle/Red-Social-REACT-con-REDUX/assets/160127899/cf0a3557-b339-429e-8227-8accd1e4ba5d)

## Características

- **Registro y Login de Usuarios:** Permite a los usuarios registrarse con nuevas cuentas y acceder con credenciales existentes.
- **Publicaciones (Posts):** Los usuarios pueden crear, editar y eliminar sus publicaciones.
- **Interacción con Publicaciones:** Posibilidad de dar y quitar "like" a los posts.
- **Comentarios:** Funcionalidad para comentar en las publicaciones.
- **Búsqueda:** Permite buscar posts.
- **Perfil de Usuario:** Vista personalizada del perfil del usuario, mostrando sus datos y posts.
  ![Captura de pantalla 2024-06-13 151339](https://github.com/evagarcle/Red-Social-REACT-con-REDUX/assets/160127899/14759daf-3678-4c17-898e-d3d553ac02e8)

- **Diseño Responsivo:** Implementado con SASS y Bootswatch para un diseño moderno y adaptable.

## Componentes del Proyecto

- **Register:** Componente para el registro de nuevos usuarios.
- **Login:** Componente para iniciar sesión.
- **Home:** Página principal de la aplicación.
- **Posts:** Componente para mostrar la lista de publicaciones.
- **Post:** Componente individual para cada publicación.
- **AddPost:** Formulario para agregar nuevas publicaciones.
- **PostDetail:** Vista detallada de una publicación específica.
- **AddComment:** Formulario para agregar comentarios a una publicación.
- **UpdatePost:** Componente para editar las publicaciones del usuario logeado.
  
![Captura de pantalla 2024-06-13 151359](https://github.com/evagarcle/Red-Social-REACT-con-REDUX/assets/160127899/89d1e736-1e34-4be2-9102-4c9b1060d7ff)

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- **Redux:** Para la gestión del estado global de la aplicación.
- **React Router:** Para el enrutamiento dentro de la aplicación.
- **SASS y Bootswatch:** Para estilos y diseño responsivo.
- **AWS:** Plataforma utilizada para el despliegue del frontend en producción.

## Instalación y Uso

1. Clona el repositorio desde GitHub:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/frontend
