gen-petstore:
	docker run --rm \
					-v ${PWD}:/local openapitools/openapi-generator-cli generate \
					-i  local/docs/openapi.yaml \
					-g go-gin-server \
					-o /local/gen/model