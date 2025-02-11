from ..models.pass_model import PassCreate, PassResponse  # Fixed import
from ..database.session import pb
from fastapi import HTTPException

class PassService:
    @staticmethod
    async def create_pass(pass_data: PassCreate) -> PassResponse:
        try:
            response = await pb.client.post(
                "/api/collections/passes/records",
                json=pass_data.model_dump()
            )
            response.raise_for_status()
            return PassResponse(**response.json())
        except httpx.HTTPStatusError as e:
            raise HTTPException(
                status_code=e.response.status_code,
                detail=f"PocketBase error: {e.response.text}"
            )