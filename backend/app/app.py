from fastapi import FastAPI

app = FastAPI(title="Attendance System")

@app.get("/")
def root():
    return {"status": "Backend running"}
