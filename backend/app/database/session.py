import httpx
from ..core.config import settings

class PocketBaseAsync:
    def __init__(self):
        self.client = httpx.AsyncClient(
            base_url=settings.PB_URL,
            headers={"Authorization": settings.PB_ADMIN_TOKEN},
            timeout=30.0
        )
    
    async def get_collection(self, collection: str, params: dict = None):
        response = await self.client.get(
            f"/api/collections/{collection}/records",
            params=params
        )
        response.raise_for_status()
        return response.json()

pb = PocketBaseAsync()