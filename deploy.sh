echo "Pulling changes from remote"
git pull
echo "Building Next.js app"
npm run build
echo "Restarting server process"
sudo systemctl restart node_server.service
echo "Successfully deployed"
