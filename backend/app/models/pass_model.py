from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class PassBase(BaseModel):
    pass_template_id: str = Field(..., min_length=15, max_length=15, example="ABC123XYZ456789")
    user_email: str = Field(..., pattern=r"^\S+@\S+\.\S+$", example="user@example.com")
    status: Optional[str] = Field(default="active", example="active")

class PassCreate(PassBase):
    barcode_value: Optional[str] = Field(None, example="1234567890")

class PassResponse(PassBase):
    id: str = Field(..., example="a1b2c3d4e5f6")
    created: datetime = Field(..., example="2025-02-11T12:34:56.789Z")
    updated: datetime = Field(..., example="2025-02-11T12:35:56.789Z")
    nfc_enabled: bool = Field(..., example=True)

    class Config:
        from_attributes = True
        json_encoders = {datetime: lambda dt: dt.isoformat()}
