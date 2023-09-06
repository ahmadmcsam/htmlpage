#!/bin/bash

# Step 1: Create a Dockerfile
cat <<EOF > Dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y nginx
CMD ["nginx", "-g", "daemon off;"]
EOF

# Step 2: Build the Docker image
docker build -t my-nginx-image .

# Step 3: Run a container from the created image
docker run -d -p 9000:80 --name my-nginx-container my-nginx-image

echo "Container is running. Press Enter to stop it..."
read -r

# Step 4: Stop the running container
docker stop my-nginx-container

# Step 5: Check running containers
docker ps > docker_ps_output.txt

echo "Container stopped. Docker PS data exported to docker_ps_output.txt"
