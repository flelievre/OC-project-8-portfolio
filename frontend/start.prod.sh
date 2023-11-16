#!/bin/sh
ENV_FILE=.env.production
SERVICE_NAME=restaurant-seo-site-prod
REPO_NAME=restaurant-showcase-ssr


SERVER_PORT=3391 IS_EXECUTED_TRHOUGH_PROXY=1 NODE_ENV=production $(which yarn) --cwd "/home/$SERVICE_NAME/$REPO_NAME" production
