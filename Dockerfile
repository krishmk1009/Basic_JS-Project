DFrom node

COPY package.json package.json
COPY index.js index.js
COPY package-lock.json package-lock.json

RUN npm install

ENTRYPOINT [ "node", "index.js" ]



// basic commands for docker

1.docker run -it ubuntu
2.docker start container_name_or_id
3. docker stop container_name_or_id

4. docker exec -it container_name_or_id bash
5.Port mapping : docker run -p 8080:80 nginx
6. env variables : docker run -e APP_COLOR=blue <image_name>

7. build docker image : docker build -t <image_name> .

8. docker push <image_name>

// to run multiple containers and serverice we use docker compose,
the file looks like docker-compose.yml  , and it contains services , port  , envVariables , volumes etc

9. docker compose up
10. docker compose down

