## PORTAL UNIDAD SERVICIO PUBLICO EMPLEO ##

A continuación encontrará las instrucciones para la instalación o migración del sitio web de la Unidad de Servicio Público de Empleo.

**Requisitos**

1. Servidor Apache con PHP >= 5.3
2. Base de Datos Mysql.
3. Redireccionamiento de URLs **mod-rewrite** activado en el servidor.

**Instrucciones**

1. Crear la base de datos **servicio_empleo** y  Correr Script para creación de la base de datos. servicio_empleo.sql
2. Cargar via FTP todos los archivos del sitio web desde el último backup creado.
3. Descargar desde el repositorio la última versión del código fuente por si hubo cambios.
4. Crear usuario para la base de datos MySQL. ( servicio_empleo9 / XXXXXXXX ).

El backup del  sitio web inicial se puede descargar del siguiente [link](https://www.dropbox.com/s/nzwvq5ed4fcf0v6/website_backup_Servicio%20Empleo.zip)

**Administración**

Para acceder al administrador de contenidos del sitio web ingrese a

*http://www.dominio.com/administrator/index.php?unidad=adminempl30*

El usuario y contraseña creado para el primer acceso es chipichipi / chipichipi09.

**Dependencias**

La siguiente es la lista de plugins que son necesarios para el correcto funcionamiento del sitio web. Al hacer la migración estos deberán quedar instalados, en caso contrario por favor descárguelos e instálelos usando el Gestor de extensiones del administrador de Joomla.

1. Slider Home - [Image Swoop](http://extensions.joomla.org/extensions/photos-a-images/slideshow/image-jquery-slideshow/24350)

2. Acordeones de contenido - [Code7 Responsive Accordion Module](http://extensions.joomla.org/extensions/news-display/articles-display/articles-showcase/19692)

3. Video recomendado - [SP Simple Youtube](http://extensions.joomla.org/extensions/social-web/social-media/video-channels/16654)

4. Redes sociales en el HOME - [SW Twitter Display](http://extensions.joomla.org/extensions/social-web/social-display/twitter-display/25649)

5. Galeria de imágenes: - [Simple Gallery jw_sig](http://www.joomlaworks.net/extensions/free/simple-image-gallery)

6. Seguridad - [Adminexile](http://extensions.joomla.org/extensions/access-a-security/site-security/login-protection/15711)

7. Comentarios de usuarios en artículos: [Komento (no habilitado)](http://extensions.joomla.org/extensions/contacts-and-feedback/articles-comments/20527)

8. Archivos Adjuntos - [Attachments](http://extensions.joomla.org/extensions/directory-a-documentation/downloads/3115)

9. Lectura de archivos en PDF - [Phocapdf](http://extensions.joomla.org/extensions/style-a-design/print-a-pdf/7492)

10. Mapa del Sitio - [Xmap](http://extensions.joomla.org/extensions/structure-a-navigation/site-map/3066)


**Recomendaciones**

1. Realice backup del sitio web de forma constante. Se recomienda utilizar plugins de backup como [Akeeba Backup](http://extensions.joomla.org/extensions/access-a-security/site-security/backup/1606)


**Recomendaciones de seguridad**

La plataforma cuenta con un plugin de seguridad el cual limita el acceso a la plataforma de administración. Sin embargo se recomienda activar opciones adicionales de seguridad como:

1. Limitar el acceso al administrador para un conjunto de IPs. Para hacer esto entre al gestor de plugins y busque el plugin **admin exile**. En el cuarto tab de las opciones del plugin podrá activar esta opción del plugin y podrá agregar la lista de IPs desde las cuales se puede acceder al administrador.
2. Fuerza bruta. Se recomienda activar en el plugin **Admin Exile** la opción de fuerza bruta que se encuentra en el último tab de la configuración del plugin. Con esta función la plataforma deshabilitará por 5 minutos el acceso al administrador para el usuario que realice múltiples intentos de acceso en un corto tiempo.