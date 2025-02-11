from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.routers.passes import router as passes_router  # Correct import

app = FastAPI(
    title="PassCreator API",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url=None
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(passes_router, prefix="/api/v1")