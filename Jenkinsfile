# systeminfo of jenkins node 
echo "#######################################################"
pwd
whoami
id
hostname
ls -al 
cp -R * /var/www/html
cp -R * /github-data
ls -al /var/www/html
ls -al /github-data
echo "#######################################################"




echo "#######################################################"
#Stop & Delete ALL old containers & images
docker stop $(docker ps -q)
docker rm $(docker ps -a -q)
# chmod 777 flush-cont.sh
#./flush-cont.sh
# Create a new image from Dockerfile 
cd /github-data/finance-web
docker build . -t finance-img
cd /github-data/sysinfo
docker build . -t sysinfo-img
cd /github-data/
docker build . -t resume



echo "#######################################################"
# start a container from that image 
# Step 3: Run a container from the created image
# docker run -d -p 9000:80 --name new-img-name from-img
docker run -d -p 7000:80 --name finance-img finance-img
docker run -d -p 8000:80 --name sysinfo-img sysinfo-img
docker run -d -p 9000:80 --name resume resume
# Curl that localhost with that PORT 
# Test Successful 
echo "#######################################################"
echo "Successful" 