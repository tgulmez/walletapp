from fastapi import APIRouter, Depends, status
from app.models.pass_model import PassCreate, PassResponse  # Absolute import
from app.services.pass_service import PassService  # Absolute import
from app.core.security import get_current_user  # Absolute import

router = APIRouter(
    prefix="/passes",
    tags=["passes"],
    responses={404: {"description": "Not found"}}
)

@router.post(
    "",  # Changed from "/" to empty string
    response_model=PassResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create new digital pass"
)
async def create_pass(
    pass_data: PassCreate,
    user: dict = Depends(get_current_user)
):
    return await PassService.create_pass(pass_data)