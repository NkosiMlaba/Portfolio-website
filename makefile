# Variables
REPO1 = origin
# git remote add main https://github.com/NkosiMlaba/NkosiMlaba.github.io
REPO2 = main
BRANCH = main

# Push to the primary repository
.PHONY: push-origin
push-origin:
	git push $(REPO1)

# Push to the secondary repository
.PHONY: push-secondary
push-secondary:
	git push $(REPO2)

.PHONY: commit
commit:
	@read -p "Enter commit message: " msg; \
	git add .; \
	git commit -m "$$msg"; \
	git push

# make push
# Push to both repositories
.PHONY: push
push: commit push-origin push-secondary

