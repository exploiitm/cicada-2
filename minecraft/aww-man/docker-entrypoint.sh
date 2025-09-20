#!/bin/bash
set -e

# If no world exists yet, copy in template
if [ ! -d "/data/world" ]; then
  echo "[init] Seeding world from template..."
  cp -r /world /data/world
fi

# Ensure correct ownership
chown -R 1000:1000 /data

# Launch original entrypointdos2unix docker-entrypoint.sh
exec /start