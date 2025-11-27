all: up

up:
	docker compose up --build -d

down:
	docker compose down

prune:
	docker system prune -a

volume-rm:
	docker volume rm $$(docker volume ls -q)