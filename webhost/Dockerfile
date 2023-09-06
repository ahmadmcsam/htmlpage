# Use the official Nginx base image
FROM nginx:latest

# Optionally, you can copy custom Nginx configuration files if needed.
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY sites-available/my-site /etc/nginx/sites-available/

# Create a custom HTML file with your message
# RUN echo 'HELLO FROM DOCKER NGINX ON PORT 8000' > /usr/share/nginx/html/index.html

COPY * /usr/share/nginx/html/


# Expose port 80 to allow incoming web traffic
EXPOSE 8000

# Start the Nginx server as the main process
CMD ["nginx", "-g", "daemon off;"]
