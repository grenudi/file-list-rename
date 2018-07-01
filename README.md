# file-list-rename
a program to rename file lists to match certain requirements 
*** 

 ### USAGE
 
- place files, that have some unique name pattern, into **[inandout]** folder
- run command **``$ npm start``**
- that's it ? 
  - you can add patterns functions in [patterns.js] file, and i will gladly accept your pull requests
  - default pattern is taking first number group in a file name (for example: 001 -> aab) and replace each int with a letter from a(means 0) to j (means 9)
