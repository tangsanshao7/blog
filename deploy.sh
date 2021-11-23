# 现已通过GitHub Actions自动部署，提交只需 'git push' 即可
###
 # @Author: your name
 # @Date: 2021-05-18 22:07:17
 # @LastEditTime: 2021-05-19 21:19:49
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \blog\deploy.sh
### 
# 若不想使用自动部署，可以直接运行命令 'npm run deploy' 本地自动提交部署

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tangsanshao7/tangsanshao7.github.io.git master:gh-pages

cd -
# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'
# git remote add origin git@github.com:tangsanshao7/blog.git
# git checkout -b gh-pages
# # git push -f git@github.com:tangsanshao7/blog.git master:gh-pages

# # 如果发布到 https://<USERNAME>.github.io
# #git push -f git@github.com:zpj80231/zpj80231.github.io.git gh-pages
# #git push origin :gh-pages
# git push -u origin gh-pages -f

# cd ..
# #git init
# #git remote add origin git@github.com:zpj80231/znote.git
# git add .
# git commit -m 'update docs' 
# git push origin master


# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -