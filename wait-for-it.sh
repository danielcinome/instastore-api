#!/usr/bin/env bash

# Wait for the host and database port to be available
host="$1"
shift
port="$1"
shift

echo "Waiting for ${host}:${port} to be available..."

while ! nc -z "$host" "$port"; do
  sleep 1
done

echo "${host}:${port} is available, running command..."
exec "$@"