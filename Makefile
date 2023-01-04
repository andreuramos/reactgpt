build:
	@docker build client/. -t front-image

up:
	@docker run -p 3000:3000 -d --name front-container -v "$(CURDIR):/app" front-image sh -c "cd client && npm start"
	@echo "React container running"

down:
	@docker stop front-container
	@docker rm front-container

enter-front:
	docker exec -it front-container sh