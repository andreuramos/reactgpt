build:
	@docker build client/. -t front-image
	@docker build server/. -t back-image

up:
	@docker run -p 3000:3000 -d --name front-container -v "$(CURDIR):/app" front-image sh -c "cd client && npm start"
	@echo "React container running"
	@docker run -p 3080:3080 -d --name back-container -v "$(CURDIR)/server:/app" back-image sh -c "node index.js"
	@echo "Node container running"

down:
	@docker stop front-container
	@docker stop back-container
	@docker rm front-container
	@docker rm back-container

enter-front:
	docker exec -it front-container sh

enter-back:
	docker exec -it back-container sh