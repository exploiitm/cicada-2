FROM itzg/minecraft-server:latest

# Copy in your custom world
COPY world /world

# Predefine environment variables (from your docker-compose)
ENV EULA=TRUE \
    TYPE=PAPER \
    VERSION=LATEST \
    MOTD="Minecraft CTF Challenge" \
    DIFFICULTY=normal \
    MODE=adventure \
    FORCE_GAMEMODE=true \
    ONLINE_MODE=false

# Ensure world gets moved into /data if empty
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
