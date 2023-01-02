build:
	@docker build . -t chat-image

up:
	@docker run -p 3000:3000 -d --name chat-container -v "$(CURDIR):/app" chat-image sh -c "cd client && npm start"
	@echo "Container running"

down:
	@docker stop chat-container
	@docker rm chat-container

enter:
	docker exec -it chat-container sh