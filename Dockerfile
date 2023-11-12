# Use the Nginx image from Docker Hub as a base image
FROM nginx:alpine

# Copy the static content (HTML, CSS, JS, images) into the Nginx server
COPY ./WatchWeb /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]
