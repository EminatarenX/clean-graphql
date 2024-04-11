# Encuentra los procesos que están utilizando el puerto 4000
PID_4000=$(lsof -ti :4000)

# Si se encuentra un proceso, deténlo
if [ -n "$PID_4000" ]; then
    kill $PID_4000
    echo "Proceso en el puerto 4000 detenido (PID: $PID_4000)"
else
    echo "No se encontró ningún proceso en el puerto 4000"
fi

# Encuentra los procesos que están utilizando el puerto 4001
PID_4001=$(lsof -ti :4001)

# Si se encuentra un proceso, deténlo
if [ -n "$PID_4001" ]; then
    kill $PID_4001
    echo "Proceso en el puerto 4001 detenido (PID: $PID_4001)"
else
    echo "No se encontró ningún proceso en el puerto 4001"
fi
