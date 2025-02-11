#!/bin/bash

# Start PocketBase
./pocketbase serve &

# Start FastAPI
uvicorn main:app --host 0.0.0.0 --port 8000 --reload