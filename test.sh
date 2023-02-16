workdir=$(cd $(dirname $0); pwd)
doctor="/.doctor.log"
echo $workdir$doctor
data=$(cat $workdir$doctor)
echo $data
if [ $data = 'true' ];then
    node -v
    npm -v
    rm -rf node_modules
    npm install
    npm run build
fi