let tareas = [
    { id: 1, descripcion: "Revisar reportes", plazo: "2024-11-20", estado: "pendiente", prioridad: "alta" },
    { id: 2, descripcion: "Preparar presentación", plazo: "2024-11-22", estado: "en progreso", prioridad: "media" },
    { id: 3, descripcion: "Enviar correos", plazo: "2024-11-19", estado: "atrasada", prioridad: "alta" },
  ]; // Este codigo sirve para definir y priorizar las tareas
  
  function verificarPlazos(tareas) {
    const hoy = new Date().toISOString().split("T")[0];
    tareas.forEach(tarea => {
      if (tarea.plazo === hoy && tarea.estado === "pendiente") {
        console.log(`Alerta: La tarea "${tarea.descripcion}" vence hoy.`);
      } else if (new Date(tarea.plazo) < new Date(hoy) && tarea.estado !== "completada") {
        console.log(`La tarea "${tarea.descripcion}" está atrasada.`);
      }
    });
  } // Este codigo sirve para saber los plazos y alertarnos sobre las fechas de entrega
  
  function actualizarEstado(id, nuevoEstado) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
      switch (nuevoEstado) {
        case "pendiente":
          console.log(`La tarea "${tarea.descripcion}" ha sido marcada como pendiente.`);
          break;
        case "en progreso":
          console.log(`La tarea "${tarea.descripcion}" ahora está en progreso.`);
          break;
        case "completada":
          console.log(`La tarea "${tarea.descripcion}" ha sido completada.`);
          break;
        case "atrasada":
          console.log(`La tarea "${tarea.descripcion}" está atrasada.`);
          break;
        default:
          console.log(`Estado "${nuevoEstado}" no reconocido.`);
      }
      tarea.estado = nuevoEstado;
    } else {
      consoleactuzlizar.log("Tarea no encontrada.");
    }
  } // Este codigo sirve para actualizar el estado de las tareas
  
  function reordenarPorPrioridad(tareas) {
    return tareas.sort((a, b) => {
      const prioridades = { alta: 1, media: 2, baja: 3 };
      return prioridades[a.prioridad] - prioridades[b.prioridad];
    });
  } // Función para reordenar tareas según su prioridad
  
  function gestionarTareas() {
    console.log("Verificando plazos...");
    verificarPlazos(tareas);
  
    console.log("\nReordenando tareas por prioridad...");
    tareas = reordenarPorPrioridad(tareas);
    console.log("Tareas ordenadas:", tareas);
  
    console.log("\nActualizando estados de tareas...");
    actualizarEstado(2, "completada");
  } // Función para gestionar tareas diarias 
  
  for (let dia = 1; dia <= 3; dia++) {
    console.log(` Día ${dia}`);
    gestionarTareas();
  } // Ciclo para revision diaria
  


  
 
  