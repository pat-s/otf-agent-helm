.PHONY: lint
lint:
	helm lint ./

.PHONY: deploy
deploy:
	helm upgrade --install -f values/otf-agent-values.yml otf-agent otf-agent/otf-agent --version="0.1.0" --create-namespace -n otf-agent

.PHONY: readme
readme:
	helm-docs
