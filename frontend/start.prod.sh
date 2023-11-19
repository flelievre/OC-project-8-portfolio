#!/bin/sh
ENV_FILE=.env.production
SERVICE_NAME=flelievre
REPO_NAME=OC-project-8-portfolio


SERVER_PORT=4001 IS_EXECUTED_TRHOUGH_PROXY=1 NODE_ENV=production $(which yarn) --cwd "/home/$SERVICE_NAME/$REPO_NAME/frontend" production
