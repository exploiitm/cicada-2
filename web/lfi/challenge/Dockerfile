FROM php:8.3-cli

# Install SQLite development libs, then compile pdo_sqlite
RUN apt-get update && apt-get install -y --no-install-recommends \
    libsqlite3-dev \
 && docker-php-ext-install pdo_sqlite \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Copy your PHP project
COPY ./lfiq/ .

# Expose port 1337
EXPOSE 1337

# Run built-in PHP server
CMD ["php", "-S", "0.0.0.0:1337", "-t", "/var/www/html"]

