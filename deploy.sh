echo    "What's your commit message?"
read     msg
cd       react_website
         npm run build
cd       ..
         git add -A
         git commit -m "$msg"
         git push origin master
         firebase deploy
