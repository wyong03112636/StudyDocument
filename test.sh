workdir=$(pwd)"/.doctor.log"
echo $workdir
data=$(cat $workdir)
echo $data
# if [ $data = 'true' ];then
#     node -v
#     npm -v
#     rm -rf node_modules
#     npm install
#     npm run build
# fi