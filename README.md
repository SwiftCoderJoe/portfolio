# Portfolio

Welcome to my portfolio! This website is a simple description of most of my projects and skills. The website itself is also a demonstration of my skills in plain HTML5/CSS3. 

## Building and Deploying

My portfolio is a simple pure HTML/CSS/JS website hosted through Caddy and deployed through Docker. 

Simply build the docker image using `docker build . -t CONTAINERNAME` and run it with `docker run CONTAINERNAME`. 

By default, the docker container will host a website on port 80 with no encryption. This is because encryption is handled through a reverse proxy in its actual deployment. This can be changed in `Caddyfile`.

## Licensing and reuse

My portfolio is licensed under the MIT License. Feel free to contribute or reuse any part of this repository.