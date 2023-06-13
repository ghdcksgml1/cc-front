#!/bin/bash

docker build -t cc-front . --platform=linux/amd64 --no-cache --progress=plain
docker tag cc-front ghdcksgml1/cc-front
docker push ghdcksgml1/cc-front
