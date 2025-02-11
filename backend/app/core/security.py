from fastapi.security import HTTPBearer
from fastapi import HTTPException, status, Depends
from fastapi.security.http import HTTPAuthorizationCredentials  # Add this import
from jose import JWTError, jwt
from .config import settings

security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(
            credentials.credentials,
            settings.JWT_SECRET,
            algorithms=["HS256"]
        )
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid authentication credentials"
        )