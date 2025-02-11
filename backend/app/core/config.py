from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PB_URL: str = "http://localhost:8090"
    PB_ADMIN_TOKEN: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJwYmNfMzE0MjYzNTgyMyIsImV4cCI6MTczOTMxNTIwMiwiaWQiOiJmMjk5bGl6OWpldngwNTUiLCJyZWZyZXNoYWJsZSI6dHJ1ZSwidHlwZSI6ImF1dGgifQ._tDR53isBO6N_-3rv9ge8RqSDIhWSLC8Jckk4CXehGw"
    JWT_SECRET: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJwYmNfMzE0MjYzNTgyMyIsImV4cCI6MTczOTMxNTIwMiwiaWQiOiJmMjk5bGl6OWpldngwNTUiLCJyZWZyZXNoYWJsZSI6dHJ1ZSwidHlwZSI6ImF1dGgifQ._tDR53isBO6N_-3rv9ge8RqSDIhWSLC8Jckk4CXehGw"
    AES_KEY: str = "32-char-long-secret-key-here"
    CORS_ORIGINS: str = "*"
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()