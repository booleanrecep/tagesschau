.PHONY: run
run: prepare
	npm run dev

.PHONY: prepare
prepare:
	npm run prepare

.PHONY: build
build:
	npm run build

.PHONY: install
install:
	npm install 
	npm run dev 
	