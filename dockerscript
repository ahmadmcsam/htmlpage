#!/bin/bash

# Create a Dockerfile for Ubuntu image
echo "FROM ubuntu:latest" > Dockerfile
echo "RUN apt-get update && apt-get install -y nginx" >> Dockerfile

# Build the Docker image
docker build -t my-ubuntu-nginx .

# Run a container from the created image on port 9000
docker run -d -p 9000:80 my-ubuntu-nginx

# Check Docker containers
docker ps > docker_ps.txt

# Clean up: Remove the Dockerfile (optional)
rm Dockerfile

echo "Docker image built and container running on port 9000. Container information exported to docker_ps.txt."
