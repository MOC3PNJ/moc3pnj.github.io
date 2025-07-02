# Reglamento del Sistema de Accionamiento ante Emergencias y Mantenimiento (SEA-M) de Vertice TV

### Preámbulo

El presente reglamento establece los protocolos, fases y procedimientos que rigen el **Sistema de Accionamiento ante Emergencias y Mantenimiento (SEA-M)** de la plataforma Vertice TV. Su objetivo principal es salvaguardar la integridad de la infraestructura tecnológica, proteger la información de nuestros usuarios y garantizar la continuidad del servicio ante cualquier tipo de incidente de seguridad o contingencia técnica. Este documento formaliza las acciones a seguir por parte de nuestro equipo de seguridad y empresas aliadas para responder de manera eficaz y controlada.

---

### Artículo 1: Definiciones Clave

* **Vertice TV:** La aplicación y plataforma de servicio objeto de este reglamento.
* **SEA-M:** Acrónimo de "Sistema de Accionamiento ante Emergencias y Mantenimiento". Es el conjunto de protocolos de seguridad descritos en este documento.
* **Incidente de Seguridad:** Cualquier evento adverso, confirmado o bajo sospecha, que amenace la confidencialidad, integridad o disponibilidad de los servidores, datos o servicios de Vertice TV. Esto incluye, pero no se limita a, ataques de denegación de servicio (DDoS), intentos de intrusión, malware, y tentativas de exfiltración de datos.
* **Equipo de Seguridad:** Personal interno de Vertice TV y contratistas de empresas aliadas especializadas en ciberseguridad, responsables de la ejecución de este protocolo.
* **Resguardo Físico de Datos:** Copia de seguridad íntegra de la base de datos de la plataforma, almacenada en un dispositivo de disco duro físico en una ubicación segura y completamente aislada de cualquier red (air-gapped).

---

### Artículo 2: Fases de Activación del Sistema

El sistema SEA-M se compone de tres fases progresivas, activadas en función de la severidad y persistencia del incidente.

#### Fase I: Modo de Mantenimiento Preventivo (Horizonte de 0 a 48 horas)

1.  **Activación:** Esta fase se activa de manera inmediata y automática ante la detección de un Incidente de Seguridad. La prioridad es aislar la amenaza y prevenir daños mayores.

2.  **Acciones Inmediatas:**
    * **Aislamiento de Servidores:** Los servidores de Vertice TV entran en un estado de latencia controlada ("congelamiento"). Todas las operaciones de procesamiento de datos y las conexiones a la base de datos son suspendidas para evitar la manipulación o robo de información.
    * **Restricción de Acceso al Usuario:** La interfaz de la aplicación Vertice TV y todos sus puntos de acceso mostrarán una notificación oficial de "Mantenimiento del Sistema". Se restringirá el acceso a toda la información y funcionalidades para proteger tanto al usuario como a la plataforma.
    * **Intervención del Equipo de Seguridad:** Durante este periodo, nuestro equipo de seguridad y las empresas aliadas realizarán un análisis forense exhaustivo para identificar el origen, la naturaleza y el alcance del ataque. Se implementarán contramedidas para neutralizar la amenaza y fortificar las defensas del sistema.

3.  **Objetivo:** Solucionar el incidente dentro de las primeras 48 horas. Si la amenaza es contenida y eliminada, el sistema se restaurará a su funcionamiento normal sin necesidad de escalar a la siguiente fase.

#### Fase II: Activación del Sistema de Accionamiento ante Emergencias (SEA) (A partir de las 48 horas)

1.  **Activación:** Si transcurridas 48 horas el Incidente de Seguridad persiste, es de una magnitud excepcional o ha comprometido componentes críticos del sistema, se procederá a la activación de la Fase II.

2.  **Acciones Críticas:**
    * **Protocolo de Resguardo Físico:** Se inicia la transferencia automática y encriptada de la totalidad de los datos de la plataforma a un disco duro de alta seguridad en nuestra sede central. Una vez completada la transferencia, este dispositivo es desconectado, garantizando que la información queda fuera del alcance de cualquier ataque remoto.
    * **Desconexión Total de la Red:** Los servidores de Vertice TV son desconectados por completo de Internet y de cualquier red externa. Esta medida crea un "air gap" físico que imposibilita cualquier tipo de comunicación no autorizada.
    * **Revocación de Claves de Acceso (Key Access):** La clave de acceso que conecta la aplicación Vertice TV con los servidores es criptográficamente eliminada y revocada. Como consecuencia, la aplicación instalada en los dispositivos de los usuarios quedará temporalmente inoperativa, al no poder establecer una conexión válida. Esta es una medida de protección final para asegurar que ningún actor malicioso pueda usar la app como vector de ataque.

#### Fase III: Protocolo "Mano Negra" - Aniquilación de Datos (Último Recurso)

1.  **Activación:** Este protocolo se considera una medida de tierra arrasada y se activa únicamente si las investigaciones de la Fase II revelan que el atacante ha dejado backdoors, malware persistente o ha comprometido la integridad fundamental del software del servidor de una manera irreparable.

2.  **Acción Definitiva:**
    * Se ejecuta una **purga completa y certificada** de toda la información contenida en los servidores afectados. Este proceso de borrado seguro elimina sistemáticamente todos los datos, configuraciones y sistemas operativos, devolviendo los servidores a su estado de fábrica.
    * **Justificación:** Esta aniquilación controlada garantiza la eliminación total y absoluta de cualquier amenaza, conexión no autorizada o código malicioso, previniendo futuros ataques originados desde una brecha persistente. Es la única forma de asegurar un entorno 100% limpio para la restauración del servicio.

---

### Artículo 3: Restauración del Servicio y Continuidad del Negocio

1.  **Plazo de Recuperación:** Vertice TV se compromete a restablecer el servicio completo en un plazo máximo de **72 horas** desde el inicio del Incidente de Seguridad.

2.  **Proceso de Restauración:**
    * Se desplegará una infraestructura de servidores nueva, segura y verificada.
    * Los datos de los usuarios y de la plataforma serán restaurados íntegramente a partir del **Resguardo Físico de Datos** creado durante la Fase II. Este paso garantiza que la información restaurada es la copia legítima y no comprometida.
    * Se generarán y desplegarán nuevas claves de acceso para la aplicación.
    * Se lanzará una actualización de la aplicación Vertice TV si fuera necesario, que los usuarios deberán instalar para reconectar con la nueva infraestructura segura.

3.  **Comunicación y Transparencia:** A lo largo de todo el proceso, Vertice TV mantendrá a sus usuarios informados sobre el estado del sistema a través de sus canales de comunicación oficiales (redes sociales, sitio web de estado). Al finalizar el incidente, se emitirá un comunicado explicando la situación y las medidas tomadas para reforzar la seguridad.

---
*Vigencia: Este reglamento entra en vigor a partir de la fecha de su publicación y es de obligado cumplimiento para todo el personal técnico y de seguridad de Vertice TV.*
