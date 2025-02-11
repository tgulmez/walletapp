import httpx
from ..core.config import settings

async def trigger_webhook(event_type: str, payload: dict):
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                settings.PB_URL + "/api/webhooks/" + event_type,
                json=payload,
                timeout=5.0
            )
            response.raise_for_status()
            return True
        except Exception as e:
            return False