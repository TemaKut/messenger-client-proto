init.typescript:
	npm install

PROTO_FILES := $(shell find ./proto -name "*.proto")

gen.proto: gen.proto.go gen.proto.typescript

gen.proto.go:
	@protoc \
		-I ./proto \
		--go_out=paths=source_relative:./gen/go \
		--go-grpc_out=paths=source_relative:./gen/go \
		$(PROTO_FILES)



gen.proto.typescript:
	@protoc \
		-I ./proto \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--ts_out=./gen/ts \
		--js_out=import_style=commonjs,binary:gen/ts \
		$(PROTO_FILES)
