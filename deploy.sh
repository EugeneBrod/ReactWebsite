if [ $# -eq 0 ]; then
  echo "Must provide commit message"
  exit 1
fi
cd react_website
npm run build
cd ..
git add -A
git commit -m "$1"
git push origin master
firebase deploy