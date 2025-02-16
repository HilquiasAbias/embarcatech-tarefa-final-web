from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

active_connections: List[WebSocket] = []

@app.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("New connection")
    await websocket.accept()
    active_connections.append(websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        active_connections.remove(websocket)

@app.get("/api/trigger")
async def trigger_action(action: str):
    for connection in active_connections:
        print(f"Sending action {action} to {connection}")
        await connection.send_text(action)
    return {"message": "Action sent to all listeners"}