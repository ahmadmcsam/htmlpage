# Use the official Nginx base image
FROM nginx:latest

# Optionally, you can copy custom Nginx configuration files if needed.
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY sites-available/my-site /etc/nginx/sites-available/

# Expose port 80 to allow incoming web traffic
EXPOSE 8000

# Start the Nginx server as the main process
CMD ["nginx", "-g", "daemon off;"]
