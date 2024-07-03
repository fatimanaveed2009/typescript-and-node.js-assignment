/*assignment#6: STRIPPING NAMES:store a persons name and include 
whitespace character at the  begining and end of the name. make 
sure you use each character combination,"/t" and "/n", atleast once
print te name once, so the whitespace around the name is displayed,
then print the name after striping the whitespace*/

let nameWithWhiteSpace:string="\t \n fatima naz \t \n"
console.log("its my name with white space:",nameWithWhiteSpace)

let strippedName:string=nameWithWhiteSpace.trim()
console.log("it is a stripped name:",strippedName)
