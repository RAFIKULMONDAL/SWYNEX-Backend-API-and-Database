# Task 2 API Demo

Use Postman or Thunder Client.

1. `GET http://localhost:5000/api/health`
2. Register: `POST /api/auth/register`
```json
{"name":"Demo User","email":"demo@example.com","password":"password123"}
```
3. Login: `POST /api/auth/login` and copy the returned token.
4. Create: `POST /api/tasks` with `Authorization: Bearer TOKEN`
```json
{"title":"Complete SWYNEX Task 2","description":"Build backend API","status":"In Progress","priority":"High","dueDate":"2026-10-10"}
```
5. Get: `GET /api/tasks`
6. Update: `PUT /api/tasks/TASK_ID`
```json
{"status":"Completed"}
```
7. Delete: `DELETE /api/tasks/TASK_ID`
8. Validation test: send `{"title":"Hi","status":"Wrong"}` and show HTTP 400.
