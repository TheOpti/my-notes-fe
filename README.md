# my-notes-fe

Frontend part of the application for creating notes - just like in Google Keep.

### Docker

Build Docker image:

```
docker build -t my-notes-fe .
```

Run Docker image as container:

```
docker run -p 80:80 -d my-notes-fe:latest
```

Application will be available on port 80 on localhost.
You can verify application is running, by listing all Docker containers:

```
$ docker ps -a
CONTAINER ID    IMAGE                COMMAND                  CREATED         STATUS          PORTS                NAMES
03b77554d6dc    my-notes-fe:latest   "/docker-entrypoint.…"   5 seconds ago   Up 4 seconds    0.0.0.0:80->80/tcp   infallible_bhaskara
```
