git add .
tput setaf 3; read -p "-- Enter commit message -- \n" msg
tput sgr0;
git commit -m "$msg"
tput setaf 3; read -sp "-- Enter branch name -- \n"
tput sgr0;
git push -u origin $REPLY
tput setaf 2; echo "Successfully pushed to $REPLY branch"
