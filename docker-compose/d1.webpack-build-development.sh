BASEDIR=$(dirname "$0")
cd "$BASEDIR"
# cd ..
./run-docker-compose.sh run app npm run w1.webpack-build-development