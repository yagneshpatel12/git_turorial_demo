git status  //check for status
git init  // initialize a repositary
rm -rf .git //delete the repositary
git add  index.html  // add any file
git add --a  //add all file
git add .  //add all file
git commit -m "this is change"  //commit
touch  error.log//(filename.extension name)  //Creating a blank file

touch .gitignore  //Creating .gitignore
//Git ignore file
//don't add the ignoring file in git
practice.txt
error.log  //file name - this is ignoring by git
*.log //All log file ignoring by git
dir/ //All dir foder ignoring by git
/dir/ //outer dir folder ignoring by git
/static/helllo.txt //this path ignoring by git 

git diff //Comparing working directory to staging area
git diff --staged //comparing staging area to last commit

git commit -a -m "direct commit" //skip the staging area direct commit ,  tracked files.

git rm first.txt //remove file and add the staging area
git mv first.txt first_renamed.txt //Rename the file and add to staging file
git rm --cached hello.txt  //untract the file

git log -p //show all commit and his diff (difference)
git log -p -3 //show 3 commit and his diff (difference)

git log --stat //show all commit and his diff  in short summary
git log --stat -3 //show 3 commit and his diff  in short summary

git log --pretty=oneline// show all commit in oneline
git log --pretty=short// show all commit in short
git log --pretty=full// show all commit in full

git log --since=2.days //show two day commit
git log --since=2.weeks //show two week commit
git log --since=2.months //show two month commit
 git log --pretty=format:"%h --%an" // hash and show author name 